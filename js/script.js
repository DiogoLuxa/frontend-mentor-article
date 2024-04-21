const cardShareButton = document.querySelector(".card__share");
const cardAuthor = document.querySelector(".card__author");
const cardAuthorInfo = document.querySelector(".card__author-info");
const cardSocialShare = document.querySelector(".card__social-share");

function applyShareButtonStyles() {
  const cardShareButtonImg = cardShareButton.querySelector("img");
  cardShareButton.style.cssText = "background-color: #6d7f97;";
  cardShareButtonImg.style.cssText = "filter: brightness(10000%)";
}

function resetShareButtonStyles() {
  const cardShareButtonImg = cardShareButton.querySelector("img");
  cardShareButton.style.cssText = "background-color: #ecf2f8;";
  cardShareButtonImg.style.cssText = "filter: brightness(100%)";
}

function handleCardShareButton() {
  cardSocialShare.classList.toggle("card__social-share--active");
  if (cardSocialShare.classList.contains("card__social-share--active")) {
    applyShareButtonStyles();
  } else {
    resetShareButtonStyles();
  }
}

cardShareButton.addEventListener("click", handleCardShareButton);
