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

[<button > RETOUR AU MENU PRINCIPAL </button>](Index.md)

# Mise en Lumière
## Pratique


1. [World](#World)
2. [Sol et Lumières](#SolLumiere)

___

### Pour commencer, si vous n'avez pas suivi le cours sur la [Modélisation Extrusion - Biseau - Découpage](Mod%C3%A9lisation%20Extrusion%20-%20Biseau%20-%20D%C3%A9coupe.md), OU le cours [Matériaux et Textures - Pratique Basique](Mat%C3%A9riaux%20et%20Textures%20-%20Pratique.md) sur les matériaux il faut télécharger le  **[Fichier Blender](Sources/Fichiers%20Blender/Mise%20en%20Lumi%C3%A8re%20-%20Pratique.blend)** et l'ouvrir.

L'exemple pratique est très simple, et en extérieur il n'a pas besoin d'énormément de mise en lumière. Voici pourquoi il sera interessant de visiter un cas plus complexe en intérieur en [Projets pratiques et Astuces]().
___

```
Supprimer toutes sources de lumière
```
*Dans le fichier, il y a une "**Light**"  et un "**world**" de couleur grise. Pour travailler la lumière comme il se doit, il nous faut **supprimer la Light** en appuyant sur SUPPR sur le clavier, et mettre la **couleur du World en noir** pur depuis son menu sur la droite de l'écran.*

<img src="Sources/Img/World noir.png" alt="Alt text" height="300px">

*Il ne reste au final qu'une caméra et un cube dans la scène.*

<img src="Sources/Img/Camera et mesh.png" alt="Alt text" >

<br>

___

<center id="World">

# World

</center>

```
Ajouter un HDRI de ville depuis le site de Polyhaven
```
[HDRI POLYHAVEN](https://polyhaven.com/a/neuer_zollhof)

*Aller sur le site de **Polyhaven** pour télécharger un **HDRI**. Nous cherchons un **HDRI** d'extérieur en ville.  
Dans notre cas nous choisissons [celui ci](https://polyhaven.com/a/neuer_zollhof).*

*Pour télécharger, le bouton de **Download** se situe en haut à droite de la page.*  
<img src="Sources/Img/Download HDRI.png" alt="Alt text">

*Une fois télécharger, nous l'importons dans Blender depuis l'**onglet Shading** et dans la catégorie **World** qui est choissable dans le coin haut gauche de la fenetre du **Shader Editor**:*
<img src="Sources/Img/Onglet Shading.png" alt="Alt text">

<img src="Sources/Img/World mode.png" alt="Alt text">

*Ajouter un Environnement texture en faisant Add>Texture>Environment Texture et le brancher sur l'entrée "**Color**" du Noeud **Background**.*


<img src="Sources/Img/Nodes World base.png" alt="Alt text">

*Il faut alors importer l'HDRI avec le bouton Open.*

*Par défaut, la preview de la scène dans l'onglet Shading est faite à travers un éclairage sous **HDRI temporaire**. Pour le désactiver et voir le véritable éclairage, il suffit de changer de **mode de shading** dans le coin supérieur droit de la vue 3D.*

<img src="Sources/Img/Mode de rendu final.png" alt="Alt text">

*Pour avoir un éclairage qui fonctionne bien avec la scène, on baisse la Strength à 0.1 et avec l'add-on [Node Wrangler](Mat%C3%A9riaux%20et%20Textures%20-%20Pratique.md), on recréer une transformation sur la texture avec le raccourcis CTRL+T*

<img src="Sources/Img/Wolrd with texture.png" alt="Alt text">

<img src="Sources/Img/Mapping World.png" alt="Alt text">

*En changeant la rotation en Z sur le noeud **Mapping**, on peut faire tourner l'environnement pour avoir de meilleurs reflets sur le modèle.*

<img src="Sources/Img/Mapping Z rotation world.png" alt="Alt text" height="300px"> <img src="Sources/Img/Mesh + World.png" alt="Alt text" height="300px">

<br>

___

<center id="SolLumiere">

# Sol et Lumières

</center>

```
Ajouter un Sol sous le modèle pour les rebonds de lumière et des points lights pour faire concorder l'HDRI à l'éclairage global.
```

*On ajoute un sol après être retourné dans l'**onglet Layout** de Blender.
On peut alors poser plusieurs **points lights** dans l'environnement au niveau des zones importantes.*
*Ou alors mettre des **Area lights** pour créer des faisseaux de lumière plus directionels.*

<img src="Sources/Img/Onglet Layout.png" alt="Alt text">

<img src="Sources/Img/Sol + world.png" alt="Alt text" height="300px">

*Voici le résultat après une petite mise en Lumière.*

<img src="Sources/Img/Lights final.png" alt="Alt text" height="300px">

<center>

# Pour apprendre à faire le rendu de cette scène, c'est par [ICI](Mise%20en%20Lumi%C3%A8re%20-%20Pratique.md) 

</center>