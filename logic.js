const themes = ['theme1', 'theme2', 'theme3'];
let currentTheme = 0;

document.querySelector('.toggle').onclick = toggleTheme;

function toggleTheme(){
    const body = document.querySelector('body');
    body.classList.remove(themes[currentTheme]);
    
    if(++currentTheme >= themes.length){
        currentTheme = 0;
    }

    body.classList.add(themes[currentTheme]);
}