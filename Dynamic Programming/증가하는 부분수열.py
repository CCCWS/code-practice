n = int(input())
a = list(map(int, input().split()))
d = [1] * n

for i in range(1, n) : #1 ~ n-1
    for j in range(i) : #0 ~ i-1
        if a[i] > a[j] : #두 수를 비교하여 앞에값이 더 작으면 수행X
            d[i] = max(d[i], d[j]+1) #리스트 d의 값을 비교해가며 큰수로 갱신




# for i in range(n-1):
#     if a[i] < a[i+1] :
#         d[i+1] += d[i]
#     else :
#         d[i+1] = d[i] dp테이블의 값이 누적됨 > 실패

print (max(d)) #리스트 d중 가장 큰값을
print (d)