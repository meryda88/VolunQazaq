import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './AboutPage.css';
import animationData from './team.json';

const faqData = [
  {
    title: 'VolunQazaq',
    answer:
      'VolunQazaq — это казахстанская платформа, объединяющая волонтёров по нашей стране. Наша миссия — дать каждому возможность внести вклад в общество. Вместе мы делаем добро доступным.',
  },
  {
    title: 'Как стать волонтёром?',
    answer:
      'Нажмите на кнопку "Присоединиться" на главной странице и заполните форму. После этого с вами свяжется наш координатор.',
  },
  {
    title: 'Нужен ли опыт для участия?',
    answer:
      'Нет! Чтобы быть волонтёром, не обязательно иметь опыт или особые навыки. Главное — желание и ответственность.',
  },
  {
    title: 'Есть ли возрастные ограничения?',
    answer:
      'Да, на некоторые проекты можно записаться с 16 лет. Но также есть специальные мероприятия для молодёжи.',
  },
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showFaq, setShowFaq] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Показать FAQ с анимацией через 300ms после загрузки страницы
    const timer = setTimeout(() => setShowFaq(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-page">
      <section className="about-top">
        <div className="about-text">
          <h1>О нас</h1>
          <p>
            Добро пожаловать на платформу <strong>VolunQazaq</strong>. Мы создаём пространство, где каждый желающий
            может стать частью добрых изменений. Наш проект помогает людям находить волонтёрские возможности,
            участвовать в социальных инициативах и объединяться ради полезных дел.
          </p>
          <p>
            Здесь важно не то, сколько у вас опыта, а желание действовать. Мы верим, что даже маленькие шаги способны
            изменить жизнь людей к лучшему.
          </p>
        </div>
        <div className="about-animation">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </section>

      <section className={`faq-section ${showFaq ? 'visible' : 'hidden'}`}>
        <h2>FAQ</h2>
        <div className="accordion">
          {faqData.map((item, index) => (
            <div
              className={`accordion-item ${openIndex === index ? 'open' : ''}`}
              key={index}
            >
              <button className="accordion-title" onClick={() => toggleAccordion(index)}>
                <span>{item.title}</span>
                <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
              </button>
              {openIndex === index && (
                <div className="accordion-content">
                  {item.answer.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
