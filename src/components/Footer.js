import React from 'react';

function Footer() {
    const contactMethods = [
        {
            id: 1,
            name: "Github",
            fontA: "fab fa-github fa-4x",
            link: "https://github.com/vw0389"
        },
        {
            id: 2,
            name: "Gitlab",
            fontA: "fab fa-gitlab fa-4x",
            link: "https://gitlab.com/vw1056"
        },
        {
            id: 3,
            name: "Linkedin",
            fontA: "fab fa-linkedin fa-4x",
            link: "https://www.linkedin.com/in/victor-weinert-ab79b3217/"
        },
        {
            id: 4,
            name: "Email",
            fontA: "fas fa-envelope fa-4x",
            link: "mailto:me@vweinert.com"
        }

    ]
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    {contactMethods.map(function (method) {
                        return (
                            <div key={method.id} className="col-sm-3 d-flex justify-content-center py-3">
                                <a href={method.link} target="_blank" rel="noreferrer"><i className={method.fontA}></i></a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default Footer;