import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import '@/styles/globals.css';

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      </head>

      <body className="flex min-h-screen flex-col bg-background">
        <Header />

        <Layout>{children}</Layout>

        <Footer />
      </body>
    </html>
  );
}
