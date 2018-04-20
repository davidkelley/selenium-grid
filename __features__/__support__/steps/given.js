import { Given } from 'cucumber';

import checkContainsAnyText from '../definitions/check/checkContainsAnyText';
import checkIsEmpty from '../definitions/check/checkIsEmpty';
import checkContainsText from '../definitions/check/checkContainsText';
import checkCookieContent from '../definitions/check/checkCookieContent';
import checkCookieExists from '../definitions/check/checkCookieExists';
import checkDimension from '../definitions/check/checkDimension';
import checkElementExists from '../definitions/check/checkElementExists';
import checkEqualsText from '../definitions/check/checkEqualsText';
import checkModal from '../definitions/check/checkModal';
import checkOffset from '../definitions/check/checkOffset';
import checkProperty from '../definitions/check/checkProperty';
import checkSelected from '../definitions/check/checkSelected';
import checkTitle from '../definitions/check/checkTitle';
import checkUrl from '../definitions/check/checkURL';
import closeAllButFirstTab from '../definitions/action/closeAllButFirstTab';
import compareText from '../definitions/check/compareText';
import isEnabled from '../definitions/check/isEnabled';
import isVisible from '../definitions/check/isVisible';
import openWebsite from '../definitions/action/openWebsite';
import resizeScreenSize from '../definitions/action/resizeScreenSize';

Given(
  /^I open the (url|site) "([^"]*)?"$/,
  openWebsite
);

Given(
  /^the element "([^"]*)?" is( not)* visible$/,
  isVisible
);

Given(
  /^the element "([^"]*)?" is( not)* enabled$/,
  isEnabled
);

Given(
  /^the element "([^"]*)?" is( not)* selected$/,
  checkSelected
);

Given(
  /^the checkbox "([^"]*)?" is( not)* checked$/,
  checkSelected
);

Given(
  /^there is (an|no) element "([^"]*)?" on the page$/,
  checkElementExists
);

Given(
  /^the title is( not)* "([^"]*)?"$/,
  checkTitle
);

Given(
  /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
  compareText
);

Given(
  /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
  checkEqualsText
);

Given(
  /^the (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
  checkContainsText
);

Given(
  /^the (button|element) "([^"]*)?"( not)* contains any text$/,
  checkContainsAnyText
);

Given(
  /^the (button|element) "([^"]*)?" is( not)* empty$/,
  checkIsEmpty
);

Given(
  /^the page url is( not)* "([^"]*)?"$/,
  checkUrl
);

Given(
  /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
  checkProperty
);

Given(
  /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
  checkCookieContent
);

Given(
  /^the cookie "([^"]*)?" does( not)* exist$/,
  checkCookieExists
);

Given(
  /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
  checkDimension
);

Given(
  /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
  checkOffset
);

Given(
  /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
  resizeScreenSize
);

Given(
  /^I have closed all but the first (window|tab)$/,
  closeAllButFirstTab
);

Given(
  /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
  checkModal
);
