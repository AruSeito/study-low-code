import CButton from './cButton';
import Container from './Container';
import CInput from './cInput';
import ParserButton from './parser-button';
import ParserInput from './parser-input';
import ParserContainer from './parser-container';

export const componentList = [
  { name: 'CButton', Component: CButton },
  { name: 'CInput', Component: CInput },
  { name: 'Container', Component: Container },
];

export const parserList = {
  CButton: ParserButton,
  CInput: ParserInput,
  Container: ParserContainer,
};
