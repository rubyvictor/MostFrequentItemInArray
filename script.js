function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;

  let mapObject = {};
  collection.forEach(element => {
    if (mapObject[element] === undefined) {
      mapObject[element] = 1;
    } else {
      mapObject[element]++;
    }
  });

  const output = Object.keys(mapObject).map(key => mapObject[key]);

  return Math.max(...output);
}

module.exports = mostFrequentItemCount;
