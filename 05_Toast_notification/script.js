const showNotificationBtn = document.querySelector(".show-notification-btn");

const notification = document.querySelector(".notification");

//when click on show notification btn
showNotificationBtn.addEventListener("click", initNotification);

function initNotification() {

  //making notification visible & adding animation
  notification.classList.remove("hidden");
  notification.classList.add("animate-notification");

  //starting a timer to hide notification
  setTimeout(() => {
    notification.classList.add("hidden");
    showNotificationBtn.addEventListener("click", initNotification);
  }, 5000);

  //remove click listner from button to avoid timer conflict
  showNotificationBtn.removeEventListener("click", initNotification);
}
