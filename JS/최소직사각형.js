//https://school.programmers.co.kr/learn/courses/30/lessons/86491

const sizes = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
];

const solution = (sizes) => {
  let width = 0;
  let height = 0;

  sizes.map((i) => {
    i.sort((a, b) => b - a);

    if (i[0] > width) {
      width = i[0];
    }

    if (i[1] > height) {
      height = i[1];
    }
  });

  return width * height;
};

console.log(solution(sizes));
