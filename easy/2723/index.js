var addTwoPromises = async function(promise1, promise2) {
  const result1 = await promise1
  const result2 = await promise2
  return result1 + result2
};