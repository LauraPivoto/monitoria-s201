module Main where
main :: IO()
main = do
  let a = [30,29..1]
      b = map (*30) a
  print $ head $ reverse b