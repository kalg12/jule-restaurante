import React from 'react'

export const Menu = () => {
    return (
        <div className='cover-buffet'>
            <div className='cover-text-buffet'>
                <h1>-Menú Buffet-</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-primary">Desayunos</strong>
                    <p className="card-text mb-auto">
                        <ul>
                            <li>Fruta, Yogurt, Cereal y Pan Dulce</li>
                            <li>Barra de 12 Platillos (Variedad)</li>
                            <li>Sopes, Quesadillas y Gorditas</li>
                            <li>Huevos al Gusto</li>
                            <li>Pancita (Fines de semana)</li>
                            <li>Jugo de Naranja y Verde</li>
                            <li>Café, Té y Leche</li>
                        </ul>
                        <p>Desayunos Adulto: $215</p>
                        <p>Desayunos Niños de 5 a 11 años: $115</p>
                    </p>
                    <a
                        className="btn btn-outline-primary btn-sm"
                        role="button"
                        href="/reservaciones"
                    >
                        Reservar ahora
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-primary">Comidas y Cenas</strong>
                    <p className="card-text mb-auto">
                        <ul>
                            <li>Barra de 12 Platillos</li>
                            <li>Charrasco de 16 Espadas ( Pan con Crema Ajo y Chiles Toreados)</li>
                            <li>Barra de Guarniciones ( Ensaladas, Verduras y Aderezos)</li>
                            <li>Barra de Postres</li>
                            <li>Sopa o Caldo del Día</li>
                        </ul>
                        <p>Comida y Cena Adulto: $398</p>
                        <p>Comida y Cena Niños de 5 a 11 años: $172</p>
                    </p>
                    <a
                        className="btn btn-outline-primary btn-sm"
                        role="button"
                        href="/reservaciones"
                    >
                        Reservar ahora
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
            </div>
        </div>
    )
}