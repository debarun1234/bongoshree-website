<template>
  <div class="container mx-auto py-10">
    <h2 class="text-2xl font-bold">Event Calendar</h2>
    
    <!-- Calendar Component -->
    <vue-cal
      is-fullscreen
      @cell-click="onDateChange"
      :events="calendarEvents"
      default-view="month"
    />
    
    <!-- Events on selected date -->
    <div class="mt-5">
      <h3 class="text-xl">Events on {{ selectedDateFormatted }}:</h3>
      <div v-if="selectedEvents.length > 0">
        <div v-for="(event, index) in selectedEvents" :key="index" class="p-4 mt-2 bg-gray-100 rounded shadow">
          <h4 class="text-lg font-semibold">{{ event.title }}</h4>
          <p>{{ event.description }}</p>
        </div>
      </div>
      <p v-else>No events for this date.</p>
    </div>
    
    <!-- Add Event Form -->
    <div class="mt-10">
      <h3 class="text-xl">Add New Event</h3>
      <form @submit.prevent="addEvent">
        <input
          type="date"
          v-model="newEvent.date"
          class="block w-full border p-2 rounded mb-3"
          required
        />
        <input
          type="text"
          v-model="newEvent.title"
          placeholder="Event Title"
          class="block w-full border p-2 rounded mb-3"
          required
        />
        <textarea
          v-model="newEvent.description"
          placeholder="Event Description"
          class="block w-full border p-2 rounded mb-3"
          required
        />
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Add Event</button>
      </form>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'; // Import VueCal for the calendar
import 'vue-cal/dist/vuecal.css'; // VueCal CSS
import { db } from '../firebaseConfig'; // Import Firebase Firestore
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default {
  components: {
    VueCal, // Register VueCal component
  },
  data() {
    return {
      events: [], // All events fetched from Firebase
      selectedEvents: [], // Events for the selected date
      selectedDate: null, // Currently selected date
      newEvent: {
        date: '',
        title: '',
        description: '',
      },
    };
  },
  computed: {
    // Formatted selected date
    selectedDateFormatted() {
      if (this.selectedDate) {
        return new Date(this.selectedDate).toLocaleDateString();
      }
      return 'None';
    },

    // Calendar events mapped to VueCal
    calendarEvents() {
      return this.events.map(event => ({
        start: event.date,
        end: event.date,
        title: event.title,
        content: event.description,
      }));
    },
  },
  methods: {
    async fetchEvents() {
      // Fetch events from Firebase
      const querySnapshot = await getDocs(collection(db, 'events'));
      this.events = querySnapshot.docs.map(doc => doc.data());
    },

    onDateChange(date) {
      this.selectedDate = date;
      const selectedDateFormatted = new Date(date).toISOString().split('T')[0];
      this.selectedEvents = this.events.filter(
        event => event.date === selectedDateFormatted
      );
    },

    async addEvent() {
      // Add a new event to Firebase
      try {
        await addDoc(collection(db, 'events'), {
          date: this.newEvent.date,
          title: this.newEvent.title,
          description: this.newEvent.description,
        });

        // Clear the form
        this.newEvent.date = '';
        this.newEvent.title = '';
        this.newEvent.description = '';

        // Refetch events after adding
        this.fetchEvents();
        alert('Event added successfully!');
      } catch (error) {
        console.error('Error adding event: ', error);
      }
    },
  },
  mounted() {
    // Fetch events from Firebase when the component is mounted
    this.fetchEvents();
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
