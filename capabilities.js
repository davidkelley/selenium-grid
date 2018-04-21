import grid from 'selenium-grid-status';
import minimist from 'minimist';

const { host, port = 80 } = minimist(process.argv.slice(2));

const capabilities = [];

grid.available({ host, port }, (err, node) => {
  if (err) {
    throw err;
  }
  node.forEach(({ browser }) => {
    browser.forEach(({ browserName, version }) => {
      capabilities.push({ browserName, version });
    });
  });
  console.log(JSON.stringify(capabilities, null, '  '));
});
