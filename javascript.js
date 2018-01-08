/*OnMouseOver functions*/
function bdOver(obj) {
	obj.style.color = "red";
	obj.style.fontWeight = "bold";
}

function bdOut(obj) {
	obj.style.color = "black";
	obj.style.fontWeight = "normal";

}

function edOver(obj) {
	obj.style.color = "purple";
	obj.style.fontWeight = "bold";
}

function edOut(obj) {
	obj.style.color = "black";
	obj.style.fontWeight = "normal";

}

function lmOver(obj) {
	obj.style.color = "blue";
	obj.style.fontWeight = "bold";
}

function lmOut(obj) {
	obj.style.color = "black";
	obj.style.fontWeight = "normal";

}

function prgOver(obj) {
	obj.style.color = "orange";
	obj.style.fontWeight = "bold";
}

function prgOut(obj) {
	obj.style.color = "black";
	obj.style.fontWeight = "normal";

}

function siOver(obj) {
	obj.style.color = "darkblue";
	obj.style.fontWeight = "bold";
}

function siOut(obj) {
	obj.style.color = "black";
	obj.style.fontWeight = "normal";

}

function libreOver(obj) {
	obj.style.color = "green";
	obj.style.fontWeight = "bold";
}

function libreOut(obj) {
	obj.style.color = "black";
	obj.style.fontWeight = "normal";
}

/*OnMouseDown functions*/
function bdDown(obj) {
	document.getElementById("description").style.color = "red";
	document.getElementById("description").innerHTML = "Bases de Datos: se centra en bases de datos, utilizando SQL, MySQL y Algebra Relacional.";
}

function bdUp(obj) {
	document.getElementById("description").innerHTML = ""
}

function edDown(obj) {
	document.getElementById("description").style.color = "purple";
	document.getElementById("description").innerHTML = "Entornos de Desarrollo: la parte teórica de Programación, aprendemos como manipular los lenguajes correctamente."
}

function edUp(obj) {
	document.getElementById("description").innerHTML = ""
}

function lmDown(obj) {
	document.getElementById("description").style.color = "blue";
	document.getElementById("description").innerHTML = "Lenguaje de Marcas: aprendemos los lenguajes de marcas como XML, HTML, CSS, etc."
}

function lmUp(obj) {
	document.getElementById("description").innerHTML = ""
}

function prgDown(obj) {
	document.getElementById("description").style.color = "orange";
	document.getElementById("description").innerHTML = "Programación: se centra en aprender los lenguajes de programación orientados a objetos, como Python y Java."
}

function prgUp(obj) {
	document.getElementById("description").innerHTML = ""
}

function siDown(obj) {
	document.getElementById("description").style.color = "darkblue";
	document.getElementById("description").innerHTML = "Sistemas Informaticos: aprendemos sobre sistemas operativos, redes, ofimatica, etc."
}

function siUp(obj) {
	document.getElementById("description").innerHTML = ""
}

function libreDown(obj) {
	document.getElementById("description").style.color = "green";
	document.getElementById("description").innerHTML = "Libre."
}

function libreUp(obj) {
	document.getElementById("description").innerHTML = ""
}