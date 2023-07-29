n = int(input("Necenci fibonacci ededi daxil edilsin? "))
fib1 = 0
fib2 = 1
if n == 1:
    print(fib1)
elif n == 2:
    print(fib2)
else: 
    for i in range(n-2):
        temp = fib1 + fib2 
        fib1 = fib2        
        fib2 = temp
        if temp < n:
            print(temp)





    
