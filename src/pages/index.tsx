import Head from 'next/head'
import Image from 'next/image'
import Link from '@/components/Link'
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import FormGroup from '@/components/FormGroup'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Alura Cases Campanha</title>
      </Head>

      <Layout classNames="items-center">
        <div className="flex flex-col gap-10 lg:w-5/6 xl:w-[50%] px-16 xl:px-0 xl:pl-48 box-border">
          <header className="flex flex-col gap-16">
            <Image src="/assets/images/alura-logo.svg" alt="Logo Alura" width={100} height={100}/>

            <nav>
              <ul className="flex flex-wrap gap-4">
                <li className="bg-violet-300 rounded-full px-3"><Link href="/">O que tem de novo?</Link></li>
                <li><Link href="/faq">Confira as principais dúvidas</Link></li>
              </ul>
            </nav>
          </header>

          <section className="flex flex-col gap-8">
            <Title as="h1">Alura Cases</Title>
            
            <Paragraph>
              Aqui você vai ter acesso a discussões avançadas: as principais decisões
              sobre arquitetura e design de sistemas. Aprenda através das descobertas 
              que as principais empresas de tecnologia enfrentam!
            </Paragraph>

            <Paragraph>Quer testar antes de todo mundo?</Paragraph>

            <FormGroup />
          </section>
        </div>

        <Image 
          src="/assets/images/alura-cases.png" 
          alt="Print de tela divulgação Alura cases" 
          width={840}
          height={840}
          className="
            xl:relative xl:top-0 xl:left-52
            xl:scale-118 drop-shadow-2xl
            xl:rounded-tl-3xl xl:rounded-bl-3xl md:rounded-3xl
            xl:min-h-full xl:w-[50%] md:w-4/5 lg:w-2/3            
          "  
        />
      </Layout>
    </>
  )
}
