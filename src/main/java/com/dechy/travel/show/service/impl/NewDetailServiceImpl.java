package com.dechy.travel.show.service.impl;

import java.util.List;

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
	public List<NewDetail> findNewDetails() {
		// TODO Auto-generated method stub
		return this.newDetailMapper.findNewDetails();
	}

}
