export const capitalizeWords = (str: string): string => {
  const separators = /[.-]/g;
  const splitArray = str.split(separators);

  const result = splitArray
    .map((word, index) => {
      const separator = str.match(separators)?.[index] || '';
      return word.charAt(0).toUpperCase() + word.slice(1) + separator;
    })
    .join('');

  return result;
};
