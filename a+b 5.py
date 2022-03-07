while True :
    try :
        a,b=map(int,input("input").split())
        if a+b == 0 :
            break
        print(a+b)
    except:
        break