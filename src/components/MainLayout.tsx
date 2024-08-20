import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex justify-center align-center">
      <div className="lg:w-8/12 md:w-9/12 w-full px-4 sm:px-6 md:px-8 mx-auto">
        <Header />
        <main className="mt-12">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
