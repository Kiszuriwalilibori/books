import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootStateType } from "types";
/**
 * Typed version of useSelector for Redux state, providing type safety for selectors.
 */
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export default useTypedSelector;
