"use client";

import { useEffect, useRef } from "react";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src?: string;
  poster?: string;
  alt?: string;
  "auto-rotate"?: boolean;
  "camera-controls"?: boolean;
  ar?: boolean;
  "ar-modes"?: string;
  "ios-src"?: string;
  "environment-image"?: string;
  exposure?: string;
  "shadow-intensity"?: string;
  "shadow-softness"?: string;
  "animation-name"?: string;
  autoplay?: boolean;
  "field-of-view"?: string;
  "orbit-sensitivity"?: string;
  "min-camera-orbit"?: string;
  "max-camera-orbit"?: string;
  "camera-target"?: string;
  "touch-action"?: string;
  loading?: "auto" | "lazy" | "eager";
  reveal?: "auto" | "interaction" | "manual";
  style?: React.CSSProperties;
}

const ModelViewer = () => {
  const modelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleLoad = () => {
      console.log("Model loaded successfully");
    };

    const modelViewer = modelRef.current;
    modelViewer?.addEventListener("load", handleLoad);

    return () => {
      modelViewer?.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="w-full  max-w-[800px] h-[600px] rounded-lg overflow-hidden">
      <model-viewer
        ref={modelRef}
        src="/model/cartoon_sports_car.glb"
        poster="/model/image.png"
        ios-src="/model/image.png"
        alt="A 3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        environment-image="neutral"
        shadow-intensity="1"
        shadow-softness="1"
        exposure="1"
        field-of-view="45deg"
        min-camera-orbit="auto auto 5%"
        max-camera-orbit="auto auto 100%"
        camera-target="0m 0.5m 0m"
        touch-action="pan-y"
        loading="eager"
        reveal="auto"
        style={{
          width: "100%",
          height: "100%",
          padding: 24,
          backgroundColor: "#232323",
        }}
      >
        <div
          slot="poster"
          className="w-full h-full bg-gray-800 flex items-center justify-center"
        >
          <div className="text-white">Loading 3D Model...</div>
        </div>
      </model-viewer>
    </div>
  );
};

export default ModelViewer;
