export default (min: number, max: number) => {
  const roundedMinNumber = Math.ceil(min);
  const roundedMaxNumber = Math.floor(max);
  return Math.floor(Math.random() * (roundedMaxNumber - roundedMinNumber + 1)) + roundedMinNumber;
};
