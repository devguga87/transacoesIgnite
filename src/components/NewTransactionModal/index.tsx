import * as Dialog from "@radix-ui/react-dialog";
import { Controller, useForm } from "react-hook-form";

import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import * as Styled from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import { useContext } from "react";
import { TransactionContext } from "../../context/transactions";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

const NewTransactionModal = () => {
  const { createTransaction } = useContext(TransactionContext);

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income",
    },
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, category, price, type } = data;

    await createTransaction({ description, category, price, type });

    reset();
  }

  return (
    <Dialog.Portal>
      <Styled.Overlay></Styled.Overlay>
      <Styled.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Styled.CloseButton>
          <X size={24} />
        </Styled.CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <Styled.TransactionType onValueChange={field.onChange}>
                  <Styled.TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </Styled.TransactionTypeButton>

                  <Styled.TransactionTypeButton
                    variant="outcome"
                    value="outcome"
                  >
                    <ArrowCircleDown size={24} />
                    Saída
                  </Styled.TransactionTypeButton>
                </Styled.TransactionType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastra
          </button>
        </form>
      </Styled.Content>
    </Dialog.Portal>
  );
};

export default NewTransactionModal;
