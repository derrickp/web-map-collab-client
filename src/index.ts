(() => {
  const element = document.getElementById("collab-app");
  if (element) {
    element.innerText = "Hello World!";
  } else {
    console.error("No element found");
  }
})();