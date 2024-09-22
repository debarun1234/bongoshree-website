# Bongoshree Cultural Association, Bangalore - Website

Welcome to the official website project for **Bongoshree Cultural Association, Bangalore**. This platform connects Bengali families living in Bangalore and helps them get acquainted outside of their homeland, West Bengal. The website showcases events, member blogs, a membership drive, and an event calendar.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Firebase Configuration](#firebase-configuration)
- [Development Guidelines](#development-guidelines)
- [Contributing](#contributing)

---

## About

The **Bongoshree Cultural Association** aims to create a community for Bengali families residing in Bangalore. Our website serves as a portal to showcase cultural events, member blogs, and allows new members to join through an easy membership process.

---

## Features

- **Home**: Introduction to the association and upcoming events.
- **About Us**: Learn about the association's purpose and history.
- **Contact Us**: Contact form for users to reach out to the association.
- **Blog**: Members can upload and view blogs related to the community.
- **Membership Drive**: Information on how to become a member.
- **Event Calendar**: View upcoming events and activities.
- **Social Media Integration**: Links to our official Facebook and Instagram pages.

---

## Technologies Used

This website is built using the following technologies:

- **React.js**: JavaScript library for building the user interface.
- **Vue.js**: Used for blog management, integrated with React components.
- **Tailwind CSS**: Utility-first CSS framework for custom styling and responsiveness.
- **Material-UI**: Component library for building the user interface.
- **Firebase**: Backend for blog management and storage.
- **Framer Motion**: Animation library for adding smooth animations to the UI.
- **SWC**: Speed up compilation in React and Vue projects.
- **TypeScript**: For type safety and improved developer experience.

---

## Setup Instructions

To run this project locally, follow the steps below:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/bongoshree-website.git
cd bongoshree-website
```

### Step 2. Install Dependencies

```bash
npm install
```

### Step 3: Setup Firebase

You will need to set up Firebase to manage the blog submissions. Create a Firebase project and obtain your Firebase credentials. You can refer to the [Firebase Documentation](https://firebase.google.com/docs) to set this up.

### Step 4: Configure Firebase

Add your Firebase configuration to the `src/firebaseConfig.js` file:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### Step 5: Run the Application

```bash
npm start
```

## Firebase Configuration

To use Firebase for blog management:

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Enable **Firestore** for storing blog posts.
4. Add the Firebase credentials to the `firebaseConfig.js` file as shown above.
5. Deploy the Firestore rules to secure your data.

---

## Development Guidelines

### Styling

This project uses **Tailwind CSS** for custom styling and responsiveness. All global styles are in `src/index.css`. Use Tailwind's utility classes to style your components.

### Routing

We use **React Router** for handling navigation between different pages. If you need to add a new page, create a new component in `src/pages/`, and add the route in `App.tsx`.

### Components

Place all reusable components in the `src/components/` folder. Make sure to follow React's functional component pattern.

### Animations

We use **Framer Motion** to handle animations. If you need to add animations, use the `motion` component provided by Framer Motion.

### Mobile Responsiveness

Ensure that all components are responsive. Use Tailwind CSS's responsive utilities such as `sm:`, `md:`, `lg:`, and `xl:`.

---

## Contributing

We welcome contributions from the community. To contribute:

1. **Fork** the repository.
2. **Create** a new feature branch: `git checkout -b feature-name`.
3. **Commit** your changes: `git commit -m 'Add new feature'`.
4. **Push** the branch to your fork: `git push origin feature-name`.
5. **Submit** a Pull Request.

### Code Guidelines

- Follow [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript).
- Use meaningful commit messages.
- Ensure the project passes all tests before submitting.

### Issues

If you encounter any issues, feel free to open a [GitHub Issue](https://github.com/your-username/bongoshree-website/issues).

---

## License

This project is licensed under the GPL-v3.0 License. See the [LICENSE](./LICENSE) file for more details.
