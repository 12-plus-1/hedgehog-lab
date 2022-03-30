import * as React from "react";
import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { DeleteForeverOutlined } from "@mui/icons-material";
import { IconButton, IconButtonProps, Popover } from "@mui/material";
import DeleteAlert from "./DeleteAlert";

interface IDeletePopupProps {
  size?: IconButtonProps["size"];
}

const DeletePopup: React.FC<IDeletePopupProps> = (
  props
): React.ReactElement => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "deletePopup",
  });
  return (
    <>
      <IconButton
        size={props.size}
        color={"error"}
        {...bindTrigger(popupState)}
      >
        <DeleteForeverOutlined />
      </IconButton>

      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <DeleteAlert />
      </Popover>
    </>
  );
};

export default DeletePopup;
