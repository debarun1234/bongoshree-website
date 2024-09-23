import React from "react";
import { Button } from '@mui/material';
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Bongoshree Cultural Association</h1>
        <p className="mt-5 text-lg text-gray-700">Connecting Bengali families in Bangalore.</p>
        <Button variant="contained" color="primary" className="mt-5">
          Explore Events
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;
