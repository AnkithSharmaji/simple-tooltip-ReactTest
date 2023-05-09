// Importing React and required components
import React from 'react';
import './App.css';
import Tooltip from './Tooltip';

// Defining a functional component named App
function App() {
// Returning the JSX
return (
<div className="App">
{/* Rendering Tooltip component with different props */}
<Tooltip position="top" content="Tooltip on top">
<button>Hover me</button>
</Tooltip>
<Tooltip position="bottom" content="Tooltip on bottom">
<button>Hover me</button>
</Tooltip>
<Tooltip position="left" content="Tooltip on left">
<button>Hover me</button>
</Tooltip>
<Tooltip position="right" content="Tooltip on right">
<button>Hover me</button>
</Tooltip>
</div>
);
}

// Exporting the App component
export default App;