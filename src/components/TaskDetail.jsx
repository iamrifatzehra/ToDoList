import React from 'react';

const TaskDetail = ({ task, onDelete }) => {
  if (!task) {
    return (
      <div className="w-2/3 bg-[#2a2a2a] p-6 rounded-r-lg flex items-center justify-center text-gray-400">
        Select a task to view details.
      </div>
    );
  }

  return (
    <div className="w-2/3 bg-[#2a2a2a] p-8 rounded-r-lg flex flex-col pt-6 relative group">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold">{task.title}</h2>
        <button 
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-400 transition-colors"
          title="Delete task"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
          </svg>
        </button>
      </div>
      <p className="text-gray-300 text-base leading-relaxed">
        {task.description}
      </p>
    </div>
  );
};

export default TaskDetail;
