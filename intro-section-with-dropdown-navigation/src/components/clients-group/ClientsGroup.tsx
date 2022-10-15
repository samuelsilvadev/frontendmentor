import { Ul, Li } from "./ClientsGroup.styles";
import { ReactComponent as ClientAudiophileIcon } from "components/icons/client-audiophile.svg";
import { ReactComponent as ClientDatabizIcon } from "components/icons/client-databiz.svg";
import { ReactComponent as ClientMakerIcon } from "components/icons/client-maker.svg";
import { ReactComponent as ClientMeetIcon } from "components/icons/client-meet.svg";

const createClient = ({
  name,
  icon,
}: {
  name: string;
  icon: React.FunctionComponent;
}) => ({
  name,
  icon,
});

const CLIENTS = [
  createClient({ name: "Databiz", icon: ClientDatabizIcon }),
  createClient({ name: "Audiophile", icon: ClientAudiophileIcon }),
  createClient({ name: "Meet", icon: ClientMeetIcon }),
  createClient({ name: "Maker", icon: ClientMakerIcon }),
];

export function ClientsGroup(props: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <Ul {...props}>
      {CLIENTS.map(({ name, icon: Icon }) => {
        return (
          <Li key={name}>
            <Icon />
          </Li>
        );
      })}
    </Ul>
  );
}
