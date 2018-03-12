package com.isw.isw.test.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isw.isw.test.dao.TestDao;
import com.isw.isw.test.vo.TestVO;

@Service
public class TestService {
	
	@Autowired
	TestDao dao;
	
	public List<TestVO> test(){
		return dao.test();
	}
}
