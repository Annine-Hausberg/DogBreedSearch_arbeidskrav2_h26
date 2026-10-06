import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Header />
          <main>{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
