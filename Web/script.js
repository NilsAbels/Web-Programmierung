console.log("test");

document.addEventListener("DOMContentLoaded", ()=> {
    console.log("DOM geladen")

})

function addErfahrungNils(){
   var text = document.getElementById("expNils").value;
   if(text){
   var list = document.getElementById("expListNils");
   var entry = document.createElement('li');
   entry.appendChild(document.createTextNode(text));
   list.appendChild(entry);
   }
}

function addHobbyNils(){
    var text = document.getElementById("hobbyNils").value;
    if(text){
    var list = document.getElementById("hobbyListNils");
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(text));
    list.appendChild(entry);
    }
 }

 function addErfahrungPaul(){
    var text = document.getElementById("expPaul").value;
    if(text){
    var list = document.getElementById("expListPaul");
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(text));
    list.appendChild(entry);
    }
 }
 
 function addHobbyPaul(){
     var text = document.getElementById("hobbyPaul").value;
     if(text){
     var list = document.getElementById("hobbyListPaul");
     var entry = document.createElement('li');
     entry.appendChild(document.createTextNode(text));
     list.appendChild(entry);
     }
  }