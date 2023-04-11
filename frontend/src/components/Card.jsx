import React from 'react';

const Card = ({ color, title, icon, subtitle }) => (
  <div className={`bg-${color}-300 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl`}>
    <div className="flex items-center mb-4">
      <div className={`bg-${color}-500 rounded-full p-2 mr-4`}>
        {icon}
      </div>
      <h2 className="text-xl font-bold text-blue-300">{title}</h2>
    </div>
    <p className="text-white-300">{subtitle}</p>
  </div>
);

export default Card;
