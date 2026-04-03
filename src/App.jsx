import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskDetail from './components/TaskDetail';
import AddTaskButton from './components/AddTaskButton';

const INITIAL_TASKS = [
  {
    id: 1,
    title: 'Learn React Fundamentals',
    description: 'Complete an online course or tutorial series covering React basics, including components, state, props, and hooks. Practice building small components and understanding the React component lifecycle.',
    completed: true,
  },
  {
    id: 2,
    title: 'Set Up Development Environment',
    description: 'Install Node.js, code editor, and configure the workspace to ensure a smooth development process.',
    completed: true,
  },
  {
    id: 3,
    title: 'Design Todo List UI',
    description: 'Create a mockup or wireframe for the to-do list application, planning out the component structure and visual aesthetics.',
    completed: true,
  }
];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [selectedTask, setSelectedTask] = useState(INITIAL_TASKS[0]);

  const handleSelectTask = (task) => {
    setSelectedTask(task);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter(t => t.id !== taskId);
    setTasks(newTasks);
    if (selectedTask?.id === taskId) {
      setSelectedTask(null);
    }
  };

  const handleAddTask = () => {
    // Placeholder functionality to show it works
    const newTask = {
      id: Date.now(),
      title: 'New Task ' + (tasks.length + 1),
      description: 'Description for the new task.',
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setSelectedTask(newTask);
  };

  return (
    <div className="min-h-screen bg-[#212121] text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow flex flex-col p-8 md:p-12 lg:p-16 max-w-7xl mx-auto w-full">
        {/* Main interactive area wrapper with specific background to match rounded inset area of screenshot */}
        <div className="flex bg-[#2a2a2a] rounded-lg shadow-lg flex-grow min-h-[500px]">
          <Sidebar 
            tasks={tasks} 
            selectedTask={selectedTask} 
            onSelectTask={handleSelectTask} 
          />
          <TaskDetail 
            task={selectedTask} 
            onDelete={handleDeleteTask} 
          />
        </div>
        
        <AddTaskButton onAdd={handleAddTask} />
      </main>
    </div>
  );
}

export default App;
