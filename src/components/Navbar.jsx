import React from 'react'

export const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                alt='Jule-Restaurant' width={30} height={24}
                className="d-inline-block align-text-top"/>
                Jule Restaurant
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Inicio
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">
                                Concepto
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">
                                Buffet
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">
                                Eventos
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">
                                Galería
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">
                                Reservaciones
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}