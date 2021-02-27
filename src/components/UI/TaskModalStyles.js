import ModalUnstyled from "@material-ui/core/Modal";
import styled from "styled-components";

const Modal = styled(ModalUnstyled)`
  display: flex;
  align-items: center;
  justify-content: center;

  #modal-container:nth-of-type(3) {
    border: 4px solid lightgray;
    border-radius: 4px;
    background-color: #fff;
    padding: 20px;
    width: 50em;

    :focus {
      outline: none;
    }
  }

  #modal-buttons {
    display: flex;
    justify-content: center;
  }
`;

export default function TaskModalStyles() {
  return { Modal };
}
