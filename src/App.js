import React from 'react';


const todoList = [
  // Array
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Clean room" },
  { id: 3, title: "Go for a walk" }
];


function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
      
        
      
        <h1>Todo List</h1>   {/* level-one heading */}
        
        {/* an unordered list (<ul>) */}
        <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>

        {todoList.map(item => (
            //  each Object in the Array, return a list item (<li>) with the following:
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
