# # 계산기 만들기
# 개발목표
# 1. 수식을 받는다.
# 2. 계산결과를 출력
# 3. 입력으로 0이 들어오면 프로그램 종료
# 4. 아니면 다음 입력 대기

while True :
    print("수식을 입력하세요. 종료하려면 '0'을 입력해 주세요.")
    cal = input()
    if cal == '0' :
        break
    a=int(cal[0])
    b=int(cal[2])
    c=cal[1]
    if c == '+' :
        result = a+b
    elif c == '-' :
        result = a-b
    elif c == '*' :
        result = a*b
    elif c =='/' :
        result = a/b
    print(a,c,b,'=',result)

        
