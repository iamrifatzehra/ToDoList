import React from 'react';

const AddTaskButton = ({ onAdd }) => {
  return (
    <div className="flex justify-end mt-4">
      <button 
        onClick={onAdd}
        className="bg-[#6b7280] hover:bg-[#4b5563] text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm"
      >
        Add task
      </button>
    </div>
  );
};

export default AddTaskButton;
