import styled from "styled-components";

const List = styled.div`
  border-radius: 4px;
  background-color: lightgray;
  padding: 10px;
  width: 245px;

  svg {
    float: right;
    position: relative;
  }
`;

export default function TaskListStyles() {
  return { List };
}
