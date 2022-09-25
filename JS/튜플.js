// https://school.programmers.co.kr/learn/courses/30/lessons/64065

const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";

const solution = (s) => {
  const answer = [];
  const newArr = s
    .slice(2, -2)
    .split("},{")
    .map((a) => a.split(","))
    .sort((a, b) => a.length - b.length);

  for (let i of newArr) {
    i.forEach((a) => {
      if (!answer.includes(parseInt(a))) {
        answer.push(parseInt(a));
      }
    });
  }

  return answer;
};

solution(s);
