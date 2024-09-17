import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { SimpleLayout } from "../../../components/SimpleLayout";

import TranslationsProvider from "../../../components/TranslationsProvider";
import initTranslations from "../../i18n";
import Team from "../../../components/Team";
import CoachGrid from "../../../components/CoachGrid";

const i18nNamespaces = ["team", "common"];

export const metadata = {
  title: "The Team",
  description: "Meet the team behind DCU Boxing Club.",
};

export default async function TeamPage({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <SimpleLayout
        title={t("title")}
        intro="Meet the team behind DCU Boxing Club."
      >
        <Team />
        {/* <CoachGrid /> */}
      </SimpleLayout>
    </TranslationsProvider>
  );
}
