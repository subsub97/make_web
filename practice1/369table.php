<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
    	table { border-collapse:collapse; width:600px; border: solid 3px black;}
    	td { border: solid 1px black; text-align: center; padding:5px; }

      #third {
        background-color: cyan;
        color: red;
        font-weight: bold;
      }
      #mode{
        background-color: yellow;
        color:blue;
        font-weight: bold;
      }
      p{
        font-size: 20px;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <?php echo "<p>3-6-9 테이블</p> "?>

    <table>
    <?php
        $num =0;
    	for ($row = 1; $row <= 100; $row++) {
    		echo "<tr>";
    		for ($col = 0; $col <= 9; $col++) {
          $check_num = (int)($num/10);
          // 3의 배수인 경우 백그라운드를 다르게 하기 위한 ID부여
          if($num % 3 ==0){
    			echo "<td id = 'third'>$num</td>";
          }

          else if($num % 10 == 3 || $num % 10 == 6 || $num % 10 == 9 ){
            echo "<td id = 'mode'>$num</td>";
          }
          // 10의 자리가 3,6,9인 경우 와 아닌경우 구분하기
          else if ($check_num % 10 == 3 || $check_num%10 == 6 || $check_num%10 == 9){
             echo "<td id = 'mode'>$num</td>";
          }
          // 100의 자리 수가 3 6 9 인경우
          else if((int)($num/100) == 3 || (int)($num/100) == 6 || (int)($num/100) == 9){
            echo "<td id = 'mode'>$num</td>";
          }
          else {
          echo "<td>$num</td>";
          }
          $num++;
    		}
    		echo "</tr>";
    	}
    ?>
    </table>

  </body>
</html>
