var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        var element = document.getElementsByClassName("collapsible-content")[0];
        if (element.style.display == "block"){
            element.style.display = "";
        } else{
            element.style.display = "block";
        }
    });
} 