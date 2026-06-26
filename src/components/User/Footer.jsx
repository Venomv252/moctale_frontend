import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Press", path: "/press" },
      { name: "Blog", path: "/blog" },
    ],
    Support: [
      { name: "Help Center", path: "/help" },
      { name: "Contact Us", path: "/contact" },
      { name: "FAQ", path: "/faq" },
      { name: "Feedback", path: "/feedback" },
    ],
    Legal: [
      { name: "Terms of Service", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Cookie Policy", path: "/cookies" },
      { name: "Disclaimer", path: "/disclaimer" },
    ],
    Browse: [
      { name: "Movies", path: "/movies" },
      { name: "Series", path: "/series" },
      { name: "Anime", path: "/anime" },
      { name: "Top Rated", path: "/top-rated" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: "📘",
      url: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "https://instagram.com",
    },
    {
      name: "YouTube",
      icon: "📺",
      url: "https://youtube.com",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="mx-auto max-w-md">
            <h3 className="mb-2 text-center text-lg font-bold text-white">
              Stay Updated
            </h3>
            <p className="mb-4 text-center text-sm text-gray-400">
              Subscribe to get updates on new releases and special offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-violet-600"
              />
              <button className="rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-pink-600">
                <span className="text-xl font-bold text-white">M</span>
              </div>
              <div>
                <p className="text-xl font-bold text-white">Moctale</p>
                <p className="text-xs text-gray-400">
                  © {currentYear} Moctale. All rights reserved.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow Us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-xl transition hover:bg-white/10"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Moctale is a modern movie discovery platform. All content is for
            demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
