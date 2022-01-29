import React from 'react';
function Portfolio() {
    const projects = [
        {
            id: 1,
            link: "https://github.com/vw0389/work-it-done",
            name: "work-it-done",
            image: "./images/1.jpg"
        },
        {
            id: 2,
            link: "https://github.com/vw0389/react-portfolio",
            name: "React Portfolio",
            image: "./images/2.jpg"
        },
        {
            id: 3,
            link: "https://github.com/vw0389/what-is-that-song",
            name: "What Is That Song",
            image: "./images/3.jpg"
        },
        {
            id: 4,
            link: "https://github.com/vw0389/the-network",
            name: "the-network",
            image: "./images/4.jpg"
        },
        {
            id: 5,
            link: "https://github.com/vw0389/write-it-down",
            name: "write-it-down",
            image: "./images/5.jpg"
        },
        {
            id: 6,
            link: "https://github.com/vw0389/Work-Day-Scheduler",
            name: "Work-Day-Scheduler",
            image: "./images/6.jpg"
        }

    ];

    return (<div className="container">
        {projects.map(function (project) {
            return (<div key={project.id}>
                <a href={project.link} target="_blank">
                    <h4 className="py-3">{project.name}</h4>
                </a>
                <a href={project.link} target="_blank">
                    <img className="img-fluid home-img" src={require(project.image).default} alt="" />
                </a>
            </div>)
        })}

    </div>)
}
export default Portfolio;