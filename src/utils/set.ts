export type Indexed<T = unknown> = {
  [key in string]: T;
};


function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const pathParts = path.split('.');
  let currentObject = object as Indexed;

  for (let i = 0; i < pathParts.length - 1; i++) {
    const key = pathParts[i];
    if (!currentObject.hasOwnProperty(key) || typeof currentObject[key] !== 'object') {
      currentObject[key] = {};
    }
    currentObject = currentObject[key] as Indexed;
  }

  currentObject[pathParts[pathParts.length - 1]] = value;

  return object;
}
export default set

