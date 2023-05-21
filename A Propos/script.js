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


const menuDivs = document.querySelectorAll('.Droite--Li')
const header = document.querySelector('#Header--Section')

//Au chargement de la page on ajuste la taille du fond et on initialise le menu
window.onload = function() {
    const fond = document.querySelector('#Fond--Div');
    fond.style.height = document.body.scrollHeight.toString() + 'px'; 
    //On met aussi le premier menu a droite en coloré vu que la page commence au premier menu  
    menuDivs[0].style.backgroundColor = 'var(--couleur1)'
}

//Selon le scroll on color un menu et on enleve la couleur aux autres
window.addEventListener('scroll', ()=> {
    if (  252 > document.documentElement.scrollTop ) {
        menuDivs[0].style.backgroundColor = 'var(--couleur1)'
        menuDivs[1].style.backgroundColor = ''
        menuDivs[2].style.backgroundColor = ''
        menuDivs[3].style.backgroundColor = ''
    }
    if ( 660 > document.documentElement.scrollTop  && document.documentElement.scrollTop > 252) {
        menuDivs[1].style.backgroundColor = 'var(--couleur1)'
        menuDivs[0].style.backgroundColor = ''
        menuDivs[2].style.backgroundColor = ''
        menuDivs[3].style.backgroundColor = ''
    } 
    if ( 852 > document.documentElement.scrollTop && document.documentElement.scrollTop > 660 ) {
        menuDivs[2].style.backgroundColor = 'var(--couleur1)'
        menuDivs[0].style.backgroundColor = ''
        menuDivs[1].style.backgroundColor = ''
        menuDivs[3].style.backgroundColor = ''
    }

    if ( document.documentElement.scrollTop > 858 ) {
        menuDivs[3].style.backgroundColor = 'var(--couleur1)'
        menuDivs[0].style.backgroundColor = ''
        menuDivs[1].style.backgroundColor = ''
        menuDivs[2].style.backgroundColor = ''
    }
})

//Au click de l'utilisateur on le ramène vers la ou il le souhaite
function sedeplacer (div) {

    //On recupere le texte de menu selectionné
    let divText =  div.textContent
    //On le reconfigure correctement ( enleve les espaces et la taille de police )
    divText = divText.trim()

    //On creer une variable avec le scroll voulu
    topScroll = null

    //Selon le menu cliqué on modifie le scroll voulu
    if (divText === 'Qui somme nous ?') {
        topScroll = 0
    } else if (divText === 'A quel sujet ?') {
        topScroll = 253
    } else if (divText === 'Où trouvons nous nos données ?') {
        topScroll = 671
    } else if (divText === 'Notre procédé') {
        topScroll = 885
    }

    //On scroll au bon endroit
    window.scrollTo({
        top : topScroll
    }); 
}

