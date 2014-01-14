/*解决IE8下的console.log调试报错 及是否开启全局的调试语句*/
var globalDebug = true;  //关闭所有浏览器下的调试语句(包括alert,console)
var ieDebug = true;     //关闭ie8下的调试

if(!globalDebug){        //如果将globalDebug设为false 那么将会重写所有浏览器的调试语句alert,console等
	// 重写console.log();
	var console = {
		log: function(){
			 ;
		}
	}

	//重写alert();
	window.alert = function(){
		;
	}

}else{
	if( typeof(console) == 'undefined' ){    //IE8下:

		if(ieDebug){                          //在IE8下开启调试语句  那么将console.log转为alert
				var console = {
				log: function(str){
					 alert(str);
				}
			}
		}else{										//在IE8下关闭调试语句  那么将console.log什么都不执行 同时重写alert()语句
			// 重写console.log();
			var console = {
				log: function(){
		 			;
				}
			}
			/*//重写alert();
			function alert(str){
	 				;
			}*/         //注意不能在判断里面直接写函数声明 这在js里面是没有用,外部还是可以调用的

			//重写alert();
			window.alert = function(){
				 ;
			}

		}
	}
}