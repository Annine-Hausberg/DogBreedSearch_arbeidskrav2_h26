import Header from "@/components/Header";
import "./globals.css";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" >
      <body>
      <Header />
        <main>{children}</main>
        <footer>her kommer det en footer</footer>
      </body>
      
    </html>
  );
}
