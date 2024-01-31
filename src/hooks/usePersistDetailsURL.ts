import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export const usePersistDetailsURL = (URL: string) => {
    const [storedURL, setStoredURL] = useLocalStorage("storedURL", "");

    useEffect(() => {
        URL && setStoredURL(URL);
    }, [URL]);

    return storedURL;
};

export default usePersistDetailsURL;
