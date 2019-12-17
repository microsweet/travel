package com.dechy.travel.show.service;

import java.util.List;
import java.util.Map;

import com.dechy.travel.show.model.NewDetail;

public interface NewDetailService {
	List<NewDetail> findNewDetails(NewDetail newDetail);

	NewDetail findNewDetail(NewDetail newDetail);

	Map<String, Object> findNewDetailList(NewDetail newDetail);
}
