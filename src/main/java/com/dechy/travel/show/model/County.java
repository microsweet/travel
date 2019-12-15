package com.dechy.travel.show.model;

public class County {
	//行政区名称
	private String name;
	//行政区简介
	private String synopsis;
	//主办方
	private String sponsor;
	//承办方
	private String contractor;
	//技术支持
	private String technicalSupport;

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSynopsis() {
		return synopsis;
	}
	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}
	public String getSponsor() {
		return sponsor;
	}
	public void setSponsor(String sponsor) {
		this.sponsor = sponsor;
	}
	public String getContractor() {
		return contractor;
	}
	public void setContractor(String contractor) {
		this.contractor = contractor;
	}
	public String getTechnicalSupport() {
		return technicalSupport;
	}
	public void setTechnicalSupport(String technicalSupport) {
		this.technicalSupport = technicalSupport;
	}

}
