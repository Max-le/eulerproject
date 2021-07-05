def get_last_items(items, x):
    '''get last x items of a list'''
    i = len(items) - 1
    lastItems = []
    while x > 0: 
        lastItems.append(items[i])
        i = i - 1
        x = x - 1 
    return lastItems

n = 1
total = 0 
while n < 1001: 
    total = total +  pow(n, n)
    n = n + 1 

digits = list(map(int, str(total)))

print(get_last_items(digits, 10))