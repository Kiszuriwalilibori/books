import { useCallback, useState } from 'react';

/**
 * Custom hook for managing boolean state with utility setters and toggler.
 *
 * @param initialValue - The initial boolean value (default: false)
 * @returns {[boolean, Function, Function, Function]} Array with value, setTrue, setFalse, toggle
 */
function useBoolean(initialValue: boolean = false) {
    const [value, setValue] = useState(initialValue);

    function setTrue() {
        setValue(true);
    }

    const setFalse = useCallback(() => {
        setValue(false);
    }, []);

    const toggle = useCallback(() => {
        setValue(!value);
    }, [value]);

    return [value, setTrue, setFalse, toggle] as const;
}

export default useBoolean;
