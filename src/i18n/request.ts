import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Define Locale type from routing.locales
type Locale = (typeof routing.locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale: locale as Locale, // Assert that locale is of type Locale
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
