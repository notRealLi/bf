import { useEffect } from "react";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";

const Page4 = () => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();

  useEffect(() => {
    dispatch({
      type: "CHANGE_THEME",
      payload: 4,
    });
  }, []);

  return (
    <div
      className="page4"
      style={{
        color: currentTheme.textColor,
        background: currentTheme.backgroundColor,
      }}
    >
      Calendar Content
    </div>
  );
};

export default Page4;
