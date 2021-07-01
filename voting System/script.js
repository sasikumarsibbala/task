let models={
  0:0,
  1:0,
  2:0,
  3:0
}
 let model_values="";

function registerNewVote(){
var x=Number(prompt("Which is the best indian car?\n0: Maruthi\n1: Hyundai\n2: KIA\n3: Ford"));
if(x>=0&&x<=3){
 var  value=models[x];

 value++;
 models[x]=value;
 model_values= Object.values(models);
 
 displayResults(model_values);
}
else{
alert("Enter valid number")
}


}
function displayResults(model_values){
   
  console.log("Poll results are "+model_values);
}
