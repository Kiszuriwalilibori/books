
export function finishWhenInternetExplorer( ){
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);
    
    if ( isIE ) {
      window.location = "https://kiszuriwalilibori.github.io/IE/";
    }
  
  }