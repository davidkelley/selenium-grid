import { Then } from 'cucumber';

import checkClass from '../definitions/check/checkClass';
import checkContainsAnyText from '../definitions/check/checkContainsAnyText';
import checkIsEmpty from '../definitions/check/checkIsEmpty';
import checkContainsText from '../definitions/check/checkContainsText';
import checkCookieContent from '../definitions/check/checkCookieContent';
import checkCookieExists from '../definitions/check/checkCookieExists';
import checkDimension from '../definitions/check/checkDimension';
import checkEqualsText from '../definitions/check/checkEqualsText';
import checkFocus from '../definitions/check/checkFocus';
import checkInURLPath from '../definitions/check/checkInURLPath';
import checkIsOpenedInNewWindow from '../definitions/check/checkIsOpenedInNewWindow';
import checkModal from '../definitions/check/checkModal';
import checkModalText from '../definitions/check/checkModalText';
import checkNewWindow from '../definitions/check/checkNewWindow';
import checkOffset from '../definitions/check/checkOffset';
import checkProperty from '../definitions/check/checkProperty';
import checkSelected from '../definitions/check/checkSelected';
import checkTitle from '../definitions/check/checkTitle';
import checkURL from '../definitions/check/checkURL';
import checkURLPath from '../definitions/check/checkURLPath';
import checkWithinViewport from '../definitions/check/checkWithinViewport';
import compareText from '../definitions/check/compareText';
import isEnabled from '../definitions/check/isEnabled';
import isExisting from '../definitions/check/isExisting';
import isVisible from '../definitions/check/isVisible';
import waitFor from '../definitions/action/waitFor';
import waitForVisible from '../definitions/action/waitForVisible';
import checkIfElementExists from '../definitions/lib/checkIfElementExists';

Then(
  /^I expect that the title is( not)* "([^"]*)?"$/,
  checkTitle
);

Then(
  /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
  checkIfElementExists
);

Then(
  /^I expect that element "([^"]*)?" is( not)* visible$/,
  isVisible
);

Then(
  /^I expect that element "([^"]*)?" becomes( not)* visible$/,
  waitForVisible
);

Then(
  /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
  checkWithinViewport
);

Then(
  /^I expect that element "([^"]*)?" does( not)* exist$/,
  isExisting
);

Then(
  /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
  compareText
);

Then(
  /^I expect that (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
  checkEqualsText
);

Then(
  /^I expect that (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
  checkContainsText
);

Then(
  /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
  checkContainsAnyText
);

Then(
  /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
  checkIsEmpty
);

Then(
  /^I expect that the url is( not)* "([^"]*)?"$/,
  checkURL
);

Then(
  /^I expect that the path is( not)* "([^"]*)?"$/,
  checkURLPath
);

Then(
  /^I expect the url to( not)* contain "([^"]*)?"$/,
  checkInURLPath
);

Then(
  /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
  checkProperty
);

Then(
  /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
  checkSelected
);

Then(
  /^I expect that element "([^"]*)?" is( not)* selected$/,
  checkSelected
);

Then(
  /^I expect that element "([^"]*)?" is( not)* enabled$/,
  isEnabled
);

Then(
  /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
  checkCookieContent
);

Then(
  /^I expect that cookie "([^"]*)?"( not)* exists$/,
  checkCookieExists
);

Then(
  /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
  checkDimension
);

Then(
  /^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
  checkOffset
);

Then(
  /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
  checkClass
);

Then(
  /^I expect a new (window|tab) has( not)* been opened$/,
  checkNewWindow
);

Then(
  /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
  checkIsOpenedInNewWindow
);

Then(
  /^I expect that element "([^"]*)?" is( not)* focused$/,
  checkFocus
);

Then(
  /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
  {
    wrapperOptions: {
      retry: 3,
    },
  },
  waitFor
);

Then(
  /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
  checkModal
);

Then(
  /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
  checkModalText
);
