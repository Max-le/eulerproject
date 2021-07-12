n = 0
sum = 0 
while (n < 1000) : 
    if ((n % 5 == 0)  or (n % 3 == 0)): 
        sum = sum + n
    print(sum, n)
    n = n + 1 


print(sum)

