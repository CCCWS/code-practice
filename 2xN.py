n = int(input())

d = [0] * (n+1)
d[1] = 1
d[2] = 2

for i in range(3, (n+1)) :
    d[i] = d[i-1] + d[i-2]
    
print (d[i] % 10007)

#피보나치 수열과 동일