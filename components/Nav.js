import React, { useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Projects" },
  { href: "#socials", label: "Connect" },
].map((link) => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}));

const Nav = () => {
  useEffect(() => {
    window.onscroll = function () {
      toggleSticky();
    };

    const navbar = document.getElementById("navbar");

    const sticky = navbar.offsetTop;

    const toggleSticky = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };
  });

  return (
    <nav
      id="navbar"
      className="flex justify-center bg-indigo-900 border-b-4 border-teal-300 top-0 w-full z-10"
    >
      <ul className="max-w-screen-xl w-full h-16 flex justify-center">
        {links.map(({ key, href, label }) => (
          <li key={key} className="self-center">
            <a
              href={href}
              className="font-heading font-light lg:text-xl mx-5 text-gray-200 hover:text-red-600 transition-easing"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
