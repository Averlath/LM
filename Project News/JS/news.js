totalNews=0;

$.getJSON("data/1.json", function(data) {
  $.each(data, function(i, j) {
  	totalNews++;
  });
});

function News() {
}