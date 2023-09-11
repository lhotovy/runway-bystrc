export type NavLink = {
    name: string;
    id: number;
    href: string;
    nested?: NavLink[];
}