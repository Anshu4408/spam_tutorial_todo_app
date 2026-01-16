'use client';
import React from "react";
import { useEffect, useState } from "react";


export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  async function fetchTasks() {
    try {
      const response = await fetch('/api/task');
      const data = await response.json();
      setTasks(JSON.parse(data));
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }

  useEffect(() => {
    fetchTasks();

  }, []);
  async function addTask() {
    try {
      const response = await fetch('/api/task', {
        method: 'POST',
        body: JSON.stringify({ title: newTask }),
      });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }
  async function deleteTask(title) {
    try {
      const response = await fetch('/api/task', {
        method: 'DELETE',
        body: JSON.stringify({ title }),
      });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }



  return (
    <div className="flex flex-col min-h-screen items-center  p-4 justify-start bg-zinc-50 font-sans dark:bg-black">
      <div className='text-4xl '>TODO APP</div>
      <div className="flex gap-2 mt-8">
        <input type="text" className="border-2 border-black rounded-md ml-4 p-2 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a new task..." />
        <button className='bg-green-600 p-2 rounded-2xl' onClick={() => { addTask() }}>Add Task</button>
      </div>
      <div className="mt-8 w-full max-w-md flex flex-col items-center justify-center  p-4 rounded-lg shadow-md dark:bg-zinc-800">
        {tasks.map((task, index) => (<>
          <ul>
            <div className='flex gap-4 my-4'>
              <li>{task.title}</li>
              <button className='bg-green-400 cursor-pointer rounded-2xl p-2' onClick={() => { deleteTask(task.title) }}>✔️</button>
            </div>

          </ul>
        </>))}

      </div>




    </div>
  );
}
