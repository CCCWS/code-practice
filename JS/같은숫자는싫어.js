//https://school.programmers.co.kr/learn/courses/30/lessons/12906

const arr = [4, 4, 4, 3, 3];

const solution = (arr) => {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
};

console.log(solution(arr));
