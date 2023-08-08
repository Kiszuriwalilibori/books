# Google Books Finder with React, Redux, Router and Material UI

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## Objective of this project

-   Demonstrate knowledge of React, Redux, Router, Material UI
-   Be a a playground for exercising a.m. technologies
-   permit finding books in GoogleBooks database

### Features

-   Finds books in Google Books data base with the following keys -- author -- title -- subject/category
-   Filters results
-   Sorts results
-   stores chosen books as favorite on local computer
-   removes books
-   shows full information about books
-   redirects to online shop

### Tech

The following tools and resources has been used while developing Google Books

-   [ReactJS](https://reactjs.org/) - HTML enhanced for web apps!
-   [Visual Studio Code](https://code.visualstudio.com/) - awesome web-based text editor
-   [Webpack](https://webpack.js.org/) - bundles assets
-   [SASS/SCSS](https://sass-lang.com/) - CSS with superpowers
-   [Redux 4.0](https://redux.js.org/) - A Predictable State Container for JS Apps
-   [Material UI](https://material-ui.com/) - React components for faster and easier web development
-   [React Router](https://courses.reacttraining.com/p/react-router-5) - Declarative routing for React

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

### 1.4.7

### Todos

----001 convertToPolish pewnie trza by przerobić na mapę

-- 002 okazuje się, żo można dwukrotnie dodać książkę do pokaż pełne informacje co nie jest właściwe

-- 003 confirmation modal for deleting item

-- 004 To: <Grow in={true} timeout={1000}> <table className="table"> przerobić na 1 komponent

-- 005 SingleBook could be rendered with ReactQuery

-- 006 Do rozważenia czy nie przerobić switcha w tablebody na fabrykę funkcji. mógłby się nadać the commaqnd
pattern z learning Java Script Design patterns wzrorzec fajny carmanagerexecute do powyższego.

007 ewentualnie errory przez portal a nie podstronę

----008 set or map instead of object in case of sorting/filtering

-- 009 niejasne dlaczego nie łapię błędu kiedy strona detailed info niedostępna z powodu braku internetu ale
sprawdzić dokładniej czy napewno idzie proc błędu

010 Use the React-Redux Hooks API# -właściwie łapanie errora w fetch dziwnie wygląda czy nie prościej z ajaxem
to zrobić

--011 fetchsinglebook nie łapie errora kiedy dam do wyszukania jakiś dziwny adres

----012 w SearchSection pewenie by lepie useRef niż odwołania bezp do dom. Pózniej:nie stwierdzono.

----w chrome w sytuacji kiedy było otwarte w ff jednoczesnie przy wpisywaniu tytułu pojawiają się jakies
dziwne podpowiedzi. póxniej:nie stwierdzono

--013 <FullPageCenteredContainer> <CustomBox> <span className="notfound__item">Ojejku! coś poszło nie
tak:</span> <br /> <span className="notfound__item">{errorMessage}</span> </CustomBox>
</FullPageCenteredContainer> pojawia się dwa razy trzbe zrobić komponent z tego

--014 strony BooksNotFoundMessage i ConnectionErrorMessage importują podobną strukturę, przepisać z HOC

----015 przyjrzeć sie remove i removefromfavorites dokładnie w kontekście usuwania z ulubionych bo wygląda
dziwnie. Później: nie stwierdzono

--016 singlebook przeskakuje podczas używania klawisza do 'nastepny'.

--017 The problem is that someRef.current is mutable, so by the time the cleanup function runs, it may have
been set to null. The solution is to capture any mutable values inside the effect - stwierdzono podczas próby
upgradu do react 17.2

--018 podczas walidacji po np. wyczyszczeniu nie znika informacja o błędzie a powinna,poza tym wywala tylko
jedne błąd pola. Zawalczyć o yupa a przynajmniej poprawić

--019 przywalidacji jeżeli mamy jedno pole dobrze a jedno źle ogólnie mamy dobrze - do rozważenia

--020 nazwy błędnych pól zwracane przez walidację nie odpowiadają podpisom

--021 bookstablefilter mógłby być z Formikiem albo React Form Hooks

--022 po naciśnięciu Wyczyść powinien znikać komunikat o błędzie walidacji

--023 informacja o items in storage powinna w jakimś modalu a nie w konsoli

--024 prawdopodobnie jedynym sensem dalszego istnienia tablic placeholdersArray oraz
searchableFieldsNamesArray jest przerobienie ich na enumy, wziąć też pod uwagę nazwy wszystkich pól i zrobić
to raz a dobrze.

----025 strona indywidualnej książki po wybraniu na scho jest
pusta.<http://localhost:3000/books#/books/individual_book> Czy tak ma być czy komunikat o braku ksiązki do
wyświetlenia.

026 problem, co pojawi się na podstronie po wybraniu jej z palca na sucho bez żadnych danych. Zdaje się że to
przekrojowe zagadnienie wszystkich projektów do ogarnięcia przez referencje albo local storage. W
rzecyzwistości sprowadza się to do decyzji co do <http://localhost:3000/books#/books/books> czy ma być tabelka
pusta, czy nie.

----028 paginacja: kiedy usuwamy książki z widoku i dochodzi do jednej strony nadal widać guzik 'poprzedni' i
tak zostanie, tak to przyszło z materialUI

----030 Pagination przepisać na składnię funkcyjną albo inną z wyraźnym return i function dla testowania.
Chyba jednak nie, to jest Material a materiala nie testujemy.

031 To zwraca tabelę obiektów a apka jest przystosowana do tabeli tabel. Zadanie na daleką przyszłość to
przepisac na obiekty

--032 rzuca błąd po kliknięciu na tabeli ale NIE w guzik

--033 manipulator na function chaining

----034 nie działa persist, czy nie da się przerobić useLocalStorage z pakietu tak, żeby brało jak persist.
Raczej nie były próby liczne.

--035 typy BookRecord i BookRecordsArray prawdopodobnie dublują się z TableDataType i TableRow

--36 tableHelpers pewnie by lepiej było bardziej zintegrować z BooksManagerem

----037 Uwaga: wiadomy kotek łapie również Powrót Taty " zroku 1928" gdzie to jest w podtytułacha, sprawdzić
czy to tak ma właśnie być. Jeżeli tak to robi Google Books to nie poradzę

--38 Do przepisania na usedispatch: SnackBar/ToggleSnackbar

--39 naprawić działanie tooltipa przy guziku remove

--40 apka źle reaguje na błąd braku internetu, conajmniej przy pobieraniu detali oraz przy poczatkowym
wyszukiwaniu

41 poprawić test sortowania bo jest zmiana w metodzie sortowania (jest tabela którą trzeba by zmockować
zamiast używać magicznych wartości)

--42 propsy w <http://localhost:3000/books#/books/individual_book> wyglądają źle, trzeba pokombinować z ich
domyslnymi wartościami albo zrobić opcjonalne albo jedno i drugie.

43 dograć extended assertions i przejrzeć testy

44 przemysleć Action Button w połaczeniu z useGotoshop czy podobnymi konstrukcjami i podjąc decyzję czy
idziemy w tę stronę. Wtedy ewentualnie dopisac testy

45 Ze względu na zmiany w konstrukcji sprawdzanie pod kątem IE nie jest realizowane, czy da się to obejść.

46 pokombinować z szerokościami kolumn bo w tej chwili jest to zbyt płynne i się zmieniają w trakcie operacji
jak sortowanie i filtrowanie a to źle wygląda Prawdopodobnie wszystko zależy od szerokości samych kolumn tabeli. Żeby to przerobić chyba trrzeba by najpierw usunąć wewnętrzny span z td co na próbę jest zrobione w tablecellregular i dopiero wtedy zakładać width

### License

This software is distributed under MIT license

LinkButon.test.tsx zawiera dzialający przykład testu routingu

remove.ts łapanie błędu nie powinno być takie

rozważyć useCallback i React.useMemo szerzej, wszystkie createredirect w starym stylu były memoizowane
