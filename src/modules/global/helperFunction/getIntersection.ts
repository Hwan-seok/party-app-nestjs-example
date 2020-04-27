const intersection = (arr1: any[], arr2: any[]) => {
  const set2 = new Set(arr2);
  const intersection = Array.from(new Set(arr1.filter(v => set2.has(v))));

  return intersection;
};
