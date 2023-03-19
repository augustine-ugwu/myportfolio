"use client";

import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
  title: "My portfolio",
  description: "Augustine Ugwu, a software developer from Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
