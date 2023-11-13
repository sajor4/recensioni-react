import './App.css';
import Testimone from './components/Testimone.js';

function App() {
  return (
    <div className='container-principale'>
      <h1>Le nostre recensioni</h1>
      <div className='App'>
        <Testimone
          nome='Richard Suarez'
          paese='Colombia'
          immagine='richard'
          lavoro='Junior Web Developer'
          azienda='Spotify'
          recensione='Duis egestas libero at dolor luctus, quis congue ex pharetra. Pellentesque condimentum, nisl at maximus facilisis, augue lectus feugiat magna, vitae vehicula tellus ex nec nisl. Mauris vel lacus sit amet diam aliquet rhoncus eu venenatis arcu. Aenean sagittis vulputate ante, vitae suscipit nibh. Nam consectetur bibendum lectus, nec porttitor orci vestibulum vulputate. Phasellus maximus ipsum rutrum odio mattis pellentesque. Sed eu dui eu eros dignissim porta. Pellentesque tristique ipsum et tellus ultrices, nec pulvinar ante tempor.'
        />
        <Testimone
          nome='Sarah Hilling'
          paese='Inghilterra'
          immagine='sarah'
          lavoro='Marketing Specialist'
          azienda='Amazon'
          recensione='Cras venenatis arcu at lectus pulvinar, id rutrum metus auctor. Etiam mattis sagittis dictum. Nam eu euismod lorem. Donec et tempor erat, quis aliquet mi. Duis risus nibh, mattis eget feugiat non, feugiat ac neque. Nam consectetur accumsan tristique. Fusce iaculis lacus vel quam faucibus, ac dictum est interdum.'
        />

        <Testimone
          nome='Tom Cruise'
          paese='Canada'
          immagine='tom'
          lavoro='Security Manager'
          azienda='Facebook'
          recensione='Quisque eu ex tincidunt, faucibus arcu vel, dictum nunc. Cras ut tellus convallis, condimentum lorem vel, viverra justo. Quisque rhoncus tempus rhoncus. Integer eleifend laoreet erat, eget egestas sem tincidunt ac.'
        />
      </div>
    </div>
  );
}

export default App;
