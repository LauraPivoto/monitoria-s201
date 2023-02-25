a = {}
for i =1,100 do
  a[i] = math.random(1,100)
  print(i .. " : " .. a[i])
end

x = 1
f = 1 
for i=1,10 do
  f = f*x
  x = x+1
end
print("Fatorial de 10: " .. f)