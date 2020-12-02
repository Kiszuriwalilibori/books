import join from "lodash/join";
import pick from "lodash/pick";
import { sourceFields } from "../fixtures/fixtures";
import fp from "lodash/fp";

const formatFetchedBooks = (table) => {
  const fields = [...sourceFields];

  function createChoice(obj, arr) {
    const x = pick(obj.volumeInfo, arr);
    x.id = obj.id;
    return x;
  }

  const processedTable = fp.flow(
    fp.map((element) => createChoice(element, fields)),
    fp.map((element) => {
      for (const x in element) {
        if (element[x] === "") {
          element[x] = " ";
        }
      }
      return element;
    }), // finds elements with empty string and changes it to space
    fp.map((element) => {
      fields.forEach((field) => {
        if (typeof element[field] === "undefined") element[field] = "";
      });
      return element;
    }), // finds elements where not all fields are declared and adds proper keys with value of space
    fp.map((element) => {
      for (const x in element) {
        if (Array.isArray(element[x])) {
          element[x] = join(element[x], ", ");
        }
      }
      return element;
    }), // transforms tables -if any to strings separated with ', '
    fp.map((element) => {
      const arr = [];
      fields.forEach((value) => {
        arr.push(element[value]);
      });
      return arr;
    }) // transforms object to table so that order is kept
    //fp.map((element)={})
  );

  const result = processedTable(table);
  postMessage(result);
};
export default formatFetchedBooks;
