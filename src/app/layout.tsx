import { Providers } from './providers';
import { GlobalTheme } from './main';

export { metadata } from './hooks/useConstants';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <GlobalTheme>{children}</GlobalTheme>
    </Providers>
  );
}
