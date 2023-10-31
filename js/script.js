// Add your JavaScript code here
// Load bio content from bio.txt
const bioContent = document.getElementById("bio-content");

fetch("bio.txt")
  .then((response) => response.text())
  .then((data) => {
    bioContent.innerHTML = data;
  });
