import  facebook  from "@/assets/Icons/facebook.svg";
import twitter from "@/assets/Icons/twitter.svg"
import instagram from "@/assets/Icons/instagram.svg"
import { DollarSign, PhoneOff, ShieldCheck, SlidersHorizontal } from "lucide-react";


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const tableData = [
    { column1: '1. Point no one' },
    { column1: '2. Point no one' },
    { column1: '3. Point no one' },
    { column1: '4. Point no one' },
    { column1: '5. Point no one' }
  ];

  export const products = [
    {
      imgURL: DollarSign,
      name: "Cheapest TX's",
      description: "The most affordable TX solutions for your business.",
    },
    {
      imgURL: ShieldCheck,
      name: "cerTIK",
      description: "Security and trust at the heart of blockchain projects.",
    },
    {
      imgURL: PhoneOff,
      name: "No contract Sells",
      description: "Get the best mobile deals with no long-term commitment.",
    },
    {
      imgURL: SlidersHorizontal,
      name: "CrossDex Support",
      description: "Cross-chain trading support to maximize your portfolio.",
    },
  ];

  export const accordionItems = [
    {
      value: "item-1",
      trigger: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      value: "item-2",
      trigger: "How does it work?",
      content: "The accordion works by expanding one section at a time, revealing additional information.",
    },
    {
      value: "item-3",
      trigger: "Is it responsive?",
      content: "Yes, it adjusts to different screen sizes and works on both desktop and mobile devices.",
    },
  ];