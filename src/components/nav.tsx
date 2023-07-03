'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import ShoppingCart from "./shopping-cart/shopping-cart";

const navLinks = [
  {
    title: "Home",
    href: '/',
  },
  {
    title: "Our Shop",
    href: '/category',
  },
  {
    title: "Contact Us",
    href: '/contact',
  },
]

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="main-nav">
      <Link href="/" className="logo">
        <img src="/images/logo.png" alt="" style={{width: '158px'}}/>
      </Link>

      <ul className="nav">
        {navLinks.map((navLink, key) => (
          <li key={key}>
            <Link className={pathname === navLink.href ? 'active' : ''} href={navLink.href}>{navLink.title}</Link>
          </li>
        ))}
      </ul>
      <ShoppingCart/>
      <a className="menu-trigger">
        <span>Menu</span>
      </a>
    </nav>
  )
}

export default Nav;
