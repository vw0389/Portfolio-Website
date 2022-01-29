import React from 'react';

function Navigation(props) {
    const { views = [], currentView, setCurrentView } = props;

    return (
        <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
                {
                    views.map(function (view) {
                        return <li key={view.id} className="nav-item">
                            <a className={"nav-link" + ((currentView.id === view.id) ? " fw-bolder text-decoration-underline": "")}
                             href="#" onClick={() => {
                                 setCurrentView(view);
                             }}>{view.name}</a>
                        </li>
                    })
                }
            </ul>
        </div>
    );

}

export default Navigation;