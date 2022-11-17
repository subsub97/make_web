<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
    	table { border-collapse:collapse; width:600px; }
    	td { border: solid 1px gray; text-align: center; padding:5px; }

      #third {
        background-color: cyan;
        color: red;
      }
      #mode{
        background-color: yellow;
        color:blue;
      }
    </style>
  </head>
  <body>
    <?php echo "<h3>3-6-9<h3>"?>

    <table>
    <?php
        $num =0;
    	for ($row = 1; $row <= 100; $row++) {
    		echo "<tr>";
    		for ($col = 0; $col <= 9; $col++) {
          // 3의 배수인 경우 백그라운드를 다르게 하기 위한 ID부여
          if($num % 3 ==0){
    			echo "<td id = 'third'>$num</td>";
          }

          else if($num % 10 == 3 || $num % 10 == 6 || $num % 10 == 9 ){
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
