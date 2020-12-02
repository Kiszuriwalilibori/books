// import { headers } from "../fixtures/fixtures";

// const comparator = (pattern, val) => !!(String(val).toLowerCase().includes(String(pattern).toLowerCase()) || pattern === "" || pattern === undefined);  //porównuje dwa elementy


//  export const filtrate = (data, filtr) => {
//    const filterNotEmpty = !!(filtr && Object.getOwnPropertyNames(filtr).length);

//    if (filterNotEmpty) {
//      const temp = [...data];
//       const pattern = headers.map((element) => {
//       return filtr.hasOwnProperty(element) ? filtr[element] : "";
      
//      });
//      const compareRows = (patternVector, stringVector) => {
      
//        let result = true;
//        const equalLengths = patternVector.length === stringVector.length -1;
//        if (equalLengths) {
//          const fn = (element, index) => {
//            const notEqual = comparator(element, stringVector[index]) === false;
//            if (notEqual) {
//              result = false;
//            }
//          };
//          patternVector.forEach(fn);
//        } else {
//          result = false;
//        }
//        return result;
//      };

//      var filtrationResult = temp.filter((row) => compareRows(pattern, row)); /* performs actual filterBooks */
//    }
//    return filterNotEmpty ? filtrationResult : data;
//  };

