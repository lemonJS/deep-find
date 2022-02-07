export type DeepFindObject = Record<string, any>;

export function deepfind<T extends DeepFindObject>(
  object: T, 
  key: string,
): string[] {
  let results: string[] = [];

  for (const k in object) {
    // The key does not exist in the object
    if (!object.hasOwnProperty(k)) {
      continue;
    }

    if (typeof object[k] === 'object') {
      // The value is an object, so recursively call
      // deep find to check for nested values
      results = results.concat(deepfind(object[k], key));
    } else if (k === key) {
      // The key is a match and should be added to the 
      // list of results
      results.push(object[k]);
    }
  }

  return results;
}
