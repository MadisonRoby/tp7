// JS for TP6

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // prepares code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) {
      document.getElementById(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);

    }

  } // end ajax.onreadystatechange

  // now that everything is set, initiate request
  ajax.send();

}
  //object constructor

function Recipe(recipeName, contributorName, ingredientFileName, equipmentFileName, directionsFileName) {
  this.name = recipeName;
  this.contributor = contributorName
  this.ingFile = ingredientFileName;
  this.equipFile = equipmentFileName;
  this.dirFile = directionsFileName;
  
  this.displayRecipe = function() {
  document.querySelector("#title").innerHTML = this.name;
  document.querySelector("#contributor").innerHTML = "Contributed by: " + this.contributor;
  loadFileInto(this.ingFile, "ingredients");
  loadFileInto(this.equipFile, "equipment");
  loadFileInto(this.dirFile, "directions");
  
  }
}

Lasagna = new Recipe("Lasagna", 
                     "Madison",
                     "ingredients.html",
                     "equipment.html",
                     "directions.html"
                    );

Chicken = new Recipe ( "Chicken",
                       "Sophie",
                       "chickeningredients.html",
                       "chickenequipment.html",
                       "chickendirections.html"
                     );

Pretzel = new Recipe ( "Pretzel",
                       "Kristine",
                       "pretzelingredients.html",
                       "pretzelequipment.html",
                       "pretzeldirections.html"
                     );


  //changes font size
  document.querySelector("#title").style.fontSize = "100px";


//title color change via click  
document.querySelector("#title");
title.onclick = function() {
  title.classList.toggle("clicked");
}

// new HTML elements
x = document.getElementById("enjoy");
x.innerHTML = "And that's how you make this recipe! Enjoy!";
x.style.fontSize = '30px';
x.style.fontFamily = 'Sigmar One';
x.style.textAlign = 'center';
x.style.color = 'saddlebrown';

