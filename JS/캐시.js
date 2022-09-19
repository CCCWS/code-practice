//https://school.programmers.co.kr/learn/courses/30/lessons/17680

const cacheSize = 3;
const cities = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "Pangyo",
  "Seoul",
];

const solution = (cacheSize, cities) => {
  if (cacheSize === 0) return cities.length * 5;

  let answer = 0; //실행시간
  let cache = []; //배열의 0번째는 가장 오래된값, 마지막은 최신값
  const newCities = cities.map((item) => item.toUpperCase());

  for (i of newCities) {
    //cache가 비어있는 경우
    if (cache.length < cacheSize) {
      //cache에 i가 포함되어 있다면 hit
      if (cache.includes(i)) {
        //hit했을경우 해당 값을 맨뒤로 보내줌
        cache = cache.filter((item) => item !== i);
        cache.push(i);
        answer += 1;
      } else {
        //포함되어있지 않다면 miss
        cache.push(i);
        answer += 5;
      }
    } else {
      //cache가 꽉차있는 경우
      //cache에 i가 있다면 cache hit
      if (cache.includes(i)) {
        cache = cache.filter((item) => item !== i);
        cache.push(i);
        answer += 1;
      } else {
        //cache에 i가 없으면 cache miss
        //배열 맨앞의 값을 빼주고 맨뒤에 i추가
        cache.shift();
        cache.push(i);
        answer += 5;
      }
    }
  }

  return answer;
};

console.log(solution(cacheSize, cities));
