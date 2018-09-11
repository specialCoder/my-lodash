const _ = {};

_.chunk = (arr,num)=>{
    const length = arr.length;
    if(!num || length===0 || length < num){
        return arr;
    };
    const newArr = [];

   for(let i=0;i<length;i+=num){
    const data = arr.slice(i,i+num);
    newArr.push(data);
   }
   return newArr;
}
