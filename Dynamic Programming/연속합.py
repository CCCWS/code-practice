n = int(input())
a = list(map(int,input().split()))
d = [0] * n
d[0] = a[0]

for i in range(1, n) :
    d[i] = max(a[i], d[i-1] + a[i]) #현재 위치 i와 i + d[i-1]의값(i-1까지 더한수중 가장 큰값)
    
print (max(d)) #d중 가장 큰값 > 연속으로 더한수중 가장 큰값