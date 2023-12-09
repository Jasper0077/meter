import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Box, ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spiritual Meter",
  description: "Evaluate your spiritual health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ChakraProvider>
            <Box bg="#AFC8AD">{children}</Box>
          </ChakraProvider>
        </Providers>
      </body>
    </html>
  );
}
