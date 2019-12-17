package com.dechy.travel.show.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dechy.travel.show.mapper.NewDetailMapper;
import com.dechy.travel.show.model.NewDetail;
import com.dechy.travel.show.service.NewDetailService;

@Service
@Transactional
public class NewDetailServiceImpl implements NewDetailService {
	
	@Autowired
	private NewDetailMapper newDetailMapper;

	@Override
	public List<NewDetail> findNewDetails(NewDetail newDetail) {
		// TODO Auto-generated method stub
		return this.newDetailMapper.findNewDetails(newDetail);
	}

	@Override
	public NewDetail findNewDetail(NewDetail newDetail) {
		// TODO Auto-generated method stub
		List<NewDetail> list = this.newDetailMapper.findNewDetails(newDetail);
		NewDetail returnMap = list.get(0);
		return returnMap;
	}

	@Override
	public Map<String, Object> findNewDetailList(NewDetail newDetail){
		Map<String, Object> result = new HashMap();
		List<NewDetail> list = this.newDetailMapper.findNewDetails(newDetail);
		Integer total = this.newDetailMapper.findNewDetailsCount(newDetail);
		
		result.put("list", list);
		result.put("total", total);
		result.put("page", newDetail.getPage());
		return result;
	}
}
