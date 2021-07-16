
main();

function main() {
  // const input = [7,2,3,5,1];
  // const input = [7,7,7];
  const input = [7,2,3,5,1, -12, 1];
  const result = findHighestDifferenceWithPredecessors(input);
  console.log(`Result: ${result}`);
}

function findHighestDifferenceWithPredecessors(input) {
  let maxDifference = 0;

  input.forEach((number, index) => {
    const minPredecessor = getSmallestPredecessor(input, index);
  
    const difference = number-minPredecessor;
    if(difference > maxDifference){
      maxDifference = difference
    }

  })

  return maxDifference == 0 ? -1 : maxDifference;
}

function getSmallestPredecessor(baseArray, index) {
  const slicedArray = getAllPredecessors(baseArray, index);
  return getMinimumFromArray(slicedArray);
}

function getAllPredecessors(baseArray, index) {
  return baseArray.slice(0,index);
}

function getMinimumFromArray(array) {
  return Math.min(...array);
}
