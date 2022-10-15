import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import * as Styled from "./styles";

const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Styled.Overlay></Styled.Overlay>
      <Styled.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Styled.CloseButton>
          <X size={24}/>
        </Styled.CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastra</button>
        </form>
      </Styled.Content>
    </Dialog.Portal>
  );
};

export default NewTransactionModal;
