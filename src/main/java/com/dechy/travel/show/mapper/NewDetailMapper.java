package com.dechy.travel.show.mapper;

import java.util.List;

import com.dechy.travel.show.model.NewDetail;

public interface NewDetailMapper {
	List<NewDetail> findNewDetails(NewDetail newDetail);
	Integer findNewDetailsCount(NewDetail newDetail);
	void insertNewDetail(NewDetail newDetail);
	void updateNewDetail(NewDetail newDetail);
	void deleteNewDetail(NewDetail newDetail);
}
