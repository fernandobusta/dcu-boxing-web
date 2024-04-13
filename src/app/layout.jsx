import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

import "@/styles/tailwind.css";

export const metadata = {
  title: {
    template: "%s - DCU Boxing Club",
    default: "DCU Boxing Club - Dublin City University Boxing Club",
  },
  description:
    "DCU Boxing Club is a student-run boxing club based in Dublin City University. We cater to all levels of experience, from complete beginners to competitive boxers.",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
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
