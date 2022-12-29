export const isColor = (value: any) => {
  const s = new Option().style;
  s.color = value;

  return s.color !== "";
};
