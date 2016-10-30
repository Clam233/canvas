/**
 * Created by Clam on 2016/7/18.
 */
window.onload = function () {
    var canvas = document.getElementById("canvas");

    canvas.width = 1024;
    canvas.height = 768;

   if(canvas.getContext('2d')){
       var context = canvas.getContext('2d');
       //使用context绘制
   }
    else{
       alert("当前浏览器不支持canvas");
   }

    //1.先声明状态设置，
    /*context.moveTo(100,100);  //设置起点
    context.lineTo(700,700);  //终点
    context.lineTo(100,700);
    context.lineTo(100,100);*/
    /*2.再进行绘制动作
    * .stroke()画线
    * .fill() 填充
    * */

    /*填充*/
    /*context.fillStyle = "rgb(2,100,30)";
    context.fill();
    /!* 线*!/
    context.lineWidth = 5;
    context.strokeStyle = "#005588";
    context.stroke();*/


    /*绘制弧线  绘制圆*/
    /*context.lineWidth = 5;
    context.strokeStyle = "#005588";
    context.arc(300,300,200,0,2*Math.PI,false);*/
    //context.stroke();
    context.fillStyle = "#005588";
    context.strokeStyle = "#005588";
    context.lineWidth = 5;
    //context.fill();

    for(var i = 0;i < 10;i++){
        context.beginPath();
        context.arc(300,300,200,0,1.5*Math.PI,false);
        context.stroke();
    }
    //你在这里做什么？
    //世界上最遥远的距离不是生与死，而是对着空气说我爱你，我想你了！
}
