import join from "lodash/join";

import { columns } from "models";
import { Headers, FormattedFetchedRecord, BookRecordsArray } from "types";

class ReformatFetchedBooks {
  private static fields = columns.sourceFields;
  /**
   * Iterates any nested or simple object to find field with given key
   * @param obj object
   * @param key key being subject of iteration
   * @returns field with given key
   */
  protected static iterate(obj: { [key: string]: any }, key: string): Object | undefined {
    let result;
    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (property === key) {
          return obj[key];
        } else if (typeof obj[property] === "object") {
          result = ReformatFetchedBooks.iterate(obj[property], key);
          if (typeof result !== "undefined") {
            return result;
          }
        }
      }
    }
  }

  /**
   * creates record with keys taken from given array and values from given object(API data record)
   * @param record API data record
   * @returns object with keys from given array and values from API data record
   */
  private static createRecord(record: Object) {
    let rec = { ...record };
    const result: Headers = {};
    this.fields.forEach(field => {
      result[field] = this.iterate(rec, field);
    });
    return result;
  }

  /**
   * Function checks and corrects if needed values of given record. If field has been undefined originally, it receives value of single space. If it was empty string, it is replaced by single space. If array it is flattened.
   * @param record object with keys from given table and values from API record
   * @returns corrected record object
   */
  private static format(record: Headers): FormattedFetchedRecord {
    const result = { ...record };
    this.fields.forEach(field => {
      if (typeof result[field] === "undefined" || result[field] === "") {
        result[field] = " ";
      }
      if (Array.isArray(record[field])) {
        result[field] = join(result[field], ", ");
      }
    });

    return result;
  }
  /**
   * maps object values to array/ tricky - in the future the flow in .Run will finish with object. So this is temporary solution to have it inline with rest of app
   * @param obj
   * @returns array of strings ordered accordingly to array fields
   */
  private static backToArray(obj: FormattedFetchedRecord) {
    const result: string[] = [];
    this.fields.forEach(field => {
      result.push(obj[field]!);
    });

    return result;
  }
  static Run(ary: Object[]): BookRecordsArray {
    let result = ary.map(row => {
      return this.backToArray(this.format(this.createRecord(row)));
    });

    return result;
  }
}

export default ReformatFetchedBooks;
