import CButton from "./cButton";
import Container from "./Container";
import CInput from "./cInput";
import ParserButton from "./parser-button";
import ParserInput from "./parser-input";

export const componentList = [CButton, CInput, Container];

export const parserList = {
  CButton: ParserButton,
  CInput: ParserInput,
  Container: Container,
};
