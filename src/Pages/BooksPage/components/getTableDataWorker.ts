/* eslint-disable no-restricted-globals */

self.onmessage = (e: MessageEvent<number>) => {
    const result = e.data * 2;

    // postMessage(result);
    self.postMessage(result);
};

export {};
