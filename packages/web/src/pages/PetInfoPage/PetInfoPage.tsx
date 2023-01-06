import React from "react";

import trpc from "../../hooks/trpc";

import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";

const PetInfoPage = (): JSX.Element => {
  const { data, isLoading, isError, error } = trpc.useQuery([
    "getPet",
    { id: 1 },
  ]);

  return <AnimatedWrapper>PetInfoPage</AnimatedWrapper>;
};

export default PetInfoPage;
