import React from 'react';

function Resume() {
    const languages = [
        "Java",
        "Python",
        "Javascript",
        "Bash"
    ];
    const experienceWith = [
        "NodeJS",
        "Bootstrap",
        "React",
        "Express.js",
        "Relational Databases",
        "NoSQL Databases",
        "Django",
        "Spring",
        "Git & Github & Gitlab",
        "AWS & Digital Ocean",
        "Shell Scripting",
        "Linux, deb & rpm based"
    ];
    return (
        <div className="container">
            <h2>Languages</h2>
            <ul>
                {languages.map(function (language) {
                    return (
                        <li>{language}</li>
                    )
                })}
            </ul>
            <h2>Experience With:</h2>
            <ul>
            {experienceWith.map(function (experience) {
                    return (
                        <li>{experience}</li>
                    )
                })}
            </ul>

            <a href="https://vweinert.com/victor_weinert_resume.pdf"><h4>Resume Download</h4></a>
        </div>
    );
}
export default Resume;