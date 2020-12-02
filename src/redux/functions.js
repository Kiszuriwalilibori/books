
import isEqual from "lodash/isEqual";
import { itemsPerPage } from "../fixtures/fixtures";
import { headers } from "../fixtures/fixtures";

// PAGINATION ///////////////////////////////////////////////////////////////////////

export const getNumberOfPages = (array) =>
  Math.ceil(array.length / itemsPerPage);

export const sliceSinglePageData = (index, array, threshold) => {
  if (index > threshold) index = threshold;

  const first = itemsPerPage * (index - 1);
  const last =
    first + itemsPerPage > array.length
      ? array.length
      : first + itemsPerPage;

  return array.slice(first, last);
};

// SORT /////////////////////////////////////////////////////////////////////////////////



const trimCustom = (string) => {
    while (string.charCodeAt(0) <= 64 && string.length > 1) {
      string = string.slice(1);
    }
    return string;
  };
  
  const trimNumerical = (string) => {
    while (string.charCodeAt(0) < 48 || string.charCodeAt(0) > 57) {
      string = string.slice(1);
    }
    return string;
  };
  
  export const sort = (table, logical, key) => {
    try{
      if(!Array.isArray(table)){throw new Error ('Attempt to call sort function with not an array as argument')}
      if(!table.length){ throw new Error('Attempt to sort an empty table')}
      if( key !== null){
      const getType = (k) => typeof table[0][k];
  
      let trim = key === 5 ? trimNumerical : trimCustom;
      const sorts = {
        string: (logical, key) => {
          table.sort((a, b) => {
            const x = trim(a[key]);
            const y = trim(b[key]);
  
            if (logical) {
              if (x < y) {
                return 1;
              }
              if (x > y) {
                return -1;
              }
              return 0;
            }
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });
        },
  
        number: (logical, key) => {
          table.sort((a, b) => {
            const x = a[key];
            const y = b[key];
  
            if (logical) {
              if (x < y) {
                return 1;
              }
              if (x > y) {
                return -1;
              }
              return 0;
            }
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });
        },
      };
      
      sorts[getType(key)](logical, key);
    }
    }
  
  catch(err){console.log(err.name, "\n", "\n", err.message, "\n", "\n", err.stack)}
  finally{return table;}
  
  };
  

// FILTRATE ////////////////////////////////////////////////////

const comparator = (pattern, val) => !!(String(val).toLowerCase().includes(String(pattern).toLowerCase()) || pattern === "" || pattern === undefined);  //porównuje dwa elementy


 export const filtrate = (data, filtr) => {
   const filterNotEmpty = !!(filtr && Object.getOwnPropertyNames(filtr).length);

   if (filterNotEmpty) {
     const temp = [...data];
     const pattern = headers.map((element) => {
       return filtr.hasOwnProperty(element) ? filtr[element] : "";
      
     });


      //compare two single-dimensional arrays with external compatrator function
     const compareRows = (patternVector, stringVector) => {
      
       let result = true;
       const equalLengths = patternVector.length === stringVector.length -1;
       if (equalLengths) {
         const fn = (element, index) => {
           const notEqual = comparator(element, stringVector[index]) === false;
           if (notEqual) {
             result = false;
           }
         };
         patternVector.forEach(fn);
       } else {
         result = false;
       }
       return result;
     };

     var filtrationResult = temp.filter((row) => compareRows(pattern, row)); /* performs actual filterBooks */
   }
   return filterNotEmpty ? filtrationResult : data;
 };

// REMOVE /////////////////////////////////////////////////////////////////////////////

export const remove = (array, pattern) => {

  let result = array;
  try{ 
    if(!Array.isArray(array)){throw new Error("Argument array in function remove is not actual array or is empty")}
    if(!Array.isArray(pattern)){throw new Error("Argument pattern in function remove is not actual array or is empty")}
    const comparator = (item) => !isEqual(item, pattern);
    result = array.filter(comparator);}
  catch(err){console.log(err.name, "\n", "\n", err.message, "\n", "\n", err.stack)}
  finally{return result;}
  
};


