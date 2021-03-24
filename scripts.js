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

function Recipe(recipeName, contributorName, imageURL, ingredientFileName, equipmentFileName, directionsFileName) {
  this.name = recipeName;
  this.contributor = contributorName;
  this.imgsrc = imageURL;
  this.ingFile = ingredientFileName;
  this.equipFile = equipmentFileName;
  this.dirFile = directionsFileName;
  
  
  this.displayRecipe = function() {
  document.querySelector("#title").innerHTML = this.name;
  document.querySelector("#contributor").innerHTML = "Contributed by: " + this.contributor;
  document.querySelector("#header").style.backgroundImage = "url(" + this.imgsrc + ")";
  loadFileInto(this.ingFile, "ingredients");
  loadFileInto(this.equipFile, "equipment");
  loadFileInto(this.dirFile, "directions");
  
  
  }
}

Lasagna = new Recipe("World's Best Lasagna", 
                     "Madison",
                     "https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_1280.jpg",
                     "ingredients.html",
                     "equipment.html",
                     "directions.html",
                     
                    );

Chicken = new Recipe ( "Lemon Chicken Piccata",
                       "Sophie",
                       "https://sdutton355.com/tp4/chicken.jpg",
                       "chickeningredients.html",
                       "chickenequipment.html",
                       "chickendirections.html"
                     );

Pretzel = new Recipe ( "Soft Pretzels",
                       "Kristine",
                       "https://kzorn355.com/tp4/images/pretzel.jpg",
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

