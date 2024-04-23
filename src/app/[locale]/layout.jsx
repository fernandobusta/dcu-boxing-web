import { Providers } from "./providers";
import { Layout } from "../../components/Layout";

import "../../styles/tailwind.css";

import { Inter } from "next/font/google";
import i18nConfig from "../../../i18nConfig";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s - DCU Boxing Club",
    default: "DCU Boxing Club",
  },
  description:
    "DCU Boxing Club is a student-run boxing club based in Dublin City University. We cater to all levels of experience, from complete beginners to competitive boxers.",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
