import React from 'react';

export const Reservaciones = () => {
  return (
    <div className='cover-reservaciones'>
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
          <label htmlFor='telefono'>Teléfono</label>
          <input type='text' className='form-control' id='telefono' placeholder='Teléfono' />
        </div>
        <div className='form-group'>
          <label htmlFor='fecha'>Fecha</label>
          <input type='date' className='form-control' id='fecha' placeholder='Fecha' /> 
        </div>
        <div className='form-group'>
          <label htmlFor='hora'>Hora</label>
          <input type='time' className='form-control' id='hora' placeholder='Hora' />
        </div>
        <div className='form-group'>
          <label htmlFor='personas'>Personas</label>
          <input type='number' className='form-control' id='personas' placeholder='Personas' />
        </div>
        <div className='form-group'>
          <label htmlFor='mensaje'>Mensaje</label>
          <textarea className='form-control' id='mensaje' rows='3' placeholder='Mensaje'></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>Enviar</button>
      </form>
      </div>
    </div>
  )


};
