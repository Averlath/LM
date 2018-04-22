var correct=0;
var unanswered=0;
var level=null;

window.onload=function() {
	XML();
	document.getElementById("mark").style.display = "none";
	document.getElementById("sure").style.display = "none";
	document.getElementById("form").style.display = "none";
	document.getElementById("clock").style.display = "none";
	document.getElementById("visualize").style.display = "none";
}

function XML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML;
            totalQuestions = xmlDoc.getElementsByTagName('Question').length;
            Questions();
        }
    };
    xhttp.open("GET", "./XML/xml.xml", true);
    xhttp.send();
}

function submitinfo(obj) {
	if (document.getElementById("textname").value == "") {
		alert("Please write your name.");
	} else if (document.getElementById("textlast").value == "") {
		alert("Please write your last name.");
	} else if (document.getElementById("address").value == "") {
		alert("Please write you E-mail Address.");
	} else {
		document.getElementById("identification").style.display = "none";
		document.getElementById("form").style.display = "block";
		document.getElementById("clock").style.display = "block";
		startTimer();
	}
}

function clearinfo(obj) {
	document.getElementById("textname").value = "";
	document.getElementById("textlast").value = "";
	document.getElementById("address").value = "";
}

function startTimer() {
	var minute = 14;
	var second = 59;

	setInterval(function() {
		if (second < 10) {
			document.getElementById("timer").innerHTML = "00:" + minute + ":0" + second;
		} else {
			document.getElementById("timer").innerHTML = "00:" + minute + ":" + second;
		}
		if (second == 00) {
		  	minute--;
			second = 59;
		}
		if (minute == 0 && second == 1) {
			EndExam();
		}
		second--;
	}, 1000);
}

function EndExam() {
	document.getElementById("visualize").style.display = "block";
	document.getElementById("clock").style.display = "none";
	alert("Time is up.");
}

function submit(obj) {
	EndTest();
}

function EndTest() {
	document.getElementById("button").style.display = "none";
	document.getElementById("sure").style.display = "block";
}

function submityes(obj) {
	document.getElementById("visualize").style.display = "block";
	document.getElementById("clock").style.display = "none";
	checkCall();
}

function submitno (obj) {
	document.getElementById("button").style.display = "block";
	document.getElementById("sure").style.display = "none";
}

function visualize(obj) {
	document.getElementById("visualize").style.display = "none";
	document.getElementById("mark").style.display = "block";
	totalPoints();
}

function Questions() {
	for (var i=0; i<totalQuestions; i++) {
		var type = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Type")[0].innerHTML;
		switch (type) {
			case "Textfield":
				showTextfield(i);
				break;
			case "Radio":
				showRadio(i);
				break;
			case "DropDown":
				showDropDown(i);
				break;
			case "Checkbox":
				showCheckbox(i);
				break;
			case "Cascade":
				showCascade(i);
				break;
			default:
                console.log("default");
		}
	}
}

function showTextfield(i) {
	var answers = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Answer").length;
    var form = document.getElementById("form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    form.appendChild(div);

	var title = document.createElement('label');
    title.setAttribute('for', i);
    title.innerHTML = "<br />" + xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('Title')[0].innerHTML + "<br /><br />";
	div.appendChild(title);

	for (var j=0; j<answers; j++) {
		var question = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Answer")[j].innerHTML;

		var textfield = document.createElement("input");
		textfield.setAttribute("type", "text");
        textfield.setAttribute("name", i);
        textfield.setAttribute('id', i + "text");
        div.appendChild(textfield);

        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = "<br>";
        div.appendChild(label);
	}

	var line = document.createElement('label');
    line.innerHTML = "<hr>";
	div.appendChild(line)
}

function showRadio(i) {
	var answers = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option").length;
    var form = document.getElementById("form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    form.appendChild(div);

	var title = document.createElement('label');
    title.setAttribute('for', i);
    title.innerHTML = "<br />" + xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('Title')[0].innerHTML + "<br /><br />";
	div.appendChild(title);

	for (var j=0; j<answers; j++) {
		var question = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option")[j].innerHTML;

		var rb = document.createElement("input");
		rb.setAttribute("type", "radio");
        rb.setAttribute("name", i);
        rb.setAttribute("value", j);
        rb.setAttribute('id', "radio");
        div.appendChild(rb);

        var label = document.createElement('label');
        label.setAttribute('for', "radio");
        label.innerHTML = question + "<br>";
        div.appendChild(label);
	}

	var line = document.createElement('label');
    line.innerHTML = "<hr>";
	div.appendChild(line);
}

function showDropDown(i) {
	var answers = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option").length;
    var form = document.getElementById("form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    form.appendChild(div);

	var title = document.createElement('label');
    title.setAttribute('for', i);
    title.innerHTML = "<br />" + xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('Title')[0].innerHTML + "<br /><br />";
	div.appendChild(title);

	var select = document.createElement("select");
	select.setAttribute("id", i + "select");
    select.setAttribute("name", i);
    div.appendChild(select);

	for (var j=0; j<answers; j++) {
		var question = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option")[j].innerHTML;

		var ms = document.createElement("option");
        ms.setAttribute("name", i);
        ms.setAttribute("value", j);
        ms.setAttribute('id', j + "check");
        ms.innerHTML = question;
        select.appendChild(ms);

        var label = document.createElement('label');
        label.setAttribute('for', i);
	}

	label.innerHTML = "<br>";
    div.appendChild(label);

	var line = document.createElement('label');
    line.innerHTML = "<hr>";
	div.appendChild(line);
}

function showCheckbox(i) {
	var answers = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option").length;
    var form = document.getElementById("form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    form.appendChild(div);

	var title = document.createElement('label');
    title.setAttribute('for', i);
    title.innerHTML = "<br />" + xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('Title')[0].innerHTML + "<br /><br />";
	div.appendChild(title);

	for (var j=0; j<answers; j++) {
		var question = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option")[j].innerHTML;

		var rb = document.createElement("input");
		rb.setAttribute("type", "checkbox");
        rb.setAttribute("name", i);
        rb.setAttribute("value", j);
        rb.setAttribute('id', "checkbox");
        div.appendChild(rb);

        var label = document.createElement('label');
        label.setAttribute('for', "checkbox");
        label.innerHTML = question + "<br>";
        div.appendChild(label);
	}

	var line = document.createElement('label');
    line.innerHTML = "<hr>";
	div.appendChild(line);
}

function showCascade(i) {
	var answers = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option").length;
    var form = document.getElementById("form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    form.appendChild(div);

	var title = document.createElement('label');
    title.setAttribute('for', i);
    title.innerHTML = "<br />" + xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('Title')[0].innerHTML + "<br /><br />";
	div.appendChild(title);

	var dropdown = document.createElement("select");
	dropdown.setAttribute("id", i + "select");
    dropdown.setAttribute("name", i);
    dropdown.setAttribute("multiple", "");
    div.appendChild(dropdown);

	for (var j=0; j<answers; j++) {
		var question = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option")[j].innerHTML;

		var cascade = document.createElement("option");
        cascade.setAttribute("name", i);
        cascade.setAttribute("value", j);
        cascade.setAttribute('id', j + "check");
        cascade.innerHTML = question;
        dropdown.appendChild(cascade);

        var label = document.createElement('label');
        label.setAttribute('for', i);
	}

	label.innerHTML = "<br>";
    div.appendChild(label);

	var line = document.createElement('label');
    line.innerHTML = "<hr>";
	div.appendChild(line);
}

function checkCall() {
	for (var i=0; i<totalQuestions; i++) {
		var type = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Type")[0].innerHTML;
		switch (type) {
			case "Textfield":
				checkTextfield(i);
				break;
			case "Radio":
				checkRadio(i);
				break;
			case "DropDown":
				checkDropDown(i);
				break;
			case "Checkbox":
				checkCheckbox(i);
				break;
			case "Cascade":
				checkCascade(i);
				break;
		}
	}
}

function checkTextfield(i) {
	var userAnswer = document.getElementById(i + "text").value;
	var answer = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Answer")[0].innerHTML;

	if (answer == userAnswer) {
		correct++;
	}
	if (userAnswer == "") {
		unanswered++;
	}
}

function checkRadio(i) {
	var rb = document.getElementsByName(i);
	for (var j=0; j<rb.length; j++) {
		if (rb[j].checked) {
			var answer = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option")[rb[j].getAttribute("value")].getAttribute("correct");
			if (answer) {
				correct++;
			}
		}
	}
}

function checkDropDown(i) {
	var choice = document.getElementsByName(i);
	for (var j=0; j<choice.length; j++) {
		if (choice[j].selected) {
			var answer = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option")[document.getElementById(i + "select").value].getAttribute("correct");

			if (answer) {
				correct++;
			}
		}
	}
}

function checkCheckbox(i) {
	var checked = document.getElementsByName(i);
	var totalCorrect = 0;
    var totalSelected = 0;
    var selectedCorrect = 0;
    for (var j=0; j<checked.length; j++) {
		if (xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option")[checked[j].getAttribute("value")].getAttribute("correct")) {
			totalCorrect++;
		}

		if (checked[j].checked) {
			var answer = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option")[checked[j].getAttribute("value")].getAttribute("correct");
			if (answer) {
				totalSelected++;
				selectedCorrect++;
			} else {
				totalSelected++;
			}
		}
	}

	if (selectedCorrect === totalCorrect && totalCorrect === totalSelected) {
		correct++;
	}
}

function checkCascade(i) {
	var cascade = document.getElementsByName(i);
	for (var j=0; j<cascade.length; j++) {
		if (cascade[j].selected) {
			var answer = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Option")[document.getElementById(i + "select").value].getAttribute("correct");

			if (answer) {
				correct++;
			}
		}
	}
}

function totalPoints() {
	document.getElementById("correct").innerHTML = correct;
	document.getElementById("incorrect").innerHTML = totalQuestions - correct;
	if (correct <= 3) {
		document.getElementById("level").innerHTML = "A1";
	} else if (correct <= 7) {
		document.getElementById("level").innerHTML = "A2";
	} else if (correct <= 11) {
		document.getElementById("level").innerHTML = "B1";
	} else if (correct <= 15) {
		document.getElementById("level").innerHTML = "B2";
	} else if (correct <= 19) {
		document.getElementById("level").innerHTML = "C1";
	} else {
		document.getElementById("level").innerHTML = "C2";
	}
}
