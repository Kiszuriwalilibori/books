import * as Comlink from Comlink





  /* eslint-disable-line no-restricted-globals */
  let startIndex = 0;
  const indexStep = 40; // defined by resource owner
  let temporaryStorage = [];
  var result = { error: false };
  var URL = e.data;
  
  async function recursiveSingleFetch(path) {
    const fullPath = path + startIndex.toString();
    try {
      const x = await fetch(fullPath);
      if (x) {
        const resp = await x.json();
        if (resp.items) {
          startIndex += indexStep;
          temporaryStorage = temporaryStorage.concat(resp.items);
          recursiveSingleFetch(path);
        } else {
          return(temporaryStorage);
        } /* eslint-disable-line no-restricted-globals */
      }
    } catch (e) {
      result.error = true;
      result.errorMessage = e.message;
      return(result); /* eslint-disable-line no-restricted-globals */
    }
  }

  class fetchWorker{
   
  recursiveSingleFetch(URL);
  }
  Comlink.expose(fetchWorker);




//   const workercode = () => {
//     console.log('fromworkercode');
//     self.onmessage =(e) => {/* eslint-disable-line no-restricted-globals */
//       console.log('from recursive', e);
//       let startIndex = 0;
//       const indexStep = 40; // defined by resource owner
//       let temporaryStorage = [];
//       var result = { error: false };
//       var URL = e.data;
//       console.log('beforerecursivedef',e.data + startIndex.toString() );

//       async function recursiveSingleFetch(path) {
//         console.log('fromrecursivesinglefetcg', path);
//         const fullPath = path + startIndex.toString();
//         try {
//           console.log('fetch', fetch);
//           const x = await fetch(fullPath);
//           console.log('x', x);
//           if (x) {
//             const resp = await x.json();
//             if (resp.items) {
//               startIndex += indexStep;
//               temporaryStorage = temporaryStorage.concat(resp.items);
//               recursiveSingleFetch(path);
//             }
//             else{self.postMessage(temporaryStorage)/* eslint-disable-line no-restricted-globals */}
//           }
//         } catch (e) {result.error = true;result.errorMessage = e.message;self.postMessage(result)/* eslint-disable-line no-restricted-globals */}

//       }
//       console.log('beforerecursivecall',e.data + startIndex.toString() );
//       recursiveSingleFetch(URL);
//       //self.postMessage(temporaryStorage);
//     }

//     }

// let code = workercode.toString();
// code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

// const blob = new Blob([code], {type: "application/javascript"});
// const worker = URL.createObjectURL(blob);
// console.log(worker);
// export default worker;
