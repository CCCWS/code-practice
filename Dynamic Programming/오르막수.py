n = int(input())
d = [[0] * 10 for _ in range(n+1)] #2차원 리스트 생성

for i in range(10) :
    d[1][i] = 1 #1의 자리수의 오르막수는 0~9까지 모두 1
    
for i in range(2, n+1) : #1의 자리수는 이미 알고있음
    for j in range(10) : #0~9
        if j == 0 : #j가 0인 경우는 i-1의 합
            d[i][0] = sum(d[i-1])
        else: #1~9
            d[i][j] = d[i][j-1] - d[i-1][j-1]
            
print (sum(d[n]) % 10007)