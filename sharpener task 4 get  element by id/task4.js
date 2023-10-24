//changing third element color to green

var items=document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor='green'

//changing font colour of all the elements to bold

for (let i=0; i<items.length; i++){
    items[i].style.fontWeight='bold'
}


