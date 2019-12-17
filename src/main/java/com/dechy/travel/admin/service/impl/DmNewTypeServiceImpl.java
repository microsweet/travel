package com.dechy.travel.admin.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dechy.travel.admin.mapper.DmNewTypeMapper;
import com.dechy.travel.admin.model.DmNewType;
import com.dechy.travel.admin.service.DmNewTypeService;

@Service
@Transactional
public class DmNewTypeServiceImpl implements DmNewTypeService {

	@Autowired
	private DmNewTypeMapper dmNewTypeMapper;

	@Override
	public List<DmNewType> findNewType() {
		// TODO Auto-generated method stub
		return this.dmNewTypeMapper.findNewType();
	}

}
