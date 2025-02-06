window.onload = function () {
    localStorage.removeItem("joueur1");
    localStorage.removeItem("joueur2");
};

function choisirPersonnage(joueur, personnage) {
    let autreJoueur = joueur === "joueur1" ? "joueur2" : "joueur1";
    let personnagePris = localStorage.getItem(autreJoueur);

    // Vérifie si l'autre joueur a déjà choisi ce personnage
    if (personnagePris === personnage) {
        alert("Ce personnage est déjà pris !");
        return;
    }
    localStorage.setItem(joueur, personnage);
    styliserBoutons(joueur, personnage);
    desactiverPersonnagePourAutreJoueur(personnage);
    let joueur1 = localStorage.getItem("joueur1");
    let joueur2 = localStorage.getItem("joueur2");
    if (joueur1 && joueur2) {
        setTimeout(() => {
            window.location.href = "../Levels/map1.html";
        }, 800);
    }
}

function styliserBoutons(joueur, personnageChoisi) {
    let boutons = document.querySelectorAll(`.btn-${joueur}`);
    boutons.forEach(btn => {
        if (btn.innerText === personnageChoisi) {
            btn.style.backgroundColor = "transparent";
            btn.style.color = "white";
            btn.style.border = "2px solid white";
        } else {
            btn.disabled = true;
            btn.style.border = "2px dashed blue";
        }
    });
}

function desactiverPersonnagePourAutreJoueur(personnage) {
    let boutons = document.querySelectorAll(".btn");
    boutons.forEach(btn => {
        if (btn.innerText === personnage) {
            btn.disabled = true;
            btn.style.border = "2px solid green";
            btn.style.transition = "none";
            btn.style.transform = "none";
            
        }
    });
}