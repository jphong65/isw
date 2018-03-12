package com.isw.isw.test.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isw.isw.test.vo.TestVO;

@Repository
public class TestDao {
	private static final String SQL_ACCOUNT = "test.";
	
	@Autowired
	SqlSession sqlSession;
	
	public List<TestVO> test(){
		return sqlSession.selectList(SQL_ACCOUNT + "test");
	}
}
