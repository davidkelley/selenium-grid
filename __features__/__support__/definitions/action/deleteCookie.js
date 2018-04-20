/**
 * Delete a cookie
 * @param  {String}   name The name of the cookie to delete
 */
export default function(name) {
  browser.deleteCookie(name);
};
