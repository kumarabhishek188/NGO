import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const faqs = [
  { questionKey: "faq.q1", answerKey: "faq.a1" },
  { questionKey: "faq.q2", answerKey: "faq.a2" },
  { questionKey: "faq.q3", answerKey: "faq.a3" }
];

const FAQSection = () => {
  const { t } = useTranslation();
  return (
    <section id="faq" className="py-5 bg-light">
      <Container>
        <h2 className="brand-highlight text-center mb-4">{t('faq.title')}</h2>
        <Accordion>
          {faqs.map((faq, idx) => (
            <Accordion.Item eventKey={String(idx)} key={idx}>
              <Accordion.Header>{t(faq.questionKey)}</Accordion.Header>
              <Accordion.Body>{t(faq.answerKey)}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};
export default FAQSection;
