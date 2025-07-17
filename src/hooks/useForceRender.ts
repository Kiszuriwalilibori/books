import { useEnhancedState } from ".";

export const useForceRender = () => {
    const [, forceUpdate] = useEnhancedState<boolean>(false);
    return forceUpdate;
};

export default useForceRender;
