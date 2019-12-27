package com.dechy.travel.show.model;

public class NewDetail {
	//id
	private Integer Id;
	//新闻标题
	private String title;
	//新闻内容
	private String notice;
	//是否在首页展示
	private Integer ifView;
	//创建时间
	private String createDate;
	//新闻类型代码
	private Integer newType;
	//预览图片路径
	private String src;
	//查询list时的页码
	private Integer page;
	//查询list时的页面大小
	private Integer limit;
	//新闻类型
	private String newTypeName;
	//预览图片
	private String viewPic;

	public Integer getId() {
		return Id;
	}
	public void setId(Integer id) {
		Id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getNotice() {
		return notice;
	}
	public void setNotice(String notice) {
		this.notice = notice;
	}
	public Integer getIfView() {
		return ifView;
	}
	public void setIfView(Integer ifView) {
		this.ifView = ifView;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public Integer getNewType() {
		return newType;
	}
	public void setNewType(Integer newType) {
		this.newType = newType;
	}
	public String getSrc() {
		return src;
	}
	public void setSrc(String src) {
		this.src = src;
	}
	public Integer getPage() {
		return page;
	}
	public void setPage(Integer page) {
		this.page = page;
	}
	public Integer getLimit() {
		return limit;
	}
	public void setLimit(Integer limit) {
		this.limit = limit;
	}
	public String getNewTypeName() {
		return newTypeName;
	}
	public void setNewTypeName(String newTypeName) {
		this.newTypeName = newTypeName;
	}
	public String getViewPic() {
		return viewPic;
	}
	public void setViewPic(String viewPic) {
		this.viewPic = viewPic;
	}

}
