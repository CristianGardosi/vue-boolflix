          // ********************************** \\
         // ???????????????????????????????????? \\

                    //   !BOOLFLIX!    \\

      // ??????????????????????????????????????????? \\
     // ********************************************* \\

const boloflix = new Vue ({
    el: "#boloflix",
    data: {

    },
    created() {
        // Targhettizziamo la API
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: 'd941bb4acf4132519ffe2318bdce1523'
            }
        })
        // Situazione di successo nella chiamata API
        .then( response => {
            console.log(response.data)
        })
        // Situazione di errore nella chiamata API
        .catch( error => {
            console.log(error)
        });
    },
    methods: {

    }






}); 