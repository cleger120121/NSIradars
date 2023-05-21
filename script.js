function changerLeTheme () {
    //On construit une liste de couleur
    const couleurs = ['#4e54c8','#003AFF','#FF00C5','#008B90', '#06B41B', '#C89400']

    //On genere un indice de couleur au hasard
    let randomNumber = Math.floor(Math.random() * 6)

    //on recupere la couleur actuel
    couleurActuel = localStorage.getItem('couleur')

    //si la couleur actuel est la meme que celle tirée au hasard on en retire une
    while ( couleurs[randomNumber] === couleurActuel ) {
        randomNumber = Math.floor(Math.random() * 6)
    }

    //On applique les couleur au element
    localStorage.setItem("couleur", couleurs[randomNumber]);

    //On recharge la page
    window.location.reload()
}

//Au chargement de la page on recupere la couleur et on l'applique aux elements
window.addEventListener("load", ()=> {
    const fond = document.getElementById('Fond--Div')
    const bouttons = document.getElementById('carte--A')
    const menus = document.querySelectorAll('.Menu--P')

    couleurActuel = localStorage.getItem('couleur')
    fond.style.backgroundColor = couleurActuel
    bouttons.style.backgroundColor = couleurActuel
    menus.forEach((menu)=> {
        menu.style.backgroundColor = couleurActuel
    })
});
