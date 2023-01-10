import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Grid, Loader, Message, Row } from "rsuite";

import trpc from "../../hooks/trpc";

import formatDate from "../../helpers/formatDate";

import Trpc from "../../constants/trpc";
import Paths from "../../constants/paths";

import PetInfo from "../../components/PetInfo/PetInfo";
import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";
import ModalBox from "../../components/ModalBox/ModalBox";
import PhotoUploader from "../../components/PhotoUploader/PhotoUploader";
import Form from "../../components/Form/Form";

import styles from "./PetInfoPage.module.css";

interface IPet {
  name: string;
  age: string;
  breed: string;
  diet: string;
  diseases: string;
  information: string;
}

const PetInfoPage = (): JSX.Element => {
  const utils = trpc.useContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const [petData, setPetData] = useState<IPet>();
  const [petPhoto, setPetPhoto] = useState<string>("");

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

  const {
    mutate,
    isLoading: isLoadingUpdatePet,
    isSuccess: isSuccessUpdatePet,
    isError: isErrorUpdatePet,
    error: errorUpdatePet,
  } = trpc.useMutation(["updatePet"]);

  const backHandle = (): void => {
    navigate(Paths.PetsPage, { state: Trpc.GetPets });
  };

  const editHandle = (): void => {
    setOpen(true);
  };

  const markHandle = (petId: number, isMarked: boolean): void => {
    mutateMarkPet({ id: petId, isMarked });
  };

  const deleteHandle = (petId: number): void => {
    mutateDeletePet({ id: petId });
  };

  const refetchPets = useCallback(() => {
    if (isSuccessMarkPet || isSuccessMutateDeletePet || isSuccessUpdatePet) {
      utils.invalidateQueries();
    }
  }, [isSuccessMarkPet, isSuccessMutateDeletePet, isSuccessUpdatePet, utils]);

  const onFormChange = useMemo(
    () => (formData: IPet) => {
      setPetData(formData);
    },
    []
  );

  const onUploaderChange = useMemo(
    () => (photo: string) => {
      setPetPhoto(photo);
    },
    []
  );

  const onSaveButtonClick = (): void => {
    interface IPhoto {
      photo: string;
    }

    type TCombinedPet = IPet & IPhoto;

    const pet = {
      ...petData,
      photo: petPhoto || data?.photo,
      isMarked: data?.isMarked,
    } as TCombinedPet;

    mutate({ ...pet, id: Number(id) });
  };

  const onCloseButtonClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    refetchPets();
  }, [refetchPets]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpen(false);

      clearTimeout(timeoutId);
    }, 750);
  }, [isSuccessUpdatePet]);

  const formattedDate = formatDate(data?.updatedAt);

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
            editHandle={editHandle}
            markHandle={markHandle}
            deleteHandle={deleteHandle}
            {...data}
          />
        )
      )}

      {data && (
        <ModalBox
          open={open}
          saveHandle={onSaveButtonClick}
          closeHandle={onCloseButtonClick}
        >
          {isLoadingUpdatePet && <Loader content="Updating data..." />}

          {isErrorUpdatePet && (
            <Message showIcon type="error">
              Error while updating data / {errorUpdatePet?.message}
            </Message>
          )}

          <p className={styles["pet-info-page__updated-at"]}>
            Updated at: <strong>{formattedDate}</strong>
          </p>

          <Grid fluid>
            <Row>
              <Col xs={24} lg={11} lgPush={0}>
                <PhotoUploader
                  photo={data.photo}
                  onUploaderChange={onUploaderChange}
                />
              </Col>
              <Col xs={24} lg={11} lgPush={2}>
                <Form data={data} onFormChange={onFormChange} />
              </Col>
            </Row>
          </Grid>
        </ModalBox>
      )}
    </AnimatedWrapper>
  );
};

export default PetInfoPage;
