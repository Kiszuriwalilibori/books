import { sorting } from "./sorting";
import { BooksState, Book } from "types";

describe("sorting function", () => {
    const books: Book[] = [
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
        {
            id: "4",
            title: "Advanced React Patterns",
            authors: ["John Doe"],
            subtitle: "Modern Component Architecture",
            publishedDate: "2023",
            language: "en",
            categories: ["React", "JavaScript"],
        },
        {
            id: "5",
            title: "Python Basics",
            authors: ["Alice Johnson"],
            publishedDate: "2022",
            language: "pt",
            categories: ["Python", "Programming"],
        },
    ];

    it("should sort books by title in ascending order", () => {
        const result = sorting([...books], false, "title");
        expect(result.map(book => book.title)).toEqual(["Advanced React Patterns", "Eloquent JavaScript", "JavaScript: The Good Parts", "Python Basics", "You Don't Know JS"]);
    });

    it("should sort books by title in descending order", () => {
        const result = sorting([...books], true, "title");
        expect(result.map(book => book.title)).toEqual(["You Don't Know JS", "Python Basics", "JavaScript: The Good Parts", "Eloquent JavaScript", "Advanced React Patterns"]);
    });

    it("should sort books by publishedDate", () => {
        const result = sorting([...books], false, "publishedDate");
        expect(result.map(book => book.publishedDate)).toEqual(["2008", "2014", "2018", "2022", "2023"]);
    });

    it("should sort books by authors", () => {
        const result = sorting([...books], false, "authors");
        expect(result.map(book => book.authors[0])).toEqual(["Alice Johnson", "Douglas Crockford", "John Doe", "Kyle Simpson", "Marijn Haverbeke"]);
    });

    it("should sort books by language", () => {
        const result = sorting([...books], false, "language");
        expect(result.map(book => book.language)).toEqual(["en", "en", "en", "en", "pt"]);
    });

    it("should sort books by categories", () => {
        const result = sorting([...books], false, "categories");
        expect(result.map(book => book.categories.join(", "))).toEqual(["Programming, JavaScript", "Programming, JavaScript", "Programming, JavaScript", "Python, Programming", "React, JavaScript"]);
    });

    it("should handle books with missing optional fields", () => {
        const booksWithMissingFields: Book[] = [
            ...books,
            {
                id: "6",
                title: "Incomplete Book",
                authors: [],
                publishedDate: "",
                language: "",
                categories: [],
                // subtitle is omitted as it's optional
            },
        ];
        const result = sorting(booksWithMissingFields, false, "authors");
        expect(result[result.length - 1].title).toBe("Incomplete Book");
    });

    it("should handle empty array", () => {
        const result = sorting([], false, "title");
        expect(result).toEqual([]);
    });

    it("should handle books with complex author and category structures", () => {
        const complexBooks: Book[] = [
            ...books,
            {
                id: "7",
                title: "Complex Book",
                authors: ["Simple Author", { name: "Complex Author" }] as (string | { [key: string]: string })[],
                publishedDate: "2023",
                language: "en",
                categories: ["Simple Category", { name: "Complex Category" }] as (string | { [key: string]: string })[],
                subtitle: "Testing complex structures",
            },
        ];
        const result = sorting(complexBooks, false, "authors");
        expect(result[result.length - 1].title).toBe("Complex Book");
    });

    it("should return the original array if a non-sorting key is provided", () => {
        const result = sorting([...books], false, "id");
        expect(result).toEqual(books);
    });
});
