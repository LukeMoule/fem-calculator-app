let currentTheme = "theme1";
const themeButtons = document.querySelectorAll('input[name="theme-selector"]');
themeButtons.forEach((themeButton) => {
    themeButton.addEventListener("change", (event) =>{

        const body = document.querySelector('body');
        body.classList.remove(currentTheme);
        currentTheme = event.target.value;
        body.classList.add(currentTheme);
    })
})