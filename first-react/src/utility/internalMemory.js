export const save = (key, value) => {
  if (!key || typeof key !== "string")
    throw new Error("key must be a valid string!");
  if (value === undefined) throw new Error("value must be specified!");
  localStorage.setItem(key, JSON.stringify(value));
};

export const get = (key) => {
  if (!key || typeof key !== "string")
    throw new Error("key must be a valid string!");
  return JSON.parse(localStorage.getItem(key));
};

export const remove = (key) => {
  if (!key || typeof key !== "string")
    throw new Error("key must be a valid string!");
  localStorage.removeItem(key);
};
