import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { screens } from "./../data";
import Link from "next/link";
import SVG from "react-inlinesvg";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";

const Header = () => {
  const dispatch = useGlobalDispatchContext();
  const { themeId, currentTheme } = useGlobalStateContext();

  return (
    <div className="header">
      <div className="flex">
        <div className="logo">
          <Link href="/">
            <a>
              <h2 style={{ color: currentTheme.textColor }}>Burgeon</h2>
            </a>
          </Link>
        </div>
        <AnimateSharedLayout>
          <ol style={{ transform: "translateZ(0)" }}>
            {screens.map(({ title, url, icon }, i) => (
              <motion.li
                animate
                key={i}
                className={`title ${i === themeId && "selected"}`}
                onClick={() =>
                  dispatch({
                    type: "CHANGE_THEME",
                    payload: i,
                  })
                }
              >
                {i === themeId && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: currentTheme.textColor }}
                  />
                )}
                <Link href={url ? url : ""}>
                  <a
                    style={{
                      color: i === themeId ? currentTheme.textColor : "#fff",
                    }}
                  >
                    {i != themeId ? (
                      <SVG
                        src={icon}
                        style={{
                          color:
                            i === themeId ? currentTheme.textColor : "#fff",
                        }}
                      />
                    ) : (
                      title
                    )}
                  </a>
                </Link>
              </motion.li>
            ))}
          </ol>
        </AnimateSharedLayout>
      </div>
    </div>
  );
};

export default Header;
