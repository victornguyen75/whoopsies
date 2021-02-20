import styled from "styled-components";

const NAVBAR_HEIGHT = 4;
const SIDEBAR_WIDTH = 12;

const PRIORITY_COLORS = {
  Cosmetic: {
    r: "228",
    g: "228",
    b: "228",
  },
  Low: {
    r: "193",
    g: "225",
    b: "193",
  },
  Medium: {
    r: "253",
    g: "253",
    b: "150",
  },
  High: {
    r: "255",
    g: "179",
    b: "71",
  },
  Showstopper: {
    r: "255",
    g: "105",
    b: "97",
  },
};

const theme = {
  NAVBAR_HEIGHT,
  SIDEBAR_WIDTH,
  PRIORITY_COLORS,
};

const Content = styled.main`
  margin: ${NAVBAR_HEIGHT.toString()}em 0 0 ${SIDEBAR_WIDTH.toString()}em;
`;

export default function AppStyles() {
  return { theme, Content };
}
