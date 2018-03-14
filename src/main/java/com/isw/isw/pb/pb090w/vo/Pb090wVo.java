package com.isw.isw.pb.pb090w.vo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.isw.common.vo.GridDataVO;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Pb090wVo extends GridDataVO{
	private String bizHq;
	private String prjCd;
	private String prjNm;
	private String strDt;
	private String endDt;
	private String cstNm;
	private String slsTy;
	private String dtlSlsTy;
	private String addTaxGb;
}

