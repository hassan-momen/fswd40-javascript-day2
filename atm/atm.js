
var amount=0;

function numpad(key){
 var content=document.getElementById('atmscreen').innerHTML;
 var msg="<p>Please enter your amount :</p>";
 document.getElementById('atmscreen').innerHTML=content+key;

 if(key=='C'){amount=0;
              document.getElementById('atmscreen').innerHTML=msg;
              return 'cleared';
  }

 if(key=='submit'){
 	if(amount%10==0){document.getElementById('atmscreen').innerHTML='<p>Take your money</p>';
                     moneyOutput(amount); 
                    }
     else
      {document.getElementById('atmscreen').innerHTML='<p>only multiples of ten please</p>';}	
  return 'submitted';
 } 
 amount=(amount)*10+parseInt(key,10);

 console.log("current amount"+amount);
}

function moneyOutput(quantity){
 var hundreds=0,fifties=0,twenties=0,tens=0;
 var moneyCode=[];	
 
 console.log('moneyOutput');
 while((amount>100)){
   amount-=100;
   ++hundreds;
   console.log(amount);
   moneyCode.push('<div style="background-color: green" class="banknote">100</div>');
   }
  while((amount>50)){
    amount-=50;
    ++fifties;
    moneyCode.push('<div style="background-color: brown" class="banknote">50</div>');
    }
   while((amount>20)){
     amount-=20;
     ++twenties;
     moneyCode.push('<div style="background-color: blue" class="banknote">20</div>');
     } 
  while((amount>0)){
    amount-=10;
    ++tens;
    moneyCode.push('<div style="background-color: red" class="banknote">10</div>');
    }

  console.log('moneyCode: ');
  console.log(moneyCode.join(''));
  document.getElementById('moneyOutput').innerHTML=moneyCode.join('');
}


