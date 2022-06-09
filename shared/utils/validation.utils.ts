export const isUUID = (value: any): boolean => {
  return (
    typeof value === 'string' &&
    value.length > 30 &&
    value.length < 40 &&
    value.split('-').length === 5
  );
};