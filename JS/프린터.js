//https://school.programmers.co.kr/learn/courses/30/lessons/42587

const solution = (priorities, location) => {
  if (location > priorities.length - 1) {
    return;
  }

  let curr = 0;

  while (true) {
    let max = Math.max(...priorities);
    const n = priorities.shift();

    if (max === n) {
      curr++;

      if (location === 0) {
        return curr;
      }
    } else {
      priorities.push(n);
    }
    location--;

    if (location === -1) {
      location = priorities.length - 1;
    }
  }
};
