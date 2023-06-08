import ITitleProps from "@/interfaces/ITitleProps";
import { PropsWithChildren } from "react";

export default function Title({ as, children }: PropsWithChildren<ITitleProps>) {
    const Heading: "h1" | "h2" | "h3" = as;
    const fontWeight: string = Heading === "h1" || Heading === "h2" ? "black" : "semibold";
    const textSize = {
        h1: "5xl",
        h2: "4xl",
        h3: "2xl"
    }    

    return <Heading className={`font-${fontWeight} text-${textSize[as]} tracking-tighter`}>{children}</Heading>
}