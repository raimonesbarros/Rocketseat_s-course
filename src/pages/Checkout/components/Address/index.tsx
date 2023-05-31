import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderContext } from "../../../../contexts/OrderContext";
import * as zod from "zod";
import { FormAddress } from "./Address";
import { PaymentForm } from "./Payment";

const deliveryAddressValidationSchema = zod.object({
  cep: zod
    .number({
      required_error: "Campo CEP é obrigatório",
      invalid_type_error: "CEP deve ser numérico",
    })
    .max(99999999, "Insira um cep com 8 dígitos"),
  city: zod.string().min(1, "Campo Cidade é obrigatório"),
  complement: zod.string().optional(),
  district: zod.string().min(1, "Campo Bairro é obrigatório"),
  number: zod.number({
    required_error: "Campo Número é obrigatório",
    invalid_type_error: "Número deve ser numérico",
  }),
  order: zod.string().min(4, "Você não tem um pedido para entrega"),
  payment: zod.string({
    required_error: "Selecione uma forma de pagamento",
    invalid_type_error: "Selecione uma forma de pagamento",
  }),
  street: zod.string().min(1, "Campo Rua Obrigatório"),
  uf: zod.string().max(2, "Insira uma UF com 2 dígitos"),
});

export function FormToDelivery() {
  const { cart } = useContext(OrderContext);
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(deliveryAddressValidationSchema),
  });

  function handleConfirmOrder(data: any) {
    console.log(data);
  }

  const formStateError = formState.errors;

  console.log(formStateError);

  let orderExist = "";
  cart.length > 0 ? (orderExist = "true") : (orderExist = "");

  return (
    <form
      onSubmit={handleSubmit(handleConfirmOrder)}
      id="formDelivery"
      action=""
    >
      <FormAddress orderExist={orderExist} register={register} />

      <PaymentForm register={register} />
    </form>
  );
}
