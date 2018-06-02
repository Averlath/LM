//Variables Globales.
var JSON1;
var JSON2;

//otras variables
var newsAddedJson1=0;
var newsTotalJson1=0;
var newsAddedJson2=0;
var newsTotalJson2=0;

//Funcion AJAX para leer los JSON.
window.onload = function() {
	$.ajax ({
		url: 'https://raw.githubusercontent.com/Averlath/LM/master/Project%20News/data/1.json',
		dataType: 'json',
		type: 'get',
		success: function(data) {
			$(data.news).each(function(index, value) {
				newsTotalJson1++;
				JSON1 = data["news"];
			});
		},
		error: function() {
			console.log("Error reading JSON1");
		}
	});

	$.ajax ({
		url: "https://raw.githubusercontent.com/Averlath/LM/master/Project%20News/data/2.json",
		dataType: 'json',
		type: 'get',
		success: function(data2) {
			$(data2.news).each(function(index2, value2) {
				newsTotalJson2++;
				JSON2 = data2["news"];
			});
		}
		//Error en cargar - Uncaught SyntaxError: Unexpected identifier
		/*error: function() {
			console.log("Error reading JSON2");
		}*/
	});
}

//Funcion para que cuando bajamos hasta la parte más baja de la página, cargue el JSON
window.onscroll = function() {
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		if (newsTotalJson1 > newsAddedJson1) {
			createElementsJson1();
		} else {
			if (newsTotalJson2 > newsAddedJson2) {
				createElementsJson2();
			}
		}
	}
};

//Create div for JSON1
function createElementsJson1() {
	var form = document.getElementById("json");

    var div = document.createElement("div");
    div.setAttribute("id", "div-json1");
    div.setAttribute("class", "container json bg-primary");
    form.appendChild(div)

    show(JSON1);
}

//Create div for JSON2
function createElementsJson2() {
	var form = document.getElementById("json");

    var div = document.createElement("div");
    div.setAttribute("id", "div-json2");
    div.setAttribute("class", "container json bg-success");
    form.appendChild(div)

    show(JSON2);
}

//Funcion Show, es la que da formato al JSON en HTML.
function show(data) {
	$(data).each(function(i, json) {
		if (data==JSON1) {
			$("#div-json1").append("<div id='" + ("div" + 1+i + "'>"));
			$("#div" + 1+i).append("<h1 class='text-danger' id='" + 1+i + "'>" + json.Title + "</h1>");
			$("#div" + 2+i).append("<p class='text-danger'>" + json.News + "</p>");
			newsAddedJson1++;
		} else {
			$("#div-json2").append("<div id='" + ("div" + 2+i) + "'>");
			$("#div" + 2+i).append("<h1 id='" + 2+i + "'>" + json.Title + "</h1>");
			$("#div" + 2+i).append("<p class='text-danger'>" + json.News + "</p>");
			newsAddedJson2++;
		}
	}); 
}
