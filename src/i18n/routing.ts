export const routing = {
  locales: ['vi', 'en'] as const,
  defaultLocale: 'vi'
};

export type Locale = (typeof routing.locales)[number];

export function isSupportedLocale(input?: string | null): input is Locale {
  return !!input && (routing.locales as readonly string[]).includes(input);
}
