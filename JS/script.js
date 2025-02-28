document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const closeMenu = document.getElementById("closeMenu");

  menuToggle.addEventListener("click", function () {
    mobileNav.classList.add("active");
  });

  closeMenu.addEventListener("click", function () {
    mobileNav.classList.remove("active");
  });
});

document.getElementById("headerButton").addEventListener("click", function () {
  window.location.href = "https://discord.gg/B7GFn8Mr";
});

document.addEventListener("DOMContentLoaded", () => {
  const playerCountElement = document.getElementById("playerCount");

  function updatePlayerCount() {
    let currentPlayers = Math.floor(Math.random() * 250);
    playerCountElement.textContent = currentPlayers;
  }

  setInterval(updatePlayerCount, 4500);
});

document.getElementById("linkCard-tg").addEventListener("click", function () {
  window.location.href = "https://t.me/bloomy_rp";
});

document.getElementById("linkCard-ds").addEventListener("click", function () {
  window.location.href = "https://discord.gg/B7GFn8Mr";
});

document
  .getElementById("linkCard-insta")
  .addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/bloomy_rp";
  });

document.getElementById("linkCard-yt").addEventListener("click", function () {
  window.location.href = "https://www.youtube.com/@Bloomy_rp";
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const mobileMenu = document.getElementById("mobileMenu");

  menuIcon.addEventListener("click", function () {
    mobileMenu.classList.toggle("active"); // Menyu ochiladi yoki yopiladi
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  // close menu
  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });
});
