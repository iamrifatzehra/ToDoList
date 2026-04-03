import React from 'react';

const Sidebar = ({ tasks, selectedTask, onSelectTask }) => {
  return (
    <div className="w-1/3 bg-[#2a2a2a] p-4 rounded-l-lg border-r border-[#3a3a3a]">
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => onSelectTask(task)}
            className={`text-left px-4 py-3 rounded-md border flex items-center justify-between transition-colors ${
              selectedTask?.id === task.id
                ? 'border-white bg-[#3a3a3a]'
                : 'border-gray-500 hover:border-gray-300'
            }`}
          >
            <span className="font-semibold text-lg leading-tight">{task.title}</span>
            <div className={`w-3 h-3 rounded-sm ${task.completed ? 'bg-white' : 'bg-white'}`}></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
