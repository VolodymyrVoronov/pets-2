import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader, Message } from "rsuite";

import trpc from "../../hooks/trpc";

import Trpc from "../../constants/trpc";
import Paths from "../../constants/paths";

import PetInfo from "../../components/PetInfo/PetInfo";
import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";

const PetInfoPage = (): JSX.Element => {
  const utils = trpc.useContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data,
    isLoading: isLoadingFetchPet,
    isError: isErrorFetchPet,
    error: errorFetchPet,
  } = trpc.useQuery(["getPet", { id: Number(id) }]);

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

  const backHandle = (): void => {
    navigate(Paths.PetsPage, { state: Trpc.GetPets });
  };

  const markHandle = (petId: number, isMarked: boolean): void => {
    mutateMarkPet({ id: petId, isMarked });
  };

  const deleteHandle = (petId: number): void => {
    mutateDeletePet({ id: petId });
  };

  const refetchPets = useCallback(() => {
    if (isSuccessMarkPet || isSuccessMutateDeletePet) {
      utils.invalidateQueries();
    }
  }, [isSuccessMarkPet, isSuccessMutateDeletePet, utils]);

  useEffect(() => {
    refetchPets();
  }, [refetchPets]);

  return (
    <AnimatedWrapper>
      {isErrorFetchPet && (
        <Message showIcon type="error">
          Error while fetching data / {errorFetchPet?.message}
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

      {isLoadingFetchPet ? (
        <Loader size="lg" center />
      ) : (
        data && (
          <PetInfo
            backHandle={backHandle}
            markHandle={markHandle}
            deleteHandle={deleteHandle}
            {...data}
          />
        )
      )}
    </AnimatedWrapper>
  );
};

export default PetInfoPage;
