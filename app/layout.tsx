import "./globals.css";

export const metadata = {
  title: "AI App Generator",
  description:
    "Metadata Driven Runtime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}