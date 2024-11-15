import "./globals.css";
import { Roboto, Poppins } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Test task",
  description: "Test task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div
          id="root"
          className="flex flex-col items-center justify-start w-[100%]"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
