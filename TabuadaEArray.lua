x = io.read()

function tabuada(x)
  for i = 1,10 do
  print(x*i)
  end
end

tabuada(x)


a = {}

for i = 1,100 do
  a[i] = math.random(1,1000)
end

for i = 1,100 do
  print("Valor de "..i .. ": "..a[i])
end