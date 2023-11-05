// Calculate the mean of an array of numbers
export function calculateMean(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }
  
  // Calculate the Median of an array of numbers
  export function calculateMedian(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const middle = Math.floor(numbers.length / 2);
    if (numbers.length % 2 === 0) {
      return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
    }
    return sortedNumbers[middle];
  }
  
  // Calculate the mode of an array of numbers
  export function calculateMode(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const frequencyMap: Record<number, number> = {};
    numbers.forEach((num) => {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });
    const maxFrequency = Math.max(...Object.values(frequencyMap));
    const mode = parseInt(Object.keys(frequencyMap).find((key:any) => frequencyMap[key] === maxFrequency) || '0', 10);
    return mode;
  }
  