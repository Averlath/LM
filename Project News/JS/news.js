var JSON1;
var JSON2;

//Funcion para que cuando bajamos hasta la parte más baja de la página, cargue el JSON
/*window.onscroll = function() {
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		alert('hi');
		show(JSON1);
	}
};*/

//Funcion AJAX para leer el JSON.
$.ajax ({
	url: 'https://raw.githubusercontent.com/Averlath/LM/master/Project%20News/data/1.json',
	dataType: 'json',
	type: 'get',
	success: function(data) {
		$(data.news).each(function(index, value) {
			JSON1 = data;
			console.log('Title:' + ' ' + value.Title);
			console.log('ID: ' + value.ID);
		});
	}
});

$(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
    show(JSON1);
  }
});

function show(data) {
  $.each( data, function(i, news) {
    $("#see").append( "<h1 id='" + i + "'>" + news.Title+ "</h1>" + "<p>" + news.Date + "</p>" + "<img>" + news.ImageBig + "</img>" );
  }); 
}

/*function show(jsonObject) {
	$.each(jsonObject, function(i, news) {
		var news = document.getElementById('news');
		var div = document.createElement('div');
		div.setAttribute('class');
		news.appendChild(div)
	});
}

function show() {
	var div = document.createElement('div');
	div.setAttribute()
}*/