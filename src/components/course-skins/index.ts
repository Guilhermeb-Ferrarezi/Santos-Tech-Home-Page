import type { ComponentType } from "react";
import type { CourseTheme, CourseThemeKey } from "@/lib/course-themes";
import type { SkinProps } from "@/components/course-skins/shared";
import { InformaticaSkin, INFORMATICA_THEME } from "@/components/course-skins/informatica";
import { PlanilhaSkin, PLANILHA_THEME } from "@/components/course-skins/planilha";
import { IaSkin, IA_THEME } from "@/components/course-skins/ia";
import { IdeSkin, IDE_THEME } from "@/components/course-skins/ide";
import { TiSkin, TI_THEME } from "@/components/course-skins/ti";
import { OficinaSkin, OFICINA_THEME } from "@/components/course-skins/oficina";
import { DesignSkin, DESIGN_THEME } from "@/components/course-skins/design";
import { MarketingSkin, MARKETING_THEME } from "@/components/course-skins/marketing";

/** Cada categoria tem um layout próprio e uma paleta própria, não só uma cor. */
export const SKINS: Record<CourseThemeKey, { Skin: ComponentType<SkinProps>; theme: CourseTheme }> = {
  informatica: { Skin: InformaticaSkin, theme: INFORMATICA_THEME },
  office: { Skin: PlanilhaSkin, theme: PLANILHA_THEME },
  ia: { Skin: IaSkin, theme: IA_THEME },
  programacao: { Skin: IdeSkin, theme: IDE_THEME },
  ti: { Skin: TiSkin, theme: TI_THEME },
  "universo-3d": { Skin: OficinaSkin, theme: OFICINA_THEME },
  design: { Skin: DesignSkin, theme: DESIGN_THEME },
  marketing: { Skin: MarketingSkin, theme: MARKETING_THEME },
};
