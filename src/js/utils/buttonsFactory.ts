import { withStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import { RoundButtons } from "types";

interface ButtonData {
  color: string;
  colorHover: string;
  itemProp: string;
  innerIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  tooltip: string;
  ariaLabel: string;
}

type ButtonDataObject = {
  [key in RoundButtons as string]: ButtonData;
};
// here are parameters of actual buttons
const buttonData: ButtonDataObject = {
  removeBook: {
    color: "#F70000",
    colorHover: "rgba(247,0,0,0.34)",
    itemProp: "delete-button",
    innerIcon: HighlightOffIcon,
    tooltip: "Usuwa element zarówno z widoku jak i pobranej partii danych",
    ariaLabel: "removeBook",
  },
  addToFavorites: {
    color: "#336B87",
    colorHover: "rgba(144, 175, 197,0.34)",
    itemProp: "favorites-button",
    innerIcon: FavoriteIcon,
    tooltip: "Dodaj do ulubionych",
    ariaLabel: "addToFavorites",
  },
  showFullInfo: {
    color: "#0C66CC",
    colorHover: "rgba(37, 94, 155,0.34)",
    itemProp: "fullinfo-button",
    innerIcon: InfoIcon,
    tooltip: "Pokaż pełne informacje",
    ariaLabel: "showFullInfo",
  },
  removeBookFromFavorites: {
    color: "#336B87",
    colorHover: "rgba(144, 175, 197,0.34)",
    itemProp: "remove-from-favorites-button",
    innerIcon: HighlightOffIcon,
    tooltip: "Usuwa z ulubionych i widoku",
    ariaLabel: "removeBookFromFavorites",
  },
  goToShop: {
    color: "#7ac221",
    colorHover: "rgba(122,194,33,0.34)",
    itemProp: "go-to-shop-button",
    innerIcon: InfoIcon,
    tooltip: "Idź do sklepu",
    ariaLabel: "goToShop",
  },
  test: {
    color: "#7ac221",
    colorHover: "rgba(122,194,33,0.34)",
    itemProp: "testItemProp",
    innerIcon: InfoIcon,
    tooltip: "testTooltipText",
    ariaLabel: "testAriaLabel",
  },
};

class ButtonFactory {
  buttonData: ButtonDataObject;
  constructor(buttonData: ButtonDataObject) {
    this.buttonData = buttonData;
  }
  getFunctionNameFromItemProp(itemProp: string) {
    let result;
    for (let key in this.buttonData) {
      if (this.buttonData.hasOwnProperty(key)) {
        if (this.buttonData[key].itemProp === itemProp) {
          result = key;
        }
      }
    }

    return result;
  }
  hasItemProp(itemProp: string) {
    let result = false;
    for (let key in this.buttonData) {
      if (this.buttonData.hasOwnProperty(key)) {
        if (this.buttonData[key].itemProp === itemProp) {
          result = true;
        }
      }
    }

    return result;
  }
  createIconButton(type: string) {
    const Button = withStyles({
      root: {
        color: this.buttonData[type].color,
        transition: "background-color 0.5s ease-in-out",
        "&:hover": { backgroundColor: this.buttonData[type].colorHover },
      },
    })(IconButton);

    return Button;
  }
  createIconButtonImage(type: string) {
    const Image = withStyles({
      root: {
        color: this.buttonData[type].color,
        cursor: "pointer",
      },
    })(this.buttonData[type].innerIcon);

    return Image;
  }
  getTooltipText(type: string) {
    return this.buttonData[type].tooltip;
  }
  getItemProp(type: string) {
    return this.buttonData[type].itemProp;
  }
  getAriaLabel(type: string) {
    return this.buttonData[type].ariaLabel;
  }
}

const Buttons = new ButtonFactory(buttonData);

export default Buttons;
