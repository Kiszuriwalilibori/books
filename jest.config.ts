import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.css$": "<rootDir>/jest-config/style-mock.js",
        "^.+\\.jsx?$": "babel-jest",
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|jsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: "jsdom",
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    moduleNameMapper: {
        "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
        "^types/(.*)$": "<rootDir>/src/types/$1",
        "^types$": "<rootDir>/src/types",
        "^constants/(.*)$": "<rootDir>/src/constants/$1",
        "^config$": "<rootDir>/src/config",
        "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
        "^models/(.*)$": "<rootDir>/src/models/$1",
        "^components/(.*)$": "<rootDir>/src/components/$1",
        "^js/(.*)$": "<rootDir>/src/js/$1",
        "^pages/(.*)$": "<rootDir>/src/pages/$1",
        "^Routing/(.*)$": "<rootDir>/src/routing/$1",
        "^reducers/(.*)$": "<rootDir>/src/store/reducers/$1",
        "^actionCreators/(.*)$": "<rootDir>/src/store/actionCreators/$1",
        "^selectors/(.*)$": "<rootDir>/src/store/selectors/$1",
        "^selectors$": "<rootDir>/src/store/selectors",
        "^utils/(.*)$": "<rootDir>/src/utils/$1",
        "^utils$": "<rootDir>/src/utils",
        "^tableHelpers/(.*)$": "<rootDir>/src/tableHelpers/$1",
        "^tableHelpers$": "<rootDir>/src/tableHelpers",
    },
};

export default config;
