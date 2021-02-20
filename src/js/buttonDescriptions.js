import { withStyles } from "@material-ui/core/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";

const buttonColors = {
  removeBook: { color: "#F70000", colorHover: "rgba(247,0,0,0.34)", itemProp: "delete-button", innerIcon: HighlightOffIcon, tooltip: "Usuwa element zarówno z widoku jak i pobranej partii danych" },
  addToFavorites: { color: "#336B87", colorHover: "rgba(144, 175, 197,0.34)", itemProp: "favorites-button", innerIcon: FavoriteIcon, tooltip: "Dodaj do ulubionych" },
  showFullInfo: { color: "#0C66CC", colorHover: "rgba(37, 94, 155,0.34)", itemProp: "fullinfo-button", innerIcon: InfoIcon, tooltip: "Pokaż pełne informacje" },
  removeBookFromFavorites: { color: "#336B87", colorHover: "rgba(144, 175, 197,0.34)", itemProp: "remove-from-favorites-button", innerIcon: HighlightOffIcon, tooltip: "Usuwa z ulubionych i widoku" },
  goToShop: { color: "#7ac221", colorHover: "rgba(122,194,33,0.34)", itemProp: "go-to-shop-button", innerIcon: InfoIcon, tooltip: "Idź do sklepu" },
};

var buttonDescriptions = (function (buttonColors) {
  return {
    getFunctionNameFromItemProp: function (itemProp) {
      let result;
      for (var key in buttonColors) {
        if (buttonColors.hasOwnProperty(key)) {
          if (buttonColors[key].itemProp === itemProp) {
            result = key;
          }
        }
      }
      return result;
    },
    hasItemProp: function (itemProp) {
      let result = false;
      for (var key in buttonColors) {
        if (buttonColors.hasOwnProperty(key)) {
          if (buttonColors[key].itemProp === itemProp) {
            result = true;
          }
        }
      }
      return result;
    },

    createIconButton: function (type) {
      const Button = withStyles({
        root: {
          color: buttonColors[type].color,
          transition: "background-color 0.5s ease-in-out",
          "&:hover": { backgroundColor: buttonColors[type].colorHover },
        },
      })(IconButton);

      return Button;
    },
    createIconButtonImage: function (type) {
      const Image = withStyles({
        root: {
          color: buttonColors[type].color,
          cursor: "pointer",
        },
      })(buttonColors[type].innerIcon);

      return Image;
    },
    getTooltipText: function (type) {
      return buttonColors[type].tooltip;
    },
    getItemProp: function (type) {
      return buttonColors[type].itemProp;
    },
  };
})(buttonColors);

export default buttonDescriptions;
