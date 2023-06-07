import { PropsWithChildren } from "react";

export default function Paragraph({ children }: PropsWithChildren) {
    return <p className="text-zinc-600 text-xl leading-8">{ children }</p>
}