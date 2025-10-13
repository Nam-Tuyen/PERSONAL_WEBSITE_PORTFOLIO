import createMiddleware from 'next-intl/middleware';
import {routing} from './src/i18n/routing';

export default createMiddleware({
  locales: routing.locales as unknown as string[],
  defaultLocale: routing.defaultLocale
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};
