import { Outfit } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";


const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "SmartScribe",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
         <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
