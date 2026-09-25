import type { ComponentType } from "react";
import type { CourseTheme, CourseThemeKey } from "@/lib/course-themes";
import type { SkinProps } from "@/components/course-skins/shared";
import { COURSE_THEMES } from "@/components/course-skins/themes";
import { InformaticaSkin } from "@/components/course-skins/informatica";
import { PlanilhaSkin } from "@/components/course-skins/planilha";
import { IaSkin } from "@/components/course-skins/ia";
import { IdeSkin } from "@/components/course-skins/ide";
import { TiSkin } from "@/components/course-skins/ti";
import { OficinaSkin } from "@/components/course-skins/oficina";
import { DesignSkin } from "@/components/course-skins/design";
import { MarketingSkin } from "@/components/course-skins/marketing";

/** Cada categoria tem um layout próprio e uma paleta própria, não só uma cor. */
export const SKINS: Record<CourseThemeKey, { Skin: ComponentType<SkinProps>; theme: CourseTheme }> = {
  informatica: { Skin: InformaticaSkin, theme: COURSE_THEMES.informatica },
  office: { Skin: PlanilhaSkin, theme: COURSE_THEMES.office },
  ia: { Skin: IaSkin, theme: COURSE_THEMES.ia },
  programacao: { Skin: IdeSkin, theme: COURSE_THEMES.programacao },
  ti: { Skin: TiSkin, theme: COURSE_THEMES.ti },
  "universo-3d": { Skin: OficinaSkin, theme: COURSE_THEMES["universo-3d"] },
  design: { Skin: DesignSkin, theme: COURSE_THEMES.design },
  marketing: { Skin: MarketingSkin, theme: COURSE_THEMES.marketing },
};
