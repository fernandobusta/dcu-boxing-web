"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import coaches from "../images/photos/image-4.jpg";

export default function Team() {
  const { t } = useTranslation();

  return (
    <div>
      <Image src={coaches} />
    </div>
  );
}
