document.querySelector("#recordButton").onclick = function() {
  document.querySelector("section.index").classList.remove("visible");
  // document.querySelector("section.listening").classList.add("visible");
  document.querySelector("section.result").classList.add("visible");
};
