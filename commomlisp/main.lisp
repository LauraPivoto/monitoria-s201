(defn retNome  [nome]
  (str "Nome, " nome) )

(println (retNome 'Laura'))

;definindo variáveis
(def x 7)

#|
   (if (> 4 5)
  (message "4 é > 5") -> then

  (message "4 é < 5")) ->else
|#

(loop [x 10]​

  (when (> x 1)​

    (println x)​

    (recur (- x 2))))​

;criar lista (list 1 2 3)

(map nome_func [1 2 3 4 5])