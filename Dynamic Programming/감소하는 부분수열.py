n = int(input())
a = list(map(int, input().split()))
d = [1] * n

for i in range(1, n) : #1 ~ n-1
    for j in range(i) : #0 ~ i-1
        if a[i] < a[j] : #두 수를 비교하여 앞에값이 더 크면 수행X
            d[i] = max(d[i], d[j]+1) #리스트 d의 값을 비교해가며 큰수로 갱신

print (max(d)) #리스트 d중 가장 큰값을 출력 > 감소한 횟수
print (d)
#증가하는 부분수열과 동일한 문제
#if문의 조건만 반대로 바꿔줌