import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig"; // Firebase config

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<{ id: string; title: string; content: string }[]>([]);
  const [formData, setFormData] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsSnapshot = await db.collection("blogs").get();
      const blogData = blogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogData as any);
    };
    fetchBlogs();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await db.collection("blogs").add(formData);
    alert("Blog added!");
    setFormData({ title: "", content: "" });
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-5">Blog</h2>

      <div className="space-y-5">
        {blogs.map(blog => (
          <div key={blog.id} className="p-4 bg-white shadow-md mb-4">
            <h3 className="text-lg font-bold">{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="block w-full border p-2 rounded"
          required
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Blog Content"
          className="block w-full border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Blog;
