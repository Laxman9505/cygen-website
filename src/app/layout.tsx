/** @format */

import type { Metadata } from "next";
import { Lato } from "next/font/google";
import type React from "react";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Affordable POS System & Software Provider in Sydney,Australia.",
  description:
    "Discover Cygen POS, the best POS software and system for small businesses in Sydney, Australia. Simplify transactions and manage your business efficiently.",
  keywords:
    "POS Software, POS Software Australia, POS Software Sydney, POS Software Company, retail pos, restaurant pos",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Best POS in Sydney for Small Business",
    description:
      "Best POS software and system for small businesses in Sydney, Australia. Simplify transactions and manage your business efficiently.",
    url: "https://www.cygenpos.com/",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/de3ee6fd-8428-4a92-9f92-c5e1d3f61eaa.png?token=PavmvHW67Xllrapte2Dv6HBzanugrHaq05mWqQcn6Ok&height=1080&width=1080&expires=33268935122",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best POS in Sydney for Small Business",
    description:
      "Best POS software and system for small businesses in Sydney, Australia. Simplify transactions and manage your business efficiently.",
    images: [
      "https://opengraph.b-cdn.net/production/images/de3ee6fd-8428-4a92-9f92-c5e1d3f61eaa.png?token=PavmvHW67Xllrapte2Dv6HBzanugrHaq05mWqQcn6Ok&height=1080&width=1080&expires=33268935122",
    ],
  },
  verification: {
    google: [
      "bHKefqZEJNIuG43WpXGR4RfqIcxs8ba5BS2kvM7n62U",
      "v4u2wcHoPHlkbGxWFvJqWrVCHbyXuBNm2eJtHw6sEmM",
    ],
  },
  other: {
    "content-type": "text/html; charset=UTF-8",
    charset: "utf-8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z1FH2DSZ1T"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1BS7DBT78K"
        ></script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cygen POS",
              "image": "https://www.cygenpos.com/images/logo.png",
              "@id": "",
              "url": "https://www.cygenpos.com/",
              "telephone": "+61 458 116 301",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8 Parramatta Square Suite#122, Level 49 10 Darcy Street Parramatta",
                "addressLocality": "Sydney",
                "addressRegion": "NSW",
                "postalCode": "2150",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -33.8164699,
                "longitude": 151.0038909
              },
              "sameAs": [
                "https://www.facebook.com/CygenConsulting",
                "https://www.instagram.com/cygen_consulting/",
                "https://www.linkedin.com/company/cygen-consulting/",
                "https://www.cygenpos.com/"
              ]
            }
          `}
        </script>
      </head>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
