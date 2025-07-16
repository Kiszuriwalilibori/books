# Google Books Finder with React, Redux, Router and Material UI

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## Project Overview

The Google Books Finder is a React-based web application that demonstrates proficiency in modern web development technologies. It allows users to search and explore books from the Google Books database.

## Objective of this project

-   Demonstrate knowledge of React, Redux, Router, Material UI
-   Be a a playground for exercising a.m. technologies
-   permit finding books in GoogleBooks database

### Features

-   Search for books by author, title, keywords or category
-   Filter and sort search results
-   Save favorite books locally
-   Remove books from the favorites list
-   View detailed information about each book
-   Redirect to an online bookstore for purchase

### Tech

-   **ReactJS**: User interface building
-   **Redux Toolkit**: State management
-   **React Router**: Navigation handling
-   **Material UI**: Pre-designed UI components
-   **TypeScript**: Static typing for improved code quality
-   **Jest & React Testing Library**: Unit and integration testing
-   **Webpack**: Asset bundling (managed by Create React App)
-   **SASS/SCSS**: Enhanced styling capabilities
-   **ESLint**: Code linting
-   **Prettier**: Code formatting
-   **Git**: Version control system

### Project Structure

-   `/src`: Main source code directory
    -   `/components`: Reusable UI components
    -   `/hooks`: Custom React hooks
    -   `/pages`: Page-level components
    -   `/redux`: Redux store, slices, and actions
    -   `/styles`: Global styles and theme configuration
    -   `/types`: TypeScript type definitions
    -   `/utils`: Utility functions and helpers

### Installation

-   Not required. Just open index.html in the browser

### Browser limitations

-   No suppport provided for Opera Mini
-   IE latest version is working yet with errors in rendering

### Version

#### 1.0.0

-   initial

#### 1.1.0

-   styled components removed totally. Only CSS and Material UI responsoble for styling
-   more components defined as child of Material UI basic components
-   pagination is connected directly to store
-   get-books fn connected directly to store (imports store and uses its dispatch directly) then Search is
    purely containter

#### 1.2.0

-   get-books function rewritten to avoid try/catch large loops
-   line spacing style in buttons rederfined for IE 11

#### 1.2.1

-   more tooltips
-   initiated full

#### 1.2.2

-   full information about given books is implemented
-   hover on table rows
-   better desktop navagability
-   hover on moreinfo and remove buttons styled

#### 1.2.3

-   buttons in Search Section are visible forom the beginning, but inactive
-   fetching books now in WebWorker

### 1.2.4

-   new functionality showing book details
-   combined reducers

### 1.2.5

-   fixed bug with jumping buttons
-   fixed bug with jumping width due to scroll presence

### 1.3.0

-   local storage implemented
-   generally revised code

### 1.3.1

-   better variable naming, some old code removed

### 1.3.2

-   reordered files to reflect pages structure

### 1.3.3

-   004 fixed
-   002 fixed
-   005 fixed
-   006 rejected
-   009 fixed
-   013 fixed
-   014 fixed
-   016 fixed

### 1.3.4

-   003 fixed
-   017 fixed

### 1.3.5

-   019 fixed

### 1.3.6

Routing elements rewritten with rendering props pattern

### 1.3.7

-   020 fixed besides, operations with search fields are more compact

### 1.3.8

-   022 fixed
-   025 fixed

### 1.3.9

-   023 fixed

### 1.4.0

-   001 rejected
-   008 rejected
-   027 fixed

### 1.4.1

-   024 fixed

### 1.4.2

-   021 fixed

### 1.4.3

-   028 declined
-   036 fixed

### 1.4.4

-   035 fixed, old files removed

### 1.4.5

-   40 solved
-   42 solved

### 1.4.8

-   redirect replaced with navigate for simplicity
-   no more button dataset related functionalities
-   names with "individualBook' replaced with "details"
-   alert functionality now with notistack for simplicity
-   some folders rearranged

### 1.4.9

-   Connecting Page eliminated, progress now directly on component.
-   NotFoundPage removed - error page does its job.
-   fetchBooksfrom Api now is a hook useFetchBooks.
-   on search page buttons disactivate on loading

### 1.5.0

-   Generally revised
-   Better error handling
-   Improved responsibility of table
-   Some files renamed
-   more strict typing

### 1.5.2

React updated to 18.2.0
Stricter typing of Favorites
removed dep. @mui/styles and babel-plugin-styled-components
removed withstyles in favor of styled
junk files removed
link to fetch details stored for re-fetch after page refresh

### 1.5.3

promise.allSettled for better fetching performance applied

### 1.5.4

When getting number of books, now only data for 1 is taken to limit transfer. Also, some redundant code is removed

### 1.5.5

050 fixed
better logic for updating component after localstorage change

### 1.5.9

regression. As Google Books API has changed, there was a need to update the implementation accordingly.It means come back to recursive fetching of books data

### 1.5.10

Rearrange SearchPage in order to follow single responsibility rule and make it more readable
fixed sorting and sorting test

### Todos

----001 convertToPolish pewnie trza by przerobić na mapę

----007 błędy przez notistacka a nie podstronę

----008 set or map instead of object in case of sorting/filtering

----010 Use the React-Redux Hooks API# -właściwie łapanie errora w fetch dziwnie wygląda czy nie prościej z ajaxem to zrobić

----015 przyjrzeć sie remove i removefromfavorites dokładnie w kontekście usuwania z ulubionych bo wygląda dziwnie. Później: nie stwierdzono

---- 018 podczas walidacji po np. wyczyszczeniu nie znika informacja o błędzie a powinna,poza tym wywala tylko jedne błąd pola. Zawalczyć o yupa a przynajmniej poprawić
Poza tym okienko walidacji przesuwa resztę w dół

----019 przywalidacji jeżeli mamy jedno pole dobrze a jedno źle ogólnie mamy dobrze - do rozważenia

--021 bookstablefilter mógłby być z Formikiem albo React Form Hooks

----025 strona indywidualnej książki po wybraniu na scho jest
pusta.<http://localhost:3000/books#/books/individual_book> Czy tak ma być czy komunikat o braku ksiązki do
wyświetlenia. Nie jest pusta. Jest komunikat, że nie dostarczono adresu.

----026 problem, co pojawi się na podstronie po wybraniu jej z palca na sucho bez żadnych danych. Zdaje się że to
przekrojowe zagadnienie wszystkich projektów do ogarnięcia przez referencje albo local storage. W
rzecyzwistości sprowadza się to do decyzji co do <http://localhost:3000/books#/books/books> czy ma być tabelka
pusta, czy nie. Byłbym chyba za komunikatem, że nie wybrano książek.

--028 paginacja: kiedy usuwamy książki z widoku i dochodzi do jednej strony nadal widać guzik 'poprzedni' i
tak zostanie, tak to przyszło z materialUI

--36 tableHelpers pewnie by lepiej było bardziej zintegrować z BooksManagerem

----037 Uwaga: wiadomy kotek łapie również Powrót Taty " zroku 1928" gdzie to jest w podtytułacha, sprawdzić
czy to tak ma właśnie być. Jeżeli tak to robi Google Books to nie poradzę

--38 Do przepisania na usedispatch: SnackBar/ToggleSnackbar

41 poprawić test sortowania bo jest zmiana w metodzie sortowania (jest tabela którą trzeba by zmockować
zamiast używać magicznych wartości)

--42 propsy w <http://localhost:3000/books#/books/individual_book> wyglądają źle, trzeba pokombinować z ich
domyslnymi wartościami albo zrobić opcjonalne albo jedno i drugie.

43 dograć extended assertions i przejrzeć testy

45 Ze względu na zmiany w konstrukcji sprawdzanie pod kątem IE nie jest realizowane, czy da się to obejść.

----046 modal ostrzegający przed uwunięciem maniebieską ramkę wskazującą na focusa Czy to musi być bo wygląda psakudnie a normalnie tego nie widuje się w modalach w modalu ostrzegającym przed usunięciem initial focus powinien być na pozostaw BYła próba ale chyba najpierw trzeba przerowbić cały modal. Na dzieńdobry modal jako całość ma focus. Żaden myk z initialfocus tego nie zmienia Aczkolwiek nawigacja wewnątrz działa.

--047 Sprawdzić czy takie uzycie getBooks w useEffect nie powoduje przepełnienia. Ogólnie tam, gdzie są pobierane i używane dane. Cofnąć się do artykułu na temat

--048 dziwna sytuacja z logiką po stronie API:

https://www.googleapis.com/books/v1/volumes?q=john
powyższe zwraca niby 773 rekordy
https://www.googleapis.com/books/v1/volumes?q=intitle:john
zwraca tylko 200. I każde gdzie jest intitle itd zwraca nie więcej niż 200
jeżeli tak będzie to trza by doać opcję keyword do wyszukiwania

----049 dwa razy zdarzył się przypadek, że po pobraniu z favorites i przesortowaniu zwracało pustą tabelę. Może sort wymaga uproszczenia w sensie wywalenia try catch

--050 jeżeli paginacja nie zawiera stron nie powinna być wogóle widoczna.

### License

This software is distributed under MIT license

Copyright © 2023 [Piotr Maksymiuk](https://github.com/Kiszuriwalilibori). All rights reserved.
