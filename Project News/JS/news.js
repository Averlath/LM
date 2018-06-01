var JSON1;
var JSON2;

$.ajax ({
	url: 'https://raw.githubusercontent.com/Averlath/LM/master/Project%20News/data/1.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data) {
		$(data.news).each(function(index, value) {
			console.log('Title:' + ' ' + value.Title);
			console.log('ID: ' + value.ID);
		});
	}
});

$(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
    visualize(JSON1);
    visualize(NOTICIA2);
  }
});