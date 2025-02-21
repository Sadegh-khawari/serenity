import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Serenity Stays",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
