// TODO: remove eslint-disable prettier/prettier

/* eslint-disable prettier/prettier */
import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    verticalAlign: "middle",
    justifyContent: "space-between",
    width: "100%",
    color: "16px",
    maxWidth: "1000px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
    letterSpacing: "-0.35px",
  },
  wrapper: {
    backgroundColor: theme.other.noticeBackground,
    paddingTop: 30,
    paddingBottom: 29,
  },
  button: {
    backgroundColor: "#ffffff1a",
    border: "1.5px solid #ffffff26",
    borderRadius: "2px",
    "&:active": {
      backgroundColor: "#ffffff26 !important",
    },
  },
}));
