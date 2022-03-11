n = int(input()) #리스트 요소 갯수 입력

wine = [] #입력한 값을 담을 리스트

for i in range(n) :
    wine.append(int(input())) #순차적으로 값을 입력

d = [0]*n #계산한 값을 담을 리스트

d[0] = wine[0] #자기 자신 1가지 경우

if n >= 2 :
    d[1] = wine[0] + wine[1] #자기 자신 + 이전 위치 한가지 경우

if n >= 3 :
    d[2] = max(d[1], wine[2]+wine[1], wine[2]+wine[0])
    #1. 현재 위치를 제외한 이전가지의 합
    #2. 자기자신 + 이전 위치의 합
    #3. 자기자신 + -2번째, 전전 위치의 합

for i in range(3, n):
        d[i] = max(d[i-1], wine[i]+wine[i-1]+d[i-3], wine[i]+d[i-2])
#         #현재 위치에서 3가지 경우로 계산
#         #1. 현재 위치를 제외한 이전까지의 합
#         #2. 현재 위치 + 이전 위치 + -3번째, 전전전 위치까지의 합
#         #3. 현재 위치 + -2번째, 전전 위치까지의 합

print(d)
print(wine)
print(d[n-1])