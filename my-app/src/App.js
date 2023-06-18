import react from 'react';
import Sidebar from './components/sideBar/sidebar.js';
import "./App.css";
import Header from './components/header/header.js';
import Task from './components/task/task.js';


function App() {
  return (
    <div>
      <div className='sidebar'>
        <Sidebar />
        <Header />
      </div>
      <Task />
    </div>
  );
}

export default App;
