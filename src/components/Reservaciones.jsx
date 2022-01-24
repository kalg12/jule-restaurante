import React from 'react';
import { useState } from 'react';
import { dbConfig } from '../config/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import swal from 'sweetalert';

export const Reservaciones = () => {


  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState('');
  const [mensaje, setMensaje] = useState('');


  /* Obtener información de la DB de Firebase */
  try{
    const getData = async () => {
      const DB = collection(dbConfig, 'reservaciones');
      const data = await getDocs(DB);
      return data;
    }
    getData();
  } catch(error){
    console.log(error);
  };

  /* Función guardat dato */
  const guardarDato = () => {
    try{
      const datoAGuardar = {nombre, email, telefono, fecha, hora, personas, mensaje};
      const DB = collection(dbConfig, 'reservaciones');
      addDoc(DB, datoAGuardar);
      swal("Mensaje enviado", "Gracias por contactarnos", "sucess");
    } catch(error){
      console.log(error);
    };
  };

  /* Asignación de valores de formularios → useState para que se guarde el valor ingresado en el formulario*/
  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleTelefono = (e) => {
    setTelefono(e.target.value);
  };
  const handleFecha = (e) => {
    setFecha(e.target.value);
  };
  const handleHora = (e) => {
    setHora(e.target.value);
  };
  const handlePersonas = (e) => {
    setPersonas(e.target.value);
  };
  const handleMensaje = (e) => {
    setMensaje(e.target.value);
  };

  /* Función submit */
  const submit = () =>{
    guardarDato();
  };

  return (
    <div className='cover-reservaciones'>
      <div className="form-background">
      <form className="cover-form-reservaciones" action="">
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre completo</label>
          <input type='text' className='form-control' id='nombre' placeholder='Nombre' onChange={handleNombre}/>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='form-control' id='email' placeholder='Email' onChange={handleEmail}/>
        </div>
        <div className='form-group'>
          <label htmlFor='telefono'>Teléfono</label>
          <input type='text' className='form-control' id='telefono' placeholder='Teléfono' onChange={handleTelefono}/>
        </div>
        <div className='form-group'>
          <label htmlFor='fecha'>Fecha</label>
          <input type='date' className='form-control' id='fecha' placeholder='Fecha' onChange={handleFecha}/>
        </div>
        <div className='form-group'>
          <label htmlFor='hora'>Hora</label>
          <input type='time' className='form-control' id='hora' placeholder='Hora' onChange={handleHora}/>
        </div>
        <div className='form-group'>
          <label htmlFor='personas'>Personas</label>
          <input type='number' className='form-control' id='personas' placeholder='Personas' onChange={handlePersonas}/>
        </div>
        <div className='form-group'>
          <label htmlFor='mensaje'>Mensaje</label>
          <textarea className='form-control' id='mensaje' rows='3' placeholder='Mensaje' onChange={handleMensaje}></textarea>
        </div>
        <button type='submit' className='btn btn-primary' onClick={submit}>Enviar</button>
      </form>
      </div>
    </div>
  )


};
