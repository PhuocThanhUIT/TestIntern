var ketqua =[];
var objtemp = {};
var obj = {
    "Color": ["Red", "White", "Black"],
    "ScreenSize": ["13", "14", "15.6"],
    "Chip": ["core i3", "core i5", "core i7"],
    "Ram": ["4", "8", "12", "16"]
}
function createArrayResult(){
    var length= Object.keys(obj).length;
    loop(length,obj,0);
    console.log(ketqua);
}
function loop(length,obj,i) {
    const key = Object.keys(obj);
    const value = Object.values(obj);
    for (var a=0;a<value[i].length;a++){
        objtemp[key[i]] = value[i][a];
        if(i+1==length-1){
            for (var j=0;j<value[i+1].length;j++){
                objtemp[key[i+1]]= value[i+1][j];
                console.log(objtemp)
                //ketqua.push(objtemp);
                //console.log(ketqua);
                //delete objtemp[key[i+1]];
        }}else{
            loop(length,obj,i+1);
        }
    }
}
createArrayResult();