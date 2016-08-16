import { themr } from 'react-css-themr';
import { FLEXLIST } from '../identifiers.js';
import { flexlistFactory } from './FlexList.js';
import theme from './theme.scss';
import {ListItem} from '../list/ListItem';

const applyTheme = (Component) => themr(FLEXLIST, theme)(Component);
const ThemedFlexList = applyTheme(flexlistFactory(ListItem));
export { ThemedFlexList as FlexList };
