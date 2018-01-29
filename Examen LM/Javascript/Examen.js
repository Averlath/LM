function show() {
	var x = document.getElementsByTagName("P").length;
	var para = document.createElement("p");
	var node = document.createTextNode("En esta página habían " + x + " párrafos y ahora hay " + (x+1) + " párrafos.");
	para.appendChild(node);
	var element = document.getElementById("div1");
	var child = document.getElementById("demo");
	element.insertBefore(para, child);
}