import { ChangeEvent, useState } from "react";
import { Form as F, Schema } from "rsuite";

import TextArea from "../TextArea/TextArea";

interface IFormProps {
  data?: {
    name: string;
    age: string;
    breed: string;
    diet: string;
    diseases: string;
    information: string;
  };
}

interface IInitialFormDataState {
  name: string;
  age: string;
  breed: string;
  diet: string;
  diseases: string;
  information: string;
}

const { StringType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  age: StringType().isRequired("This field is required."),
});

const Form = ({ data }: IFormProps): JSX.Element => {
  const initialFormDataState: IInitialFormDataState = {
    name: data?.name || "",
    age: data?.age || "",
    breed: data?.breed || "",
    diet: data?.diet || "",
    diseases: data?.diseases || "",
    information: data?.information || "",
  };

  const [formData, setFormData] =
    useState<IInitialFormDataState>(initialFormDataState);

  const onFormInputsChange = (
    e: Record<string, any> | ChangeEvent<HTMLFormElement>
  ): void => {
    setFormData(e as IInitialFormDataState);
  };

  return (
    <F
      layout="vertical"
      fluid
      onChange={(e) => onFormInputsChange(e)}
      formValue={formData}
      model={model}
    >
      <F.Group controlId="name">
        <F.ControlLabel>Name</F.ControlLabel>
        <F.Control name="name" type="text" />
        <F.HelpText>Required</F.HelpText>
      </F.Group>

      <F.Group controlId="age">
        <F.ControlLabel>Age</F.ControlLabel>
        <F.Control name="age" type="number" max={100} min={0} />
        <F.HelpText>Required</F.HelpText>
      </F.Group>

      <F.Group controlId="breed">
        <F.ControlLabel>Breed</F.ControlLabel>
        <F.Control name="breed" type="text" />
      </F.Group>

      <F.Group controlId="diet">
        <F.ControlLabel>Diet</F.ControlLabel>
        <F.Control name="diet" accepter={TextArea} />
      </F.Group>

      <F.Group controlId="diseases">
        <F.ControlLabel>Diseases</F.ControlLabel>
        <F.Control name="diseases" accepter={TextArea} />
      </F.Group>

      <F.Group controlId="information">
        <F.ControlLabel>Information</F.ControlLabel>
        <F.Control name="information" accepter={TextArea} />
      </F.Group>
    </F>
  );
};

export default Form;
