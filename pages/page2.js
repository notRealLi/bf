import { useEffect } from "react";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";
import Sidebar from "../components/sidebar";

const Page2 = () => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();

  useEffect(() => {
    dispatch({
      type: "CHANGE_THEME",
      payload: 2,
    });
  }, []);

  return (
    <div
      className="page2"
      style={{
        color: currentTheme.textColor,
        background: currentTheme.backgroundColor,
      }}
    >
      <div className="flex">
        <Sidebar />
        <div className="page2-content">Projects Content</div>
      </div>
    </div>
  );
};

export default Page2;
