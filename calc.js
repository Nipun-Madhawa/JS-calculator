/*
 * Implement all your JavaScript in this file!
 */

var result={final:0,temp:0,opclick:0,op:0,opop:0};


$('.number').click(function(){
if(result.opclick>0){
	$('#display').val($(this).val());
	result.opclick=0;
	}
else{
	$('#display').val($('#display').val() + $(this).val());
}
result.temp=$('#display').val();
});

$('.operator').click(function(){

result.opclick++;

if($(this).attr('id')=="equalsButton"){
	
	if(result.opclick<2){
	result.op=result.opop;
	result.opclick--;/*result.opclick=1;*/}
	/*result.opclick-=2;*/}
else{
	result.temp=$('#display').val();
	result.opop=$(this).attr('value');}

if(result.opclick>1){
	result.op=$(this).attr('value');
	}

if(result.opclick<2){

  if(result.op>0){
	if(result.op==1){
	result.final=Number(result.final)+Number(result.temp);
	
	}
	
	if(result.op==2){
	result.final=Number(result.final)-Number(result.temp);
	
	}

	if(result.op==3){
	result.final=Number(result.final)*Number(result.temp);
	
	}

	if(result.op==4){
	result.final=Number(result.final)/Number(result.temp);
	
	}
	
  }
  else{
	result.final=$('#display').val();
	result.opop=$(this).attr('value');
	result.opclick=1;
  }
  $('#display').val(result.final);	


  result.op=$(this).attr('value');
}
});


$('#clearButton').click(function(){
$('#display').val('');
result.final=0;
result.temp=0;
result.op=0;
result.opclick=0;
result.opop=0;
});