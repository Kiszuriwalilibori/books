/* eslint-disable no-restricted-globals */

import { BookRecord } from "types";
//  const test = [
//      "https://www.googleapis.com/books/v1/volumes?q=intitle:kotek&maxResults=40&fields= items(id, volumeInfo/title, volumeInfo/authors, volumeInfo/publishedDate, volumeInfo/language, volumeInfo/categories,volumeInfo/subtitle )&startIndex=0",
//      "https://www.googleapis.com/books/v1/volumes?q=intitle:kotek&maxResults=40&fields= items(id, volumeInfo/title, volumeInfo/authors, volumeInfo/publishedDate, volumeInfo/language, volumeInfo/categories,volumeInfo/subtitle )&startIndex",
//  ];

self.onmessage = function (event) {
    const { arrayOfEndpoints, controller } = event.data;

    const books: BookRecord[] = [];
    const errors: string[] = [];
    const result: { books?: BookRecord[]; errors?: string[] } = {};

    Promise.allSettled(performAPICall(arrayOfEndpoints /*, controller*/)).then(results => {
        if (results && results.length) {
            results.forEach(result => {
                if (result.status === "fulfilled") {
                    if (result.value.error) {
                        errors.push(result.value.error.message || "Unknown error");
                    } else {
                        const items = result.value.items;
                        items && items.length && books.push(...items);
                    }
                } else {
                    errors.push(result.reason ? "Promise rejected: " + result.reason : "Promise rejected - Unknown error");
                }
            });
            if (books.length) result.books = books;
            if (errors.length) result.errors = errors;
            self.postMessage(result);
        }
    });
};
self.onerror = function (e) {
    return true;
};

function performAPICall(endpoints: string[] /*, controller: AbortController*/) {
    return endpoints.map(endpoint => fetch(endpoint /*, { signal: controller.signal }*/).then(res => res.json()));
}

//TODO: jeżeli jest kontroler odkomentowany to nigdy nie przestaje fetchować, przyjrzeć się bliżej temu
