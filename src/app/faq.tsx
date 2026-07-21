const faqItems = [
  {
    question: "Насколько быстро работает Nosok?",
    answer: "Мы делаем ставку на минимальную задержку и стабильное соединение без лишнего шума.",
  },
  {
    question: "Можно ли пользоваться на нескольких устройствах?",
    answer: "Да. Один аккаунт можно использовать на нескольких устройствах одновременно.",
  },
  {
    question: "Есть ли поддержка разных платформ?",
    answer: "Да, проект строится как единая экосистема для desktop и mobile.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-white/10 bg-[#07130A] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm tracking-[0.2em] text-[#96EA0D] uppercase">FAQ</p>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <summary className="cursor-pointer list-none text-lg font-semibold tracking-[-0.03em]">
                {item.question}
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/68">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
