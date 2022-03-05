const idName = ["theme1", "theme2", "theme3"];

//Theme 1
document.getElementById("btntheme1").addEventListener(
  "click",
  function () {
    document.querySelector("#theme").classList.remove(...idName);
    document.querySelector("#theme").classList.add("theme1");
  },
  false
);

//Theme 2
document.getElementById("btntheme2").addEventListener(
  "click",
  function () {
    document.querySelector("#theme").classList.remove(...idName);
    document.querySelector("#theme").classList.add("theme2");
  },
  false
);

//Theme 3
document.getElementById("btntheme3").addEventListener(
  "click",
  function () {
    document.querySelector("#theme").classList.remove(...idName);
    document.querySelector("#theme").classList.add("theme3");
  },
  false
);