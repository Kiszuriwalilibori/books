export const isErrorCode = (code: number): boolean => {
    return Boolean(code >= 400 && code <= 599);
};

export default isErrorCode;
