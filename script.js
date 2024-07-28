// selecting the elements
const successMessage = document.querySelector(".success-message");
const body = document.querySelector("body");
const latestButton = document.querySelector(".scrolling-btn");
const section2 = document.getElementById("section-2");
const topButton = document.querySelector(".top");
const heroSection = document.getElementById("hero-section");

// aboutContainer opening function
function aboutContainerOpenClose() {
  let aboutBtn = document.querySelector(".about-btn");
  let aboutContainer = document.querySelector(".about-container");
  let cross = document.querySelector(".cross");
  aboutBtn.addEventListener("click", () => {
    aboutContainer.classList.remove("opacity-0");
    aboutContainer.classList.remove("scale-0");
    body.classList.add("overflow-hidden");
  });
  cross.addEventListener("click", () => {
    aboutContainer.classList.add("opacity-0");
    aboutContainer.classList.add("scale-0");
    body.classList.remove("overflow-hidden");
  });
}

// scrolling-effect function
function scrollingEffectOnButtons() {
  latestButton.addEventListener("click", function () {
    section2.scrollIntoView({ behavior: "smooth" });
  });

  topButton.addEventListener("click", function () {
    heroSection.scrollIntoView({ behavior: "smooth" });
  });
}


// Contact me logic for telegram
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Select the input's value
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  //Your telegram bot token
  let telegramToken = "7310204123:AAFSuAxdo2Y3_w8LHxdu_w1IPnUSl8S8Ehk";

  //Your telegram chat id
  let chatId = "1239709077";

  let text = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

  let url =
    "https://api.telegram.org/bot" +
    telegramToken +
    "/sendMessage?chat_id=" +
    chatId +
    "&text=" +
    encodeURIComponent(text);

  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      successMessage.style.display = "flex";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 2000);
    } else {
      alert("Error sending message.");
    }
  };
});

aboutContainerOpenClose();
scrollingEffectOnButtons()
