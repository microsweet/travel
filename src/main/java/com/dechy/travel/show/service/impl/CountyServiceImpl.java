package com.dechy.travel.show.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dechy.travel.show.mapper.CountyMapper;
import com.dechy.travel.show.model.County;
import com.dechy.travel.show.service.CountyService;

@Service
@Transactional
public class CountyServiceImpl implements CountyService {

	@Autowired
	private CountyMapper countyMapper;

	@Override
	public County findCounty() {
		// TODO Auto-generated method stub
		List<County> list = this.countyMapper.findCounty();
		return list.get(0);
	}

}
