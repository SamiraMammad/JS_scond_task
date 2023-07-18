

var i = 0;
const num = []; 
const positive = [];
const even = [];
var sum = 0;

while (i<4) {
    let Numbers = parseInt(prompt("enter 4 negative and positive number"))
    num[i] = Numbers;
    i++;

}

num.forEach(x=>{
  if(x>0)
  sum = sum+x;
  console.log(sum);
}
);

num.forEach(x=>{
    if(x%2==0)
   
    even.push(x);
  });
  
  even.forEach(x=>{
    
   console.log(x);
  }

  );
