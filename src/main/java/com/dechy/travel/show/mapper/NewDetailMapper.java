package com.dechy.travel.show.mapper;

import java.util.List;

import com.dechy.travel.show.model.NewDetail;

public interface NewDetailMapper {
	List<NewDetail> findNewDetails(NewDetail newDetail);

}
