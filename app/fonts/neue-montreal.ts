// app/fonts/neue-montreal.ts
import localFont from "next/font/local";

export const neueMontreal = localFont({
  src: [
    { path: "./PPNeueMontreal-Medium.otf", weight: "500", style: "normal" },
    { path: "./PPNeueMontreal-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
  preload: true,
});
