import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "store/index";



/**
 * Custom hook that binds all Redux action creators to dispatch for convenient usage in components.
 *
 * @returns {Object} Bound action creators
 */
const useDispatchAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};

export default useDispatchAction;
