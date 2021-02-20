import * as React from "react";
import MyTooltip from "../common/Tooltip";
import buttonDescriptions from '../../js/buttonDescriptions';

const GenericSmallButton = props => {
  const { id, type } = props;
  const MyIconButton = buttonDescriptions.createIconButton(type);
  const MyImage = buttonDescriptions.createIconButtonImage(type);
  const tooltipText = buttonDescriptions.getTooltipText(type);
  const itemProp = buttonDescriptions.getItemProp(type);

  return (
    <MyTooltip title={tooltipText}>
      <MyIconButton aria-label="delete" itemProp={itemProp} data-content={id}>
        <MyImage />
      </MyIconButton>
    </MyTooltip>
  );
};

export default GenericSmallButton;
