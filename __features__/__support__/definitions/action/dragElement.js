/**
 * Drag a element to a given destination
 * @param  {String}   source    The selector for the source element
 * @param  {String}   destination The selector for the destination element
 */
export default function(source, destination) {
  browser.dragAndDrop(source, destination);
};
