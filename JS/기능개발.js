//https://school.programmers.co.kr/learn/courses/30/lessons/42586

const progresses = [98, 98, 97, 98];
const speeds = [1, 1, 1, 1];

const solution = (progresses, speeds) => {
  let a = 0;
  const deploy = [];

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      for (let i = 0; i < progresses.length; i++) {
        if (progresses[i] <= 100) {
          progresses[i] += speeds[i];
        }
      }

      if (progresses[0] >= 100) {
        let day = 0;
        while (progresses[0] >= 100) {
          progresses.shift();
          speeds.shift();
          deploy[a] = ++day;
        }
        ++a;
      }
    }
  }
  return deploy;
};

console.log(solution(progresses, speeds));
