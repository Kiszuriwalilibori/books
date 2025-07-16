import { validateInput } from "./validateInput";
import { SearchPageField } from "./model";

describe("validateInput with detailed validation", () => {
    it("should return valid result for empty fields", () => {
        const fields = {
            [SearchPageField.KEYWORD]: "",
            [SearchPageField.AUTHORS]: "",
            [SearchPageField.TITLE]: "",
            [SearchPageField.SUBJECT]: "",
        };

        const result = validateInput(fields);
        expect(result.isValid).toBe(true);
        expect(result.message).toBe("");
        expect(result.fieldErrors).toBeUndefined();
    });

    it("should return valid result for properly formatted fields", () => {
        const fields = {
            [SearchPageField.KEYWORD]: "javascript",
            [SearchPageField.AUTHORS]: "John Doe",
            [SearchPageField.TITLE]: "",
            [SearchPageField.SUBJECT]: "",
        };

        const result = validateInput(fields);
        expect(result.isValid).toBe(true);
        expect(result.message).toBe("");
        expect(result.fieldErrors).toBeUndefined();
    });

    it("should return detailed errors for single character input", () => {
        const fields = {
            [SearchPageField.KEYWORD]: "a",
            [SearchPageField.AUTHORS]: "",
            [SearchPageField.TITLE]: "",
            [SearchPageField.SUBJECT]: "",
        };

        const result = validateInput(fields);
        expect(result.isValid).toBe(false);
        expect(result.fieldErrors).toHaveLength(1);
        expect(result.fieldErrors![0].field).toBe(SearchPageField.KEYWORD);
        expect(result.fieldErrors![0].errors).toContain("musi zawierać co najmniej 2 znaki");
    });

    it("should return detailed errors for non-alphanumeric input", () => {
        const fields = {
            [SearchPageField.KEYWORD]: "!!!",
            [SearchPageField.AUTHORS]: "",
            [SearchPageField.TITLE]: "",
            [SearchPageField.SUBJECT]: "",
        };

        const result = validateInput(fields);
        expect(result.isValid).toBe(false);
        expect(result.fieldErrors).toHaveLength(1);
        expect(result.fieldErrors![0].errors).toContain("musi zawierać co najmniej jeden znak alfanumeryczny (litera lub cyfra)");
    });

    it("should return detailed errors for whitespace-only input", () => {
        const fields = {
            [SearchPageField.KEYWORD]: "   ",
            [SearchPageField.AUTHORS]: "",
            [SearchPageField.TITLE]: "",
            [SearchPageField.SUBJECT]: "",
        };

        const result = validateInput(fields);
        expect(result.isValid).toBe(false);
        expect(result.fieldErrors).toHaveLength(1);
        expect(result.fieldErrors![0].errors).toContain("nie może składać się tylko z białych znaków");
    });

    it("should return detailed errors for input with leading/trailing spaces", () => {
        const fields = {
            [SearchPageField.KEYWORD]: " test ",
            [SearchPageField.AUTHORS]: "",
            [SearchPageField.TITLE]: "",
            [SearchPageField.SUBJECT]: "",
        };

        const result = validateInput(fields);
        expect(result.isValid).toBe(false);
        expect(result.fieldErrors).toHaveLength(1);
        expect(result.fieldErrors![0].errors).toContain("nie może zaczynać się ani kończyć spacją");
    });

    it("should return detailed errors for input with forbidden characters", () => {
        const fields = {
            [SearchPageField.KEYWORD]: "test<script>",
            [SearchPageField.AUTHORS]: "",
            [SearchPageField.TITLE]: "",
            [SearchPageField.SUBJECT]: "",
        };

        const result = validateInput(fields);
        expect(result.isValid).toBe(false);
        expect(result.fieldErrors).toHaveLength(1);
        expect(result.fieldErrors![0].errors).toContain("zawiera niedozwolone znaki specjalne");
    });

    it("should return detailed errors for multiple fields with different issues", () => {
        const fields = {
            [SearchPageField.KEYWORD]: "a",
            [SearchPageField.AUTHORS]: "   ",
            [SearchPageField.TITLE]: "test<>",
            [SearchPageField.SUBJECT]: "",
        };

        const result = validateInput(fields);
        expect(result.isValid).toBe(false);
        expect(result.fieldErrors).toHaveLength(3);

        const keywordError = result.fieldErrors!.find(e => e.field === SearchPageField.KEYWORD);
        expect(keywordError?.errors).toContain("musi zawierać co najmniej 2 znaki");

        const authorsError = result.fieldErrors!.find(e => e.field === SearchPageField.AUTHORS);
        expect(authorsError?.errors).toContain("nie może składać się tylko z białych znaków");

        const titleError = result.fieldErrors!.find(e => e.field === SearchPageField.TITLE);
        expect(titleError?.errors).toContain("zawiera niedozwolone znaki specjalne");
    });
});
