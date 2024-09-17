"use client";

import Image from "next/image";
import darrenImage from "../images/darren.jpg";
import { useTranslation } from "react-i18next";

export default function Memorial() {
  const { t } = useTranslation();
  return (
    <div className="pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-zinc-50 dark:bg-black ring-zinc-100 ring-1 dark:ring-zinc-300/20 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <Image
                className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-2xl"
                src={darrenImage}
                alt=""
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <blockquote className="text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                <p>{t("darrenText")}</p>
              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="font-semibold">Darren Sutherland</div>
                <div className="mt-1 text-gray-400">{t("olympicBoxer")}</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
