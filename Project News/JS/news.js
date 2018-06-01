$.ajax ({
	url: 'https://raw.githubusercontent.com/Averlath/LM/master/Project%20News/data/1.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data) {
		$(data.news).each(function(index, value) {
			console.log(value.Title);
		});
	}
});

function News() {
}