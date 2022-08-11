import { resetMessage } from "../Slices/postSlice";

export const useResetMessage = (dispatch) => {
  return () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };
};
