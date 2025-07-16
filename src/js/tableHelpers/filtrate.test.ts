import { filtrate } from "js/tableHelpers";
import { BooksState, FilteringCondition, Book } from "types";

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
        {
            id: "4",
            title: "Advanced React Patterns",
            authors: ["John Doe", { firstName: "Jane", lastName: "Smith" }],
            subtitle: "Modern Component Architecture",
            publishedDate: "2023",
            language: "en",
            categories: ["React", { type: "framework", name: "JavaScript" }],
        },
        {
            id: "5",
            title: "Python Basics",
            authors: [{ author: "Alice Johnson" }],
            publishedDate: "2022",
            language: "pt",
            categories: ["Python", "Programming"],
        },
        {
            id: "6",
            title: "Empty Categories Book",
            authors: ["Test Author"],
            publishedDate: "2021",
            language: "es",
            categories: [],
        },
    ];

    describe("Basic filtering", () => {
        it("should return all books when no filter is applied", () => {
            const filter: FilteringCondition = {};
            const result = filtrate(books, filter);
            expect(result).toEqual(books);
        });

        it("should return all books when filter is undefined", () => {
            const result = filtrate(books, undefined);
            expect(result).toEqual(books);
        });

        it("should return original data when books array is empty", () => {
            const emptyBooks: BooksState["books"] = [];
            const filter: FilteringCondition = { title: "Test" };
            const result = filtrate(emptyBooks, filter);
            expect(result).toEqual(emptyBooks);
        });

        it("should return original data when books array is undefined", () => {
            const filter: FilteringCondition = { title: "Test" };
            const result = filtrate(undefined as any, filter);
            expect(result).toEqual(undefined);
        });
    });

    describe("String field filtering", () => {
        it("should filter books by title", () => {
            const filter: FilteringCondition = { title: "JavaScript" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[0], books[1]]);
        });

        it("should filter books by id", () => {
            const filter: FilteringCondition = { id: "3" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[2]]);
        });

        it("should filter books by language", () => {
            const filter: FilteringCondition = { language: "pt" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[4]]);
        });

        it("should filter books by publishedDate", () => {
            const filter: FilteringCondition = { publishedDate: "2008" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[0]]);
        });

        it("should filter books by subtitle", () => {
            const filter: FilteringCondition = { subtitle: "Modern" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[1], books[3]]);
        });

        it("should handle partial matches in string fields", () => {
            const filter: FilteringCondition = { title: "Java" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[0], books[1]]);
        });

        it("should be case insensitive", () => {
            const filter: FilteringCondition = { title: "JAVASCRIPT" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[0], books[1]]);
        });

        it("should return empty array if no books match the filter", () => {
            const filter: FilteringCondition = { title: "Nonexistent Book" };
            const result = filtrate(books, filter);
            expect(result).toEqual([]);
        });
    });

    describe("Array field filtering with strings", () => {
        it("should filter books by author (string array)", () => {
            const filter: FilteringCondition = { authors: "Kyle Simpson" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[2]]);
        });

        it("should filter books by category (string array)", () => {
            const filter: FilteringCondition = { categories: "Programming" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[0], books[1], books[2], books[4]]);
        });

        it("should handle partial matches in array strings", () => {
            const filter: FilteringCondition = { authors: "Douglas" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[0]]);
        });

        it("should be case insensitive for array strings", () => {
            const filter: FilteringCondition = { authors: "KYLE SIMPSON" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[2]]);
        });
    });

    describe("Array field filtering with objects", () => {
        it("should filter books by author object values", () => {
            const filter: FilteringCondition = { authors: "Jane" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[3]]);
        });

        it("should filter books by author object values (different key)", () => {
            const filter: FilteringCondition = { authors: "Smith" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[3]]);
        });

        it("should filter books by category object values", () => {
            const filter: FilteringCondition = { categories: "framework" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[3]]);
        });

        it("should filter books by category object values (different key)", () => {
            const filter: FilteringCondition = { categories: "JavaScript" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[0], books[1], books[2], books[3]]);
        });

        it("should handle case insensitivity for object values", () => {
            const filter: FilteringCondition = { authors: "ALICE JOHNSON" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[4]]);
        });
    });

    describe("Mixed array filtering", () => {
        it("should filter mixed arrays (strings and objects)", () => {
            const filter: FilteringCondition = { authors: "John Doe" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[3]]);
        });

        it("should filter mixed arrays finding object values", () => {
            const filter: FilteringCondition = { authors: "Jane" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[3]]);
        });

        it("should filter mixed category arrays", () => {
            const filter: FilteringCondition = { categories: "React" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[3]]);
        });
    });

    describe("Edge cases", () => {
        it("should handle empty filter values", () => {
            const filter: FilteringCondition = { title: "" };
            const result = filtrate(books, filter);
            expect(result).toEqual(books);
        });

        it("should handle filter values with only whitespace", () => {
            const filter: FilteringCondition = { title: "   " };
            const result = filtrate(books, filter);
            expect(result).toEqual(books);
        });

        it("should handle books with empty arrays", () => {
            const filter: FilteringCondition = { categories: "Programming" };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[0], books[1], books[2], books[4]]);
        });

        it("should handle books with missing optional fields", () => {
            const booksWithMissingSubtitle: Book[] = [
                {
                    id: "test",
                    title: "Test Book",
                    authors: ["Test Author"],
                    publishedDate: "2023",
                    language: "en",
                    categories: ["Test"],
                },
            ];
            const filter: FilteringCondition = { subtitle: "Test" };
            const result = filtrate(booksWithMissingSubtitle, filter);
            expect(result).toEqual([]);
        });

        it("should handle books with undefined field values", () => {
            const booksWithUndefinedField: Book[] = [
                {
                    id: "test",
                    title: "Test Book",
                    authors: ["Test Author"],
                    subtitle: undefined,
                    publishedDate: "2023",
                    language: "en",
                    categories: ["Test"],
                },
            ];
            const filter: FilteringCondition = { subtitle: "Test" };
            const result = filtrate(booksWithUndefinedField, filter);
            expect(result).toEqual([]);
        });
    });

    describe("Multiple filters", () => {
        it("should apply multiple filters (AND logic)", () => {
            const filter: FilteringCondition = {
                title: "JavaScript",
                authors: "Douglas",
            };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[0]]);
        });

        it("should return empty array when multiple filters don't match", () => {
            const filter: FilteringCondition = {
                title: "JavaScript",
                authors: "Nonexistent Author",
            };
            const result = filtrate(books, filter);
            expect(result).toEqual([]);
        });

        it("should handle multiple filters with mixed field types", () => {
            const filter: FilteringCondition = {
                categories: "React",
                language: "en",
                publishedDate: "2023",
            };
            const result = filtrate(books, filter);
            expect(result).toEqual([books[3]]);
        });
    });

    describe("Error handling", () => {
        it("should handle malformed book data gracefully", () => {
            const malformedBooks = [
                {
                    id: "1",
                    title: "Test Book",
                    authors: null,
                    publishedDate: "2023",
                    language: "en",
                    categories: ["Test"],
                },
            ] as any;

            const filter: FilteringCondition = { authors: "Test" };
            const result = filtrate(malformedBooks, filter);
            expect(result).toEqual([]);
        });

        it("should handle circular reference objects in arrays", () => {
            // Create a circular reference object
            const circularObj: any = { name: "Test" };
            circularObj.self = circularObj;

            const problematicBooks = [
                {
                    id: "1",
                    title: "Test Book",
                    authors: [circularObj],
                    publishedDate: "2023",
                    language: "en",
                    categories: ["Test"],
                },
            ] as any;

            const filter: FilteringCondition = { authors: "Test" };
            const result = filtrate(problematicBooks, filter);

            // Should still work despite circular reference
            expect(result).toEqual([problematicBooks[0]]);
        });
    });
});
