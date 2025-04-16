import React from "react";

export const Card = ({ className = "", children }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 text-black dark:text-white rounded-2xl shadow mt-6 p-7 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ className = "", children }) => {
  return <div className={`p-2 ${className}`}>{children}</div>;
};
