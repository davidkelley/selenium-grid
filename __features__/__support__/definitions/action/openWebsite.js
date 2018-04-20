/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
export default function(type, page) {
  /**
   * The URL to navigate to
   * @type {String}
   */
  const url = (type === 'url') ? page : browser.options.baseUrl + page;

  browser.url(url);
};
