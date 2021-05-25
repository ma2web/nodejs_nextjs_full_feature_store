import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useStyle from "./LanguageSelector.styles";
import { useChangeDirection, useChangePalette } from "theme/GolThemeProvider";

export const LanguageSelector: React.FC = () => {
  const classes = useStyle();
  const { locale, asPath, push } = useRouter();

  const setDirection = useChangeDirection();
  const setPalette = useChangePalette();

  useEffect(() => {
    if (locale === "en-US") {
      setDirection("ltr");
    } else {
      setDirection("rtl");
    }
  }, [locale]);

  const handleClick = (item: string) => {
    if (item === "fa-IR" || item === "ar-AR") {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }

    push(asPath, undefined, { locale: item, shallow: false });
  };

  return (
    <div className={classes.root}>
      <button onClick={() => handleClick("en-US")}>en</button>
      <button onClick={() => handleClick("fa-IR")}>fa</button>
      <button onClick={() => handleClick("ar-AR")}>ar</button>
      <button onClick={() => setPalette("Dark")}>dark</button>
      <button onClick={() => setPalette("Light")}>light</button>
    </div>
  );
};

LanguageSelector.displayName = "LanguageSelector";
export default LanguageSelector;