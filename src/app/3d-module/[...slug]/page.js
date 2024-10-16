"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { useParams } from "next/navigation";

const ThreeDModel = () => {
  const [modelSrc, setModelSrc] = useState("");

  const params = useParams();
  const { slug } = params;

  // Constructing url from slug
  const url = `https://${slug.join("/")}`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.type = "module";
    document.body.appendChild(script);

    // If dynamic slug is present, set the model source directly to the URL
    if (url) {
      setModelSrc(url);
    }
  }, [url]);

  return (
    <>
      <Head>
        <title>3D Model Viewer</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {modelSrc && (
        <model-viewer
          src={modelSrc}
          alt="A 3D model"
          auto-rotate
          camera-controls
          style={{ width: "600px", height: "600px" }}
        ></model-viewer>
        )}
      </div>
    </>
  );
};

export default ThreeDModel;
