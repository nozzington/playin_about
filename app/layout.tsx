import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Next Big Thing",
  description: "Founder journey + portfolio + essays by The Next Big Thing"
};

const navItems = [
  ["Home", "/"],
  ["Spotlight", "/spotlight"],
  ["Projects", "/projects"],
  ["Essays", "/essays"],
  ["Contact/About", "/contact-about"]
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <header className="nav">
            <Link href="/" className="brand">THE NEXT BIG THING</Link>
            <nav className="nav-links">
              {navItems.map(([label, href]) => (
                <Link key={href} href={href} className="small">
                  {label}
                </Link>
              ))}
            </nav>
          </header>
          {children}
          <footer>© {new Date().getFullYear()} The Next Big Thing.</footer>
        </main>
      </body>
    </html>
  );
}
