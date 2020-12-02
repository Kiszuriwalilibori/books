export default () => {

self.addEventListener("message", e => {/* eslint-disable-line no-restricted-globals */
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
        }
        else(self.postMessage(temporaryStorage)/* eslint-disable-line no-restricted-globals */)
      }
    } catch (e) {result.error = true;result.errorMessage = e.message;self.postMessage(result)/* eslint-disable-line no-restricted-globals */}
    
  }
  recursiveSingleFetch(URL);
}

);
}
