T=int(input())
while True:
    a = input()
    a=a.split(',')
    result=int(a[0])+int(a[1])
    print(result)
    T=T-1
    if T==0:
        break