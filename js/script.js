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
    },
    created() {
        // Targhettizziamo la API
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: 'd941bb4acf4132519ffe2318bdce1523',
                query: 'blue shining',
                language: 'it-IT'
            }
        })
        // Situazione di successo nella chiamata API
        .then( response => {
            console.log(response.data.results)
        })
        // Situazione di errore nella chiamata API
        .catch( error => {
            console.log(error)
        });
    },
    methods: {
        // Ricerca bindata con @keyUp al tasto invio e con il @click al button accanto alla barra di ricerca
        startSearch(){
            console.log(this.search.trim().toLowerCase());
        }
    }






}); 