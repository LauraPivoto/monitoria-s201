10 LET F = 1
20 LET I = 1

30 LET B = 10

40 GOTO 50

60 F = F*I 

70 I = I+1

50 IF I <= B THEN GOTO 60 ELSE GOTO 80

80 PRINT F
  