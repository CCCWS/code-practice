n = int(input())

d = [0] * (n+1)

d[1] = 1 #1자리수와  값 미리 입력


for i in range(2, n+1) : #2부터 n까지 결과값 
    d[i] = d[i-1] + d[i - 2]
    
print (d[n])

#0으로 시작 X
#1이 연속으로 X 
#1자리수 > 1
#2자리수 > 10
#3자리수 > 100, 101
#d[i] = d[i-2] + d[i-1]