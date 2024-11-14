var ans = document.querySelector(".ans");
var accordian = document.querySelector(".accordian");
console.log(accordian);
var show = (e) => {
  if (e.target.classList.contains("question")) {
    if (e.target.nextElementSibling.classList.contains("reveal")) {
      e.target.nextElementSibling.classList.remove("reveal");
      e.target.classList.remove("reveal");
    } else {
      e.target.nextElementSibling.classList.add("reveal");
      e.target.classList.add("reveal");
    }
  }

  console.log(e.target);
  console.log(e.target.nextElementSibling);
};

accordian.addEventListener("click", show);
