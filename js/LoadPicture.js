
class LoadPicture {
    constructor(params) {
        /**
         * @var {Array} collection de balises img
         */
        this.images = params.images ?? null;

        /**
        * @var {Number} index du numéro de lot courant
        */
        this.indexCurrentLot = 0;


        /**
        * @var {Number} currentImage le numéro de l'image courante
        */
        this.indexCurrentImage = 0;

        /**
         * @var {Element} currentImage image courante (element du DOM)
         */
        this.currentImage = new Image();


        /**
         * @var {String} la zone du DOM ou les photos seront affichées dans le HTML (default : load-btn)
         */
        this.area = params.area ?? '.load-btn';

        /**
         * @var {Number} nombre de photos à afficher par lot (un bouton permettra d'afficher le lot suivant) (default : 10)
         */
        this.numberPhoto = params.numberPhoto ?? 10;

        /**
         * @var {String} Ordre d affichage des photos (par defaut par ordre croissant )
         */
        this.order = params.order ?? 'ASC';

        /**
         * @var {String} l'url du service API à fournir
         */
        //this.url = params.url ?? 'https://jsonplaceholder.typicode.com/photos';
        this.url = params.url;

        /**
         * @var {Element} areaDom zone du DOM où générer le slider : Objet du DOM
         */
        this.areaDom = null;

        try {
            if (this.images == null)
                throw new Error(`LOADER : vous devez fournir un objet contenant les images et leur titre. Reportez vous à la documentation.`)
            
            // On créé l'interface
            //this.display(this.leJson);
            this.load(this.url);
        }
        catch(e) {
            this.displayError(e)
        }

        this.load(this.url);
        this.addButton();

        //console.log(this.images)


    }




    async load(url) {
        try {
            this.images = await fetch(this.url);
            this.leJson = await this.images.json();
            this.display(this.leJson);


        } catch (e) {
            console.log(`ERREUR : Veuillez vérifier l'url que vous avez fourni si bien écrite comme ça : https://jsonplaceholder.typicode.com/photos `)
        }
    }

    display(leJson) {
        console.log(this.leJson);
        //this.long = this.images.length;


        this.dest = document.getElementById('load');
        for (let photo of this.leJson) {
        for (this.indexCurrentLot; this.indexCurrentLot < this.numberPhoto; this.indexCurrentLot++) {
            
                this.lImage = document.createElement('div');
                this.lImage = this.leJson[this.indexCurrentLot];
                this.lImage.classList.add('load');
                this.lImage.innerHTML = `<a href="#">
                <img src="${this.photo.url}">
                </a>
            `;
            this.lImage.albumId = this.leJson[this.indexCurrentLot].albumId;
            this.lImage.id = this.leJson[this.indexCurrentLot].id;
            this.lImage.thumbnailUrl = this.leJson[this.indexCurrentLot].thumbnailUrl;
            this.lImage.title = this.leJson[this.indexCurrentLot].title;
            this.lImage.url = this.leJson[this.indexCurrentLot].url;

            this.indexCurrentLot = this.numberPhoto * this.indexCurrentLot;

            this.display_albumId = document.querySelector("#albumId");
            this.display_id = document.querySelector("#id");
            this.display_thumbnailUrl = document.querySelector("#thumbnailUrl");
            this.display_title = document.querySelector("#title");
            this.display_url = document.querySelector("#url");
            this.display_image = document.querySelector("#image1");


            this.image_thumbnailUrl = `<img src="${this.lImage.thumbnailUrl}">`;
            this.display_image.insertAdjacentHTML('afterbegin', this.image_thumbnailUrl);


            this.dest.appendChild(this.lImage);
            }

        }

        /*
        this.albumId = this.leJson[0].albumId;
        this.id = this.leJson[0].id;
        this.thumbnailUrl = this.leJson[0].thumbnailUrl;
        this.title = this.leJson[0].title;
        this.url = this.leJson[0].url;


        this.display_albumId = document.querySelector("#albumId");
        this.display_id= document.querySelector("#id");
        this.display_thumbnailUrl = document.querySelector("#thumbnailUrl");
        this.display_title = document.querySelector("#title");
        this.display_url = document.querySelector("#url");
        this.display_image = document.querySelector("#image1");

        this.display_albumId.innerHTML = this.albumId;
        this.display_id.innerHTML = this.id;
        this.display_title.innerHTML = this.title;
        this.display_thumbnailUrl.innerHTML = this.thumbnailUrl;
        this.display_url.innerHTML = this.url;

        this.image1_thumbnailUrl = `<img src="${this.thumbnailUrl}">`;
        this.display_image.insertAdjacentHTML('afterbegin',this.image1_thumbnailUrl);
        */
    }


    /**
     * Créer l'interface du Loader
     * @param {void}
     */
    addButton() {
        // On regarde si la Zone du dom existe
        this.areaDom = document.querySelector(this.area);

        if (!this.areaDom)
            throw new Error(`LOADER : la zone du DOM "${this.area}" n'existe pas dans le document HTML`)


        // on créé le contenant du load (div avec la classe load)
        this.divLoad = document.createElement('div');
        this.divLoad.classList.add('load-btn');
        //this.divLoad.style.width = this.width;
        //this.divLoad.style.height = this.height;

        // On créé le bouton load
        this.btnLoad = document.createElement('button');
        this.btnLoad.classList.add('load');
        this.btnLoad.innerHTML = '<a class="load-btn">LOAD</a>';
        this.btnLoad.addEventListener('click', () => { this.load(this.url) });

        // On ajoute tout ça à la div content du LOADer
        this.divLoad.append(this.btnLoad);

        // On ajoute tout ça dans le DOM dans l'area proposée
        this.areaDom.appendChild(this.divLoad);

    }

    /* nextLot() {
        this.indexCurrentLot++;
        this.display(this.leJson);
    
    } */

    /**
    * Affichage des erreurs
    */
     displayError(e) {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error');

        errorDiv.textContent = e.toString();

        document.body.prepend(errorDiv);
    } 

}


export { LoadPicture }