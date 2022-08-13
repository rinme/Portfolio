import Link from "next/link";
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
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-col md:flex-row flex-1">
          <div className="drawer">
            <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label for="nav-drawer" className="btn btn-primary drawer-button">
                =
              </label>
            </div>
            <div className="drawer-side w-80">
              <label for="nav-drawer" className="drawer-overlay w-80"></label>
              <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                {menuItems.map(({ href, title }) => (
                  <li className="m-2" key={title}>
                    <Link href={href}>
                      <a>{title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
}
