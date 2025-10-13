import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getLocale} from 'next-intl/server';
import {routing, isSupportedLocale} from '@/i18n/routing';
import '../globals.css';

export const metadata = {
  // Title của tab cố định cho cả 2 ngôn ngữ
  title: 'Namtuyenle-portfolio-websites'
};

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return (routing.locales as readonly string[]).map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const locale = isSupportedLocale(params.locale) ? params.locale : routing.defaultLocale;
  const messages = await getMessages();
  const resolvedLocale = await getLocale();

  return (
    <html lang={resolvedLocale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={resolvedLocale}>
          <div className="container">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
