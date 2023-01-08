import { useCallback, useEffect } from "react";
import { Loader, Message } from "rsuite";

import trpc from "../../hooks/trpc";

import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";
import Pets from "../../components/Pets/Pets";

const PetsPage = (): JSX.Element => {
  const utils = trpc.useContext();

  const {
    data,
    isLoading: isLoadingGetPets,
    isError: isErrorGetPets,
    error: errorGetPets,
  } = trpc.useQuery(["getPets"]);

  const {
    mutate,
    isSuccess: isSuccessMarkPet,
    isError: isErrorMarkPet,
    error: errorMarkPet,
  } = trpc.useMutation(["markPet"]);

  const onMarkChange = (id: number, isMarked: boolean) => {
    mutate({ id, isMarked });
  };

  const refetchPets = useCallback(() => {
    if (isSuccessMarkPet) {
      utils.refetchQueries();
    }
  }, [isSuccessMarkPet, utils]);

  useEffect(() => {
    refetchPets();
  }, [refetchPets]);

  return (
    <AnimatedWrapper>
      {isErrorGetPets && (
        <Message showIcon type="error" header="Error while fetching data">
          {errorGetPets?.message}
        </Message>
      )}

      {isErrorMarkPet && (
        <Message showIcon type="error" header="Error while fetching data">
          {errorMarkPet?.message}
        </Message>
      )}

      {isLoadingGetPets ? (
        <Loader size="lg" center />
      ) : (
        data && <Pets pets={data} onMarkChange={onMarkChange} />
      )}
    </AnimatedWrapper>
  );
};

export default PetsPage;
