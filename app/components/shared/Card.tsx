import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, icon, onClick }) => {
  return (
    <div 
      className="bg-white border border-[--color-bronze] shadow-md rounded-md p-4 cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      {icon && <div className="mb-2">{icon}</div>}
      <h3 className="text-lg font-semibold mb-1 text-[--color-black]">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
