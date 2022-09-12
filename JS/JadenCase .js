//https://school.programmers.co.kr/learn/courses/30/lessons/12951

const solution = (s) => {
  const arr = s.split(" ");

  for (let i in arr) {
    arr[i] = arr[i].toLowerCase();
    if (isNaN(parseInt(arr[i].charAt(0)))) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  }
  return arr.join(" ");
};

console.log(solution(s));
