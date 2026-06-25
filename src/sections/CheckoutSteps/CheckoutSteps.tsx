import { ClipboardCheck, MapPinned, PackageCheck, WalletCards } from "lucide-react";

import styles from "./CheckoutSteps.module.scss";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Выберите товар",
    text: "Размер, жесткость, высоту и наличие видно прямо в карточке.",
  },
  {
    icon: MapPinned,
    title: "Укажите город",
    text: "Срок доставки и самовывоз зависят от выбранного города.",
  },
  {
    icon: WalletCards,
    title: "Подтвердите оплату",
    text: "Онлайн, наличными или по счету после согласования.",
  },
  {
    icon: PackageCheck,
    title: "Получите заказ",
    text: "Доставка, подъем и проверка комплектации при получении.",
  },
];

export function CheckoutSteps() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article className={styles.step} key={step.title}>
              <span>{index + 1}</span>
              <Icon size={24} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
