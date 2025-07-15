import { filtrate } from "js/tableHelpers";
import { BooksState, FilteringCondition } from "types";

describe("filtrate function", () => {
    const books: BooksState["books"] = [
        {
            id: "1",
            title: "JavaScript: The Good Parts",
            authors: ["Douglas Crockford"],
            subtitle: "Unearthing the Excellence in JavaScript",
            publishedDate: "2008",
            language: "en",
            categories: ["Programming", "JavaScript"],
        },
        {
            id: "2",
            title: "Eloquent JavaScript",
            authors: ["Marijn Haverbeke"],
            subtitle: "A Modern Introduction to Programming",
            publishedDate: "2018",
            language: "en",
            categories: ["Programming", "JavaScript"],
        },
        {
            id: "3",
            title: "You Don't Know JS",
            authors: ["Kyle Simpson"],
            subtitle: "Scope & Closures",
            publishedDate: "2014",
            language: "en",
            categories: ["Programming", "JavaScript"],
        },
    ];

    it("should return all books when no filter is applied", () => {
        const filter: FilteringCondition = {};
        const result = filtrate(books, filter);
        expect(result).toEqual(books);
    });

    it("should filter books by title", () => {
        const filter: FilteringCondition = { title: "JavaScript" };
        const result = filtrate(books, filter);
        expect(result).toEqual([books[0], books[1]]);
    });

    it("should filter books by author", () => {
        const filter: FilteringCondition = { authors: "Kyle Simpson" };
        const result = filtrate(books, filter);
        expect(result).toEqual([books[2]]);
    });

    it("should filter books by category", () => {
        const filter: FilteringCondition = { categories: "JavaScript" };
        const result = filtrate(books, filter);
        expect(result).toEqual(books);
    });

    it("should return an empty array if no books match the filter", () => {
        const filter: FilteringCondition = { title: "Nonexistent Book" };
        const result = filtrate(books, filter);
        expect(result).toEqual([]);
    });
});
