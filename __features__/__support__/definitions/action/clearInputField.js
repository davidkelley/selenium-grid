/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   element Element selector
 */
export default function(element) {
  browser.clearElement(element);
};
