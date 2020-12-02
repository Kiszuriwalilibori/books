

export const fetchSingleBook = (redirect, id) => (dispatch) => { 
    fetch("https://www.googleapis.com/books/v1/volumes/"+id)
      .then(res => res.json())
      .then(json => {
        redirect.connecting();
        if (json.results) {
            dispatch(singleBooksDataFetched(json.results));
            redirect.singleBook();
        }
        else{
            redirect.not_found()
        }
    
    })
      .catch((error) => {
        const result ={
        error:true,
        errorMessage: error.message}
        dispatch(showError(result));
        redirect.error();

      })
      ;
  };