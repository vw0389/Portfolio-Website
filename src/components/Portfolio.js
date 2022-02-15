import React from 'react';
// I have no idea why I had to do it this way
import image1 from "./images/1.svg";
import image2 from "./images/2.svg";
import image3 from "./images/3.svg";
import image4 from "./images/4.svg";
import image5 from "./images/5.svg";
import image6 from "./images/6.svg";
function Portfolio() {
    const projects = [
        {
            id: 1,
            link: "https://github.com/vw0389/work-it-done",
            deployed: "https://warm-eyrie-07140.herokuapp.com/",
            name: "work-it-done",
            image: image1
        },
        {
            id: 2,
            link: "https://github.com/vw0389/react-portfolio",
            deployed: "https://vweinert.com",
            name: "React Portfolio",
            image: image2
        },
        {
            id: 3,
            link: "https://github.com/vw0389/what-is-that-song",
            deployed: "https://vw0389.github.io/what-is-that-song/",
            name: "What Is That Song",
            image: image3
        },
        {
            id: 4,
            link: "https://github.com/vw0389/the-network",
            deployed: "",
            name: "the-network",
            image: image4
        },
        {
            id: 5,
            link: "https://github.com/vw0389/still-good",
            deployed: "https://pacific-bayou-24755.herokuapp.com/",
            name: "still-good",
            image: image5
        },
        {
            id: 6,
            link: "https://github.com/vw0389/Work-Day-Scheduler",
            deployed: "https://vw0389.github.io/Work-Day-Scheduler/",
            name: "Work-Day-Scheduler",
            image: image6
        }

    ];

    return (<div className="container">
        <div className="row">
            {projects.map(function (project) {
                return (<div key={project.id} className="p-2 col-md-4">
                    <a href={project.link} target="_blank" rel="noreferrer">
                        <h4 className="py-1">{project.name}</h4>
                    </a>
                    {project.deployed && (
                        <a href={project.deployed} target="_blank" rel="noreferrer">
                            <h4 className="">Live</h4>
                        </a>
                    )}

                    <a href={project.link} target="_blank" rel="noreferrer">
                        <img className="img-fluid" src={project.image} alt="" />
                    </a>
                </div>)
            })}
        </div>
    </div>)
}
export default Portfolio;