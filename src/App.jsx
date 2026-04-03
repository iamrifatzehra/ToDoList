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
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');

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

  const submitNewTask = () => {
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      description: newTaskDesc,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setSelectedTask(newTask);
    setIsAddingTask(false);
    setNewTaskTitle('');
    setNewTaskDesc('');
  };

  return (
    <div className="min-h-screen bg-[#212121] text-white flex flex-col font-sans relative">
      <Header />
      
      <main className="flex-grow flex flex-col p-8 md:p-12 lg:p-16 max-w-7xl mx-auto w-full relative z-0">
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
        
        <AddTaskButton onAdd={() => setIsAddingTask(true)} />
      </main>

      {/* Add Task Modal */}
      {isAddingTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#2a2a2a] p-8 rounded-lg shadow-2xl w-full max-w-md border border-[#3a3a3a]">
            <h2 className="text-2xl font-bold mb-6 text-white">Add New Task</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                <input 
                  type="text" 
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full bg-[#1e1e1e] border border-[#4a4a4a] rounded-md px-4 py-2 text-white outline-none focus:border-white transition-colors"
                  placeholder="Task title"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                <textarea 
                  value={newTaskDesc}
                  onChange={(e) => setNewTaskDesc(e.target.value)}
                  className="w-full bg-[#1e1e1e] border border-[#4a4a4a] rounded-md px-4 py-2 text-white outline-none focus:border-white transition-colors min-h-[100px] resize-y"
                  placeholder="Task details"
                />
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button 
                  onClick={() => setIsAddingTask(false)}
                  className="px-4 py-2 rounded-md text-gray-300 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={submitNewTask}
                  className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
                >
                  Save Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
