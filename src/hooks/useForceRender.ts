import { useEnhancedState } from ".";

export const useForceRender = () => {
    const [foo, forceUpdate] = useEnhancedState<boolean>(false);
    return forceUpdate;
};

export default useForceRender;
