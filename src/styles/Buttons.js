import {Colors} from './Colors';
import {Theme} from './Theme';

export const Buttons = {
  blackButton: {
    backgroundColor: Colors.black,
    height: Theme.buttonHeight,
    borderRadius: Theme.buttonBorderRadius,
  },
  orangeButton: {
    backgroundColor: Colors.orange,
    height: Theme.buttonHeight,
    borderRadius: Theme.buttonBorderRadius,
  },
  orangeButtonLabel: {
    textTransform: 'none',
    color: Colors.white,
    fontSize: Theme.buttonLabelSize,
    padding: '0px',
  },
  buttonLabelSmaller: {
    textTransform: 'none',
    fontSize: Theme.buttonLabelSmaller,
    padding: '5px 15px',
    whiteSpace: 'nowrap',
  },
  linkButton: {
    backgroundColor: 'transparent',
    height: Theme.buttonHeight,
    borderRadius: 'none',
    padding: '0',
  },
  buttonLabelLink: {
    fontWeight: 'bold',
    textTransform: 'none',
    color: Colors.orange,
    fontSize: Theme.buttonLabelSize,
    padding: '0px',
  },

  disabledButton: {
    backgroundColor: Colors.disabledButtonBackground,
    color: Colors.disabledButtonFonts,
    height: Theme.buttonHeight,
    borderRadius: Theme.buttonBorderRadius,
    cursor: 'not-allowed',
  },
};
