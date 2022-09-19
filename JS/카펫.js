//https://school.programmers.co.kr/learn/courses/30/lessons/42842

const brown = 10;
const yellow = 2;

const solution = (brown, yellow) => {
  const size = brown + yellow; //전체 크기는 brown과 yellow가 더한값

  //yellow 위아래로 brown이 붙어있으므로 최소 높이는 3
  for (let height = 3; height <= brown; height++) {
    if (size % height === 0) {
      const width = size / height;

      //yellow의 상하좌우 테두리가 brown이므로 빼주고 yellow 크기와 일치하는지 확인
      if ((height - 2) * (width - 2) === yellow) {
        //큰값이 먼저 나와야하기 때문에 height는 작은값부터 시작하므로 width, height로 리턴
        return [width, height];
      }
    }
  }
};

console.log(solution(brown, yellow));
