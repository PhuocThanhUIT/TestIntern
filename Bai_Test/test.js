function solution() {
    var A =[1,2,4,5,6];
    var result = null;
    var i = 1;
    do{
        if(A.includes(i)){
            i++
        }else{
            return i;
        }
    }while(!result);
}
console.log(solution())