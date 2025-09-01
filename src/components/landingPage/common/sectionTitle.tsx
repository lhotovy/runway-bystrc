import { cn } from "@/lib/utils";

export const SectionTitle = (
    {
        title,
        className
    }: {
        title: string,
        className?: string
    }) => {
    return (
        <h2 className={cn("text-[32px] font-bold text-gray-9", className)}>{title}</h2>
    );
};  