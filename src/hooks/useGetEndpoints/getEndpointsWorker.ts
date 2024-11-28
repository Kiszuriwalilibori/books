/* eslint-disable no-restricted-globals */
import createEndpoints from "./createEndpoints";

self.onmessage = function (event) {
    const { countURL, booksURL } = event.data;

    performAPICall(countURL)
        .then((responseData: any) => {
            const { totalItems } = responseData;
            if (totalItems) {
                const endpoints = createEndpoints(booksURL, totalItems);
                self.postMessage({ endpoints });
            } else {
                self.postMessage({ notFound: true });
            }
        })
        .catch(error => {
            self.postMessage({ error: error.message });
        });
};
self.onerror = function (e) {
    return true;
};

function performAPICall(url: string) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (response.ok) {
                    resolve(response.json());
                } else {
                    reject("API call failed with status: " + response.status);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}
