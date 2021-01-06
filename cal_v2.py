# # 계산기 만들기
# 개발목표
# 1. 수식을 받는다.
# 2. 계산결과를 출력
# 3. 입력으로 0이 들어오면 프로그램 종료
# 4. 아니면 다음 입력 대기

op = ['+','-','/','*']
while True :
    print("수식을 입력하세요. 종료하려면 '0'을 입력해 주세요.")
    cal = input()
    cal_op = 0
    for i in op :
        a = cal.find(i)
        if a != -1:
            cal_op = a
            break
    a= int(cal[:cal_op])
    b= int(cal[cal_op+1:])
    c= cal[cal_op]
    if cal == '0' :
        break
    if c == '+' :
        result = a+b
    elif c == '-' :
        result = a-b
    elif c == '*' :
        result = a*b
    elif c =='/' :
        result = a/b
    print(a,c,b,'=',result)

        
