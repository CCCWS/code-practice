//https://school.programmers.co.kr/learn/courses/30/lessons/12945

const solution = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  const fibo = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibo[i] = (fibo[i - 2] + fibo[i - 1]) % 1234567;
  }

  return fibo[n];
};

console.log(solution(10));
