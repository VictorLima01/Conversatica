
  var capturando = "";

  function capturar () {
   capturando = document.getElementById('valor').value;
  
     var decimal = parseInt(capturando, 2);
      console.log(decimal);
    document.getElementById('valorDigitado').innerHTML = decimal;
  }
  