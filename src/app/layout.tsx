import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import '@/styles/globals.css';

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-slate-800">
        <Header />

        <Layout>
          <section className="pb-10 pt-20">{children}</section>
        </Layout>
      </body>
    </html>
  );
}
