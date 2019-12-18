package com.dechy.travel.admin.service;

import java.util.List;

import com.dechy.travel.admin.model.DmNewType;

public interface DmNewTypeService {
	List<DmNewType> findNewType();
	DmNewType findNewType(DmNewType dmNewType);

}
