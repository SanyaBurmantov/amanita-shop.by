import {FaqItem} from "./components/FaqItem";


interface Faq{

}
const Faq = () => {
    const faqItems = [{
        title: 'sdfdsfdfsdsfdsfdsfdfs',
        description: 'sdfsdfdfsdsffds',
    }, {
        title: 'sdfdsfdfsdsfdsfdsfdfs',
        description: 'sdfsdfdfsdsffds',
    }, {
        title: 'sdfdsfdfsdsfdsfdsfdfs',
        description: 'sdfsdfdfsdsffds',
    }, {
        title: 'sdfdsfdfsdsfdsfdsfdfs',
        description: 'sdfsdfdfsdsffds',
    }, {
        title: 'sdfdsfdfsdsfdsfdsfdfs',
        description: 'sdfsdfdfsdsffds',
    },]
    return (
        <>
            <div className='faq'>{faqItems.map(faqItem =>
                <FaqItem key={faqItem.title} title={faqItem.title} description={faqItem.description} />)}</div>
        </>
    )
}

export default Faq;