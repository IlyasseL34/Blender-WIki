<style>
img{ padding: 10px 10px 10px 10px; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; }
body{ background-color: #1F1F1F;
    color: white
    }
a{
   color: cyan;
}
.hljs {
	background-color: #333333;
   color: #FFFFFF;
	
}
</style>

<a href="index.html"><button > RETOUR AU MENU PRINCIPAL </button></a>


# Modélisation
## Extrusions - Biseautage - Découpe

1. [Théorie](#Théorie)
2. [Selections](#Selections)
3. [Pratique](#Pratique)

<center>

# Théorie <p id="Théorie"></p>

</center>

___



```
Entrer en Edit Mode
```
*Dans le coin supérieur gauche, après avoir
selectionné l’objet à transformer, cliquer
sur «Object Mode», l’Edit Mode est alors
selectionnable.*  
![Alt text](Sources/Img/Mod%C3%A9lisation%20Extrusion%201.png)

___

```
Choisir un type de sélection
```

*Au meme endroit, 3 icones apparaissent et
permettent de choisir les modes de selection
suivant:*
- *Vertex (Point)*
- *Edge (Arête)*
- *Face (Polygone)*
*Les selections issuent de ces modes de sélection
s’autoconvertissent lorsque d’un changement de
mode.*

![Alt text](Sources/Img/Mod%C3%A9lisation%20Extrusion%20Mode%20Selection%202.png)
![Alt text](Sources/Img/Mod%C3%A9lisation%20Extrusion%20Mode%20Selection%203.png)
![Alt text](Sources/Img/Mod%C3%A9lisation%20Extrusion%20Mode%20Selection.png)
___
```
Selectionner une zone sur l’objet en 3D 
```
*En utilisant l’outil de sélection du menu d’outils
(touche de clavier «T») situé à gauche de l’écran,
il est possible de sélectionner plusieurs parties
d’un objet. Dans le cas expliqué, nous sélection
une face*
*La face sélectionnée s’illumine en orange.*

![Alt text](Sources/Img/Selection%20tool.png)  
<img src="Sources/Img/Sélection Mode edit face.png" alt="Alt text" height="300px">
___

```
Extrusions simples
```
*Dans le menu d’outils «T», maintenir le clic
gauche sur l’outil d’extrusion pour afficher les 5
méthodes d’extrusion.
Cette méthode permet de déplacer une face
le long d’un axe pré-déterminé. Par défaut, le
logiciel choisi la normale d’une face ou la position
de la souris sur l’écran dans le cas de l’ «Extrude
to Cursor».*  
*Les logos expliquent à quel résultats l’utilisateur
peut s’attendre avec en vert les zones
selectionnées.*

>Raccourci en vue 3D: ALT+E

<img src="Sources/Img/Extrusions possibles.png" alt="Alt text" height="300px">
___
```
Extrusion Interne
```
*En dessous des extrusions basiques, on
retrouve l’extrusion interne. C’est un outil qui
permet de subdiviser et crée une petite version
de cette meme face en sa surface.*  

>Raccourci en vue 3D: I

<img src="Sources\Img\Extrusion Interne.png" alt="Alt text">

<img src="Sources\Img\Extrusion Interne Exemple.png" alt="Alt text" height="300px">



___
```
Biseautage
```
*Sous l’Extrusion Interne, l’outil de biseautage se présente sous la forme d’un cube au sommet biseauté*

>Raccourci en vue 3D: CTRL+B

*La forme du biseau est totalement modifiable
dans le menu qui apparait dans le coin bas
gauche.*

<img src="Sources\Img\Bevel réglages.png" alt="Alt text" height="300px">

```
Définitions des réglages les plus utilisés
```
***Width** modifie la profondeur du biseau.
Segments défini le nombre de coupes sur la
largeur du biseau.*  
***Shape** controle le profil du biseau: concave/
convexe*  
***Clamp** Overlap limite la profondeur du biseau si
des intersections occurent.*  
***Profile Type** - Custom laisse l’utilisateur définir
la forme du biseau*

- [x] Astuce: F9 permet de réouvrir ce menu si la dernière action est sa fermeture involontaire.

___

```
Loop Cut
```

*Plus bas dans les outils, le Loopcut permet de
découper des grace à une ligne qui fait le tour
de la forme 3D. Il ne s’applique qu’en pointant la
souris sur une arête puis en cliquant.
Pour déplacer la ligne, il faut maintenir le clic et
glisser*

>Raccourci en vue 3D: CTRL+R

<img src="Sources\Img\Loopcut Logo.png" alt="Alt text" >

<img src="Sources\Img\LoopCuting.png" alt="Alt text" height="300px">


<br>

___
___
<div style="background-color: #163745 ; vertical-align: middle; padding:10px; color: white; border-radius:10px" >

<center>
<p id="Selections"></p>

# Sélections 
</center>


```
Sélection de boucle
```
*Permet de sélectionner une boucle de
polygones sur les cotés de l’arête sélectionnée.
Il ne s’utilise qu’en raccourci.*

>Raccourci en vue 3D: ALT+CLIC GAUCHE


<img src="Sources\Img\Loop Select.png" alt="Alt text" height="300px">



```
Sélection Multiple
```

*Pour sélectionner différentes parties d’un meme
objet, il faut utiliser la touche SHIFT en cliquant.*

> Raccourci en vue 3D: SHIFT+CLIC GAUCHE

<img src="Sources\Img\Sélection Multiple.png" alt="Alt text" height="300px">



```
Sélection de chemin
```

*Blender permet de trouver le chemin le plus
court entre deux parties distinctes d’un objet et
de créer une sélection sur ce chemin:*
- *Sélectionner une face*
- *Maintenir la touche CTRL en sélectionnant
une autre face*

> Raccourci en vue 3D: CTRL+CLIC GAUCHE

<img src="Sources\Img\Sélection de chemin.png" alt="Alt text" height="300px">



```
Dilater/Contracter une sélection
```
*Une sélection peut se répandre et se contracter
avec les signes + et - :*
- *Dilater: CTRL+ ‘-’*
- *Contracter: CTRL+ ‘+’*

>Raccourci en vue 3D: CTRL+ ‘+’
>Raccourci en vue 3D: CTRL+ ‘-’

<div style="background-color: #F19F04; color: black; border-radius:10px">

- [x] ASTUCE: **L** en survolant un objet permet de
sélectionner tous les polygones
connectés à ce meme objet.

</div>

</div>
<br><br>
<center>

<p id="Pratique"></p>

# Pratique 

</center>


___

```
En «Mode Edit» faire une extrusion interne de la face supérieure
```
*Utiliser l’outil de sélection pour sélectionner la face supérieure du cube. Prendre l’Outil d’extrusion interne et réduire la face supérieure en cliquant-glissant dans la zone circulaire*

<img src="Sources\Img\Cube Extrusion Interne 1.png" alt="Alt text" height="300px">
<img src="Sources\Img\Post Extrusion Interne.png" alt="Alt text" height="300px">


```
Faire une extrusion de la face supérieure

```

*Utiliser l’outil d’extrusion simple et élever la
face centrale qui est normalement toujours
sélectionnée*
<img src="Sources\Img\Post extrusion interne et extrusion normale.png" alt="Alt text" height="300px">
<img src="Sources\Img\Extrusion 2.png" alt="Alt text" height="300px">



```
Répéter l’opération plusieurs fois jusqu’à obtenir une forme générale ressemblant à un building
```

*Le but est de donner l’aspect d’un building à la
forme en général, comme si l’on superposait des
cubes*

<img src="Sources\Img\Building LOD 10.png" alt="Alt text" height="300px">

<center>

- [x] ASTUCE: Pour faciliter la lecture du modèle, il faut activer les cavités dans le menu fléché supérieur droit <br><img src="Sources\Img\Mode rendu.png" alt="Alt text" style="vertical-align:middle;"><br><img src="Sources\Img\cavity 2.png" alt="Alt text">

</center>

<br><br><br>


```
Pour chaque étage, faire un loop cut
dans la partie supérieur des cubes
```

*Il faut utiliser l’outil Loop Cut et cliquer-glisser
vers le haut depuis une arête verticale. Répéter
l’opération sur chaque partie du batiment*

<img src="Sources\Img\Lopp cut pour étage.png" alt="Alt text" height="300px">
<img src="Sources\Img\Loopcut ;odel.png" alt="Alt text" height="300px">


```
Faire une «Extrusion Along-Normals»
des faces juste au dessus des Loop Cuts
```
<p id="ExtrusionAN"></p>

*Reprendre le mode de sélection «Face» qui a
été changé par les Loop Cuts.
Avec la sélection de boucle, faire un Alt+Clic gauche sur les faces adjacentes aux arêtes
précédemment crées.
Faire une extrusion avec l’outil «Extrude Along-Normals» qui se trouve sous le bouton d’extrusion, pour faire sortir les faces*.

<img src="Sources\Img\Select loop modé.png" alt="Alt text" height="300px">
<img src="Sources\Img\Extruded loop.png" alt="Alt text" height="300px">


```
Faire un double Loop Cut à la verticale
```

*Utiliser l’outil Loop Cut à nouveau mais en
utilisant le raccourci CTRL+R
Il faut survoler une arête horizontale pour créer
des coupures.
Avant de cliquer:*
1. *jouer avec la molette pour choisir le nombre
de coupures: 2*
1. *Clic Gauche pour valider le nombre.*
2. *Clic Gauche pour valider l’emplacement.*
*A défaut, clic droit valide l’emplacement par défaut.*

<img src="Sources\Img\2loopcut vertical.png" alt="Alt text" height="300px">



```
Faire un Loop Cut horizontal à la base
```

*De la même manière qu’à l’étape précédente:
Faire un loop cut au milieu de la partie basse du
building.*

<img src="Sources\Img\Loopcut base.png" alt="Alt text" height="300px">



```
Faire une sélection de boucle de la base et déselectionner une face au centre de la sélection
```

*Alt+Clic gauche sur une arête verticale au niveau
de la base du batiment.
Après cette sélection faite, déselectionner une
face avec shift+clic gauche.*

<img src="Sources\Img\Sélection moins 1.png" alt="Alt text" height="300px">


```
Faire une «Extrusion Along-Normals» de la sélection
```

(Vu à la page [précédente](#ExtrusionAN))

<img src="Sources\Img\Extrude AN base.png" alt="Alt text" height="300px">

```
Sélectionner le contour de l’extrusion créée
```

*On utilisera l’outil de sélection de boucle et nous
commençons à partir d’ici à travailler sur les
détails du batiment.*

<img src="Sources\Img\Selection extrude an base.png" alt="Alt text" height="300px">

```
Refaire une nouvelle et légère «Extrusion Along-Normals» sur la nouvelle sélection
```
*Ceci permet de créer un contour à la base du
batiment.*

<img src="Sources\Img\New AN BASE.png" alt="Alt text" height="300px">


```
De la meme manière:
    Sélectionner la boucle nouvellement créée et faire à nouveau une «Extrusion Along-Normals»
```

<img src="Sources\Img\base new an.png" alt="Alt text" height="300px">

```
Ajouter des détails avec des extrusions
internes et des extrusions
```
1. *Sélectionner une boucle de polygones*
1. *Faire une extrusion interne de la selection*
1. *Faire un «extrude along-normals» vers l’intérieur ou l’extérieur, au choix*


<img src="Sources\Img\Loop cut detail.png" alt="Alt text" height="300px">
<img src="Sources\Img\Loop cut extrusion interne.png" alt="Alt text" height="300px">
<img src="Sources\Img\Extrusion interieure.png" alt="Alt text" height="300px">


```
Répéter l’opération précédente à différents endroits pour augmenter le niveau de détail du modèle
```
*Les sélections de boucle peuvent se faire
verticalement ou horizontalement*

<img src="Sources\Img\Full modèle.png" alt="Alt text" height="300px">

<br><br>

<center>

- [x] ASTUCE: Les outils peuvent s’utiliser les uns sur les autres: Ici, il est possible de faire un biseau d’arête. Ceci permet de lui donner de l’épaisseur en la transformant en polygones.  
    <img src="Sources\Img\arête.png" alt="Alt text" height="200px"><img src="Sources\Img\arête biseau.png" alt="Alt text" height="200px">
    >Raccourci en vue 3D: CTRL+B

<br>

___

# Pour apprendre à texturer ce modèle, c'est par [ICI](Mat%C3%A9riaux%20et%20Textures%20-%20Pratique.md) 
</center>
