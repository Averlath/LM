//DropdownMenu Classes
function dropdown_classes() {
  document.getElementById("mydropdown_classes").classList.toggle("show_classes");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_classes')) {
    var dropdowns = document.getElementsByClassName("dropdown_content_classes");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_classes')) {
        openDropdown.classList.remove('show_classes');
      }
    }
  }
}

//DropdownMenu Expansions
function dropdown_expansions() {
  document.getElementById("mydropdown_expansions").classList.toggle("show_expansions");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_expansions')) {
    var dropdowns = document.getElementsByClassName("dropdown_content_expansions");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_expansions')) {
        openDropdown.classList.remove('show_expansions');
      }
    }
  }
}

//DropdownMenu Extras
function dropdown_extras() {
  document.getElementById("mydropdown_extras").classList.toggle("show_extras");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_extras')) {
    var dropdowns = document.getElementsByClassName("dropdown_content_extras");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_extras')) {
        openDropdown.classList.remove('show_extras');
      }
    }
  }
}

//Treasure Vault
function find_key(obj) {
  var status = true;
  localStorage.setItem("status", status);
  alert("You've found the key! Now you just have to find the door!");
}

function lose_key(obj) {
  var status = false;
  localStorage.setItem("status", status);
}

//Puerta
function door(obj) {
  var status = localStorage.getItem("status");
  if (status == "true") {
    alert("You've reached the Treasure Vault!");
    window.location.replace("../images/others/treasure.jpg");
  } else {
    alert("You'll need a key to open this door!");
  }
}

function coin(obj) {
  alert("You've found a coin from the treasure!");
}

function gvg_treasure() {
  alert("There's a Treasure Goblin here! Click on it to kill it!");
  var health = 5;
  localStorage.setItem("health", health);
}

//Treasure Goblin
function treasure_goblin(obj) {
  var health = localStorage.getItem("health");
  health = health - 1;
  localStorage.setItem("health", health);
  if (health == 0) {
    document.getElementById('treasure_goblin').remove();
    alert("You've defeated the Treasure Goblin!");
  } else {
    health = health;
  }
}

//GvG Cards
function my_function_gvg() {
  var x = document.getElementById("select_class").value;
  var y = document.getElementById("select_rarity").value;
  if (y == "Common") {
    if (x == "select_a_class") {
      document.getElementById("cards_gvg").src = ""
    } else {
    	document.getElementById("cards_gvg").src ="../images/cards/gvg_cards/"+x+"_common.png"
    }
  } else if (y == "Rare") {
      if (x == "select_a_class") {
        document.getElementById("cards_gvg").src = ""
      } else {
      	document.getElementById("cards_gvg").src ="../images/cards/gvg_cards/"+x+"_rare.png"
      }
  } else if (y == "Epic") {
      if (x == "select_a_class") {
        document.getElementById("cards_gvg").src = ""
      } else {
      	document.getElementById("cards_gvg").src ="../images/cards/gvg_cards/"+x+"_epic.png"
      }
  } else if (y == "Legendary") {
      if (x == "select_a_class") {
        document.getElementById("cards_gvg").src = ""
      } else {
      	document.getElementById("cards_gvg").src ="../images/cards/gvg_cards/"+x+"_legendary.png"
      }
  } else {
  	document.getElementById("cards_gvg").src = ""
  }
}

//Naxx Cards
function my_function_naxx() {
  var x = document.getElementById("select_class").value;
  var y = document.getElementById("select_rarity").value;
  if (y == "Common") {
    if (x == "select_a_class") {
      document.getElementById("cards_naxx").src = ""
    } else {
      document.getElementById("cards_naxx").src = "../images/cards/naxx_cards/"+x+"_common.png"
    }
  } else if (y == "Rare") {
      if (x == "Neutral") {
        document.getElementById("cards_naxx").src = "../images/cards/naxx_cards/neutral_rare.png"
      } else {
        document.getElementById("cards_naxx").src = ""
      }
  } else if (y == "Epic") {
    if (x == "Neutral") {
      document.getElementById("cards_naxx").src = "../images/cards/naxx_cards/neutral_epic.png"
    } else {
        document.getElementById("cards_naxx").src = ""
      }
  } else if (y == "Legendary") {
      if (x == "Neutral") {
        document.getElementById("cards_naxx").src = "../images/cards/naxx_cards/neutral_legendary.png"
      } else {
        document.getElementById("cards_naxx").src = ""
      }
  } else {
  	document.getElementById("cards_naxx").src = ""
  }
}

//Quiz
function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var question11 = document.quiz.question11.value; 
  var pictures = ["../images/others/win.gif", "../images/others/meh.jpeg", "../images/others/lose.gif"];
  var messages = ["Great job!", "That's just okay", "You really need to do better"];
  var correct = 0;
  var range;
  if (question1 == "9") {
    correct++;
  }
  if (question2 == "1") {
    correct++;
  } 
  if (question3 == "Tom60229") {
    correct++;
  }
  if (question4 == "20+Rec") {
    correct++;
  }
  if (question5 == "Todos") {
    correct++;
  }
  if (question6 == "Esbirros1") {
    correct++;
  }
  if (question7 == "Leeroy") {
    correct++;
  }
  if (question8 == "King") {
    correct++;
  }
  if (question9 == "Moroes") {
    correct++;
  }
  if (question10 == "Alamuerte") {
    correct++;
  }
  if (question11 == "Jade") {
    correct++;
  }
  if (correct < 1) {
    range = 2;
  }
  if (correct > 0 && correct < 6) {
    range = 1;
  }
  if (correct > 5) {
    range = 0;
  }
  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[range];
}