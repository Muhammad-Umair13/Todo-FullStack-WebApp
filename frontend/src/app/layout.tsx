import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";

export const metadata: Metadata = {
  title: "Phase II Todo App",
  description: "Full-Stack Multi-User Web Todo Application",
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-secondary-50 text-secondary-900">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
