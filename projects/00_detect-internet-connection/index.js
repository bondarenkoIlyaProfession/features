const container = document.querySelector(".container");
const toast = container.querySelector(".toast");
const title = toast.querySelector("span");
const subTitle = toast.querySelector("p");
const wifiIcon = toast.querySelector(".icon");
const closeIcon = toast.querySelector(".close-icon");

window.onload = () => {
  function ajax() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = () => {
      if (xhr.status >= 200 || xhr.status < 300) {
        toast.classList.remove("offline");
        title.innerText = "You are online now";
        subTitle.innerText = "Internet is connected";
        wifiIcon.innerHTML = `<i class="uil uil-wifi"></i>`;
        closeIcon.addEventListener("click", () => {
          container.classList.add("hide");
          window.location.href = "../../index.html";
        });
      } else {
        offline();
      }
    };
    xhr.onerror = () => {
      offline();
    };
    xhr.send();
  }

  function offline() {
    container.classList.remove("hide");
    toast.classList.add("offline");
    title.innerText = "You are offline now";
    subTitle.innerText = "Internet is disconnected";
    wifiIcon.innerHTML = `<i class="uil uil-wifi-slash"></i>`;
  }

  setInterval(() => {
    ajax();
  }, 100);
};
