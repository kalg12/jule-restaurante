import React from 'react';

export const Contacto = () => {
  return  (
    <div className='cover-contacto'>
      <div className="form-background">
      <form className="cover-form-reservaciones" action="">
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre completo</label>
          <input type='text' className='form-control' id='nombre' placeholder='Nombre' />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='form-control' id='email' placeholder='Email' />
        </div>
        <div className='form-group'>
          <label htmlFor='mensaje'>Mensaje</label>
          <textarea className='form-control' id='mensaje' rows='3' placeholder='Mensaje'></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>Enviar</button>
      </form>
        <div className='contacto-info'>
          <p>Teléfono: (744) 481 2433</p>
          <p>Email: contacto@juleacapulco.com</p>
        </div>
      </div>
    </div>
  )
};