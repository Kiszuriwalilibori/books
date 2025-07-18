import { getSinglePageData } from "./getSinglePageData";
import { BooksState } from "types";
import { ITEMS_PER_PAGE } from "config";

describe("getSinglePageData function", () => {
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
        it("should return correct data for first page", () => {
            const books = createMockBooks(12); // 12 books, 3 pages with ITEMS_PER_PAGE = 5
            const result = getSinglePageData(1, books);

            expect(result).toHaveLength(5);
            expect(result[0].id).toBe("book-1");
            expect(result[4].id).toBe("book-5");
        });

        it("should return correct data for middle page", () => {
            const books = createMockBooks(12); // 12 books, 3 pages
            const result = getSinglePageData(2, books);

            expect(result).toHaveLength(5);
            expect(result[0].id).toBe("book-6");
            expect(result[4].id).toBe("book-10");
        });

        it("should return correct data for last page with partial data", () => {
            const books = createMockBooks(12); // 12 books, last page has 2 items
            const result = getSinglePageData(3, books);

            expect(result).toHaveLength(2);
            expect(result[0].id).toBe("book-11");
            expect(result[1].id).toBe("book-12");
        });

        it("should return correct data for last page with exact page size", () => {
            const books = createMockBooks(10); // 10 books, 2 complete pages
            const result = getSinglePageData(2, books);

            expect(result).toHaveLength(5);
            expect(result[0].id).toBe("book-6");
            expect(result[4].id).toBe("book-10");
        });

        it("should return all data when books count is less than page size", () => {
            const books = createMockBooks(3); // 3 books, 1 page
            const result = getSinglePageData(1, books);

            expect(result).toHaveLength(3);
            expect(result[0].id).toBe("book-1");
            expect(result[2].id).toBe("book-3");
        });

        it("should return exactly ITEMS_PER_PAGE items for full page", () => {
            const books = createMockBooks(ITEMS_PER_PAGE); // Exactly 5 books
            const result = getSinglePageData(1, books);

            expect(result).toHaveLength(ITEMS_PER_PAGE);
            expect(result[0].id).toBe("book-1");
            expect(result[ITEMS_PER_PAGE - 1].id).toBe(`book-${ITEMS_PER_PAGE}`);
        });
    });

    describe("Index Boundary Handling", () => {
        it("should return last page data when index exceeds page limit", () => {
            const books = createMockBooks(12); // 3 pages
            const result = getSinglePageData(5, books); // Requesting page 5, but only 3 exist

            expect(result).toHaveLength(2); // Last page has 2 items
            expect(result[0].id).toBe("book-11");
            expect(result[1].id).toBe("book-12");
        });

        it("should return last page data when index is exactly at limit", () => {
            const books = createMockBooks(10); // 2 pages
            const result = getSinglePageData(2, books);

            expect(result).toHaveLength(5);
            expect(result[0].id).toBe("book-6");
            expect(result[4].id).toBe("book-10");
        });

        it("should handle index much greater than limit", () => {
            const books = createMockBooks(7); // 2 pages
            const result = getSinglePageData(100, books);

            expect(result).toHaveLength(2); // Last page has 2 items
            expect(result[0].id).toBe("book-6");
            expect(result[1].id).toBe("book-7");
        });
    });

    describe("Edge Cases", () => {
        it("should return empty array when data array is empty", () => {
            const emptyBooks: BooksState["books"] = [];
            const result = getSinglePageData(1, emptyBooks);

            expect(result).toHaveLength(0);
            expect(result).toEqual([]);
        });

        it("should handle index 0", () => {
            const books = createMockBooks(7);
            const result = getSinglePageData(0, books);

            // first = 5 * (0 - 1) = -5, last = -5 + 5 = 0
            // array.slice(-5, 0) with array length 7: slice(2, 0) returns empty array
            expect(result).toHaveLength(0);
            expect(result).toEqual([]);
        });

        it("should handle negative index", () => {
            const books = createMockBooks(7);
            const result = getSinglePageData(-1, books);

            // first = 5 * (-1 - 1) = -10, last = -10 + 5 = -5
            // array.slice(-10, -5) with array length 7: slice(0, 2) returns first 2 elements
            expect(result).toHaveLength(2);
            expect(result[0].id).toBe("book-1");
            expect(result[1].id).toBe("book-2");
        });

        it("should handle single book array", () => {
            const books = createMockBooks(1);
            const result = getSinglePageData(1, books);

            expect(result).toHaveLength(1);
            expect(result[0].id).toBe("book-1");
        });

        it("should handle large datasets", () => {
            const books = createMockBooks(100);
            const result = getSinglePageData(10, books); // Page 10

            expect(result).toHaveLength(5);
            expect(result[0].id).toBe("book-46"); // (10-1) * 5 + 1 = 46
            expect(result[4].id).toBe("book-50"); // 46 + 4 = 50
        });
    });

    describe("Input Verification", () => {
        it("should handle non-integer index", () => {
            const books = createMockBooks(10);
            const result = getSinglePageData(1.5, books);

            // JavaScript will treat 1.5 as 1.5 in calculations
            // first = 5 * (1.5 - 1) = 2.5, last = 2.5 + 5 = 7.5
            // slice(2.5, 7.5) becomes slice(2, 7)
            expect(result).toHaveLength(5);
            expect(result[0].id).toBe("book-3"); // Index 2 in 0-based array
        });

        it("should handle string index", () => {
            const books = createMockBooks(10);
            const result = getSinglePageData("2" as any, books);

            // String "2" will be coerced to number 2
            expect(result).toHaveLength(5);
            expect(result[0].id).toBe("book-6");
        });
    });

    describe("Boundary Values", () => {
        it("should handle exactly 2 * ITEMS_PER_PAGE books", () => {
            const books = createMockBooks(2 * ITEMS_PER_PAGE); // 10 books
            const result = getSinglePageData(2, books);

            expect(result).toHaveLength(5);
            expect(result[0].id).toBe("book-6");
            expect(result[4].id).toBe("book-10");
        });

        it("should handle 2 * ITEMS_PER_PAGE + 1 books", () => {
            const books = createMockBooks(2 * ITEMS_PER_PAGE + 1); // 11 books
            const result = getSinglePageData(3, books);

            expect(result).toHaveLength(1);
            expect(result[0].id).toBe("book-11");
        });

        it("should handle ITEMS_PER_PAGE - 1 books", () => {
            const books = createMockBooks(ITEMS_PER_PAGE - 1); // 4 books
            const result = getSinglePageData(1, books);

            expect(result).toHaveLength(4);
            expect(result[0].id).toBe("book-1");
            expect(result[3].id).toBe("book-4");
        });

        it("should handle ITEMS_PER_PAGE + 1 books", () => {
            const books = createMockBooks(ITEMS_PER_PAGE + 1); // 6 books
            const result = getSinglePageData(2, books);

            expect(result).toHaveLength(1);
            expect(result[0].id).toBe("book-6");
        });
    });

    describe("Array Slice Behavior", () => {
        it("should return correct slice for various page positions", () => {
            const books = createMockBooks(23); // 5 pages (5, 5, 5, 5, 3)

            // Test each page
            const page1 = getSinglePageData(1, books);
            expect(page1).toHaveLength(5);
            expect(page1[0].id).toBe("book-1");
            expect(page1[4].id).toBe("book-5");

            const page2 = getSinglePageData(2, books);
            expect(page2).toHaveLength(5);
            expect(page2[0].id).toBe("book-6");
            expect(page2[4].id).toBe("book-10");

            const page3 = getSinglePageData(3, books);
            expect(page3).toHaveLength(5);
            expect(page3[0].id).toBe("book-11");
            expect(page3[4].id).toBe("book-15");

            const page4 = getSinglePageData(4, books);
            expect(page4).toHaveLength(5);
            expect(page4[0].id).toBe("book-16");
            expect(page4[4].id).toBe("book-20");

            const page5 = getSinglePageData(5, books);
            expect(page5).toHaveLength(3);
            expect(page5[0].id).toBe("book-21");
            expect(page5[2].id).toBe("book-23");
        });

        it("should maintain original array data integrity", () => {
            const books = createMockBooks(10);
            const originalBooks = [...books]; // Create a copy

            const result = getSinglePageData(1, books);

            // Original array should not be modified
            expect(books).toEqual(originalBooks);
            expect(result).not.toBe(books); // Should be a new array
        });
    });

    describe("Type Safety", () => {
        it("should work with proper BooksState type", () => {
            const books: BooksState["books"] = [
                {
                    id: "1",
                    title: "Test Book 1",
                    authors: ["Author 1"],
                    publishedDate: "2023",
                    language: "en",
                    categories: ["Test"],
                },
                {
                    id: "2",
                    title: "Test Book 2",
                    authors: ["Author 2"],
                    subtitle: "With subtitle",
                    publishedDate: "2022",
                    language: "fr",
                    categories: ["Test", "Fiction"],
                },
            ];

            const result = getSinglePageData(1, books);

            expect(result).toHaveLength(2);
            expect(result[0].id).toBe("1");
            expect(result[1].id).toBe("2");
        });

        it("should preserve all book properties in result", () => {
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

            const result = getSinglePageData(1, books);

            expect(result).toHaveLength(1);
            expect(result[0]).toEqual(books[0]);
            expect(result[0].subtitle).toBe("A comprehensive guide");
            expect(result[0].authors).toEqual(["Author One", "Author Two"]);
        });
    });

    describe("Performance", () => {
        it("should handle large datasets efficiently", () => {
            const books = createMockBooks(10000);
            const startTime = performance.now();

            const result = getSinglePageData(1000, books);

            const endTime = performance.now();

            expect(result).toHaveLength(5);
            expect(endTime - startTime).toBeLessThan(50); // Should complete in less than 50ms
        });

        it("should not create unnecessary copies of large arrays", () => {
            const books = createMockBooks(1000);
            const result = getSinglePageData(50, books);

            expect(result).toHaveLength(5);
            expect(result[0].id).toBe("book-246"); // (50-1) * 5 + 1 = 246
        });
    });
});
