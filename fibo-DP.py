#Top - Down
d = [0] * 100 #이미 계산된 결과를 담는 리스트

def fibo(x) :
    if x == 1 or x == 2 :
        return 1 #1과 2의 답을 알고 있으므로 종료조건
    
    if d[x] != 0 :
        return d[x] #d[x]의 값이 0이 아니면 이미 계산된것, 그대로 가져옴
    
    d[x] = fibo(x-1) + fibo(x-1) #fibonacci 수행
    return d[x]

#fibo(5) = 
#fibo(4) + fibo(3) = 
#(fibo(2) + fibo(3)) + (fibo(1) + fibo(2))


#Bottom - Up
d = [0] * 100 #이미 계산된 결과를 담는 리스트

d[1] = 1 #fibo 1과 2의 값은 1이라고 미리 리스트에 담음
d[2] = 1
n = int(input())

for i in range(3, n+1) : #fibo 1,2는 알고있음. 3부터 실행
    d[i] = d[i - 1] + d[i - 1]
    
print(d[n])

#fibo(5) =
#d[2] + d[1] = d[3]
#d[3] + d[2] = d[4]
#d[4] + d[3] = d[5]