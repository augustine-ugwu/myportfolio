// app/page.tsx
"use client";
import pageStyles from "./page.module.css";
import { Euphoria_Script } from "next/font/google";

import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const euphoria_Script = Euphoria_Script({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

export default function Page() {
  return (
    <Text className={euphoria_Script}>Welcome To My Portfolio</Text>

    // <Link href="/about" color="blue.400" _hover={{ color: "blue.900" }}>
    //   About
    // </Link>
  );
}
