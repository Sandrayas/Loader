# Projet Final

Afficher un ensemble de photos sur une page à partir d'une classe et d'une API.

Le projet final de cette semaine doit-être envoyé au plus tard Lundi 10 Avril 2023 minuit :
- sur discord en fichier ZIP
- url d'un dépot github ou Gitlab public via discord 

> 🛑 En cas de problème contactez moi par Discord 

Vous devez le réaliser seul.

Une note sera établie pour être ajouté dans Yparéo selon les critères suivants : 
- projet fonctionnel
- qualité du code
- qualité des commentaires

Un projet non fonctionnel ne sera pas bien noté. 
Essayer de réaliser au mieux les étapes clefs (chagement API et affichages).

> 🛑 
> Bon et la note n'est pas le plus important. L'important c'est de s'entrainer.
> Donc si vraiment vous bloquez, essayer à votre manière de résoudre le projet. Peut-être sans 
> classe... peut-être sans FETCH, mais au moins vous avancez et un résultat est là 😉

Les bonus ne compte pas dans la note finale mais peuvent rajouter des points !


## La classe `LoadPicture`

Cette classe doit vous permettre de charger des images et de les afficher dans le DOM.
Elle créée aussi un bouton pour charger les photos suivantes (s'il y en a).
Les photos sont affichées par lot de 10 par défaut.

**Fonctionnement**

Le fait d'instancier cette classe va avoir pour effet d'interroger une API (on utilisera ici l'API https://jsonplaceholder.typicode.com/) et lui demander de récupérer les 5000 photos de cette API.
Une méthode `async load()` de la classe, méthode asynchrone, est donc appelée.
Elle va se charger d'afficher l'icone de chargement, puis attendre `await` le résultat de la requête  vers l'API, puis appelera une méthode `display()` pour afficher les photos récupérée.
La même méthode sera appelée pour afficher les 10 photos suivantes.

**Icone de chargement**

Une icône d'attente (chargement) se place sur la page à l'endroit désiré (zone d'affichage) en attendant que les photos soient récupérées et afficher.
Sélectionner une icône ici : https://dribbble.com/tags/loading_icon
Cette icône disparait ensuite à l'affichage des photos.

**Affichage des photos**

Vous affichez ensuite un certains nombre de photo (10 par exemple) dans la zone d'affichage.
Un bouton permet alors d'afficher les 10 photos suivantes à la suite dans la zone d'affichage.
Vous avez déjà toutes les photos. Aucune requête n'est donc nécessaire pour afficher la suite !
Votre classe doit par contre connaitre le nombre de photos à afficher par lot et le numéro du dernier lot affiché.

**Paramétrage et appel de la classe**

La classe peut-être paramétrée en précisant : 

- l'url du service API
- la zone ou les photos seront affichées dans le HTML (default : body)
- le nombre de photos à afficher par lot (un bouton permettra d'afficher le lot suivant) (default : 10)
- si on affiche les photos par ordre croissant ou décroissant (ASC ou DESC), il faudra alors trier les résultats (default : ASC)

Exemple d'une instanciation de la classe : 

```js

// Exemple d'appel minimum 
const pictures = new LoadPicture({
    url : 'https://jsonplaceholder.typicode.com/photos',
})

// Tous les paramètres (un paramètre objet contenant des propriétées)
const pictures = new LoadPicture(
{
    url : 'https://jsonplaceholder.typicode.com/photos',
    area : 'main section.photo',
    numberPhoto : 20,
    order : 'ASC'
}
)

```


## Bonus : 

Rajoutez un paramètre permettant de filtrer par album.
Vous devrez executer plusieurs requête vers l'API (voir la doc pour filtrer par album)
La méthode `load()` va donc changer.
Vous pouvez ensuite rassembler les résultats pour les afficher par lot comme précédemment.

La classe peut donc être paramétrée en précisant en plus :

- le choix des albums auxquels appartiennent les photos à afficher (une liste de numéro d'album [1,2,5] de 1 à 100) : (default : pas de filtre)


```js

// Tous les paramètres
const pictures = new LoadPicture(
{
    url : 'https://jsonplaceholder.typicode.com/photos',
    area : 'main section.photo',
    numberPhoto : 20,
    albums : [1,5,20,30,54],
    order : 'DESC'
}
)

```

## Continuez à vous amuser pour vous

Et pourquoi pas afficher d'abord les albums...
Avec un click sur un album on requête et affiche les photos dans la même page... et ceci par lot de 10 par exemple.
Un bouton permet de revenir à la liste d'album... et on affiche un autre album...
Tout sur la même page !
Bon ça c'est pour après... et surtout pour vous créer de nouveaux challenges 😉
