import { sorting } from "./sorting";
import { Book } from "types";

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

    it("should fall back to sorting by authors when categories are empty", () => {
        const booksWithEmptyCategories: Book[] = [
            {
                id: "1",
                title: "Book A",
                authors: ["Zoe Author"],
                publishedDate: "2020",
                language: "en",
                categories: [], // Empty categories
            },
            {
                id: "2",
                title: "Book B",
                authors: ["Alice Author"],
                publishedDate: "2021",
                language: "en",
                categories: [], // Empty categories
            },
            {
                id: "3",
                title: "Book C",
                authors: ["Bob Author"],
                publishedDate: "2022",
                language: "en",
                categories: ["Programming"], // Has categories
            },
        ];

        const result = sorting(booksWithEmptyCategories, false, "categories");
        // Books with empty categories should be sorted by authors (Alice, Zoe)
        // Book with categories should come first (sorted by category value)
        expect(result.map(book => book.authors[0])).toEqual(["Bob Author", "Alice Author", "Zoe Author"]);
    });

    it("should fall back to sorting by authors when subtitle is empty", () => {
        const booksWithEmptySubtitles: Book[] = [
            {
                id: "1",
                title: "Book A",
                authors: ["Zoe Author"],
                publishedDate: "2020",
                language: "en",
                categories: ["Programming"],
                subtitle: "", // Empty subtitle
            },
            {
                id: "2",
                title: "Book B",
                authors: ["Alice Author"],
                publishedDate: "2021",
                language: "en",
                categories: ["Programming"],
                subtitle: "", // Empty subtitle
            },
            {
                id: "3",
                title: "Book C",
                authors: ["Bob Author"],
                publishedDate: "2022",
                language: "en",
                categories: ["Programming"],
                subtitle: "A Great Subtitle", // Has subtitle
            },
        ];

        const result = sorting(booksWithEmptySubtitles, false, "subtitle");
        // Books with empty subtitles should be sorted by authors (Alice, Zoe)
        // Book with subtitle should come first (sorted by subtitle value)
        expect(result.map(book => book.authors[0])).toEqual(["Bob Author", "Alice Author", "Zoe Author"]);
    });

    it("should fall back to sorting by authors when subtitle is undefined", () => {
        const booksWithUndefinedSubtitles: Book[] = [
            {
                id: "1",
                title: "Book A",
                authors: ["Zoe Author"],
                publishedDate: "2020",
                language: "en",
                categories: ["Programming"],
                // subtitle is undefined
            },
            {
                id: "2",
                title: "Book B",
                authors: ["Alice Author"],
                publishedDate: "2021",
                language: "en",
                categories: ["Programming"],
                // subtitle is undefined
            },
            {
                id: "3",
                title: "Book C",
                authors: ["Bob Author"],
                publishedDate: "2022",
                language: "en",
                categories: ["Programming"],
                subtitle: "A Great Subtitle", // Has subtitle
            },
        ];

        const result = sorting(booksWithUndefinedSubtitles, false, "subtitle");
        // Books with undefined subtitles should be sorted by authors (Alice, Zoe)
        // Book with subtitle should come first (sorted by subtitle value)
        expect(result.map(book => book.authors[0])).toEqual(["Bob Author", "Alice Author", "Zoe Author"]);
    });

    it("should fall back to sorting by authors when publishedDate is empty", () => {
        const booksWithEmptyPublishedDate: Book[] = [
            {
                id: "2",
                title: "Book B",
                authors: ["Alice Author"],
                publishedDate: "", // Empty publishedDate
                language: "en",
                categories: ["Programming"],
            },
            {
                id: "1",
                title: "Book A",
                authors: ["Zoe Author"],
                publishedDate: "", // Empty publishedDate
                language: "en",
                categories: ["Programming"],
            },
            {
                id: "3",
                title: "Book C",
                authors: ["Bob Author"],
                publishedDate: "2022", // Has publishedDate
                language: "en",
                categories: ["Programming"],
            },
        ];

        const result = sorting(booksWithEmptyPublishedDate, false, "publishedDate");

        // Books with empty publishedDate should be sorted by authors (Alice, Zoe)
        // Book with publishedDate should come first
        expect(result.map(book => book.authors[0])).toEqual(["Bob Author", "Alice Author", "Zoe Author"]);
    });

    it("should fall back to sorting by authors when language is empty", () => {
        const booksWithEmptyLanguage: Book[] = [
            {
                id: "1",
                title: "Book A",
                authors: ["Zoe Author"],
                publishedDate: "2020",
                language: "", // Empty language
                categories: ["Programming"],
            },
            {
                id: "2",
                title: "Book B",
                authors: ["Alice Author"],
                publishedDate: "2021",
                language: "", // Empty language
                categories: ["Programming"],
            },
            {
                id: "3",
                title: "Book C",
                authors: ["Bob Author"],
                publishedDate: "2022",
                language: "en", // Has language
                categories: ["Programming"],
            },
        ];

        const result = sorting(booksWithEmptyLanguage, false, "language");
        // Books with empty language should be sorted by authors (Alice, Zoe)
        // Book with language should come first
        expect(result.map(book => book.authors[0])).toEqual(["Bob Author", "Alice Author", "Zoe Author"]);
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
