import React from "react";

import trpc from "../../hooks/trpc";

import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";

const PetsPage = (): JSX.Element => {
  const { data, isLoading, isError, error } = trpc.useQuery(["getPets"]);

  console.log(data);

  return <AnimatedWrapper>PetsPage</AnimatedWrapper>;
};

export default PetsPage;
