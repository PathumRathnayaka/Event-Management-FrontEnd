import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://www.invitevibes.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "InviteVibes | Digital Wedding Invitation & RSVP Platform",
    template: "%s | InviteVibes",
  },
  description:
    "Create a personalized digital wedding invitation and RSVP platform tailored to your love story. Elegant, shareable, and easy to manage online wedding invites.",
  keywords: [
    "wedding invitation",
    "digital wedding invitation",
    "online RSVP",
    "wedding RSVP platform",
    "e-invitation",
    "wedding website",
    "InviteVibes",
  ],
  authors: [{ name: "InviteVibes" }],
  creator: "InviteVibes",
  publisher: "InviteVibes",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "InviteVibes",
    title: "InviteVibes | Digital Wedding Invitation & RSVP Platform",
    description:
      "Personalized digital experiences for your special day. Create elegant wedding invitations and manage RSVPs online.",
    images: [
      {
        url: "/image/couple.webp",
        width: 1200,
        height: 630,
        alt: "InviteVibes digital wedding invitation",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "InviteVibes | Digital Wedding Invitation & RSVP Platform",
    description:
      "Personalized digital experiences for your special day. Create elegant wedding invitations and manage RSVPs online.",
    images: ["/image/couple.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${greatVibes.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
