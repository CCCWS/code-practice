//https://school.programmers.co.kr/learn/courses/30/lessons/12973#

const s = "baabaa";

const solution = (s) => {
  if (s.length % 2 === 1) return 0;
  const stack = [];

  for (let i of s) {
    if (stack[stack.length - 1] === i) {
      stack.pop();
    } else {
      stack.push(i);
    }
  }

  if (stack.length === 0) return 1;
  else return 0;
};

console.log(solution(s));
