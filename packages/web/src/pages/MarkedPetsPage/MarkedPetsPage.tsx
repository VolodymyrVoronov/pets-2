import React from "react";

import trpc from "../../hooks/trpc";

import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";

const MarkedPetsPage = (): JSX.Element => {
  const { data, isLoading, isError, error } = trpc.useQuery(["getPets"]);

  return <AnimatedWrapper>MarkedPetsPage</AnimatedWrapper>;
};

export default MarkedPetsPage;
