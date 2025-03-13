import { StaticImageData } from "next/image";

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
    cardDescription: string;
    cardIcon: string;
    description: string[];
    time: string | string[];
    place: string;
    image: string;
    contactTitle: string | undefined;
    contactIcon: JSX.Element | null | undefined;
    contactPerson: string | undefined;
    contactLinkText: string | undefined;
    contactLink: string | undefined;
    template: string | undefined;
    registrationText: string | undefined;
    registrationLink: string | undefined;
}

   