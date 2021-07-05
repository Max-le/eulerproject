
def getBase(n):
    return max(map(int, str(n)))
def listAllDigitsOfBase(base):
    result = []
    while base > 0 : 
        result.append(base)
        base = base - 1 
    return sorted(result)



def isPanDigital(n):
    base = getBase(n)
    digits = sorted(map(int, str(n)))
    digits_base = listAllDigitsOfBase(base)
    return digits_base == digits

def isPrime(n):
    divider = 2
    while(divider < n):
        if ((n % divider) == 0 ): return False
        divider = divider + 1 
    return True

n = 1 


while True:
    if isPanDigital(n) and isPrime(n): 
        print(n)
    n = n + 1 