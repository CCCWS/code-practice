t = int(input()) #테스트 케이스 갯수 입력
for _ in range(t) :
    n = int(input()) #2xN, 리스트의 n번째 까지
    d = [list(map(int, input().split())) for _ in range(2)] #2차원 리스트 생성
    for i in range(1,n) : #0번째는 변동없음
        if i == 1 :
            d[0][i] += d[1][0] 
            d[1][i] += d[0][0] 
        else :
            d[0][i] += max(d[1][i-1], d[1][i-2]) #인접한 수는 더할수 없기 때문에 대각선으로 교차하여 비교
            d[1][i] += max(d[0][i-1], d[0][i-2])
    print(max(d[0][n-1], d[1][n-1])) #리스트는 0부터
    
    #50 10 100 20 40
    #30 50 70  10 60 상하좌우 인접된 수는 동시에 선택을 못한다