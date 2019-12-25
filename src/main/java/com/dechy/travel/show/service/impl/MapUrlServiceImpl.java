package com.dechy.travel.show.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dechy.travel.show.mapper.MapUrlMapper;
import com.dechy.travel.show.model.MapUrl;
import com.dechy.travel.show.service.MapUrlService;

@Service
@Transactional
public class MapUrlServiceImpl implements MapUrlService {
	
	@Autowired
	private MapUrlMapper mapUrlMapper;

	//查询地图list
	@Override
	public List<MapUrl> findMapList() {
		// TODO Auto-generated method stub
		return this.mapUrlMapper.findMapList();
	}

}
