package com.dechy.travel.show.service;

import java.util.List;

import com.dechy.travel.show.model.NewDetail;

public interface NewDetailService {
	List<NewDetail> findNewDetails();
	NewDetail findNewDetails(NewDetail newDetail);

}
