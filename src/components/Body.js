import React from 'react';
import About from './About';
import Contact from './Contact';
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
                return <Contact />;
            case 4:
                return <Resume />;
            default:
                return <About />;
        }
    }
    return (
        <section className="bg-dark text-light p-4 text-center">
            {selectContent(currentView.id)}
        </section>
    );
}
export default Body;