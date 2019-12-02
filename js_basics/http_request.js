const http=require("http");

const user_input = "yellow"
const django_url = "http://127.0.0.1:8000/pigmentSearch/" + user_input + "/";
const baidu_trial = "http://www.baidu.com/" 

http.get(django_url,function(data){
    var str="";
    data.on("data",function(chunk){ // data: 当端接收到数据时触发
        str+=chunk; //监听数据响应，拼接数据片段
    })
    data.on("end",function(){ // End: 数据接受完时触发
        console.log(str.toString())
    })
})