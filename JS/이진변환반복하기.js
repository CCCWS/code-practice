//https://school.programmers.co.kr/learn/courses/30/lessons/70129
const solution = (s) => {
  let arr = [...s];
  let arrLength = 0;
  let count = 0; //반복횟수
  let zeroCount = 0; // 0제거 횟수

  while (true) {
    zeroCount = zeroCount + arr.filter((item) => "0" === item).length;
    arrLength = arr.filter((s) => parseInt(s) !== 0).length;
    arr = [...arrLength.toString(2)];
    count++;
    if (arr.length === 1) {
      return [count, zeroCount];
    }
  }
};

const s = "110010101001"
console.log(solution(s));
