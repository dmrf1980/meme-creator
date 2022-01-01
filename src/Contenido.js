
import { useState } from 'react';
import './Contenido.css';
import html2canvas from 'html2canvas'

function Contenido() {

  const [linea1, setLlinea1] = useState('Linea Superior');
  const [linea2, setLlinea2] = useState('Linea Inferior');
  const [imagen, setImagen] = useState('');

  function onChangelinea1(e) {
    setLlinea1(e.target.value);
  }
  function onChangelinea2(e) {
    setLlinea2(e.target.value);
  }

  function onChangeImagen(e) {
    setImagen(e.target.value);
    console.log('cambio imagen');
  }

  function onClickExportar() {
    html2canvas(document.querySelector("#contenedor-meme")).then(canvas => {

      var meme = canvas.toDataURL("image/png")
      var link = document.createElement('a')
      link.download = 'meme.png'
      link.href = meme
      link.click()

    });
  }

  function previewFile() {
    const preview = document.querySelector('img');
    const file = document.getElementById('file').files[0];
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      function () {
        // convert image file to base64 string
        preview.src = reader.result;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="Contenido">
      <select onChange={onChangeImagen}>
        <option value="aliens-1.png">Aliens</option>
        <option value="fry-1.png">Futurama</option>
        <option value="grogu-1.png">Grogu</option>
        <option value="grogu2-1.png">Grogu</option>
        <option value="niñaincendio-1.png">Niña Incendio</option>
        <option value="philosoraptor.jpg">PhilosoRaptor</option>
        <option value="siberiano-1.png">Perro Siberiano</option>
      </select> Escoje una imagen aqui
      <br />
      <br />
      <input
        onChange={onChangelinea1}
        type="text"
        maxLength="50"
        placeholder="Escribe aqui la linea Superior"
      />
      <br />
      <br />
      <input
        onChange={onChangelinea2}
        type="text"
        maxLength="50"
        placeholder="Escribe aqui la linea Inferior"
      />

      <br />
      <br />
      <input onChange={previewFile} 
        type="file" 
        id="file" 
        accept="image/*" />
      <br />
      <br />
      <button onClick={onClickExportar} 
        className="btn">Descargar</button>

      <div className="contenedor-meme" id="contenedor-meme">
        <div className="texto-sup">
          <span>{linea1}</span> <br />
        </div>
        <div className="texto-inf">
          <span>{linea2}</span> <br />
        </div>
        <img src={'images/' + imagen} alt="" className="imagen-meme" id="img" />
      </div>
    </div>
  );
}

export default Contenido;
