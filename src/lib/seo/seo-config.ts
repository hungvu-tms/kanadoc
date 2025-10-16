import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "Kanadoc | 神奈川県医師会",
  description: "Kanadoc | 神奈川県医師会",
  keywords: ["Kanadoc", "hospital", "doctor", "SEO"],
  openGraph: {
    title: "Kanadoc | 神奈川県医師会",
    description: "Kanadoc | 神奈川県医師会",
    url: "https://domain.com/",
    siteName: "Kanadoc | 神奈川県医師会",
    images: [
      {
        url: "https://domain.com/logoMain.svg",
        width: 1200,
        height: 630,
        alt: "Kanadoc",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanadoc | 神奈川県医師会",
    description: "Kanadoc | 神奈川県医師会",
    images: ["https://domain.com/logoMain.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};
