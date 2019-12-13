/*-----------------------通用Ajax请求处理类-----------------*/
/*-----------------------版本：V1.0------------------*/
/*-----------------------作者:songxw-----------------*/
var net = new Object();
net.Ready_Uninitialized=0;
net.Ready_Loading=1;
net.Ready_Loaded=2;
net.Ready_Intractive=3;
net.Ready_Complete=4;
//构造对象
net.ContentLoader=function(url,onLoadHandle,onErrorHandle,params,postString,isProxy,method)
{
    this.url=url;
    this.onloadHandle  =onLoadHandle ;
    this.onerrorHandle=(onErrorHandle)?onErrorHandle:this .defaultError; 
    this.ajaxObj=null;
    this.params=params;
    this.postString=postString;
    this.method  = method;

    //默认启用代理,进行请求

    this.isProxyEnabled=false;
    
    var sourceDomain=this.getDomain(window.location.href);
    var targetDomain=this.getDomain(url);
	
    //代理地址
    this.httpProxy="http://"+sourceDomain.server+sourceDomain.port+"/"+sourceDomain.sitename+"/js/proxy/httpproxy.jsp";
   
    if(isProxy==true){ this.isProxyEnabled=true; }
    else{ this.isProxyEnabled=false; }
    
    if(sourceDomain.server==targetDomain.server && sourceDomain.port==targetDomain.port){
    	this.isProxyEnabled=false;
    }
    //需要在url后加一个随机数，避免由于IE设置问题导致新的请求没能正常发送
    if(url.indexOf("?")!=-1){ 
    	url=url.LTrim().RTrim();
    	url=url+"&random="+Math.random(); 
    }else if(url.indexOf("?") == -1){
    	url=url.LTrim().RTrim();
    	url=url+"?random="+Math.random(); 
    }
    this.loadXmlDoc(url);
};
//加载xml文档
net .ContentLoader.prototype.loadXmlDoc=function(url)
{
	//启用代理
     if(this.isProxyEnabled==true)
     {
     	this.loadXmlDoc_proxy(url);
     }
     //未启用代理
     else
     {
     	this.loadXmlDoc_noProxy(url);
     }
};
//加载xml文档
net .ContentLoader.prototype.loadXmlDoc_noProxy=function(url)
{
      if (window.ActiveXObject)
      {
        this.ajaxObj= new ActiveXObject("Microsoft.XMLHTTP");
      }  
      else if (window.XMLHttpRequest)      
      {
       	 this .ajaxObj = new XMLHttpRequest();     
      }
      if (this .ajaxObj)
      {
        try 
        {
            var loader=this ;
            this .ajaxObj.onreadystatechange=function()
            {
                loader.onReadyState.call(loader);
            };
            if(this.method && this.method=="PUT"){
            	this .ajaxObj.open("PUT",url,true);
				this .ajaxObj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				if(this.postString!=null && this.postString!=undefined)
				{
				    this .ajaxObj.send(this.postString);
				}
				else
				{
				    this .ajaxObj.send(null);
				}
            }
            else if(this.postString==null || this.postString==undefined)
            {
				this .ajaxObj.open('GET',url,true);
				this .ajaxObj.send(null);
            }
            else if(this.postString=="DELETE")
            {
				this .ajaxObj.open("DELETE",url,true);
				this .ajaxObj.send(null);
            }
            else
            {
           	 	/////////////-------------修改时间2010-1-25 (宋新伟)-----------////////////
				this .ajaxObj.open('POST',url,true);
				this .ajaxObj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				if(this.postString!=null && this.postString!=undefined)
				{
				    this .ajaxObj.send(this.postString);
				}
				else
				{
				    this .ajaxObj.send(null);
				}
			}
        }
        catch(error)
        {
            this.onerrorHandle.call(this,error.description);
        }
      }
};
//加载成功时的回调函数
net .ContentLoader.prototype.onReadyState=function()
{
    var ajaxObj=this .ajaxObj ;  
    var Ready =ajaxObj.readyState;
  
    if(Ready == net.Ready_Complete )
    {
        var HttpStatus=ajaxObj.status;        
        if (HttpStatus == 200 || HttpStatus==0)
        {
            if(this.params!=null && this.params!=undefined)
            {
				this.onloadHandle.call(this,this.params);
            }
            else
            {
				this.onloadHandle.call(this);
            }
        }
        else
        {
            this .onerrorHandle.call(this);
        }
    }
};
//加载xml文档--通过代理获取异步请求串
net .ContentLoader.prototype.loadXmlDoc_proxy=function(url)
{
	  if (window.ActiveXObject)
      {
        this.ajaxObj= new ActiveXObject("Microsoft.XMLHTTP");
      }  
      else if (window.XMLHttpRequest)      
      {
       	 this .ajaxObj = new XMLHttpRequest();     
      }
      if (this .ajaxObj)
      {
        try 
        {
        	var reg=/&/gi;
        	var requestUrl=this.httpProxy; 
            var loader=this ;
            this .ajaxObj.onreadystatechange=function()
            {
                loader.onReadyState.call(loader);
            };
            if(this.postString==null || this.postString==undefined)
            {
            	requestUrl=requestUrl+"?requestmethod=get&url="+url.replace(reg,":::");
				this .ajaxObj.open('GET',requestUrl,true);
				this .ajaxObj.send(null);
            }
            else
            {
            	requestUrl=requestUrl+"?requestmethod=get&url="+url.replace(reg,":::");
            	if(this.postString!=null && this.postString!=undefined)
				{
				    requestUrl+="&"+this.postString;
				}
				this .ajaxObj.open('POST',requestUrl,true);
			    this .ajaxObj.send(null);
			}
        }
        catch(error)
        {
            this.onerrorHandle.call(this,error.description);
        }
      }
};
//出错回调函数
net.ContentLoader.prototype.defaultError=function()
{
    //alert("Error! fatch data failed!"
   // +"\n\nReadyState:"+this.ajaxObj.readyState
    //+"\nStatus:"+this.ajaxObj.status
    //+"\nheads:"+this.ajaxObj.getAllResponseHeaders());
};
net.ContentLoader.prototype.getDomain=function(service)
{
	var url=service;
	var reg=/http:\/\/([^\/:]+)(:[0-9]+)?\/([^\/]+)/gi;
	reg.test(url);
	return {server:RegExp.$1,port:RegExp.$2,sitename:RegExp.$3};
};
//屏蔽前后空格
String.prototype.Trim=function()
{
    return this.replace(/(^\s*)|(\s*$) /g,"");
};
//屏蔽之前的空格
String.prototype.LTrim=function()
{   
    return this.replace(/(^\s*)/g,"");
};
//屏蔽之后的空格
String.prototype.RTrim=function()
{
    return this.replace(/(\s*$)/g,"");
};


/**
 * @description 点标注风格对象
 * @example var markerStyle = new SuperMap.DC.MarkerStyle("images/icon004.gif", "美国首都", "华盛顿","markerStyle");
 * @param {String} imgSrc 图片地址
 * @param {String} title 点标注的Tilte属性值
 * @param {String} text 点标注的说明文字,与图片同时显示
 * @param {String} textCss 点标注中文本DIV使用的风格类名称
 * @class
 */
/*
    SuperMap.DC.MarkerStyle = function(imgSrc, title, text, textCss){
	this.imgSrc = imgSrc;
	this.title = title;
	this.text = text;
	this.css = textCss;

	this._markerStyle = null;

	if(imgSrc && imgSrc != null)
	{
		this.initialize();
	}
};
 function clearAllFeatures ()
{
	//清除所有点标注
	this.clearMarkers();
	//清空所有线标注
	this.clearLines();
	//清空所有面标注
	this.clearPolygons();
	//移除所有WMS服务
	this.clearWMSLayers();
}

*/