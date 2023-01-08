import { Loader, Message } from "rsuite";

import trpc from "../../hooks/trpc";

import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";
import Pets from "../../components/Pets/Pets";

const PetsPage = (): JSX.Element => {
  const { data, isLoading, isError, error } = trpc.useQuery(["getPets"]);

  return (
    <AnimatedWrapper>
      {isLoading ? <Loader size="lg" center /> : data && <Pets pets={data} />}

      {isError && (
        <Message showIcon type="error" header="Error while fetching data">
          {error?.message}
        </Message>
      )}
    </AnimatedWrapper>
  );
};

export default PetsPage;
