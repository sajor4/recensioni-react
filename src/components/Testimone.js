import React from 'react';
import '../stylesheets/Testimone.css';

function Testimone(props) {
  return (
    <div className='container-testimone'>
      <img className='immagine-testimone'
        src={require(`../immagini/testimone-${props.immagine}.png`)}
        alt='Foto di Richard' />
      <div className='testo-testimone-container'>
        <p className='nome-testimone'>{props.nome} - {props.paese}</p>
        <p className='lavoro-testimone'>{props.lavoro} presso {props.azienda}</p>
        <p className='testo-testimone'>"{props.recensione}"</p>
      </div>
    </div>
  );
}

export default Testimone;