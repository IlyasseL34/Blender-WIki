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

# Blender Wiki Francophone

## Commencer Blender

Logiciel libre de référence pour la création d’images et l’animation 3D, Blender n’a rien à envier à Cinema 4D, 3ds Max ou Maya. Grâce à son interface intelligente et contextuelle, il permet à l’artiste d’allier productivité et créativité. Très ouvert, il met à sa disposition de nombreux moteurs de rendu photoréaliste et s’intègre, par sa richesse et sa flexibilité, à la panoplie des outils de travail quotidiens du graphiste professionnel.


Ce Wiki a pour objectif de faciliter l'accès à Blender au plus grand nombre dans les commaunautés francophones et donc d'apprendre aux utilisateurs amateurs et intermédiaires comment utiliser ce logiciel dans ses détails les plus subtils. Le tout en maintenant notre wiki le plus à jour possible vis à vis du logiciel qui change quasi-quotidiennement.

Afin de pouvoir avancer facilement, le Wiki est hiérarchisé de manière à ce que les bases soient vues dans quelques exemples qui traverseront 4 grands axes:
- Modélisation
- Texturation
- Mise en Lumière
- Rendu 

Après ces exemples qui permettent de prendre en main les bases, il faudra entrer dans la création de projets complets pour avoir affaire aux subtilités de chaque catégories. C'est pourquoi en dehors de ces grands axes, il existe une catégorie "Projets pratiques et Astuces" qui aborderont les dernières subtilités qui sont dûes aux interactions entre les axes et quelques astuces qui vous permettront d'améliorer votre workflow.

Chaque projet et chaque astuce se base actuellement sur la version **3.3.1** de Blender en Anglais car il arrive assez souvent que les traductions ne soient pas bonnes ou pas encore faites.


<nav>
<a href="#"><h2>Commencer Blender</h2></a>
	<ul>
		<li><a href="#"><h3>Modélisation</h3></a></li>
            <ul>
				<li><a href="Mod%C3%A9lisation%20Extrusion%20-%20Biseau%20-%20D%C3%A9coupe.md">Modélisation Extrusion - Biseau - Découpage **************</a></li>
				<li><a href="#">Courbes, textes et métaéléments</a></li>
				<li><a href="#">Modificateurs</a></li>
                    <ul>
				        <li><a href="#">Générateurs</a></li>
				        <li><a href="#">Déformateurs</a></li>
				        <li><a href="#">Modificateurs physiques</a></li>
                    </ul>
                <li><a href="#">Geometry Node</a></li>
            </ul>
		<li><a href="#"><h3>Matériaux et Textures</h3></a>
			<ul>
				<li><a href="#">Textures</a></li>
                    <ul>
				        <li><a href="#">Images et Vidéos</a></li>
				        <li><a href="#">Textures procédurales</a></li>
				        <li><a href="#">Textures fonctionnelles</a></li>
                    </ul>
                <li><a href="#">Matériaux</a></li>
                    <ul>
				        <li><a href="#">Shader de Surface</a></li>
                            <ul>
				                <li><a href="#">Principled BSDF</a></li>
				                <li><a href="#">Autres Shaders</a></li>
                            </ul>
				        <li><a href="#">Shader de Volume</a></li> 
                    </ul>
                <li><a href="#">Autres noeuds</a></li>
                <li><a href="#">Pratique Basique ************************</a></li>
			</ul>
		<li><a href="#"><h3>Mise en Lumière</h3></a></li>
            <ul>
				<li><a href="#">Types de lumières</a></li>
				<li><a href="#">Editeur Nodal (Cycles)</a></li>
                    <ul>
                        <li><a href="#">Utilisation des textures</a></li>
				        <li><a href="#">Nœuds fonctionnels</a></li>
                    </ul>
                <li><a href="#">World</a></li>
				<li><a href="#">Pratique ***********************</a></li>
            </ul>
		        <li><a href="#"><h3>Rendu</h3></a></li>
                    <ul>
                        <li><a href="#">Eevee</a></li>
				        <li><a href="#">Cycles</a></li>
                        <li><a href="#">Camera</a></li>
				        <li><a href="#">Exportation</a></li>
				        <li><a href="#">Pratique *********************</a></li>
                    </ul>
		</ul>
<a href="#"><h2>Projets pratiques et Astuces</h2></a>
    <ul>
		<li><a href="#">Projets pratiques</a></li>
            <ul>
		        <li><a href="#">Projet Complet 1 (Oliafur Eliasson, The weather project, 2003)</a></li>
                    <ul>
                        <li><a href="#">Pratique</a></li>
                        <li><a href="#">Optimisations</a></li>
                            <ul>
                                <li><a href="#">Instanciations</a></li>
                                <li><a href="#">Reduction  polygonale</a></li>
                                <li><a href="#">...</a></li>
                            </ul>
                    </ul>
                <li><a href="#">Projet Complet 2 </a></li>
                <li><a href="#">Projet Complet 3</a></li>
                <li><a href="#">...</a></li>
            </ul>
        <li><a href="#">Astuces</a></li>
    </ul>
</nav>








## Hierarchie du Site
<img src="Sources/Img/Structure générale schéma transparent.png"></img>

## Utilisation du Site

Sur votre gauche, existe un menu qui 
Permettre à chacun d'avancer à son rythme est important, c'est pourquoi une charte est mise en place afin d'accélérer la lecture des chapitres aux utilisateurs les plus avancés.
Exemple:

```sh
Ceci est un texte dédié à un utilisateur intermédiaire/avancé.
```
*Ceci est un texte d'explication plus détaillé. Il est dédié aux utilisateurs plus amateurs et permet de comprendre les étapes plus simplement.*

> Ici les raccourcis si existants
- [x] Quelques bulles d'astuces existent, et permettent alors de découvrir une technique, d'obtenir une information supplémentaire qui pourrait apporter une solution à un problème, ou autres utilités.



___

#### Remerciements: Damien Beyrouthy, Stéphane Cousot, Célio Paillard de Chenay, Antoine Ribeiro, Aude Pora, Alex Amerio, Matthieu S, Marwan S, Khaled BY,

<br><br>

#### Auteur: Ilyasse Lojdi