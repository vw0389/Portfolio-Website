import React, { useState } from 'react';
import "./App.css";
import "./components/Header"
function App() {
    const [view] = useState([
      {name: 'About Me',},{ name: 'Portfolio'},{ name: 'Contact' },{ name: 'Resume' }
    ]);
  
    const [currentCategory, setCurrentCategory] = useState(view[0]);
  
    return (
        
      <div className="container text-light">
          <Header></Header>
      </div>
    );
  }
  
  export default App;