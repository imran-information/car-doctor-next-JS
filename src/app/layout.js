import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "material-react-toastify";
import 'material-react-toastify/dist/ReactToastify.css';
import NextAuthProvider from "@/Providers/NextAuthProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextAuthProvider>
          <NavBar />
          <ToastContainer />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
