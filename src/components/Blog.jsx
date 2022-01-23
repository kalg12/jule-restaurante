import React from 'react'
import { Link } from 'react-router-dom'

export const Blog = () => {

    const blog = [
        {id:1, titutlo: 'Cómo hacer un arroz blanco perfecto', descripcion: 'El arroz cocido es uno de los platos básicos de la cocina, un alimento muy versátil que te ayuda a completar cualquier comida o cena. Por algún motivo, algunas personas no consiguen que les quede en su punto, pero con esta receta de arroz blanco se acabaron los problemas...', img: 'https://firebasestorage.googleapis.com/v0/b/jule-restaurant.appspot.com/o/blog-01.png?alt=media&token=ca107dbb-f8ca-47b9-9661-9e30fac016ed'},
        {id:2, titutlo: 'Haz un pescado a la talla al estilo Acapulco', descripcion: 'Uno de los platillos más famosos de Acapulco es el Pescado a la Talla, plato que comúnmente se prepara con mayonesa, un adobo especial y otras especies. Este es un pescado cocinado al carbón o a las brasas que se abre en mariposa; previamente se unta con una salsa roja a base de chile guajillo y/o chile...', img: 'https://firebasestorage.googleapis.com/v0/b/jule-restaurant.appspot.com/o/blog-02.png?alt=media&token=024c920e-ffa5-49c0-a580-50c5819f648f'},
        {id:3, titutlo: 'Sushi - Te enseñamos a preparalo', descripcion: 'Los sushi son platos elaborados con arroz con vinagre. Siendo uno de los platos favoritos de los japoneses, el sushi se elabora con arroz blanco o integral, y variedades de verduras y mariscos.En los restaurantes japoneses, el sushi se suele confundir con el sashimi, mientras que estos dos platos son ...', img: 'https://firebasestorage.googleapis.com/v0/b/jule-restaurant.appspot.com/o/blog-03.png?alt=media&token=4dde7161-2961-47da-9967-ebc015c2f3bd'},
    ]

    return (
        <>
        <div className='cover-blog'>
            <div className='cover-text-blog'>
                <h1>-Blog-</h1>
            </div>

            <section className="blog-section">
                {
                    blog.map((x) => {
                        return (
                            <div key = {x.id} href={`/blog/${x.id}`} className="card col-md-10"> 
                                    <img className="img-blog" src={x.img}  alt="Blog" />
                                    <div className="card-body">
                                        <h5 className="card-title">{x.titutlo}</h5>
                                        <p className="card-text">{x.descripcion}</p>
                                    </div>
                                        <Link to={`/blog/${x.id}`} className="btn btn-primary">Leer más</Link>
                            </div>
                        )
                    })
                }
            </section>
        </div>
        </>
    )
}