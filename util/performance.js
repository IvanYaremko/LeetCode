export const testPerformance = (fn, ...args) => {
  const initialMemory = performance.memory.usedJSHeapSize;
  const start = performance.now();

  fn(...args);

  const end = performance.now();
  const finalMemory = performance.memory.usedJSHeapSize;

  console.log(`Execution time: ${end - start} ms`);
  console.log(`Memory used: ${finalMemory - initialMemory} bytes`);
}