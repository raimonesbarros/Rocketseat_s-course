import { FormAddressContainer } from "./FormAddress.styles";

export function FormAddress() {
  return (
    <FormAddressContainer>
      <form action="">
        <label htmlFor="cep">
          <input type="text" id="cep" placeholder="CEP" />
        </label>

        <label htmlFor="street">
          <input type="text" id="street" placeholder="Rua" />
        </label>

        <div className="row3">
          <label htmlFor="number">
            <input type="text" id="number" placeholder="Número" />
          </label>
          <label htmlFor="complement">
            <input type="text" id="complement" placeholder="Complemento" />
          </label>
        </div>

        <div className="row4">
          <label htmlFor="district">
            <input type="text" id="district" placeholder="Bairro" />
          </label>
          <label htmlFor="city">
            <input type="text" id="city" placeholder="Cidade" />
          </label>
          <label htmlFor="uf">
            <input type="text" id="uf" placeholder="UF" />
          </label>
        </div>
      </form>
    </FormAddressContainer>
  );
}
