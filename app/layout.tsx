import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { DoodleCursor } from "@/components/doodle-cursor";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    authors: [{ name: SITE_CONFIG.name }],
    robots: "index, follow",
    other: {
        "google-site-verification":
            "El1c2fjsv7jF1BGWfKXdISsilUhQ2WEieCpljtxwM8o",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <DoodleCursor />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
