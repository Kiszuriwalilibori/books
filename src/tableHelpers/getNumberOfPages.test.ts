import { getNumberOfPages } from "./getNumberOfPages";
import { BooksState } from "types";
import { ITEMS_PER_PAGE } from "config";

describe("getNumberOfPages function", () => {
    // Helper function to create mock books array
    const createMockBooks = (count: number): BooksState["books"] => {
        return Array.from({ length: count }, (_, index) => ({
            id: `book-${index + 1}`,
            title: `Book ${index + 1}`,
            authors: [`Author ${index + 1}`],
            publishedDate: "2023",
            language: "en",
            categories: ["Test"],
        }));
    };

    describe("Happy Path", () => {
        it("should return correct number of pages for exact multiples", () => {
            const books = createMockBooks(10); // 10 books with ITEMS_PER_PAGE = 5
            const result = getNumberOfPages(books);
            expect(result).toBe(2); // 10 / 5 = 2
        });

        it("should return correct number of pages for non-exact multiples", () => {
            const books = createMockBooks(7); // 7 books with ITEMS_PER_PAGE = 5
            const result = getNumberOfPages(books);
            expect(result).toBe(2); // Math.ceil(7 / 5) = 2
        });

        it("should return 1 page for books count less than ITEMS_PER_PAGE", () => {
            const books = createMockBooks(3); // 3 books with ITEMS_PER_PAGE = 5
            const result = getNumberOfPages(books);
            expect(result).toBe(1); // Math.ceil(3 / 5) = 1
        });

        it("should return 1 page for exactly 1 book", () => {
            const books = createMockBooks(1);
            const result = getNumberOfPages(books);
            expect(result).toBe(1); // Math.ceil(1 / 5) = 1
        });

        it("should return correct number of pages for exactly ITEMS_PER_PAGE books", () => {
            const books = createMockBooks(ITEMS_PER_PAGE);
            const result = getNumberOfPages(books);
            expect(result).toBe(1); // Math.ceil(5 / 5) = 1
        });

        it("should return correct number of pages for ITEMS_PER_PAGE + 1 books", () => {
            const books = createMockBooks(ITEMS_PER_PAGE + 1);
            const result = getNumberOfPages(books);
            expect(result).toBe(2); // Math.ceil(6 / 5) = 2
        });
    });

    describe("Edge Cases", () => {
        it("should return 0 for empty array", () => {
            const emptyBooks: BooksState["books"] = [];
            const result = getNumberOfPages(emptyBooks);
            expect(result).toBe(0); // Math.ceil(0 / 5) = 0
        });

        it("should handle large arrays correctly", () => {
            const books = createMockBooks(100);
            const result = getNumberOfPages(books);
            expect(result).toBe(20); // Math.ceil(100 / 5) = 20
        });

        it("should handle very large arrays", () => {
            const books = createMockBooks(1000);
            const result = getNumberOfPages(books);
            expect(result).toBe(200); // Math.ceil(1000 / 5) = 200
        });
    });

    describe("Boundary Values", () => {
        it("should handle exactly 2 * ITEMS_PER_PAGE books", () => {
            const books = createMockBooks(2 * ITEMS_PER_PAGE);
            const result = getNumberOfPages(books);
            expect(result).toBe(2); // Math.ceil(10 / 5) = 2
        });

        it("should handle 2 * ITEMS_PER_PAGE + 1 books", () => {
            const books = createMockBooks(2 * ITEMS_PER_PAGE + 1);
            const result = getNumberOfPages(books);
            expect(result).toBe(3); // Math.ceil(11 / 5) = 3
        });

        it("should handle ITEMS_PER_PAGE - 1 books", () => {
            const books = createMockBooks(ITEMS_PER_PAGE - 1);
            const result = getNumberOfPages(books);
            expect(result).toBe(1); // Math.ceil(4 / 5) = 1
        });
    });

    describe("Math.ceil behavior verification", () => {
        it("should always round up partial pages", () => {
            // Test various lengths that should round up
            const testCases = [
                { length: 1, expected: 1 },
                { length: 4, expected: 1 },
                { length: 5, expected: 1 },
                { length: 6, expected: 2 },
                { length: 9, expected: 2 },
                { length: 10, expected: 2 },
                { length: 11, expected: 3 },
                { length: 14, expected: 3 },
                { length: 15, expected: 3 },
                { length: 16, expected: 4 },
            ];

            testCases.forEach(({ length, expected }) => {
                const books = createMockBooks(length);
                const result = getNumberOfPages(books);
                expect(result).toBe(expected);
            });
        });

        it("should return integer values only", () => {
            // Test that result is always an integer
            const testLengths = [1, 3, 7, 12, 23, 47, 99];

            testLengths.forEach(length => {
                const books = createMockBooks(length);
                const result = getNumberOfPages(books);
                expect(Number.isInteger(result)).toBe(true);
                expect(result).toBeGreaterThan(0);
            });
        });
    });

    describe("Type safety", () => {
        it("should work with proper BooksState type", () => {
            const books: BooksState["books"] = [
                {
                    id: "1",
                    title: "Test Book",
                    authors: ["Test Author"],
                    publishedDate: "2023",
                    language: "en",
                    categories: ["Test"],
                },
                {
                    id: "2",
                    title: "Another Book",
                    authors: ["Another Author"],
                    subtitle: "With subtitle",
                    publishedDate: "2022",
                    language: "fr",
                    categories: ["Test", "Fiction"],
                },
            ];

            const result = getNumberOfPages(books);
            expect(result).toBe(1); // Math.ceil(2 / 5) = 1
        });

        it("should work with books containing all optional fields", () => {
            const books: BooksState["books"] = [
                {
                    id: "1",
                    title: "Complete Book",
                    authors: ["Author One", "Author Two"],
                    subtitle: "A comprehensive guide",
                    publishedDate: "2023",
                    language: "en",
                    categories: ["Programming", "Technology"],
                },
            ];

            const result = getNumberOfPages(books);
            expect(result).toBe(1); // Math.ceil(1 / 5) = 1
        });
    });

    describe("Performance", () => {
        it("should handle large datasets efficiently", () => {
            const startTime = performance.now();
            const books = createMockBooks(10000);
            const result = getNumberOfPages(books);
            const endTime = performance.now();

            expect(result).toBe(2000); // Math.ceil(10000 / 5) = 2000
            expect(endTime - startTime).toBeLessThan(100); // Should complete in less than 100ms
        });
    });
});
