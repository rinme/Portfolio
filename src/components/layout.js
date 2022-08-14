import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Header from "../components/header";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: "/",
      title: "Homepage",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];

  return (
    <>
      <Header />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "easeIn" }}
        className="
                    flex-1
                "
      >
        {children}
      </motion.main>
    </>
  );
}
