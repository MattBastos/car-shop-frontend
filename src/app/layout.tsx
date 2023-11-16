import { Layout } from '@/components/Layout';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-gray-500">
        <Layout>
          <section className="pb-10 pt-20">{children}</section>
        </Layout>
      </body>
    </html>
  );
}
