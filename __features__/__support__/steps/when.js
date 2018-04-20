import { When } from 'cucumber';

import clearInputField from '../definitions/action/clearInputField';
import clickElement from '../definitions/action/clickElement';
import closeLastOpenedWindow from '../definitions/action/closeLastOpenedWindow';
import deleteCookie from '../definitions/action/deleteCookie';
import dragElement from '../definitions/action/dragElement';
import focusLastOpenedWindow from '../definitions/action/focusLastOpenedWindow';
import handleModal from '../definitions/action/handleModal';
import moveToElement from '../definitions/action/moveToElement';
import pause from '../definitions/action/pause';
import pressButton from '../definitions/action/pressButton';
import scroll from '../definitions/action/scroll';
import selectOption from '../definitions/action/selectOption';
import selectOptionByIndex from '../definitions/action/selectOptionByIndex';
import setCookie from '../definitions/action/setCookie';
import setInputField from '../definitions/action/setInputField';
import setPromptText from '../definitions/action/setPromptText';
import submitForm from '../definitions/action/submitForm';

When(
  /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
  clickElement
);

When(
  /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
  setInputField
);

When(
  /^I clear the inputfield "([^"]*)?"$/,
  clearInputField
);

When(
  /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
  dragElement
);

When(
  /^I submit the form "([^"]*)?"$/,
  submitForm
);

When(
  /^I pause for (\d+)ms$/,
  pause
);

When(
  /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
  setCookie
);

When(
  /^I delete the cookie "([^"]*)?"$/,
  deleteCookie
);

When(
  /^I press "([^"]*)?"$/,
  pressButton
);

When(
  /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
  handleModal
);

When(
  /^I enter "([^"]*)?" into the prompt$/,
  setPromptText
);

When(
  /^I scroll to element "([^"]*)?"$/,
  scroll
);

When(
  /^I close the last opened (window|tab)$/,
  closeLastOpenedWindow
);

When(
  /^I focus the last opened (window|tab)$/,
  focusLastOpenedWindow
);

When(
  /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
  selectOptionByIndex
);

When(
  /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
  selectOption
);

When(
  /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
  moveToElement
);
