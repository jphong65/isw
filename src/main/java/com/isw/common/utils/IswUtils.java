package com.isw.common.utils;
public class IswUtils {
}

/*package com.isw.common.utils;

import java.util.HashMap;
import java.util.Map;

public class IswUtils {

	private static Map<String, String> conditionHTMLMap = new HashMap<>(); 
	
	
	
	*//**
	 * 검색조건별 HTMl 코드를 반환한다. 
	 * @param conditionKeys
	 * @return
	 *//*
	public static String getConditionHTML(String[] conditionKeys) {
		
		StringBuilder sb = new StringBuilder();
		 
		  단지명(콤보) 검색 조건 
		 sb.append("<div class='col-sm-2'>");
	     sb.append("    <div class='form-group'>");
	     sb.append("        <label class='control-label'>단지명</label>");
	     sb.append("        <select class='form-control' id='srchCompxCd' name='srchCompxCd'>");
	     sb.append("        <option value='' selected>전체</option>");
	     sb.append("        </select>");
	     sb.append("    </div>");
         sb.append("</div>");
		
         conditionHTMLMap.put("srchCompxCd", sb.toString());
         sb.setLength(0);
         
          단지명 검색 조건 
         sb.append("<div class='col-sm-2'>");
         sb.append("    <div class='form-group'>");
         sb.append("        <label class='control-label'>단지명</label>");
         sb.append("        <input type='text' id='srchCompxNm' name='srchCompxNm' class='form-control'>");
         sb.append("    </div>");
         sb.append("</div>");
		
         conditionHTMLMap.put("srchCompxNm", sb.toString());
         sb.setLength(0);
         
          단지코드 검색 조건 
         sb.append("<div class='col-sm-2'>");
         sb.append("    <div class='form-group'>");
         sb.append("        <label class='control-label'>단지코드</label>");
         sb.append("        <input type='text' id='srchCompxCodeNm' name='srchCompxCodeNm' class='form-control'>");
         sb.append("    </div>");
         sb.append("</div>");
		
         conditionHTMLMap.put("srchCompxCodeNm", sb.toString());
         sb.setLength(0);
		 
		  입주여부 검색 조건 
		 sb.append("<div class='col-sm-2'>");
	     sb.append("    <div class='form-group'>");
	     sb.append("        <label class='control-label'>입주여부</label>");
	     sb.append("        <select class='form-control'  id='moveinYn' name='moveinYn'>");
	     sb.append("        <option value='Y' selected>입주</option>");
	     sb.append("        <option value='N'>미입주</option>");
	     sb.append("        </select>");
	     sb.append("    </div>");
         sb.append("</div>");
		
         conditionHTMLMap.put("moveinYn", sb.toString());
         sb.setLength(0);
        
         예정일자 검색 조건 
        sb.append("<div class='col-sm-2'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <label class='control-label'>예정일자</label>");
        sb.append("        <input type='text' id='estDateS' name='estDateS' class='datepicker form-control'>");
        sb.append("    </div>");
        sb.append("</div>");
        sb.append("<div class='col-sm-2 con_est_date'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <label class='control-label'>&nbsp;</label>");
        sb.append("        <input type='text' id='estDateE' name='estDateE' class='datepicker form-control'>");
        sb.append("    </div>");
        sb.append("</div>");
        conditionHTMLMap.put("estDate", sb.toString());
        sb.setLength(0);
        
         예정일자 검색 조건 
        sb.append("<div class='col-sm-2'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <label class='control-label'>퇴거예정일자</label>");
        sb.append("        <input type='text' id='egrsnEstDateS' name='egrsnEstDateS' readonly class='form-control datepicker'>");
        sb.append("    </div>");
        sb.append("</div>");
        sb.append("<div class='col-sm-2 con_est_date'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <label class='control-label'>&nbsp;</label>");
        sb.append("        <input type='text' id='egrsnEstDateE' name='egrsnEstDateE' readonly class='form-control datepicker'>");
        sb.append("    </div>");
        sb.append("</div>");
        conditionHTMLMap.put("egrsnEstDate", sb.toString());
        sb.setLength(0);
        
         계약자 성명 검색 조건 
        sb.append("<div class='col-sm-2'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <label class='control-label'>계약자 성명</label>");
        sb.append("        <input type='text' id='contractorNm' name='contractorNm' class='form-control'>");
        sb.append("    </div>");
        sb.append("</div>");
        conditionHTMLMap.put("contractorNm", sb.toString());
        sb.setLength(0);
        
         단지명 검색 조건 
		 sb.append("<div class='col-sm-2'>");
	     sb.append("    <div class='form-group'>");
	     sb.append("        <label class='control-label'>단지명</label>");
	     sb.append("        <select class='form-control' id='compxCd' name='compxCd'>");
	     sb.append("        </select>");
	     sb.append("    </div>");
	     sb.append("</div>");
		
        conditionHTMLMap.put("compxNm", sb.toString());
        sb.setLength(0);
        
         동번호 검색 조건 
        sb.append("<div class='col-sm-2'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <label class='control-label'>동번호</label>");
        sb.append("        <select class='form-control' id='dongNo' name='dongNo'>");
	    sb.append("        <option value='' selected>전체</option>");
        sb.append("        </select>");
        sb.append("    </div>");
        sb.append("</div>");
        conditionHTMLMap.put("dongNo", sb.toString());
        sb.setLength(0);
        
         호실 검색 조건 
        sb.append("<div class='col-sm-2'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <label class='control-label'>호실번호</label>");
        sb.append("        <select class='form-control' id='hoNo' name='hoNo'>");
	    sb.append("        <option value='' selected>전체</option>");
        sb.append("        </select>");
        sb.append("    </div>");
        sb.append("</div>");
        conditionHTMLMap.put("hoNo", sb.toString());
        sb.setLength(0);
		
		유보금지급여부
        sb.append("<div class='col-sm-2'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <label class='control-label'>유보금지급여부</label>");
        sb.append("        <select class='form-control' id='reserveStatus' name='reserveStatus'>");
        sb.append("       	 <option value='0'>전체</option>");
        sb.append("       	 <option value='1'>지급</option>");
        sb.append("       	 <option value='2'>미지급</option>");
        sb.append("        </select>");
        sb.append("    </div>");
        sb.append("</div>");
        conditionHTMLMap.put("reserveStatus", sb.toString());
        sb.setLength(0);
        
		입주서류확인여부
        sb.append("<div class='col-sm-2'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <label class='control-label'>입주서류확인여부</label>");
        sb.append("        <select class='form-control' id='mvihPaperStatus' name='mvihPaperStatus'>");
        sb.append("       	 <option value='0'>전체</option>");
        sb.append("       	 <option value='1'>완료</option>");
        sb.append("       	 <option value='2'>미완료</option>");
        sb.append("        </select>");
        sb.append("    </div>");
        sb.append("</div>");
        conditionHTMLMap.put("mvihPaperStatus", sb.toString());
        sb.setLength(0);
        
        퇴거서류확인여부
        sb.append("<div class='col-sm-2'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <label class='control-label'>퇴거서류확인여부</label>");
        sb.append("        <select class='form-control' id='linoPaperStatus' name='linoPaperStatus'>");
        sb.append("       	 <option value='0'>전체</option>");
        sb.append("       	 <option value='1'>확인</option>");
        sb.append("       	 <option value='2'>미확인</option>");
        sb.append("        </select>");
        sb.append("    </div>");
        sb.append("</div>");
        conditionHTMLMap.put("linoPaperStatus", sb.toString());
        sb.setLength(0);
		
        점검완료여부
        sb.append("<div class='col-sm-2'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <label class='control-label'>점검완료여부</label>");
        sb.append("        <select class='form-control' id='mvihChkStatus' name='mvihChkStatus'>");
        sb.append("       	 <option value='0'>전체</option>");
        sb.append("       	 <option value='1'>완료</option>");
        sb.append("       	 <option value='2'>미완료</option>");
        sb.append("        </select>");
        sb.append("    </div>");
        sb.append("</div>");
        conditionHTMLMap.put("mvihChkStatus", sb.toString());
        sb.setLength(0);
        
        사전점검,본점검완료여부
        sb.append("<div class='col-sm-2'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <select class='form-control' id='cmplChkGubun' name='cmplChkGubun'>");
        sb.append("       	 <option value='0'>사전점검완료여부</option>");
        sb.append("       	 <option value='1'>본점검완료여부</option>");
        sb.append("        </select>");
        sb.append("        <select class='form-control' id='cmplChkStatus' name='cmplChkStatus'>");
        sb.append("       	 <option value='0'>전체</option>");
        sb.append("       	 <option value='1'>완료</option>");
        sb.append("       	 <option value='2'>미완료</option>");
        sb.append("        </select>");
        sb.append("    </div>");
        sb.append("</div>");
        conditionHTMLMap.put("cmplChkStatus", sb.toString());
        sb.setLength(0);
        
        사전점검,본점검완료여부
        sb.append("<div class='col-sm-2'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <select class='form-control' id='egrsnMoveGubun' name='egrsnMoveGubun'>");
        sb.append("       	 <option value='0'>퇴거예정일자</option>");
        sb.append("       	 <option value='1'>이사일자</option>");
        sb.append("        </select>");
        sb.append("        <input type='text' id='egrsnMoveDateS' name='egrsnMoveDateS' class='datepicker form-control'>");
        sb.append("    </div>");
        sb.append("</div>");
        sb.append("<div class='col-sm-2 con_est_date'>");
        sb.append("    <div class='form-group'>");
        sb.append("        <label class='control-label'>&nbsp;</label>");
        sb.append("        <input type='text' id='egrsnMoveDateE' name='egrsnMoveDateE' class='datepicker form-control'>");
        sb.append("    </div>");
        sb.append("</div>");
        conditionHTMLMap.put("egrsnMoveGubun", sb.toString());
        sb.setLength(0);
        
		StringBuilder result = new StringBuilder();
		
		for( String conditionKey : conditionKeys ) {
			
			if( conditionHTMLMap.containsKey(conditionKey ) ) {
				result.append(conditionHTMLMap.get(conditionKey));
			}
		}
		
		return result.toString();
		
	}
	
}
*/