import Image from "next/image";
// import { Inter } from "next/font/google";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}
