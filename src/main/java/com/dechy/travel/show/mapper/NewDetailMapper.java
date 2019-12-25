package com.dechy.travel.show.mapper;

import java.util.List;

import com.dechy.travel.show.model.NewDetail;

public interface NewDetailMapper {
	//查询新闻列表
	List<NewDetail> findNewDetails(NewDetail newDetail);
	//查询新闻数量
	Integer findNewDetailsCount(NewDetail newDetail);
	//插入
	void insertNewDetail(NewDetail newDetail);
	//修改
	void updateNewDetail(NewDetail newDetail);
	//删除
	void deleteNewDetail(NewDetail newDetail);
}
