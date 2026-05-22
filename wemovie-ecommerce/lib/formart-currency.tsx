export interface FormatCurrencyProps {
  value: number;
  currency: "BRL" | "USD" | "EUR" | "GBP" | "JPY" | "CNY" | string;
  locale?: string;
}

export default function FormatCurrency({
  value,
  currency,
  locale = "pt-BR",
}: FormatCurrencyProps) {
  const formatoMoeda = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });

  return <span className="font-bold">{formatoMoeda.format(value)}</span>;
}
