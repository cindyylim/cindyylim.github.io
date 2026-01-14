import './globals.css';
import ClientLayout from '../src/components/ClientLayout';

export const metadata = {
    title: 'Cindy Lim | Full Stack Portfolio',
    description: 'Crafting elegant digital experiences where sophisticated design meets powerful performance.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
