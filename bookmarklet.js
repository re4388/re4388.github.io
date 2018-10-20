(function () {
  console.log("It started");
  let para = document.getElementsByTagName("p");

  for (let i = 0; i < para.length; i++) {
    const element = para[i];
    element.style.color = 'red'
  }
})();
