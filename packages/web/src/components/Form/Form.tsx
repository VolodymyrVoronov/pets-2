import { Form as F, InputNumber } from "rsuite";
import TextArea from "../TextArea/TextArea";

const Form = (): JSX.Element => {
  return (
    <F layout="vertical" fluid>
      <F.Group controlId="name">
        <F.ControlLabel>Name</F.ControlLabel>
        <F.Control name="name" type="text" />
        <F.HelpText>Required</F.HelpText>
      </F.Group>

      <F.Group controlId="age">
        <F.ControlLabel>Age</F.ControlLabel>
        <InputNumber name="age" defaultValue={0} max={100} min={0} />
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
