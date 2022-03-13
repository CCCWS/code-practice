n = int(input())
a = [0] * n
d = [0] * n

for i in range(n) : 
    a[i] = int(input())

d[0] = a[0] #첫번째는 무조건 더해야 한다
d[1] = a[0]+a[1] #두번째 값 미리 계산
d[2] = max(a[0] + a[1] , a[1] + a[2])

for i in range(3,n) : #3번째부터 계산
    d[i] = max(a[i] + a[i-1] + d[i-3], a[i] + d[i-2]) 
    #연속해서 3번 이상은 더할 수 없다
    #현재 위치 + 3 이전까지의 합 + 1 이전수
    #현재 위치 + 2 이전까지의 합
    #마지막 수는 반드시 더해야 하므로 현재위치에 -1번째와 -2번째 둘다 더할수없다 
    
print(d[n-1])