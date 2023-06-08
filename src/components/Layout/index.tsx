import { PropsWithChildren } from "react";
import { ILayoutProp } from "@/interfaces/ILayoutProp";

export default function Layout({ children, classNames = "" }: PropsWithChildren<ILayoutProp>) {
    return (
        <main className={`
            flex flex-col gap-14 xl:flex-row xl:gap-0 
            pt-14 xl:py-24 min-h-screen w-screen md:mb-20
            ${classNames}
        `}
        >
            { children }
        </main>
    )
}