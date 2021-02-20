import {googleAPI} from '../fixtures/fixtures';

export const fetchSingleBook = (redirect, id) => (dispatch) => { 
    fetch(googleAPI+id)
      .then(res => res.json())
      .then(json => {
        redirect.connecting();
        if (json.results) {
            dispatch(singleBooksDataFetched(json.results));
            redirect.data();
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
