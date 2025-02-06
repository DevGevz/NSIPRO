class Character:
    def __init__(self, classe,hp):
        self.classe = classe
        self.hp = hp
        self.positionX = 0  # Représente la position sur un axe imaginaire horizontale
        self.positionY = 0  # Représente la position sur un axe imaginaire verticale
        
    def avancer(self):
        self.positionX += 1
        print(f"Le personnage {self.classe} avance. Position actuelle : {self.positionX} {self.positionY}")
        
    def reculer(self):
        self.positionX -= 1
        print(f"Le personnage {self.classe} recule. Position actuelle : {self.positionX} {self.positionY}")
        
    def monter(self):
        self.positionY += 1
        print(f"Le personnage {self.classe} monte. Position actuelle : {self.positionX} {self.positionY}")
        
    def descendre(self):
        self.positionY -= 1
        print(f"Le personnage {self.classe} descend. Position actuelle : {self.positionX} {self.positionY}")
    
    def afficher_position(self):
        print(f"Le personnage {self.classe}: {self.positionX} {self.positionY}")

# Création d'un objet voiture
Personnage1 = Character("Archer",100) #faire en sorte de remplacer archer par la sélection

# Demander à l'utilisateur quel mouvement il souhaite
while True:
    action = input("Que voulez-vous faire ? (avancer, reculer, monter, descendre, quitter): ").strip().lower()
    
    if action == "avancer": #touche à assigner en remplacent "avancer", "reculer", etc..
        Personnage1.avancer()
    elif action == "reculer":
        Personnage1.reculer()
    elif action == "gauche":
        Personnage1.monter()
    elif action == "droite":
        Personnage1.descendre()
    elif action == "quitter":
        print("Fin du programme.")
        break
    else:
        print("Action non reconnue. Essayez encore.")
    
    Personnage1.afficher_position()
