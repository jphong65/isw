package com.isw.common.vo;

import lombok.Data;

@Data
public class GridDataVO {

	/**
	 * 데이터 상태값
	 */
	private String sts;
	
	
	/**
	 * 업데이트 데이터인지 여부
	 * @return
	 */
	public boolean isUpdated() {
		return "updated".equals(sts);
	}
	
	/**
	 * 삭제 데이터인지 여부
	 * @return
	 */
	public boolean isDeleted() {
		return "deleted".equals(sts);
	}
	
	/**
	 * 추가(생성) 데이터인지 여부
	 * @return
	 */
	public boolean isCreated() {
		return "created".equals(sts);
	}
	
	/**
	 * 등록자
	 */
	private String regPsn = "등록자";
	
	/**
	 * 수정자
	 */
	private String updtPsn = "수정자";
	
	
}
