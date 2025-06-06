import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Love at Bumble | A Bumble profile used for a marriage proposal',
    description: 'A Bumble profile used for a marriage proposal',
    robots: {
        index: false,
        follow: false
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
