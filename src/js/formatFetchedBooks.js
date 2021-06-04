import join from "lodash/join";
import pick from "lodash/pick";
import { sourceFields } from "../fixtures/fixtures";
import fp from "lodash/fp";

const formatFetchedBooks = table => {
  const fields = [...sourceFields];
  function createChoice(obj, arr) {
    const x = pick(obj.volumeInfo, arr);
    x.id = obj.id;
    return x;
  }

  const processedTable = fp.flow(
    fp.map(element => createChoice(element, fields)),
    fp.map(element => {
      for (const x in element) {
        if (element[x] === "") {
          element[x] = " ";
        }
      }
      return element;
    }), 
    fp.map(element => {
      fields.forEach(field => {
        if (typeof element[field] === "undefined") element[field] = "";
      });
      return element;
    }), 
    fp.map(element => {
      for (const x in element) {
        if (Array.isArray(element[x])) {
          element[x] = join(element[x], ", ");
        }
      }
      return element;
    }), 
    fp.map(element => {
      const arr = [];
      fields.forEach(value => {
        arr.push(element[value]);
      });
      return arr;
    }) 
  );
  return processedTable(table);
};
export default formatFetchedBooks;
