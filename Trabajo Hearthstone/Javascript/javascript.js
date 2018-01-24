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

function find_key(obj) {
  var status = true;
  localStorage.setItem("status", status);
  alert("You've found the key! Now you just have to find the door!");
}

function lose_key(obj) {
  var status = false;
  localStorage.setItem("status", status);
}

function door(obj) {
  var status = localStorage.getItem("status");
  if (status == "true") {
    alert("You've reached the Treasure Vault!");
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