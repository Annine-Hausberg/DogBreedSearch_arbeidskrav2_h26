import "./globals.css";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" >
      <body>
        <header>her kommer det en header</header>
        <main>{children}</main>
        <footer>her kommer det en footer</footer>
      </body>
      
    </html>
  );
}
