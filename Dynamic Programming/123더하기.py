t = int(input()) #반복횟수 입력
for _ in range(t) : #t만큼 반복실행
    i = int(input()) #구할값 입력
    
    d=[0] * (i+1) #참조할 값을 담을 리스트
    d[1] = 1      #1,2,3의 값 미리 입력
    d[2] = 2
    d[3] = 4

    for i in range(4,(i+1)) : #3까지 값을 알고 있으므로 4부터 시작
        d[i] = d[i-3] + d[i-2] + d[i-1] #i는 앞선 3개의 경우의 수의 합
    print (d[i])