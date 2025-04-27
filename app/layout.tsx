import { notoFont } from './font';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoFont.className} antialiased m-4 bg-neutral`}>
        <div className="bg-white shadow-lg rounded-lg min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
