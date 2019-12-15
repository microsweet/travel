package com.dechy.travel.show.model;

public class Files {
	//主键
	private Integer id;
	//文件名
	private String fileName;
	//文件路径
	private String filePath;
	//创建时间
	private String createDate;
	//关联表名
	private String tableName;
	//关联表主键
	private Integer fk;
	//文件类型（1:新闻首页预览图片；2:新闻notice中图片）
	private Integer fileType;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public String getTableName() {
		return tableName;
	}
	public void setTableName(String tableName) {
		this.tableName = tableName;
	}
	public Integer getFk() {
		return fk;
	}
	public void setFk(Integer fk) {
		this.fk = fk;
	}
	public Integer getFileType() {
		return fileType;
	}
	public void setFileType(Integer fileType) {
		this.fileType = fileType;
	}

}
