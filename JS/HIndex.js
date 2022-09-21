//https://school.programmers.co.kr/learn/courses/30/lessons/42747

const citations = [1, 4];

const solution = (citations) => {
  const arr = citations.sort((a, b) => b - a);

  let count = 0;

  while (true) {
    let nowCount = 0;
    for (let i of arr) {
      if (i >= count) {
        nowCount++;
      }
    }

    if (count >= nowCount) {
      return nowCount;
    }

    count++;
  }
};

console.log(solution(citations));
