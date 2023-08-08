import debounce from "lodash/debounce";
import * as React from "react";

import { useDispatchAction, useFavorites } from "hooks";

import RoundButton from "./RoundButton";

interface Props {
  id: string;
}

const RemoveFromFavoritesButton = (props: Props) => {
  const { id } = props;
  const { removeBook: remove } = useDispatchAction();
  const { favorites } = useFavorites();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const RemoveFromFavorites = React.useCallback(
    debounce(target => {
      const id = target?.closest("button")?.dataset?.content;
      if (id) {
        favorites.remove(id);
        remove({ id: id });
      }
    }, 200),
    [remove]
  );

  return <RoundButton type="removeBookFromFavorites" id={id} clickHandler={e => RemoveFromFavorites(e.target)} />;
};
export default RemoveFromFavoritesButton;
