import { useEnhancedState } from ".";

/**
 * Custom hook to force a component re-render.
 *
 * @returns {Function} Function to trigger a re-render
 */
export const useForceRender = () => {
    const [, forceUpdate] = useEnhancedState<boolean>(false);
    return forceUpdate;
};

export default useForceRender;
