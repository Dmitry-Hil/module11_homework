function countDown(number) {
   
  if (!Number.isInteger(number) || number == 0) 
    {return "Введите целое число, не равное нулю";
    }    
  else { 
      let answer = String();
      for (let i = number; i >= 1; i--)
          answer +=i + ' ';
      return answer;
  }
  }
  
  // countDown ();
  // console.log (countDown(0));
  // console.log (countDown(4));
  