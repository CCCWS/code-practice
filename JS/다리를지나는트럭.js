//https://school.programmers.co.kr/learn/courses/30/lessons/42583

const solution = (bridge_length, weight, truck_weights) => {
  const bridge = []; //현재 다리 상태
  let bridge_weight = 0; //현재 다리 무게
  let count = 0; //반복횟수
  let wait_truck = truck_weights.shift(); //대기중인 트럭

  for (let i = 0; i < bridge_length; i++) {
    // 다리 상태 초기화
    bridge.push(0);
  }

  //초기값 세팅
  bridge_weight = wait_truck;
  //다리의 맨앞을 지우고 맨뒤에 트럭 추가
  bridge.shift();
  bridge.push(wait_truck);

  count++;

  while (true) {
    //다리의 트럭이 한칸 이동한 상태
    //이동했으므로 다리의 맨앞의 값을 다리 무게에서 빼줌
    bridge_weight -= bridge.shift();

    //대기중인 트럭 갱신, 동시에 트럭 배열에서 하나 빠짐
    wait_truck = truck_weights.shift();

    //현재 다리 무게 + 대기중인 트럭의 무게가 최대 무게 이하라면
    if (bridge_weight + wait_truck <= weight) {
      bridge_weight += wait_truck; //다리 전체무게에 대기중인 트럭 더함
      bridge.push(wait_truck); //다리에 대기중인 트럭 추가
    } else {
      //다리에 새로운 트럭이 추가가 불가능 할때, 최대 무게가 넘어감
      truck_weights.unshift(wait_truck); //대기중이던 트럭을 다시 트럭 배열로 돌려보냄
      bridge.push(0); //빈트럭 = 0을 다리에 추가
    }

    count++;
    console.log(bridge);
    //트럭은 끊이지 않고 연속으로 들어오기때문에 다리 무게가 0이면 트럭은 모두 이동함
    if (bridge_weight === 0) {
      return count;
    }
  }
};

const bridge_length = 2; //다리길이 > [][]
const weight = 10; //다리 최대 무게
const truck_weights = [7, 4, 5, 6]; // 트럭 개수와 무게

console.log(solution(bridge_length, weight, truck_weights));
