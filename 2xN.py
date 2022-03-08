n = int(input())

d = [0] * (n+1)

for i in range(1, (n+1)) :
    if i == 1 :
        d[i] = 1
        continue
    elif i == 2 :
        d[i] = 2
        continue
    d[i] = d[i-1] + d[i-2]
    
print (d[n] % 10007)

#피보나치 수열과 동일
#d[1], d[2]를 fon문 밖에 미리 지정했을경우 런타임 에러 발생