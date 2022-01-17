import React from 'react'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                alt='Jule-Restaurant' width={30} height={24}
                className="d-inline-block align-text-top"/>
                Jule Restaurant
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="/navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">
                        INICIO
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">
                        CONCEPTO
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">
                        BUFFET
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">
                        EVENTOS
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">
                        GALERÍA
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">
                        RESERVACIONES
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">
                        CONTACTO
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}