import React, { useState, useEffect } from 'react';
import Tracker from './Components/Tracker';

const App = () => {
 
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-2xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Expense Tracker</h1>
            
          </div>
         
        </div>
        <Tracker />
      </div>
    </div>
  );
};

export default App;
