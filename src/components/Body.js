import React from 'react';
import About from './About';

import Portfolio from './Portfolio';
import Resume from './Resume';
function Body({ currentView }) {
    function selectContent(viewId) {
        switch (viewId) {
            case 1:
                return <About />;
            case 2:
                return <Portfolio />;
            case 3:
                return <Resume />;
            default:
                return <About />;
        }
    }
    return (
        <div className="bg-dark text-light p-4 text-center">
            {selectContent(currentView.id)}
        </div>
    );
}
export default Body;