'use strict'

import { LoadPicture } from './LoadPicture.js'


// Exemple d'appel minimum 
const pictures = new LoadPicture({
    url : 'https://jsonplaceholder.typicode.com/photos',
})

/*
// Tous les paramètres (un paramètre objet contenant des propriétées)
const pictures2 = new LoadPicture(
{
    url : 'https://jsonplaceholder.typicode.com/photos',
    area : 'main section.photo',
    numberPhoto : 10,
    order : 'ASC'
}
)
*/