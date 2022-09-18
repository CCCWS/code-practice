//https://school.programmers.co.kr/learn/courses/30/lessons/42748

const commandes = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

const array = [1, 5, 2, 6, 3, 7, 4];

const solution = (array, commandes) => {
  const answer = [];

  commandes.map((data) => {
    answer.push(
      array.slice(data[0] - 1, data[1]).sort((a, b) => a - b)[data[2] - 1]
    );
  });

  return answer;
};

solution(array, commandes);
