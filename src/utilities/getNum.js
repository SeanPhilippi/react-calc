const getNum = val => {
  const num = Number(val);
  if (isNaN(num)) {
    return 0;
  };
  return num;
};

export default getNum;