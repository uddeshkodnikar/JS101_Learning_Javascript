let character="a"

let lower_case=["a","b","c","d","e","f","g","h","i"];

let capital_case=["A","B","C","D","E","F","G","H","I"];

for ( let i=0; i<= lower_case.length;i++){
  
  if(character==lower_case[i]){
    character=capital_case[i];
  }
}

console.log(character);