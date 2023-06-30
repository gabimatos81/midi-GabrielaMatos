function tocaSom(seletorAudio) {
  const elementoAudio = document.querySelector(seletorAudio);
  if (elementoAudio && elementoAudio.localName === 'audio') {
    elementoAudio.play();
  } else {
    alert('Audio não encontrado');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => {
  const instrumento = tecla.classList[1];
  tecla.onclick = () => tocaSom(`#som_${instrumento}`);

  tecla.onkeydown = (evento) => {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = () => tecla.classList.remove('ativa');
});