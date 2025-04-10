import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Container from "@/components/ui/container";
import { SessionProvider } from "next-auth/react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Header showActions={true} />
      <main className="mb-auto pt-6">
        <Container>{children}</Container>
      </main>
      <Footer />
    </SessionProvider>
  );
};

export default RootLayout;
