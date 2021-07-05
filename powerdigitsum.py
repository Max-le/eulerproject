print(pow(2,1000))

digits = list(map(int, str(pow(2,1000))))


sum = 0 
n = 0
while n < len(digits): 
    sum = sum + digits[n]
    n = n + 1 

print(sum)