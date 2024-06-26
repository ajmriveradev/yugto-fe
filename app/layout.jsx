import "./globals.css";
import { Orelega_One } from 'next/font/google';

const orelega_one_init = Orelega_One({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-orelega-one'
})

export const metadata = {
  title: "Yugto",
  description: "Bantayan ang paglaki ng iyong mga anak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={orelega_one_init.variable}>
        <div style={{ height: "100vh", width: "100vw" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
