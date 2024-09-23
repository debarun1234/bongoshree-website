<template>
    <div class="container mx-auto py-10">
      <h2 class="text-2xl font-bold">Member Blogs</h2>
  
      <!-- Blog List -->
      <div v-if="blogs.length > 0">
        <div v-for="blog in blogs" :key="blog.id" class="p-4 bg-white shadow-md mb-4">
          <h3 class="text-lg font-semibold">{{ blog.title }}</h3>
          <p>{{ blog.content }}</p>
        </div>
      </div>
      <p v-else>No blogs available yet!</p>
  
      <!-- Blog Submission Form -->
      <form @submit.prevent="submitBlog" class="mt-10 space-y-4">
        <input
          v-model="newBlog.title"
          type="text"
          placeholder="Blog Title"
          class="block w-full border p-2 rounded"
          required
        />
        <textarea
          v-model="newBlog.content"
          placeholder="Blog Content"
          class="block w-full border p-2 rounded"
          required
        ></textarea>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
          Add Blog
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { collection, getDocs, addDoc } from "firebase/firestore"; // Firestore methods
  import { db } from "../firebaseConfig"; // Firebase configuration file
  
  export default {
    setup() {
      const blogs = ref([]);  // Reactive state for storing blog posts
      const newBlog = ref({ title: "", content: "" }); // Reactive state for new blog form
  
      // Fetch blogs from Firestore on component mount
      const fetchBlogs = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "blogs"));
          blogs.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
          console.error("Error fetching blogs: ", error);
        }
      };
  
      // Submit a new blog post to Firestore
      const submitBlog = async () => {
        try {
          await addDoc(collection(db, "blogs"), newBlog.value);
          alert("Blog added successfully!");
          newBlog.value = { title: "", content: "" };  // Clear the form
          fetchBlogs();  // Refresh the list of blogs
        } catch (error) {
          console.error("Error adding blog: ", error);
        }
      };
  
      onMounted(fetchBlogs);  // Fetch blogs when the component is mounted
  
      return {
        blogs,
        newBlog,
        submitBlog
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  