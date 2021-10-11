document.querySelector(".ca-nav-theme-switch").addEventListener("click", () => {
  const themes = ["blue", "white", "purple"];
  const themeIndex = themes.indexOf(document.body.getAttribute("theme"));
  document.body.setAttribute(
    "theme",
    themeIndex === themes.length - 1 ? themes[0] : themes[themeIndex + 1]
  );
});

const displayElement = document.querySelector(".ca-display");

const handleCode = (code) => {
  try {
    if (code === "RESET") {
      displayElement.textContent = "0";
    } else if (code === "DEL") {
      displayElement.textContent = displayElement.textContent.substring(
        0,
        displayElement.textContent.length - 1
      );
    } else if (code === "=") {
      displayElement.textContent = eval(displayElement.textContent);
    } else {
      if (displayElement.textContent === "0") {
        displayElement.textContent = code;
      } else {
        displayElement.textContent += code;
      }
    }
    if (displayElement.textContent == "") {
      displayElement.textContent = "0";
    }
  } catch (e) {
    displayElement.textContent = "Invalid calculation";
  }
};

document.querySelectorAll("[data-code]").forEach((x) => {
  x.addEventListener("click", (e) =>
    handleCode(e.target.getAttribute("data-code"))
  );
});
