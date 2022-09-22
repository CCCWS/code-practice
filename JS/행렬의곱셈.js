//https://school.programmers.co.kr/learn/courses/30/lessons/12949

const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
];
const arr2 = [
  [1, 4],
  [2, 5],
  [3, 6],
];

const solution = (arr1, arr2) => {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const result = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      result.push(sum);
    }
    answer.push(result);
  }

  return answer;
};

console.log(solution(arr1, arr2));
