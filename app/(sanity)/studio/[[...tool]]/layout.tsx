import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S.ai",
  description: "S.ai studio",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default Layout;
