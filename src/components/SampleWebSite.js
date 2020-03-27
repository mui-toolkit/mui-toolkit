import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";

export default function SampleWebSite({ themeId }) {
  console.log("SampleWebSite -> themeId", themeId);

  const [previewTheme, setPreviewTheme] = useState({});

  useEffect(() => {
    const response = async () => {
      await db
        .collection("CustomizedThemes")
        .doc(`${themeId}`)
        .onSnapshot(doc => {
          console.log("CHOSEN PREVIEW THEME", doc.data());
          setPreviewTheme(doc.data());
        });
    };
    response();
  }, []);

  return <div>some dummy data</div>;
}
