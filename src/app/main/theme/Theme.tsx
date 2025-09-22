import { Inter } from 'next/font/google';

import 'normalize.css';
import './globals.css';

export interface Props {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export function GlobalTheme({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default GlobalTheme;
