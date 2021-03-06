package com.isw.isw.pb.pb090w.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isw.isw.pb.pb090w.vo.Pb090wVo;


@Repository
public class Pb090wDao {
	private static final String SQL_ACCOUNT = "pb090w.";
	
	@Autowired
	SqlSession sqlSession;
	
/*	public List<Pb090wVo> pb090w(){
		return sqlSession.selectList(SQL_ACCOUNT + "Pb090w_001");
	}*/
	
	/**
	 * 수행프로젝트관리정보 리스트 조회
	 * @param pb090w
	 * @return
	 */
	public List<Pb090wVo> pb090w_list(Pb090wVo pb090w){
		return sqlSession.selectList(SQL_ACCOUNT + "Pb090w_list",pb090w);
	}
		
	
	
}
