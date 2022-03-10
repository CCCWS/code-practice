n = int(input())

d = [ [0]*10 for _ in range(n+1) ] #2차원 배열 생성
for i in range(1, 10) :
    d[1][i] = 1 #1의 자리수는 계단수가 모두 1

for i in range(1, n+1) : #1의 자리수는 미리 선언
    for j in range(10) :
        if j == 0 : #0일경우 인접한 계단수는 1하나
            d[i][j] = d[i-1][1]
            
        elif j == 9 : #9또한 인접한 계단수는 8하나
            d[i][j] = d[i-1][8]
        
        else :
            d[i][j] = d[i-1][j-1] + d[i-1][j+1]
            
print (sum(d[n]) % 1,000,000,000)