// Importing React library for building UI components
import React from 'react';

// Importing CSS file for Tooltip component styling
import './Tooltip.css';

// Defining the Tooltip functional component which takes three props - children, position, and content
const Tooltip = ({ children, position, content }) => {
// Return JSX to display the Tooltip component with the given children and content, and positioned as per the provided position prop
return (
<div className="tooltip-container">
{children}
<span className={`tooltip-text tooltip-${position}`}>{content}</span>
</div>
);
};

// Exporting the Tooltip component to make it available for other parts of the application to use
export default Tooltip;