num = 5
if num > 0: # if the number is greater than 0, calculate the factorial
  factorial = 1
  for i in range(1, num+1):
    factorial *= i
  print(factorial)
else: # if the number is 0 or negative, multiply by 2
  result = num * 2
  print(result)