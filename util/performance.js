export const testPerformance = (fn, ...args) => {
  const initialMemory =  process.memoryUsage().heapUsed;
  const start = performance.now();

  fn(...args);

  const end = performance.now();
  const finalMemory =  process.memoryUsage().heapUsed;

  console.log(`Execution time: ${end - start} ms`);
  console.log(`Memory used: ${finalMemory - initialMemory} bytes`);
}