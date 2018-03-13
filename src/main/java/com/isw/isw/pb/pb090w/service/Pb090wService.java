package com.isw.isw.pb.pb090w.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isw.isw.pb.pb090w.dao.Pb090wDao;
import com.isw.isw.pb.pb090w.vo.Pb090wVo;

@Service
public class Pb090wService {
	
	@Autowired
	Pb090wDao dao;
	
	public List<Pb090wVo> pb090w(){
		return dao.pb090w();
	}
}

