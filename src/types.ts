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
    description: string;
    icon: string;
    href: string;
}