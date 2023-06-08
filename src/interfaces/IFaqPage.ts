export default interface IFaqPageProps {
    faqData: IFaqData[];
}

export interface IFaqData {
    question: string;
    answer: string;
}