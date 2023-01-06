import React from "react";

import trpc from "../../hooks/trpc";

import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";

const AddPetPage = (): JSX.Element => {
  const { mutate, isLoading, isError, error } = trpc.useMutation(["createPet"]);

  return <AnimatedWrapper>AddPetPage</AnimatedWrapper>;
};

export default AddPetPage;
