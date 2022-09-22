//https://school.programmers.co.kr/learn/courses/30/lessons/12914#qna

const solution = (n) => {
  const answer = [0, 1];

  if (n === 0) return 0;
  if (n === 1) return 1;

  for (let i = 2; i <= n + 1; i++) {
    answer.push((answer[i - 2] + answer[i - 1]) % 1234567);
  }

  return answer[answer.length - 1];
};

solution(4);

console.log([1, 2, 3, 4, 5, 6][0]);
