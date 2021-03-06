import { useEffect } from "react";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";

export default function Home() {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();

  useEffect(() => {
    dispatch({
      type: "CHANGE_THEME",
      payload: 0,
    });
  }, []);

  return (
    <div
      className="home"
      style={{
        color: currentTheme.textColor,
        background: currentTheme.backgroundColor,
      }}
    >
      Home Content
    </div>
  );
}
