          // ********************************** \\
         // ???????????????????????????????????? \\

                    //   !BOOLFLIX!    \\

      // ??????????????????????????????????????????? \\
     // ********************************************* \\

const boloflix = new Vue ({
    el: "#boloflix",
    data: {
        // Inizializzo search nei data  
        // Dinamicità = binding con la input text searchbar (V-MODEL)
        search: '',
        // Array FILM da popolare con i dati da API
        films: [],
        // Array FILM da popolare con i dati da API
        series: []
    },
    methods: {
        // Ricerca bindata con @keyUp al tasto invio e con il @click al button accanto alla barra di ricerca all'interno della quale inserisco i due metodi per cercare FILM e SERIE TV, in questo modo all'invio da parte dell'utente attraverso una delle due modalità a sua disposizione, grazie al lavoro delle due funzioni, visualizzo a schermo i risultati che matchano tra   richiesta utente <---> elementi presenti nell'array
        itemSearchByTheUser() {
            this.findFilms();
            this.findTvSeries();
          },
        // FindFilms & FindTvSeries funzionano allo stesso modo: costruisco aiutandomi con i params la mia chiamata API, dopodichè, se questa va a buon fine, utilizzo lo spread operator perchè mi consente di creare ad ogni nuova richiesta un array che si integra (ed in questo caso va a popolare) l'array Films & Series che ho inizializzato nei data.
        findFilms() {
            if (this.search) {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: 'd941bb4acf4132519ffe2318bdce1523',
                        query: this.search,
                    }
                })
                    .then(result => {
                        this.films = [...result.data.results];
                        
                    })
                    .catch(error => {
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
                .then(result => {
                    this.series = [...result.data.results];
                })
                .catch(error => {
                    console.log(error);
                });
            }
        },
        // La votazione originale fornita dall'API è decimale su una scala da 1/10, quello che voglio ottenere è la votazione su 5 anzichè su dieci punti ed intera anzichè decimale (arrotondata per eccesso)
        StarRating(num) {
            return Math.ceil(num / 2);
        },
    }






}); 