
var formElement = null;
var respuestaText1 = null;
var respuestaText2 = null;
var respuestaSelect = null;
var respuestaSelect1 = null;
var respuestaSelectMultiple1 = [];
var respuestaSelectMultiple2 = [];
var respuestasCheckbox = [];
var respuestasCheckbox1 = [];
var respuestasRadio = [];
var respuestasRadio1 = [];
var respuestaRadio = null;
var respuestaText1 = null;
var respuestaSelectMultipleProfe = [];
var nota = 0;


window.onload = function () {

  var second = 01;
  var minute = 10;

  setInterval(function () {
    if (second < 10) {
      document.getElementById("timer").innerHTML = "00:0" + minute + ":0" + second;
    } else {
      document.getElementById("timer").innerHTML = "00:0" + minute + ":" + second;
    }

    second--;

    if (second == 00) {
      minute--;
      second = 59;
    }
    if (minute == 0 && second == 1) {
      document.getElementById("timer").innerHTML = "Tiempo límite alcanzado";
      alert("Ups,se te ha acabado el tiempo.");
    }
    if (minute <= -1) {
      document.getElementById("timer").innerHTML = " ";
    }
  }, 1000);

  formElement = document.getElementById('myform');
  formElement.onsubmit = function () {
    inicializar();
    corregirText();
    corregirText1();
    corregirSelect();
    corregirSelect1();
    corregirMultiple1();
    corregirMultiple2();
    corregirCheckbox();
    corregirCheckbox1();
    corregirRadio();
    corregirRadio1();
    presentarNota();
    return false;
  };

};

var url = "https://rawgit.com/mangel2500/Formulario/master/Formulario/json/json.json";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {

    gestionarJson(this.responseText);
  }
};
xhttp.open("GET", url, true); 
xhttp.send();

function gestionarJson(dadesJson) {
  var object = JSON.parse(dadesJson);

  for (var i = 0; i < 10; i++) {
    document.getElementsByTagName("h2")[i].innerHTML = object.questions.question[i].title
  }
  respuestaText1 = object.questions.question[0].answer;
  respuestaText2 = object.questions.question[1].answer;

  /*SELECT */
  var sel = document.getElementsByTagName("select")[0];
  var nopt = object.questions.question[2].option.length;
  for (var i = 0; i < nopt; i++) {
    var opt = document.createElement("option");
    opt.value = i + 1;
    opt.text = object.questions.question[2].option[i];
    sel.appendChild(opt);
  }
  respuestaSelect1 = object.questions.question[2].answer;

  var sel = document.getElementsByTagName("select")[1];
  var nopt = object.questions.question[3].option.length;
  for (var i = 0; i < nopt; i++) {
    var opt = document.createElement("option");
    opt.value = i + 1;
    opt.text = object.questions.question[3].option[i];
    sel.appendChild(opt);
  }
  respuestaSelect2 = object.questions.question[3].answer;

  /*MULTIPLE*/
  var sel = document.getElementsByTagName("select")[2];
  var nopt = object.questions.question[4].option.length;
  for (var i = 0; i < nopt; i++) {
    var opt = document.createElement("option");
    opt.value = i + 1;
    opt.text = object.questions.question[4].option[i];
    sel.appendChild(opt);
  }

  var sel = document.getElementsByTagName("select")[3];
  var nopt = object.questions.question[5].option.length;
  for (var i = 0; i < nopt; i++) {
    var opt = document.createElement("option");
    opt.value = i + 1;
    opt.text = object.questions.question[5].option[i];
    sel.appendChild(opt);
  }

  /*CHECKBOX*/
  var numOpciones = object.questions.question[7].option.length;
  var cajacontenedor1 = document.getElementsByClassName("checkbox")[0];
  for (var j = 0; j < numOpciones; j++) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML = object.questions.question[6].option[j];
    label.setAttribute("for", "r7." + j);
    input.type = "checkbox";
    input.name = "respuesta7";
    input.id = "r7." + j;
    cajacontenedor1.appendChild(input);
    cajacontenedor1.appendChild(label);
    cajacontenedor1.appendChild(document.createElement("br"));
  }

  var numOpciones = object.questions.question[7].option.length;
  var cajacontenedor1 = document.getElementsByClassName("checkbox")[1];
  for (var j = 0; j < numOpciones; j++) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML = object.questions.question[7].option[j];
    label.setAttribute("for", "r8." + j);
    input.type = "checkbox";
    input.name = "respuesta8";
    input.id = "r8." + j;
    cajacontenedor1.appendChild(input);
    cajacontenedor1.appendChild(label);
    cajacontenedor1.appendChild(document.createElement("br"));
  }

  /*RADIO*/
  var rad = document.getElementsByClassName("radio")[0];
  var nopt = object.questions.question[8].option.length;
  for (var i = 0; i < nopt; i++) {
    var opt = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML = object.questions.question[8].option[i];
    opt.setAttribute("type", "radio");
    opt.setAttribute("name", "asd");
    opt.value = i + 1;
    opt.text = object.questions.question[2].option[i];
    rad.appendChild(opt);
    rad.appendChild(label);
  }

  var rad = document.getElementsByClassName("radio")[1];
  var nopt = object.questions.question[9].option.length;
  for (var i = 0; i < nopt; i++) {
    var opt = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML = object.questions.question[9].option[i];
    opt.setAttribute("type", "radio");
    opt.setAttribute("name", "zxc");
    opt.value = i + 1;
    opt.text = object.questions.question[2].option[i];
    rad.appendChild(opt);
    rad.appendChild(label);
  }

}

/*CORRECION*/

/*TEXT*/
function corregirText() {
  var s = formElement.elements[0].value;
  if (s == respuestaText1) {
    darRespuestaHtml("P1: CORRECTA");

    nota += 1;
  } else {

    darRespuestaHtml("P1: INCORRECTA");
  }
}

function corregirText1() {
  var r = formElement.elements[1].value;
  var m = r.toUpperCase();
  if (m == respuestaText2) {
    darRespuestaHtml("P2: CORRECTA");
    nota += 1;
  } else {
    darRespuestaHtml("P2: INCORRECTA");
  }
}
/*SELECT*/
function corregirSelect() {
var sel = formElement.elements[2];
  if (sel.selectedIndex == respuestaSelect1) {
    darRespuestaHtml("P3: CORRECTA");
    nota += 1;
  } else darRespuestaHtml("P3: INCORRECTA");
}


function corregirSelect1() {
  var sel = formElement.elements[3];
  if (sel.selectedIndex == respuestaSelect2) {
    darRespuestaHtml("P4: CORRECTA");
    nota += 1;
  } else darRespuestaHtml("P4: INCORRECTA,");
}

/*CHECKBOX*/
function corregirCheckbox() {
  var f = formElement;
  var limite = 0;
  var escorrecta = [];
  for (i = 0; i < f.respuesta7.length; i++) {
    if (f.respuesta7[i].checked) {
      escorrecta[i] = false;
      for (j = 0; j < respuestasCheckbox.length; j++) {
        if (i == respuestasCheckbox[j]) escorrecta[i] = true;
      }

      if (escorrecta[i]) {
        nota += 1.0 / respuestasCheckbox.length;
        limite++;
      } else {
        nota -= 1.0 / respuestasCheckbox.length;

      }
    }
  }
  if (limite == 2) {
    darRespuestaHtml("P5: CORRECTA");

  } else {
    darRespuestaHtml("P5: INCORRECTA");
  }
}

function corregirCheckbox1() {
  var f = formElement;
  var limite1 = 0;
  var escorrecta = [];
  for (i = 0; i < f.respuesta8.length; i++) {
    if (f.respuesta8[i].checked) {
      escorrecta[i] = false;
      for (j = 0; j < respuestasCheckbox1.length; j++) {
        if (i == respuestasCheckbox1[j]) escorrecta[i] = true;
      }
      if (escorrecta[i]) {
        nota += 1.0 / respuestasCheckbox1.length;
        limite1++;

      } else {
        nota -= 1.0 / respuestasCheckbox1.length;
      }
    }
  }
  if (limite1 == 2) {
    darRespuestaHtml("P6: CORRECTA");

  } else {
    darRespuestaHtml("P6: INCORRECTA, la respuesta correcta es [1.500€] y [1583$]");
  }
}

/*MULTIPLE*/
function corregirMultiple1() {
  var sel = formElement.elements[4];
  var selected = [];
  var n = 0;
  var correcto = 0;
  for (i = 0; i < sel.length; i++) {
    if (sel[i].selected) {
      selected[n] = sel[i].value;
      n += 1;
    }
  }
  for (i = 0; i < respuestaSelectMultiple1.length; i++) {
    if (selected[i] - 1 == respuestaSelectMultiple1[i]) {
      correcto += 1;
    }
  }
  if (correcto == respuestaSelectMultiple1.length) {
    darRespuestaHtml("P5: Correcto")
    nota += 1;
  }
  else {
    darRespuestaHtml("P5: Incorrecto")
  }
}

function corregirMultiple2() {
  var sel = formElement.elements[5];
  var selected = [];
  var n = 0;
  var correcto = 0;
  for (i = 0; i < sel.length; i++) {
    if (sel[i].selected) {
      selected[n] = sel[i].value;
      n += 1;
    }
  }
  for (i = 0; i < respuestaSelectMultiple2.length; i++) {
    if (selected[i] - 1 == respuestaSelectMultiple2[i]) {
      correcto += 1;
    }
  }
  if (correcto == respuestaSelectMultiple2.length) {
    darRespuestaHtml("P6: Correcto")
    nota += 1;
  }
  else {
    darRespuestaHtml("P6: Incorrecto")
  }
}
/*RADIO*/
function corregirRadio() {
  var f = formElement;
  for (i = 0; i < f.asd.length; i++) {
    if (f.asd[i].checked) {
      if (i == respuestasRadio);
      darRespuestaHtml1("P9: CORRECTA");
      nota += 1;
    } else {
      darRespuestaHtml("P9: INCORRECTA,");
    }
  }
}

  function corregirRadio1() {
    var f = formElement;
    for (i = 0; i < f.zxc.length; i++) {
      if (f.zxc[i].checked) {
        if (i == respuestasRadio);
        darRespuestaHtml("P10: CORRECTA");
        nota += 1;
      } else {
        darRespuestaHtml("P10: INCORRECTA,");
      }
    }
  }


/*RESULTADO*/
function inicializar() {
  document.getElementById('notaFinal').innerHTML = "";
  nota = 0.0;
}
function darRespuestaHtml(r) {
  var p = document.createElement("p");
  var node = document.createTextNode(r);
  p.appendChild(node);
  document.getElementById('notaFinal').appendChild(p);
}

function presentarNota() {
  document.getElementById("notaFinal").innerHTML = "Nota: " + nota.toFixed(2) + " puntos sobre 10";
}

