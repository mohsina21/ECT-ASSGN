import React from "react";

export const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`
        w-full p-2 rounded-lg border border-gray-300 
        bg-white text-black 
        focus:outline-none focus:ring-2 focus:ring-blue-400
        dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400
        dark:focus:ring-blue-500 
        transition-colors duration-300
        ${className}
      `}
      {...props}
    />
  );
};
