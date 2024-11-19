"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Model = dynamic(() => import("./component/Model"), { ssr: false });
export default function Home() {
  return (
    <div className="max-w-8xl mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-6 flex-wrap justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <Model />
        </Suspense>
        <div>
          <h1 className="text-2xl font-bold text-nowrap"> Model 3D viewer</h1>
          <SyntaxHighlighter language="javascript" style={duotoneDark}>
            {` <model-viewer
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
      </model-viewer>`}
          </SyntaxHighlighter>
          <p className="text-xl font-bold text-nowrap">
            ref :{" "}
            <a
              target="blank"
              className="text-xl font-bold text-nowrap text-blue-700"
              href="https://modelviewer.dev/"
            >
              modelviewer.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
