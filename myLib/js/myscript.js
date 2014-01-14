/*解决IE8下的console.log调试报错 及是否开启全局的调试语句*/
var globalDebug = true;  //false关闭所有浏览器下的调试语句(包括alert,console)
var ieDebug = false;     //false关闭ie8下的调试
if(!globalDebug){       
	// 重写console.log();
	var console = { log: function(){;} }
	//重写alert();
	window.alert = function(){;}
}else{
	if( typeof(console) == 'undefined' ){    //IE8下:
		//在IE8下开启调试语句  那么将console.log转为alert
		if(ieDebug){ var console = {log: function(str){alert(str);}}}
		//在IE8下关闭调试语句  那么将console.log什么都不执行 同时重写alert()语句
		else{										
			// 重写console.log();
			var console = {log: function(){;}}
			//重写alert();
			window.alert = function(){;}
		}
	}
}