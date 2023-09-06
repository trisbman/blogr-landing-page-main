window.onload = () => handler();
window.onscroll = () => sticky();

const toggleBtn = document.getElementById("toggle");
const menuListContainer = document.getElementById("menu");
const topNavChild = document.getElementById("navbar-div");
const topNav = topNavChild.parentElement;
const container = topNav.parentElement;

toggleBtn.addEventListener("click", toggle);

const container__height = getComputedStyle(container).height;
const offsetTop = parseInt(topNav.offsetTop);

function handler() {
  if (getComputedStyle(toggleBtn).display === "block") {
    menuListContainer.style.height = container__height;
    topNav.children[0].lastElementChild.removeChild(menuListContainer);
  }
}

function toggle() {
  if (getComputedStyle(menuListContainer)[0])
    topNav.removeChild(menuListContainer);
  else {
    menuListContainer.style.visibility = "visible";
    topNav.appendChild(menuListContainer, container.firstElementChild);
  }
}

function sticky() {
  if (window.scrollY >= offsetTop) {
    topNav.classList.add("sticky");
    topNav.classList.add("content");
  } else {
    topNav.classList.remove("sticky");
  }

  document
    .querySelector(".profile-img")
    .addEventListener("click", () =>
      window.open("https://www.dicoding.com/users/tristanb")
    );
}