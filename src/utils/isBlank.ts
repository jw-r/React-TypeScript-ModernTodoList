export const isBlank = (value: string) => {
  return value.replace(/\s/g, '') === '';
};
