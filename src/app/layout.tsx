import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Finsight360",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
        {children}
      </body>
    </html>
  );
}
