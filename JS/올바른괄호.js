//https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

const solution = (s) => {
  const stack = [];

  // s의 길이와 첫번째, 마지막 문자를 체크하여 early return
  if (s.length % 2 !== 0 || s[0] === ")" || s[s.length - 1] === "(")
    return false;

  for (let i of s) {
    if (stack.length === 0 || i === stack[0]) {
      stack.push(i);
      if (stack[0] === ")") {
        return false;
      }
    } else {
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

const s = "(()(";
console.log(solution(s));
