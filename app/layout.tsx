import "./globals.css";
import Header from "@/components/ui/shared/Header";
import Footer from "@/components/ui/shared/Footer";
import Sidebar from "@/components/ui/shared/Sidebar";

export const metadata = {
  title: "AI App Generator",
  description: "Metadata Driven Runtime",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="max-w-7xl mx-auto px-6 mt-6 flex gap-6">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}