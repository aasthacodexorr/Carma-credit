import type { Metadata } from "next";
import { generateMetadata as generateMetadataHelper } from "@/lib/metadataHelper";

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataHelper({
    title: "Resources | Sell Your Car Easily with Carma Credit",
    description:
      "See how selling your car with Carma Credit works — get an instant online offer, verify details, drop off your car, and get paid.",
    canonicalPath: "/resources",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
