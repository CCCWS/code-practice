n = int(input())
a = list(map(int,input().split()))
a.sort()
if n == len(a) :
    for i in a :
        print(i, end=' ')