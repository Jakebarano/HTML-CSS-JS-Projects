
let categories = {
  'General': []
}

let chosenCat = document.getElementById("myCategories")

window.onload = function() {
   setupClickListeners()  
  // closePreLoadedItems()  //nothing preloaded
}

function addCategory(){
  let newCategory = document.getElementById("newCat").value;
  categories[newCategory] = [];
  console.log(categories);
  let cat = document.createElement("ul");
  let temp = document.createElement("li");
  cat.className = "flex col center";
  cat.id = newCategory; //adds id so it can be searched by id and have tasks added to it

  let categoryTitle = document.createElement("h3"); //Adds title to top of Ul element
  categoryTitle.innerText = newCategory;
  cat.appendChild(categoryTitle);

  let element = document.getElementById("myCategories"); // 1) make an overarching categories ul with id= "myCatagories" 2) add to it by id to add new uls for each imput created.

  element.appendChild(cat); //adds new ul Categories list
  
  chosenCat = cat.id;

  cat.onclick = function(ev) {   //event
    if(ev.target.tagName != 'UL')
    {
      chosenCat = ev.target.parentNode.id;
      console.log(chosenCat);
    }
    else
    {
      chosenCat = ev.target.id;
      console.log(chosenCat);
    }
  }


  let span = document.createElement("SPAN");
  let closeIcon = document.createTextNode("\u00D7");
  span.className = "titleClose";
  console.log(closeIcon)
  span.onclick = function(c) {
    c.target.parentNode.parentNode.remove();
    console.log(c)
    console.log('removed')
  }
  span.appendChild(closeIcon);
  categoryTitle.appendChild(span);

}



function newTask() {
  if(chosenCat == null)
  { 
    alert("no category chosen")
  }
  else {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue == '') 
    {
      alert("You must write something!");
    } 
    else 
    {
      document.getElementById(chosenCat).appendChild(li);
    }
    
    document.getElementById("myInput").value = "";
  
    let span = document.createElement("SPAN");
    let closeIcon = document.createTextNode("\u00D7");
    span.className = "close";
    console.log(closeIcon)
    span.onclick = function(ev) {
      ev.target.parentNode.remove()
      console.log(ev)
      console.log('removed')
    }
    span.appendChild(closeIcon);
    li.appendChild(span);
  }
}

// Add click listeners to list items
function setupClickListeners(){
  let list = document.querySelector('ul');
  console.log(list);
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}

function closePreLoadedItems()
{
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    } 
  }
}

function updateCat()
{
  let selectedCat = document.getElementById("curCategory");
  selectedCat.innerText = chosenCat;
}
