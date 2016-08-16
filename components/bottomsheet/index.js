import { themr } from 'react-css-themr';
import { BOTTOMSHEET } from '../identifiers.js';
import { bottomsheetFactory } from './BottomSheet';
import { Overlay } from '../overlay';
import { IconButton } from '../button';
import theme from './theme.scss';

const ThemedBottomSheet = themr(BOTTOMSHEET, theme)(bottomsheetFactory(Overlay, IconButton));

export default ThemedBottomSheet;
export { ThemedBottomSheet as BottomSheet };
