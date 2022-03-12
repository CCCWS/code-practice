n = int(input())
a = list(map(int, input().split()))
dup = [1] * n
ddown = [1] * n
dsum = [0] * n

for i in range(1, n) :
    for j in range(i) : 
        if a[i] > a[j] : #입력한 수열을 순서대로 가장 긴 증가하는 부분수열을 구함
            dup[i] = max(dup[i], dup[j]+1) 

for i in range(n-1, -1, -1) : #n-1 ~ 0
    for j in range(n-1, i, -1) : #n-1 ~ i+1
        if a[i] > a[j] : #입력한 수열을 역순으로 가장 긴 증가하는 부분수열을 구함
            ddown[i] = max(ddown[i], ddown[j]+1) 

for i in range(n):
    dsum[i] = dup[i] + ddown[i] #두 리스트를 더하여 가장긴 바이토닉 부분수열을 구함

print (dup)
print (ddown)
print (dsum)
print (max(dsum)-1) #가장 큰 수는 중복되므로 1빼줌
