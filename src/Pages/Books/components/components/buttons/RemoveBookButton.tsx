import RoundButton from "./RoundButton";

import { useCreateDebouncedCallback } from "hooks";
import { useRemoveBookModalVisibilityContext } from "Contexts";

interface Props {
  id: string;
}
const RemoveBookButton = (props: Props) => {
  const { id } = props;
  const { openModal } = useRemoveBookModalVisibilityContext();
  const Remove = useCreateDebouncedCallback(openModal);

  return (
    <RoundButton
      type="removeBook"
      id={id}
      clickHandler={e => {
        Remove(e.target);
      }}
    />
  );
};

export default RemoveBookButton;
