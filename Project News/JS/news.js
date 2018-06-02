//Variables Globales.
var JSON1;
var JSON2;

//otras variables
var newsAdded=0;
var newsTotal=0;

//Funcion AJAX para leer el JSON.
window.onload = function() {
	$.ajax ({
		url: 'https://raw.githubusercontent.com/Averlath/LM/master/Project%20News/data/1.json',
		dataType: 'json',
		type: 'get',
		success: function(data) {
			$(data.news).each(function(index, value) {
				newsTotal++;
				JSON1 = data["news"];
			});
		},
		error: function() {
			console.log("Error reading JSON1");
		}
	});
}

//Funcion para que cuando bajamos hasta la parte más baja de la página, cargue el JSON
window.onscroll = function() {
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		console.log("Added: " + newsAdded + ", Total: " + newsTotal);
		if (newsTotal > newsAdded) {
			createElements();
		} else {
			console.log('All news added');
		}
	}
};

//Create div
function createElements() {
	var form = document.getElementById("json");

    var div = document.createElement("div");
    div.setAttribute("id", "div-json1");
    div.setAttribute("class", "container json");
    form.appendChild(div)

    show(JSON1);
}

//Funcion Show, es la que da formato al JSON en HTML.
function show(data) {
	$(data).each(function(i, json) {
		newsAdded++;
		$("#div-json1").append("<h1 id='" + i + "'>" + json.Title + "</h1>");
	}); 
}
