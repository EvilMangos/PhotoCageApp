window.onload = function () {
  (function () {
    let menu = document.body.querySelector(".menu");
    // menu.querySelectorAll("a").forEach((a) => {
    //   a.addEventListener("click", function () {
    //     let item = a.parentElement;
    //     item.classList.add("item__activate");
    //   });
    // });
    let items = menu.children;
    menu.addEventListener("mouseover", function () {
      for (let item of items) {
        item.classList.remove("hide");
      }
    });
    menu.addEventListener("mouseout", function () {
      for (let item of items) {
        item.classList.add("hide");
      }
    });
    let click = new Event("mouseup");
    for (let item of items) {
      item.addEventListener("click", function () {
        item.firstElementChild.dispatchEvent(click);
      });
    }
    let input = document.getElementById("upload__input");
    let input_text = document.getElementById("upload__text");
    input.addEventListener("change", function () {
      input_text.value = input.files[0].name;
    });
    let pictures = document.querySelectorAll(".picture");
    for (let picture of pictures) {
      picture.addEventListener("mouseover", function () {
        picture.classList.add("picture__icon");
      });
      picture.addEventListener("mouseout", function () {
        picture.classList.remove("picture__icon");
      });
    }
  })();
};
