window.onload=function() {
	readXML();
	document.getElementById("mark").style.display = "none";
	document.getElementById("sure").style.display = "none";
	document.getElementById("questions").style.display = "none";
	document.getElementById("clock").style.display = "none";
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
		document.getElementById("questions").style.display = "block";
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
	var minute = 24;
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
		if (minute == 0 && second == 0) {
			//Correction.
			EndExam();
		}
		second--;
	}, 1000);
}

function EndExam() {
	document.getElementById("mark").style.display = "block";
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
	document.getElementById("mark").style.display = "block";
	document.getElementById("clock").style.display = "none";
}

function submitno (obj) {
	document.getElementById("button").style.display = "block";
	document.getElementById("sure").style.display = "none";
}

/*function readXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
            question = xmlDoc.getElementsByTagName("Question");
        }
    };
    xhttp.open("GET", "./xml/xml.xml", true);
    xhttp.send();
}*/