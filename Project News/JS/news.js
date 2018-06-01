var JSON1;
var JSON2;

//Funcion para que cuando bajamos hasta la parte más baja de la página, cargue el JSON
window.onscroll = function() {
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		show(JSON1);
	}
};

//Funcion AJAX para leer el JSON.
window.onload = function() {
	$.ajax ({
		url: 'https://raw.githubusercontent.com/Averlath/LM/master/Project%20News/data/1.json',
		dataType: 'json',
		type: 'get',
		success: function(data) {
			$(data.news).each(function(index, value) {
				JSON1 = data["news"];
				console.log('Title:' + ' ' + value.Title);
				console.log('ID: ' + value.ID);
			});
		},
		error: function() {
			console.log("Error reading JSON");
		}
	});
}

function show(data) {
	$(data).each(function(i, news) {
		$("#see").append("<h1 id='" + i + "'>" + news.Title + "</h1>");
	}); 
}