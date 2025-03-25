import { StaticImageData } from "next/image";
import { JSX } from "react";

export type NavLink = {
    name: string;
    id: number;
    href: string;
    nested?: Nest[];
}

export type SliderData = {
    title: string;
    subtitle: string;
    id: number;
    linkText: string;
    href: string;
    image: StaticImageData;
}

export type Nest = {
    name: string;
    id: number;
    href: string;
}

export type Activity = {
    name: string;
    slug: string;  
    cardDescription: string | undefined;
    cardIcon: string;
    description: string[] | string | undefined;
    time: string[] | null;
    place: string | undefined;
    image: string | undefined;
    contactTitle?: string | undefined;
    contactIcon: JSX.Element | null;
    contactPerson?: string | undefined;
    contactLinkText?: string | undefined;
    contactLink?: string | undefined;
    template: string | undefined;
    registrationText?: string | undefined;
    registrationLink?: string | undefined;
    type: string;
}

   