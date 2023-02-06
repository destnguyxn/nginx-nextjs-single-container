// TODO: remove eslint-disable prettier/prettier

/* eslint-disable prettier/prettier */
import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
  container: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    verticalAlign: "middle",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1000px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
    letterSpacing: "-0.35px",
  },
  wrapper: {
    cursor: "pointer",
    backgroundColor: theme.other.noticeBackground,
    paddingTop: 30,
    paddingBottom: 29,
    "&:hover": {
      button: {
        color:
          theme.colorScheme === "dark"
            ? "#D2D6E0 !important"
            : "#000 !important",
        backgroundColor: "#ffffff33",
        borderColor: "#ffffff80",
      },
      [`& .${getRef("label")}`]: {
        color: theme.colorScheme === "dark" ? "#D2D6E0" : "#000",
      },
      [`& .${getRef("content")}`]: {
        color: theme.colorScheme === "dark" ? "#D2D6E0" : "#000",
      },
      [`& .${getRef("date")}`]: {
        color: theme.colorScheme === "dark" ? "#D2D6E0" : "#000",
      },
    },
  },
  button: {
    backgroundColor: "#ffffff1a",
    border: "1.5px solid #ffffff26",
    borderRadius: "2px",
    "&:active": {
      backgroundColor: "#ffffff26 !important",
    },
    color: "#A1A6AF",
  },

  label: {
    ref: getRef("label"),
    color: theme.colorScheme === "dark" ? "#747A86" : "#747A86",
  },
  content: {
    ref: getRef("content"),
    color: theme.colorScheme === "dark" ? "#C6CCD7" : "#C6CCD7",
  },
  date: {
    ref: getRef("date"),
    color: theme.colorScheme === "dark" ? "#51555D" : "#51555D",
    fontWeight: 300,
  },
}));
