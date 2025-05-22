import styled from "styled-components";
import {colors} from "./variables";

export const Container = styled.div`
  background-color: #a3d5ff; /* pastel blue */
  body.dark & {
    background-color: #0d1b2a; /* midnight blue */
  }
`;

export default Container;
