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
    mutate: mutateMarkPet,
    isSuccess: isSuccessMarkPet,
    isError: isErrorMarkPet,
    error: errorMarkPet,
  } = trpc.useMutation(["markPet"]);

  const {
    mutate: mutateDeletePet,
    isSuccess: isSuccessMutateDeletePet,
    isError: isErrorMutateDeletePet,
    error: errorMutateDeletePet,
  } = trpc.useMutation(["deletePet"]);

  const onMarkChange = (id: number, isMarked: boolean): void => {
    mutateMarkPet({ id, isMarked });
  };

  const onDeleteChange = (id: number): void => {
    mutateDeletePet({ id });
  };

  const refetchPets = useCallback(() => {
    if (isSuccessMarkPet) {
      utils.refetchQueries();
    }

    if (isSuccessMutateDeletePet) {
      utils.refetchQueries();
    }
  }, [isSuccessMarkPet, isSuccessMutateDeletePet, utils]);

  useEffect(() => {
    refetchPets();
  }, [refetchPets]);

  return (
    <AnimatedWrapper>
      {isErrorGetPets && (
        <Message showIcon type="error">
          Error while fetching data/ {errorGetPets?.message}
        </Message>
      )}

      {isErrorMarkPet && (
        <Message showIcon type="error">
          Error while marking pet / {errorMarkPet?.message}
        </Message>
      )}

      {isErrorMutateDeletePet && (
        <Message showIcon type="error">
          Error while deleting pet / {errorMutateDeletePet?.message}
        </Message>
      )}

      {isLoadingGetPets ? (
        <Loader size="lg" center />
      ) : (
        data && (
          <Pets
            pets={data}
            onMarkChange={onMarkChange}
            onDeleteChange={onDeleteChange}
          />
        )
      )}
    </AnimatedWrapper>
  );
};

export default PetsPage;
