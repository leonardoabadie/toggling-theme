function alternarPropriedades(iconClassName, iconPath, logoPath, themeMode) {
    document.querySelector('#imgAlternadorTema').className = iconClassName;
    document.querySelector('#imgAlternadorTema').src = iconPath;
    document.querySelector('#logo').src = logoPath;
    document.querySelector('body').className = themeMode;
    document.querySelector('header').className = themeMode;
    document.querySelectorAll('ul').forEach(element => {
        element.className = themeMode;
    });

    return;
}

function alternarTema() {
    switch (document.querySelector('#imgAlternadorTema').className) {
        case 'icon-lua' :
            alternarPropriedades("icon-sol", "./assets/images/icons/sun.svg", "./assets/images/dark-logo.svg", "tema-escuro");
            break;
     
        case 'icon-sol' :
            alternarPropriedades("icon-lua", "./assets/images/icons/moon.svg", "./assets/images/logo.svg", "tema-claro");
            break;
    }
    return;
}