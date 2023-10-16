export const isErrorCode = (code: number) => {
    return Boolean(code >= 400 && code <= 599);
};

export default isErrorCode;
