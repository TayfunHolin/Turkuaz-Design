import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/docs-ui/Sidebar";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Finans Sabah — Design System",
  description: "Official design system and component library for Finans Sabah products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Sidebar />
        <main className={styles.main}>
          <div className={styles.content}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
