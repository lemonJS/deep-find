'use strict';

const deepFind = (object, key) => {
  if (!object || typeof object !== 'object') {
    throw new Error('deepFind must be supplied an object');
  }

  if (!key || typeof key !== 'string') {
    throw new Error('deepFind must be supplied a key');
  }

  let objects = [];

  for (let i in object) {
    if (!object.hasOwnProperty(i)) {
      continue;
    }

    if (typeof object[i] == 'object') {
      objects = objects.concat(deepFind(object[i], key));
    } else if (i === key) {
      objects.push(object[i]);
    }

  }

  return objects;
}

module.exports = deepFind;
