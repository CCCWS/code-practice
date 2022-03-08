n = int(input())
a = list( map ( int, input().split() ) )
if n == len(a):
    print(min(a), max(a))
