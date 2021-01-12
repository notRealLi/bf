import { useEffect } from "react";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";

const Page3 = () => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();

  useEffect(() => {
    dispatch({
      type: "CHANGE_THEME",
      payload: 3,
    });
  }, []);

  return (
    <div
      className="page3"
      style={{
        color: currentTheme.textColor,
        background: currentTheme.backgroundColor,
      }}
    >
      Documents Content
    </div>
  );
};

export default Page3;
