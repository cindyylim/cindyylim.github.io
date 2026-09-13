import './globals.css';
import ClientLayout from '../src/components/ClientLayout';

export const metadata = {
    title: 'Cindy Lim — Projects',
    description: 'Full stack engineer.',
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
