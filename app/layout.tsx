import "./globals.css";

export const metadata = {
  title: "L&C Boutique",
  description: "Abbigliamento, scarpe e borse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
