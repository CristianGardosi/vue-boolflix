          // ********************************** \\
         // ???????????????????????????????????? \\

                    //   !BOOLFLIX!    \\

      // ??????????????????????????????????????????? \\
     // ********************************************* \\

const boloflix = new Vue ({
    el: "#purpleflix",
    data: {
        // Inizializzo search nei data e bindo il suo valore all'input text per la ricerca dei titoli (V-MODEL)
        search: '',
        // Array FILM da popolare con i dati da API + filtrati dalla ricerca dell'utente
        films: [],
        // Array FILM da popolare con i dati da API + filtrati dalla ricerca dell'utente
        series: [],
        // Array di linguaggi per i quali è disponibile un'immagine rappresentante la bandiera
        languageFlagsImg: ['it', 'en']
    },
    methods: {
        // Ricerca bindata con @keyUp al tasto invio e con il @click al button accanto alla barra di ricerca all'interno della quale inserisco i due metodi per cercare FILM e SERIE TV, in questo modo all'invio da parte dell'utente attraverso una delle due modalità a sua disposizione, grazie al lavoro delle due funzioni, visualizzo a schermo i risultati che matchano tra     RICHIESTA UTENTE       <--->        ELEMENTI NELL'ARRAY
        itemSearchByTheUser() {
            this.findFilms();
            this.findTvSeries();
        },
        // FindFilms & FindTvSeries funzionano allo stesso modo: costruisco aiutandomi con i params la mia chiamata API, dopodichè, se questa va a buon fine, fillo il mio array (films // series) con i dati ottenuti alla voce results dei data che è quella che contiene tutte le info che mi servirà printare a schermo
        findFilms() {
            if (this.search) {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: 'd941bb4acf4132519ffe2318bdce1523',
                        query: this.search,
                    }
                })
                    .then( result => {
                        this.films = result.data.results;
                        
                    })
                    .catch( error => {
                        console.log(error);
                    });
            }
        },
        findTvSeries() {
            if (this.search) {
                axios.get('https://api.themoviedb.org/3/search/tv',{
                    params: {
                            api_key: 'd941bb4acf4132519ffe2318bdce1523',
                            query: this.search
                    }
                })
                    .then( result => {
                        this.series = result.data.results;
                    })

                    .catch( error => {
                        console.log(error);
                    });
            }
        },
        // Utility per pescare il poster all'interno dell'API e successivamente bindarlo all'img src nell'HTML
        getPoster(poster){
            return `http://image.tmdb.org/t/p/w185/${poster}`
        },
        // La votazione originale fornita dall'API è decimale su una scala da 1/10, quello che voglio ottenere è la votazione su 5 anzichè su dieci punti ed intera anzichè decimale (arrotondata per eccesso)
        StarRating(num) {
            return Math.ceil(num / 2);
        },
        // Utility per capire se il linguaggio originale del film è uno di quelli di cui ho la bandierina img ed è quindi appartente all'array languageFlagsImg o meno
        isAFlaggedLanguage(language){
            return this.languageFlagsImg.includes(language) 
        },
        // Inserimento immagine bandierina se presente nell'array
        getFlag(language) {
            return `./img/${language}.png`
        }
    }
}); 