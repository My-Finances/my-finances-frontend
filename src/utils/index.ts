
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});