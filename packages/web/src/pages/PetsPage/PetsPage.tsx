import { useCallback, useEffect } from "react";
import { Loader, Message } from "rsuite";
import { useNavigate, useLocation, generatePath } from "react-router-dom";
import { MdOutlineFolder } from "react-icons/md";

import trpc from "../../hooks/trpc";

import Paths from "../../constants/paths";

import Pets from "../../components/Pets/Pets";
import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";

import styles from "./PetsPage.module.css";

const PetsPage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const utils = trpc.useContext();

  const {
    data,
    isLoading: isLoadingFetchPets,
    isError: isErrorFetchPets,
    error: errorFetchPets,
  } = trpc.useQuery([location.state]);

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

  const moreInfoHandle = (id: number): void => {
    const path = generatePath(Paths.PetInfoPage, { id: String(id) });
    navigate(path);
  };

  const markHandle = (id: number, isMarked: boolean): void => {
    mutateMarkPet({ id, isMarked });
  };

  const deleteHandle = (id: number): void => {
    mutateDeletePet({ id });
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
      {isErrorFetchPets && (
        <Message showIcon type="error">
          Error while fetching data / {errorFetchPets?.message}
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

      {isLoadingFetchPets && <Loader size="lg" center />}

      {data?.length ? (
        <Pets
          pets={data}
          moreInfoHandle={moreInfoHandle}
          markHandle={markHandle}
          deleteHandle={deleteHandle}
        />
      ) : (
        <div className={styles["pets-page__no-pets"]}>
          <h4>No pets found</h4>
          <MdOutlineFolder className={styles["pets-page__no-pets-icon"]} />
        </div>
      )}
    </AnimatedWrapper>
  );
};

export default PetsPage;
