//https://school.programmers.co.kr/learn/courses/30/lessons/43165

const number = [1, 1, 1, 1, 1];
const target = 3;

const solution = (number, target) => {
  let answer = 0;

  const func = (index, sum) => {
    if (index === number.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    func(index + 1, sum + number[index]);
    func(index + 1, sum - number[index]);
  };

  func(0, 0);

  return answer;
};

console.log(solution(number, target));
