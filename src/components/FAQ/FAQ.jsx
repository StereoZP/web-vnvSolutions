import React, {useState} from 'react';
import classes from "./faq.module.css";

const Faq = () => {
    const faqData = [
        {
            question: 'Do I need to sign a contract before work??',
            answer: 'Yes, after discussing the work plan, we sign the contract together using a digital signature.\n' +
                '\n' +
                'The contract regulates the entire process of work, payments, any unforeseen circumstances and other important parts of the project. This document protects both parties - both the customer and the contractor.'
        },
        {
            question: 'Can I get a refund after payment?', answer: 'Yes, you can.\n' +
                '\n' +
                'How it works: In any case, 5% and a bank commission are deducted from the refund amount. Funds are returned only for those stages of the project that have not been started. All work that has been completed and paid for is sent to the customer. Stages that have been started are always completed (at the request of the customer).'
        },
        {
            question: 'How is payment made?', answer: 'There are two payment options: full subscription and installment subscription. Full subscription involves the transfer of the entire amount for the project immediately at the beginning of cooperation. Staged subscription involves paying in installments for each stage (or several). An invoice (check) with information about the paid service or stage is attached to each payment transaction.'
        },

        {
            question: 'Is it possible to improve an existing site?', answer: 'No, just create a site from scratch. The existing site can be used as an example for design, content, etc., but this does not imply a reduction in the cost of the service.'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className={classes.container}>
            <h1>FAQ</h1>
            {faqData.map((item, index) => (
                <div key={index}>
                    <div
                        className={classes.faqQuestion}
                        onClick={() => toggleAnswer(index)}
                    >
                        {item.question}
                    </div>
                    {activeIndex === index && (
                        <div className={classes.faqAnswer}>
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Faq;