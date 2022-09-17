//https://school.programmers.co.kr/learn/courses/30/lessons/12941

const arrA = [1, 2];
const arrB = [3, 4];

const solution = (a, b) => {
  let answer = 0;
  const sortA = a.sort((a, b) => a - b);
  const sortB = b.sort((a, b) => b - a);

  for (let i in sortA) {
    answer += sortA[i] * sortB[i];
  }

  return answer;
};

console.log(solution(arrA, arrB));
