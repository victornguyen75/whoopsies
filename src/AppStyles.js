import styled from "styled-components";

const NAVBAR_HEIGHT = 4;
const SIDEBAR_WIDTH = 12;

const theme = {
  NAVBAR_HEIGHT,
  SIDEBAR_WIDTH,
};

const Content = styled.main`
  margin: ${NAVBAR_HEIGHT.toString()}em 0 0 ${SIDEBAR_WIDTH.toString()}em;
`;

export default function AppStyles() {
  return { theme, Content };
}
