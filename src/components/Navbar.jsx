import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                <img src="https://raw.githubusercontent.com/kalg12/jule-restaurante/main/src/img/flame.png"
                alt='Jule-Restaurant' width={30} height={30}
                className="d-inline-block align-text-top"/>
                Jule Restaurant
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Inicio
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/concepto">
                                Concepto
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/menu">
                                Menú Buffet
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/blog">
                                Blog
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/reservaciones">
                                Reservaciones
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/contacto">
                                Contacto
                            </Link>
                            </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}