//Global variables
var JSON1;
var JSON2;

//Other variables
var newsAddedJson1=0;
var newsTotalJson1=0;
var newsAddedJson2=0;
var newsTotalJson2=0;

window.onload = function() {
	//Hidden text
	document.getElementById("long").style.display = "none";
	document.getElementById("long2").style.display = "none";
	document.getElementById("long3").style.display = "none";
	document.getElementById("show_less").style.display = "none";
	document.getElementById("show_less2").style.display = "none";
	document.getElementById("show_less3").style.display = "none";
	document.getElementById("date").innerHTML = new Date().toLocaleString();
	//document.getElementById("time").innerHTML = dateObj.getTime();

	//Ajax function to read JSON1.
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

	//Ajax function to read JSON2.
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
		//Error when loading page - Uncaught SyntaxError: Unexpected identifier
		/*error: function() {
			console.log("Error reading JSON2");
		}*/
	});
}

//Function that loads next JSON whenever scrolling to Bottom of page
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
    div3.setAttribute("class", "col-12");
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
    div3.setAttribute("class", "col-12");
    div2.appendChild(div3);

    show(JSON2);
    noMoreNews();
}

//Div that displays a paragraph, saying No More news at this time
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

//Funtion Show, writing and formatting JSON.
function show(data) {
	$(data).each(function(i, json) {
		if (data==JSON1) {
			$("#div3-json1").append("<div style='width: 720px; padding: 15px; margin: 20px 0px 10px 0px; border: 1px solid;' id='" + ("div" + 1+i + "'>"));
			$("#div" + 1+i).append("<h1 class='text-info' style='font-size: 22px; text-align: center; padding: 5px; id='" + 1+i + "'>" + json.Title + "</h1>");
			$("#div" + 1+i).append("<p style='margin-left: 2%'>" + json.Date + "</p>");
			$("#div" + 1+i).append("<p class='text-dark' style='text-align: justify;'><img src=" + json.ImageMid + " align='left' style='width: 300px; height: 200px; padding: 10px;' alt='json image' />" + json.News + "</p>");
			newsAddedJson1++;
		} else {
			$("#div3-json2").append("<div style='width: 720px; padding: 15px; margin: 20px 0px 10px 0px; border: 1px solid;' id='" + ("div" + 2+i + "'>"));
			$("#div" + 2+i).append("<h1 class='text-info' style='font-size: 22px; text-align: center; padding: 5px; id='" + 2+i + "'>" + json.Title + "</h1>");
			$("#div" + 2+i).append("<p style='margin-left: 2%'>" + json.Date + "</p>");
			$("#div" + 2+i).append("<p class='text-dark' style='text-align: justify;'><img src=" + json.ImageMid + " align='left' style='width: 300px; height: 200px; padding: 10px;' alt='json image' />" + json.News + "</p>");
			newsAddedJson2++;
		}
	});
}

//On click, show the remaining text of news 1, 2 and 3
function show_news(obj) {
	document.getElementById("long").style.display = "block";
	document.getElementById("read_more").style.display = "none";
	document.getElementById("show_less").style.display = "block";
}

function show_less(obj) {
	document.getElementById("long").style.display = "none";
	document.getElementById("read_more").style.display = "block";
	document.getElementById("show_less").style.display = "none";
}

function show_news2(obj) {
	document.getElementById("long2").style.display = "block";
	document.getElementById("read_more2").style.display = "none";
	document.getElementById("show_less2").style.display = "block";
}

function show_less2(obj) {
	document.getElementById("long2").style.display = "none";
	document.getElementById("read_more2").style.display = "block";
	document.getElementById("show_less2").style.display = "none";
}

function show_news3(obj) {
	document.getElementById("long3").style.display = "block";
	document.getElementById("read_more3").style.display = "none";
	document.getElementById("show_less3").style.display = "block";
}

function show_less3(obj) {
	document.getElementById("long3").style.display = "none";
	document.getElementById("read_more3").style.display = "block";
	document.getElementById("show_less3").style.display = "none";
}