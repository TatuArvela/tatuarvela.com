const rgba = (hexColor: string, alphaPercentage: number): string => {
  const decimalValue = Math.round((alphaPercentage * 255) / 100);
  const hexValue = decimalValue.toString(16).padStart(2, "0");
  return `${hexColor}${hexValue}`;
};

export default rgba;
