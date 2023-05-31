import { MapPinLine } from "@phosphor-icons/react";
import { FormAddressContainer } from "./Address.styles";
import { UseFormRegister, FieldValues } from "react-hook-form";

export interface FormAddressProps {
  orderExist: string;
  register: UseFormRegister<FieldValues>;
}

export function FormAddress({
  orderExist,
  register,
}: FormAddressProps) {
  return (
      <FormAddressContainer>
        <div>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>
        <label htmlFor="cep">
          <input
            autoFocus
            type="number"
            id="cep"
            placeholder="CEP"
            {...register("cep", { valueAsNumber: true })}
          />
        </label>

        <label htmlFor="street">
          <input
            type="text"
            id="street"
            placeholder="Rua"
            {...register("street")}
          />
        </label>

        <div className="row3">
          <label htmlFor="number">
            <input
              type="text"
              id="number"
              placeholder="Número"
              {...register("number", { valueAsNumber: true })}
            />
          </label>
          <label htmlFor="complement">
            <input
              type="text"
              id="complement"
              placeholder="Complemento"
              {...register("complement")}
            />
          </label>
        </div>

        <div className="row4">
          <label htmlFor="district">
            <input
              type="text"
              id="district"
              placeholder="Bairro"
              {...register("district")}
            />
          </label>
          <label htmlFor="city">
            <input
              type="text"
              id="city"
              placeholder="Cidade"
              {...register("city")}
            />
          </label>
          <label htmlFor="uf">
            <input type="text" id="uf" placeholder="UF" {...register("uf")} />
          </label>
        </div>
        <input
          type="text"
          id="order"
          value={orderExist}
          {...register("order")}
        />
      </FormAddressContainer>
  );
}
