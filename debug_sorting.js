// Debug script to test sorting behavior
const testBooks = [
    {
        id: "1",
        title: "Book A",
        authors: ["Zoe Author"],
        publishedDate: "", // Empty publishedDate
        language: "en",
        categories: ["Programming"],
    },
    {
        id: "2",
        title: "Book B",
        authors: ["Alice Author"],
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

const getValue = (item, key) => {
    const value = item[key];
    if (Array.isArray(value)) {
        return value.map(v => (typeof v === "object" ? Object.values(v).join(" ") : v)).join(", ");
    }
    return value ? String(value) : "";
};

const getValueWithFallback = (item, key) => {
    const value = getValue(item, key);
    if (!value && key !== "authors" && key !== "title" && key !== "id") {
        return getValue(item, "authors");
    }
    return value;
};

const hasValue = (item, key) => {
    const value = getValue(item, key);
    return !!value;
};

console.log("Testing publishedDate sorting:");
testBooks.forEach((book, i) => {
    console.log(`Book ${i + 1}:`);
    console.log(`  publishedDate: "${book.publishedDate}"`);
    console.log(`  hasValue(publishedDate): ${hasValue(book, "publishedDate")}`);
    console.log(`  getValueWithFallback(publishedDate): "${getValueWithFallback(book, "publishedDate")}"`);
    console.log(`  authors: ${JSON.stringify(book.authors)}`);
});

// Test the comparison
const book1 = testBooks[0]; // Zoe Author, empty publishedDate
const book2 = testBooks[1]; // Alice Author, empty publishedDate

console.log("\nComparing books with empty publishedDate:");
console.log(`Book1 (Zoe): hasValue=${hasValue(book1, "publishedDate")}, fallback="${getValueWithFallback(book1, "publishedDate")}"`);
console.log(`Book2 (Alice): hasValue=${hasValue(book2, "publishedDate")}, fallback="${getValueWithFallback(book2, "publishedDate")}"`);

const comparison = getValueWithFallback(book1, "publishedDate").localeCompare(getValueWithFallback(book2, "publishedDate"));
console.log(`Comparison result: ${comparison}`);
console.log(`"Zoe Author".localeCompare("Alice Author"): ${"Zoe Author".localeCompare("Alice Author")}`);
console.log(`"Alice Author".localeCompare("Zoe Author"): ${"Alice Author".localeCompare("Zoe Author")}`);
