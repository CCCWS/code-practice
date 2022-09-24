//https://school.programmers.co.kr/learn/courses/30/lessons/42885

const people = [70, 50, 80, 50];
const limit = 100;

const solution = (people, limit) => {
  people.sort((a, b) => b - a);
  let answer = 0;

  for (let i of people) {
    if (i + people[people.length - 1] <= limit) {
      people.pop();
    }
    answer++;
  }

  return answer;
};

solution(people, limit);
