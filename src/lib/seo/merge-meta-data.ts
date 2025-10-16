import { Metadata } from "next";
import { defaultMetadata } from "./seo-config";

export function mergeMetadata(meta?: Metadata): Metadata {
  return {
    ...defaultMetadata,
    ...meta,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...meta?.openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...meta?.twitter,
    },
  };
}
