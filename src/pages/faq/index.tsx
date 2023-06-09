import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "@/components/Link";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import IPageFaqProps, { IFaqData } from "@/interfaces/IFaqPage";

export async function getStaticProps() {
    const API_URL: string = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    const faqData: IFaqData = await fetch(API_URL).then(response => response.json()).then(data => data);

    return { props: { faqData }  };
}

export default function PageFaq({ faqData }: IPageFaqProps) {   
    return (
        <>
            <Head>
                <title>Faq - Alura Cases</title>
            </Head>

            <Layout classNames="px-14 pb-20 xl:pt-20">
                <header className="flex flex-col gap-8">
                    <Title as="h2">FAQ: Perguntas Frequentes</Title>

                    <div className="flex flex-col gap-7 w-4/5">
                        <Paragraph>
                            Não consegue encontrar a resposta que procura? Entre em contato com nosso 
                            <Link href="mailto:email@email.com" fontSize="xl"> time de suporte ao consumidor</Link>
                        </Paragraph>

                        <Link href="/" fontSize="xl">Voltar para home</Link>
                    </div>
                </header>

                <ul className="flex flex-col gap-10 xl:w-5/6">
                    {faqData.map(({ question, answer }: IFaqData) => (
                        <li key={question} className="flex flex-col gap-5">
                            <Title as="h3">{question}</Title>
                            <Paragraph>{answer}</Paragraph>
                        </li>
                    ))}
                </ul>
            </Layout>
        </>
    )
}