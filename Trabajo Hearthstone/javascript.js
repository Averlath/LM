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

function my_function() {
  var x = document.getElementById("select_class").value;
  var y = document.getElementById("select_rarity").value;
  var img = document.createElement("img");
  if (y == "Common") {
    if (x == "Mage") {
      document.getElementById("cards_gvg").src = "../images/cards/gvg_cards/mage_common.png"
    } else if (x == "Hunter") {
      document.getElementById("cards_gvg").src = "../images/cards/gvg_cards/hunter_common.png"
    } else if (x == "Paladin") {
      document.getElementById("cards_gvg").src = "../images/cards/gvg_cards/paladin_common.png"
    } else if (x == "Warrior") {
      document.getElementById("cards_gvg").src = "../images/cards/gvg_cards/warrior_common.png"
    } else if (x == "Druid") {
      document.getElementById("cards_gvg").src = "../images/cards/gvg_cards/druid_common.png"
    } else if (x == "Warlock") {
      document.getElementById("cards_gvg").src = "../images/cards/gvg_cards/warlock_common.png"
    } else if (x == "Shaman") {
      document.getElementById("cards_gvg").src = "../images/cards/gvg_cards/shaman_common.png"
    } else if (x == "Priest") {
      document.getElementById("cards_gvg").src = "../images/cards/gvg_cards/priest_common.png"
    } else if (x == "Rogue") {
      document.getElementById("cards_gvg").src = "../images/cards/gvg_cards/rogue_common.png"
    } else if (x == "Neutral") {
      document.getElementById("cards_gvg").src = "../images/cards/gvg_cards/neutral_common.png"
    }
  } else if (y == "Rare") {
      if (x == "Mage") {
        alert("works1");
      } else if (x == "Hunter") {
        alert("works2");
      } else if (x == "Paladin") {
        alert("works3");
      } else if (x == "Warrior") {
        alert("works3");
      } else if (x == "Druid") {
        alert("works3");
      } else if (x == "Warlock") {
        alert("works3");
      } else if (x == "Shaman") {
        alert("works3");
      } else if (x == "Priest") {
        alert("works3");
      } else if (x == "Rogue") {
        alert("works3");
      } else if (x == "Neutral") {
        alert("works3");
    }
  }  else if (y == "Epic") {
      if (x == "Mage") {
        alert("works1");
      } else if (x == "Hunter") {
        alert("works2");
      } else if (x == "Paladin") {
        alert("works3");
      } else if (x == "Warrior") {
        alert("works3");
      } else if (x == "Druid") {
        alert("works3");
      } else if (x == "Warlock") {
        alert("works3");
      } else if (x == "Shaman") {
        alert("works3");
      } else if (x == "Priest") {
        alert("works3");
      } else if (x == "Rogue") {
        alert("works3");
      } else if (x == "Neutral") {
        alert("works3");
    }
  }  else if (y == "Legendary") {
      if (x == "Mage") {
        alert("works1");
      } else if (x == "Hunter") {
        alert("works2");
      } else if (x == "Paladin") {
        alert("works3");
      } else if (x == "Warrior") {
        alert("works3");
      } else if (x == "Druid") {
        alert("works3");
      } else if (x == "Warlock") {
        alert("works3");
      } else if (x == "Shaman") {
        alert("works3");
      } else if (x == "Priest") {
        alert("works3");
      } else if (x == "Rogue") {
        alert("works3");
      } else if (x == "Neutral") {
        alert("works3");
    }
  }
}