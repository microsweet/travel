/**
	用于简单封装html对象，实现基本操作，如设置尺寸、位置、样式等等.     
	@class 通用控件容器.
	@param controlID 控件ID.
*/
function ControlHandle(controlID)
{
    this.mControl=document.getElementById(controlID);
}
/**      
	设置控件大小
	@function  设置控件大小
	@param width 控件宽度
	@param height 控件高度    
*/
ControlHandle.prototype.setSize=function(width,height)
{
    if(this.mControl!=null)
    {
        if(!isNaN(width) && width!="")
        {
            this.mControl.style.width=width+"px";
        }
        if(!isNaN(height) && height!="")
        {
            this.mControl.style.height=height+"px";
        }
    }
};
/**      
	设置控件位置
	@function  设置控件位置
	@param x x坐标
	@param y y坐标 
*/
ControlHandle.prototype.setPosition=function(x,y)
{
    if(this.mControl!=null)
    {
        if(!isNaN(x))
        {
            this.mControl.style.left=x+"px";
        }
        if(!isNaN(y))
        {
            this.mControl.style.top=y+"px";
        }
    }
};
/**      
	获取控件位置
	@function  获取控件位置
*/
ControlHandle.prototype.getPosition=function()
{
    if(this.mControl!=null)
    {
        return {x:parseInt(this.mControl.style.left),y:parseInt(this.mControl.style.top)};
    }
};
/**      
	获取控件尺寸
	@function  获取控件尺寸
*/
ControlHandle.prototype.getSize=function()
{
    if(this.mControl!=null)
    {
        return {width:parseInt(this.mControl.style.width),height:parseInt(this.mControl.style.height)};
    }
};
/**      
	* 设置内容样式
	@param style 控件样式,格式为：{color:'red',font-size:'12px'}.
*/
ControlHandle.prototype.setStyle=function(style)
{
    if(this.mControl!=null)
    {
        for(var cssName in style)
        {
            try
            {
                eval("this.mControl."+cssName+"=style."+cssName+"");
            }
            catch(ex){}
        }
    }
};
/**      
	* 显示控件
*/
ControlHandle.prototype.show=function()
{
    if(this.mControl!=null)
    {
        this.mControl.style.display="block";
    }
};
/**      
	* 隐藏控件
*/
ControlHandle.prototype.hide=function()
{
    if(this.mControl!=null)
    {
        this.mControl.style.display="none";
    }
};
/**      
	* 平滑移动控件到x、y指定的位置
	@param x x坐标
	@param y y坐标 
*/
ControlHandle.prototype.moveTo=function(x,y)
{
    
};