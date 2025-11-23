import AuthInitializer from "@/components/auth/AuthInitializer";
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
        <AuthInitializer />
        {children}
      </body>
    </html>
  );
}
