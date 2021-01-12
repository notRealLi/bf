import { useEffect } from "react";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";

const Page1 = () => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();

  useEffect(() => {
    dispatch({
      type: "CHANGE_THEME",
      payload: 1,
    });
  }, []);

  return (
    <div
      className="page1"
      style={{
        color: currentTheme.textColor,
        background: currentTheme.backgroundColor,
      }}
    >
      Team Content
    </div>
  );
};

export default Page1;
