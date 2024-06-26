import { Poppins } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ticker",
  description: "Time tracking and productivity app",
  icons: {
    icon: "/icons/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children} </Providers>
      </body>
    </html>
  );
}
