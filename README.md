# Google Books Finder with React, Redux, Router and Material UI

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)


# Objective of this project

  - Demonstrate knowledge of React, Redux, Router, Material UI
  - Be a a playground for exercising a.m. technologies
  - permit finding books in GoogleBooks database

### Features
- Finds books in Google Books data base with the following keys
-- author
-- title
-- subject/category
- Filters results
- Sorts results


### Tech

The following tools and resources has been used while developing Google Books

* [ReactJS](https://reactjs.org/) - HTML enhanced for web apps!
* [Visual Studio Code](https://code.visualstudio.com/) - awesome web-based text editor
* [Webpack](https://webpack.js.org/) - bundles assets
* [SASS/SCSS](https://sass-lang.com/) - CSS  with superpowers
* [Redux 4.0](https://redux.js.org/) - A Predictable State Container for JS Apps
* [Material UI](https://material-ui.com/) - React components for faster and easier web development
* [React Router](https://courses.reacttraining.com/p/react-router-5) - Declarative routing for React


### Installation

- Not required. Just open index.html in the browser

### Browser limitations

- No suppport provided for Opera Mini
- IE latest version is working yet with errors in rendering

### Version
#### 1.0.0
- initial
#### 1.1.0
- styled components removed totally. Only CSS and Material UI responsoble for styling
- more components defined as  child of Material UI basic components
- pagination is connected directly to store
- get-books fn connected directly to store (imports store and uses its dispatch directly) then Search is purely containter

#### 1.2.0
- get-books function rewritten to avoid try/catch large loops
- line spacing style in buttons rederfined for IE 11 

#### 1.2.1
- more tooltips
- initiated full 
#### 1.2.2

- full information about given books is implemented
- hover on table rows 
- better desktop navagability
- hover on moreinfo and remove buttons styled

#### 1.2.3
- buttons in Search Section are visible forom the beginning, but inactive
- fetching books now in WebWorker

### 1.2.4
- new functionality showing book details 
- combined reducers

### 1.2.5
- fixed bug with jumping buttons
- fixed bug with jumping width due to scroll presence

### Todos

 - Table in IE 11 looks dramatically
 - set or map instead of object in case of sorting/filtering
 - guzik do szczególow w wyszukiwaniu aktywny kiedy sa
 - confirmation modal for deleting item
- niejasne dlaczego nie łapię błędu kiedy strona detailed info niedostępna z powodu braku internetu ale       sprawdzić   dokładniej czy napewno idzie proc błędu
- Use the React-Redux Hooks API#
-właściwie łapanie errora w fetch dziwnie wygląda czy nie prościej z ajaxem to zrobić
- fetchsinglebook nie łapie errora kiedy dam do wyszukania jakiś dziwny adres

xxx w chrome w sytuacji kiedy było otwarte w ff jednoczesnie przy wpisywaniu tytułu pojawiają się jakies dziwne podpowiedzi
Jakiś problem prawdopodobnie z lokalizacją pliku webworkera

### License

This software is distributed under MIT license




@JankoWalski You could do something on the first click and then not do anything within half a second, like a debounce but handling the first and ignoring the other calls within a certain time frame: const debounceFirst = (fn, downTime = 500) => {   let active = true;   return (...args) => {     if (active) {       active = false;       fn(...args);     }     setTimeout(() => (active = true), downTime);   }; }; const yourNewActon = debounceFirst(deleteAction); //onClick={yourNewAction} – HMR 22 hours ago
