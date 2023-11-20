"use client";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcReading,
  FcReadingEbook,
  FcBiomass,
  FcBiotech,
  FcCalculator,
  FcCrystalOscillator,
  FcCurrencyExchange,
  FcGlobe,
  FcNeutralDecision,
  FcCollaboration,
  FcClock,
  FcTemplate,
  FcViewDetails,
  FcVoicePresentation,
} from "react-icons/fc";

import { Category } from "@prisma/client";
import { IconType } from "react-icons";
import { SubjectItem } from "./subject-item";

interface SubjectsProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  Matematika: FcCalculator,
  IPA: FcCrystalOscillator,
  "Bahasa Indonesia": FcReading,
  "Bahasa Inggris": FcReadingEbook,
  "Matematika Wajib": FcMultipleDevices,
  "Matematika Peminatan": FcFilmReel,
  Fisika: FcCrystalOscillator,
  Kimia: FcBiomass,
  Biologi: FcBiotech,
  Ekonomi: FcCurrencyExchange,
  Geografi: FcGlobe,
  Sosiologi: FcNeutralDecision,
  "Sejarah Indonesia": FcClock,
  "Sejarah Peminatan": FcTemplate,
  "Penalaran Umum": FcEngineering,
  "PK & Penalaran Matematika": FcViewDetails,
  "PBM, PPU, dan Literasi B.Indonesia": FcVoicePresentation,
  "Literasi Bahasa Inggris": FcCollaboration,
};

export const Subjects = ({ items }: SubjectsProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <SubjectItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
