import ILinkProps from "@/interfaces/ILinkProps";
import NextLink from "next/link";
import { PropsWithChildren } from "react";

export default function Link({ children, href, fontSize = "xs" }: PropsWithChildren<ILinkProps>) {
    return (
        <NextLink 
            href={href} 
            className={`text-violet-800 text-${fontSize}`}
        >
            {children}
        </NextLink>
    )
}