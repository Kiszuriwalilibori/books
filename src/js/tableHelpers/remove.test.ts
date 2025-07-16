import { remove } from "./remove";
import { BooksState, Book } from "types";

describe("remove function", () => {
    // Helper function to create mock books
    const createMockBooks = (count: number): BooksState["books"] => {
        return Array.from({ length: count }, (_, index) => ({
            id: `book-${index + 1}`,
            title: `Book ${index + 1}`,
            authors: [`Author ${index + 1}`],
            publishedDate: "2023",
            categories: ["Test"],
            language: "en",
        }));
    };

    describe("Happy Path", () => {
        it("should remove existing book", () => {
            const books = createMockBooks(5);
            const result = remove(books, "book-3");

            expect(result).toHaveLength(4);
            expect(result.find(book => book.id === "book-3")).toBeUndefined();
            expect(result.find(book => book.id === "book-1")).toBeDefined();
            expect(result.find(book => book.id === "book-2")).toBeDefined();
            expect(result.find(book => book.id === "book-4")).toBeDefined();
            expect(result.find(book => book.id === "book-5")).toBeDefined();
        });

        it("should remove first book", () => {
            const books = createMockBooks(3);
            const result = remove(books, "book-1");

            expect(result).toHaveLength(2);
            expect(result[0].id).toBe("book-2");
            expect(result[1].id).toBe("book-3");
        });

        it("should remove last book", () => {
            const books = createMockBooks(3);
            const result = remove(books, "book-3");

            expect(result).toHaveLength(2);
            expect(result[0].id).toBe("book-1");
            expect(result[1].id).toBe("book-2");
        });

        it("should remove from single book array", () => {
            const books = createMockBooks(1);
            const result = remove(books, "book-1");

            expect(result).toHaveLength(0);
            expect(result).toEqual([]);
        });
    });

    describe("Input Verification", () => {
        it("should handle non-existent book ID", () => {
            const books = createMockBooks(3);
            const result = remove(books, "non-existent-id");

            expect(result).toHaveLength(3);
            expect(result).toEqual(books);
        });

        it("should handle empty books array", () => {
            const books: BooksState["books"] = [];
            const result = remove(books, "book-1");

            expect(result).toHaveLength(0);
            expect(result).toEqual([]);
        });

        it("should handle undefined book ID", () => {
            const books = createMockBooks(3);
            const result = remove(books, undefined as any);

            expect(result).toHaveLength(3);
            expect(result).toEqual(books);
        });

        it("should handle null book ID", () => {
            const books = createMockBooks(3);
            const result = remove(books, null as any);

            expect(result).toHaveLength(3);
            expect(result).toEqual(books);
        });
    });

    describe("Branching", () => {
        it("should handle duplicate book IDs", () => {
            const books: BooksState["books"] = [
                { id: "book-1", title: "Book 1", authors: ["Author 1"], publishedDate: "2023", categories: ["Test"], language: "en" },
                { id: "book-2", title: "Book 2", authors: ["Author 2"], publishedDate: "2023", categories: ["Test"], language: "en" },
                { id: "book-1", title: "Book 1 Duplicate", authors: ["Author 1"], publishedDate: "2023", categories: ["Test"], language: "en" },
            ];

            const result = remove(books, "book-1");

            expect(result).toHaveLength(1);
            expect(result[0].id).toBe("book-2");
        });

        it("should maintain array order", () => {
            const books = createMockBooks(5);
            const result = remove(books, "book-3");

            expect(result[0].id).toBe("book-1");
            expect(result[1].id).toBe("book-2");
            expect(result[2].id).toBe("book-4");
            expect(result[3].id).toBe("book-5");
        });

        it("should not modify original array", () => {
            const books = createMockBooks(3);
            const originalBooks = [...books];

            remove(books, "book-2");

            expect(books).toEqual(originalBooks);
            expect(books).toHaveLength(3);
        });
    });

    describe("Exception Handling", () => {
        it("should handle books with missing id property", () => {
            const books: any[] = [
                { title: "Book without ID", authors: ["Author"], publishedDate: "2023", categories: ["Test"], language: "en" },
                { id: "book-2", title: "Book 2", authors: ["Author 2"], publishedDate: "2023", categories: ["Test"], language: "en" },
            ];

            const result = remove(books, "book-2");

            expect(result).toHaveLength(1);
            expect(result[0].title).toBe("Book without ID");
        });

        it("should handle books with null id property", () => {
            const books: any[] = [
                { id: null, title: "Book with null ID", authors: ["Author"], publishedDate: "2023", categories: ["Test"], language: "en" },
                { id: "book-2", title: "Book 2", authors: ["Author 2"], publishedDate: "2023", categories: ["Test"], language: "en" },
            ];

            const result = remove(books, "book-2");

            expect(result).toHaveLength(1);
            expect(result[0].title).toBe("Book with null ID");
        });

        it("should handle mixed data types in books array", () => {
            const books: any[] = [
                { id: "book-1", title: "Book 1", authors: ["Author 1"], publishedDate: "2023", categories: ["Test"], language: "en" },
                "not a book object",
                { id: "book-2", title: "Book 2", authors: ["Author 2"], publishedDate: "2023", categories: ["Test"], language: "en" },
                null,
                { id: "book-3", title: "Book 3", authors: ["Author 3"], publishedDate: "2023", categories: ["Test"], language: "en" },
            ];

            const result = remove(books, "book-2");

            expect(result).toHaveLength(3);
            expect(result.find(item => typeof item === "string")).toBeDefined();
            expect(result.find(item => item === null)).toBeUndefined(); // null items are filtered out
            expect(result.find(item => item?.id === "book-1")).toBeDefined();
            expect(result.find(item => item?.id === "book-3")).toBeDefined();
        });
    });
});
