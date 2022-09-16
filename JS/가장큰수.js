//https://school.programmers.co.kr/learn/courses/30/lessons/42746

const solution = (numbers) => {
  if (Math.max(...numbers) === 0) return "0";

  const stringArr = numbers.map((a) => a.toString());

  return stringArr.sort((a, b) => b + a - (a + b)).join("");
  //(b + a) - (a + b)
  //단순히 a b 두수를 비교하는게 아닌 더한값을 비교
  //106 - 610은 0보다 작으므로 a 6이 b 10 보다 앞에 있어야함 > 순서를 바꾸지않음
  //210 - 102는 0보크 크므로 a 10과 b 2의 순서가 변경됨
};

const arr = [6, 10, 2];

console.log(arr.solution(arr));
