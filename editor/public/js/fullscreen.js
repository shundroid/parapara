var toolbox;
var filmstrip;
var burgerbutton;
document.addEventListener("DOMContentLoaded", function() {
  toolbox = document.getElementsByClassName("tool-box")[0];
  filmstrip = document.getElementsByClassName("film-strip")[0];
  burgerbutton = document.getElementById("burgerbutton");
  burgerbutton.addEventListener("click", function() {
    if (toolbox.style.display === "none" || toolbox.style.display === "") {
      showTool();
    } else {
      hideTool();
    }
  });
  burgerbutton.addEventListener("mousemove", function(e) {
    if (e.buttons === 1) {
      //$('#burgerbutton').css("left", e.clientX - 25).css("top", e.clientY - 25);
      burgerbutton.style.left = (e.clientX - 25) + "px";
      burgerbutton.style.top = (e.clientY - 25) + "px";
    }
  });
});

function hideTool() {
  //$('div.tool-box').css("display", "none");
  toolbox.style.display = "none";
  //$('div.film-strip').css("display", "none");
  filmstrip.style.display = "none";
}

function showTool() {
  toolbox.style.display = "block";
  filmstrip.style.display = "block";
}
