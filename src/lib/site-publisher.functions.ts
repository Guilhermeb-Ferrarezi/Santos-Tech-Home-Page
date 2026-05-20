import { createServerFn } from "@tanstack/react-start";

import {
  listPublishedSitesFromDisk,
  publishPublishedSiteFromFormData,
  removePublishedSiteFromDisk,
} from "./site-publisher.server";

export const listPublishedSites = createServerFn({ method: "GET" }).handler(async () => {
  return listPublishedSitesFromDisk();
});

export const publishPublishedSite = createServerFn({ method: "POST" })
  .inputValidator((data) => {
    if (!(data instanceof FormData)) {
      throw new Error("Expected FormData");
    }
    return data;
  })
  .handler(async ({ data }) => {
    return publishPublishedSiteFromFormData(data);
  });

export const deletePublishedSite = createServerFn({ method: "POST" })
  .inputValidator((data: { routePath: string; publisherSecret: string }) => data)
  .handler(async ({ data }) => {
    const expectedSecret =
      process.env.SITE_PUBLISHER_SECRET?.trim() ||
      (process.env.NODE_ENV === "production" ? "" : "dev-publicador");

    if (!expectedSecret) {
      throw new Error("Configure SITE_PUBLISHER_SECRET no ambiente do app.");
    }

    if (data.publisherSecret.trim() !== expectedSecret) {
      throw new Error("Chave de publicação inválida.");
    }

    await removePublishedSiteFromDisk(data.routePath);
    return { success: true };
  });
