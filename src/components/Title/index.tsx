import ITitleProps from "@/interfaces/ITitleProps";
import { PropsWithChildren } from "react";

export default function Title({ as, children }: PropsWithChildren<ITitleProps>) {
    const Heading: "h1" | "h2" = as;
    const fontSize: string = as === 'h1'? "5xl" : "4xl";

    return <Heading className={`font-black text-${fontSize} tracking-tighter`}>{children}</Heading>
}