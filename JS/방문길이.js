//https://school.programmers.co.kr/learn/courses/30/lessons/49994

const dirs = "LULLLLLLU";

const solution = (dirs) => {
  const history = []; //이동 기록
  let curr = [0, 0]; //[x축, y축] 현재 위치

  for (let i of dirs) {
    const next = [...curr]; //이동후 위치

    if (i === "U") next[1]++;
    if (i === "D") next[1]--;
    if (i === "R") next[0]++;
    if (i === "L") next[0]--;

    if (next[1] <= 5 && next[1] >= -5 && next[0] <= 5 && next[0] >= -5) {
      //A > B, B > A는 중복된 경로이므로 두가지 경우를 모두 방문기록으로 넣어줌
      //중복값을 걸러내기위해 문자열로 바꾼값을 저장
      history.push([curr, next].join(""));
      history.push([next, curr].join(""));
      curr = next;
    }
  }

  //filter와 indexOf를 사용한 중복 필터링
  //item의 위치가 현재 idx와 같으면 가장 처음 만난 값으로 아직 중복없음
  //둘의 값이 서로 다르면 같은 값을 이미 앞에서 만난것으로 중복판정

  //앞서 AB BA두가지 경로를 넣어줬으므로 중복 제거후 2를 나눠줘야함
  return (
    history.filter((item, idx) => history.indexOf(item) === idx).length / 2
  );
};

console.log(solution(dirs));
