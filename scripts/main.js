const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/river2.jpg") {
    myImage.setAttribute("src", "images/river.jpd");
  } else {
    myImage.setAttribute("src", "images/river2.jpg");
  }
  let myButton = document.querySelector("button");
  let myHeading = document.querySelector("h1");
  function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `The start, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `The start, ${storedName}`;
  }
  myButton.addEventListener("click", () => {
    setUserName();
  });
});
