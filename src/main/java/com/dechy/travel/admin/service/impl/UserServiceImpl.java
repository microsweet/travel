package com.dechy.travel.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dechy.travel.admin.mapper.UserMapper;
import com.dechy.travel.admin.model.User;
import com.dechy.travel.admin.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;

	@Override
	public User identifyUser(User user) {
		// TODO Auto-generated method stub
		return this.userMapper.identifyUser(user);
	}

}
