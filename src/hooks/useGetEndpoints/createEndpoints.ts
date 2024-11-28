import { MAX_RESULTS } from "config";

export const createEndpoints = (path: string, totalNumber: number) => {
    const numberOfPages = Math.ceil(totalNumber / MAX_RESULTS);
    let index = 0;
    let arrayOfEndpoints = [];
    do {
        arrayOfEndpoints.push(path + index * MAX_RESULTS);
        index++;
    } while (index < numberOfPages);
    return arrayOfEndpoints;
};

export default createEndpoints;
