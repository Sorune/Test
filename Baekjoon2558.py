T =int(input())
E = T
while T:
    a = input()
    result = int(a[0])+int(a[2])
    print(result)
    E = E-1
    if E==0:
        break

    