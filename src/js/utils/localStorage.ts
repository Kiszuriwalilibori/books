import { ApiResponse } from "types";

export type filteringFn = (item: any) => boolean;

const prefix = window.location.host;
export class LocalStorage {
  static addPrefix(key: string) {
    return prefix + key;
  }
  static removePrefix(key: string) {
    return key.replace(prefix, "");
  }

  static set<T>(key: string, value: T): void {
    localStorage.setItem(this.addPrefix(key), JSON.stringify(value));
  }
  static get(key: string) {
    return localStorage.getItem(this.addPrefix(key)) as string;
  }
  static remove(key: string) {
    localStorage.removeItem(this.addPrefix(key));
  }
  static clear() {
    localStorage.clear();
  }
  static key(index: number) {
    return localStorage.key(index);
  }

  static getAll() {
    let result = [];
    for (let key in localStorage) {
      if (key.includes(prefix)) {
        result.push(JSON.parse(this.get(this.removePrefix(key))));
      }
    }

    return result;
  }

  static getFilteredContent(fn: filteringFn) {
    let ary = this.getAll();
    let result = [];
    if (ary) {
      result = ary.filter(fn);
    }

    return result;
  }
  static isSupported() {
    let storage;
    try {
      storage = window["localStorage"];
      const foo = "__storage_test__";
      storage.setItem(foo, foo);
      storage.removeItem(foo);

      return true;
    } catch (e) {
      return !!(e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") && storage && storage.length !== 0);
    }
  }
}

export class FilteredStorage extends LocalStorage {
  data: ApiResponse[];

  constructor(fn: filteringFn) {
    super();
    this.data = LocalStorage.getFilteredContent(fn);
  }
  getLength() {
    return this.data.length;
  }
  hasContent() {
    return this.getLength() ? true : false;
  }
  hasCertainItem(fn: filteringFn) {
    return this.data.some(fn);
  }

  getAllItems() {
    return this.data;
  }
}
