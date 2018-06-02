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
	var section = document.getElementById("json_news1");

    var div = document.createElement("div");
    div.setAttribute("id", "div-json1");
    div.setAttribute("class", "container");
    section.appendChild(div)

    var div2 = document.createElement("div");
    div2.setAttribute("id", "div2-json1");
    div2.setAttribute("class", "row");
    div.appendChild(div2);

    var div3 = document.createElement("div");
    div3.setAttribute("id", "div3-json1");
    div3.setAttribute("class", "col-8");
    div2.appendChild(div3);

    show(JSON1);
}

//Create div for JSON2
function createElementsJson2() {
	var section = document.getElementById("json_news2");

    var div = document.createElement("div");
    div.setAttribute("id", "div-json2");
    div.setAttribute("class", "container");
    section.appendChild(div);

    var div2 = document.createElement("div");
    div2.setAttribute("id", "div2-json2");
    div2.setAttribute("class", "row");
    div.appendChild(div2);

    var div3 = document.createElement("div");
    div3.setAttribute("id", "div3-json2");
    div3.setAttribute("class", "col-8");
    div2.appendChild(div3);

    show(JSON2);
    noMoreNews();
}

function noMoreNews() {
	var section = document.getElementById("json_news2");

	var noNews = document.createElement("div");
	noNews.setAttribute('id', 'no-more');
	noNews.setAttribute('class', 'bg-success');
	section.appendChild(noNews);

	var noMore = document.createElement("p");
	noMore.innerHTML = "There are no more news at this time.";
	noNews.appendChild(noMore);
}

//Funcion Show, es la que da formato al JSON en HTML.
function show(data) {
	$(data).each(function(i, json) {
		if (data==JSON1) {
			$("#div3-json1").append("<div class='bg-secondary' style='width: 720px; padding: 15px; margin-top: 20px;' id='" + ("div" + 1+i + "'>"));
			$("#div" + 1+i).append("<h1 class='text-info' style='font-size: 32px; text-align: justify' id='" + 1+i + "'>" + json.Title + "</h1>");
			$("#div" + 1+i).append("<p>" + json.Date + "</p>");
			$("#div" + 1+i).append("<p class='text-dark' style='text-align: justify;'><img src=" + json.ImageBig + " align='left' style='width: 300px; height: 200px; padding: 10px;' alt='json image' />" + json.News + "</p>");
			newsAddedJson1++;
		} else {
			$("#div3-json2").append("<div class='bg-gradient-secondary' style='width: 720px; padding: 15px; margin-top: 20px;' id='" + ("div" + 2+i + "'>"));
			$("#div" + 2+i).append("<h1 class='text-info' style='font-size: 32px; text-align: justify' id='" + 2+i + "'>" + json.Title + "</h1>");
			$("#div" + 2+i).append("<p>" + json.Date + "</p>");
			$("#div" + 2+i).append("<p class='text-dark' style='text-align: justify;'><img src=" + json.ImageBig + " align='left' style='width: 300px; height: 200px; padding: 10px;' alt='json image' />" + json.News + "</p>");
			newsAddedJson2++;
		}
	});
}