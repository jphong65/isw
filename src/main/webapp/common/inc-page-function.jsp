<%@page import="java.util.Arrays"%>
<%@page import="com.ondongne.common.utils.OndongneUtils"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%

String conditions = request.getParameter("conditions");
String[] conditionArr = conditions.split("[|]");

%>


<!-- 타이틀 영역 -->
<h1 class="page-header">${param.pageHeader}</h1>

<!-- 페이지별 기능 영역 -->
<h2 class="sub-header">조회</h2>
<div class="text-right">
    <button id='topbtn-search' class="btn btn-primary btn-sm">조회</button>
    <button id='topbtn-add' class="btn btn-primary btn-sm">신규</button>
    <button id='topbtn-save' class="btn btn-sm">적용 </button>
    <button id='topbtn-delete' class="btn btn-primary btn-sm">삭제</button>
    <button id='topbtn-excelUp' class="btn btn-primary btn-sm">EXCEL UPLOAD</button>
    <!-- button class="btn btn-primary btn-sm">닫기</button-->
</div>

<!-- 검색 -->
<div class="search-wrapper">
    <input type="file" name="excelFile" id="xlf" style="display:none" >
     <form class="form-horizontal clearfix" id="searchForm" name="searchForm">
     	<%=OndongneUtils.getConditionHTML(conditionArr) %>
     </form>
</div>

<script>

/* 상단 버튼들의(저장) 대상이 되는 그리드 */
var targetGrids = [];

/**
 * 상단/좌측 메뉴그리기 함수
 */
function drawMenuList(result) {
	
	var topMenuHtml = [];
	
	for( var i = 0; i < result.length; i++ ) {
		var topMenu = result[i];
		topMenuHtml.push('<li id="top-menu-'+topMenu.menuCode+'"><a href="'+topMenu.linkURL+'">'+topMenu.menuTitle+'</a></li>');
	}
	
	$('#topMenu').append(topMenuHtml.join(''));
	
	var selectedTopMenu;
	
	var selectTopMenu = function(topMenuList) {
		
		for( var i = 0; i < topMenuList.length; i++ ) {
			
			var topMenu = topMenuList[i];
			var subMenuList = topMenu.subMenuList; 
			
			for( var j = 0; j < subMenuList.length; j++ ) {
				var subMenu = subMenuList[j];
				if( subMenu.linkURL == window.location.pathname ) {
					$('#top-menu-' + topMenu.menuCode).addClass('active');
					selectedTopMenu = topMenu;
					return;
				}
			}
		}
	}(result);
	
	var subMenuList = selectedTopMenu.subMenuList;
	var subMenuMap = {};
	for( var i = 0; i < subMenuList.length; i++) {
		var subMenu = subMenuList[i];
		var groupName = subMenu.groupName;
		
		var hasGroupName = false;
		for(var key in subMenuMap) {
			if( key == groupName ) {
				hasGroupName = true;
				break;
			}
		}
		if( hasGroupName ) {
			var menuList = subMenuMap[subMenu.groupName];
			menuList.push(subMenu);
		} else {
			subMenuMap[subMenu.groupName] = [subMenu];
		}
	}
	
	var subMenuHTML = [];
	var groupIndex = 1;
	for( var groupName in subMenuMap ) {
		
		var subMenuList = subMenuMap[groupName];
		
		subMenuHTML.push("<li id='group-"+groupIndex+"'><a href='javascript:false;' id='btn-"+groupIndex+"' data-target='#submenu"+groupIndex+"'");
		subMenuHTML.push("       aria-expanded='false'>"+groupName+"</a>");
		for( var i = 0; i < subMenuList.length; i++ ) {
			
			var idNumber = groupIndex *  i;
			
			var subMenu = subMenuList[i];
			subMenuHTML.push("    <ul id='"+subMenu.linkURL+"' class='nav submenu' id='submenu"+idNumber+"' role='menu' aria-labelledby='btn-"+idNumber+"'>");
			subMenuHTML.push("        <li><a href='"+subMenu.linkURL+"'>"+subMenu.menuTitle+"</a></li>");
			subMenuHTML.push("    </ul>");
		}
		
		subMenuHTML.push("</li>");
		
		groupIndex++;
	}
	
	
	$('#subMenu').append(subMenuHTML.join(""));
	
	var groupLi = $('ul.submenu').find('a[href="'+window.location.pathname+'"]');
	var selectedMenu = groupLi.parent();
	var selectedGroup = groupLi.parent().parent().parent();
	
	$(selectedGroup).addClass('active');
	
	$('.page-header').text($(selectedMenu).text());
	
	
}



function changeSaveBtnSts() {
	
	if( ODNF.isGridsChanged() ) {
		//$('.btn-sm').eq(1).addClass('btn-primary');
		$('#topbtn-save').addClass('btn-primary');
	} else {
		//$('.btn-sm').eq(1).removeClass('btn-primary');
		$('#topbtn-save').removeClass('btn-primary');
	}
	
}
	/**
	 * 단지 코드 셀렉트 옵션 추가
	 */
	function bindCompCdOptions() {
		var obj = {};
		obj.url = '/common/compxCombo';
		obj.dataType = 'json';
		
		ODNF.ajax(obj, function(result, req) {			
			var options='';
			//console.log("단지결과",result)
			for( var i = 0; i < result.length; i++ ) {
				var name = result[i].compxNm;
				var value = result[i].compxCd;
				
				options += '<option value="'+value+'">'+name+'</option>'
			}
			
			$('#searchForm #compxCd').append(options);
			
		});
	}
	
	/**
	 * 동번호 셀렉트 옵션 추가
	 */
	function bindDongOptions(value){	
		if($('#dongNo').length!=0){			
			if(value!=''){
				$('#searchForm #dongNo>option:not(:first-child)').remove();
				$('#searchForm #hoNo>option:not(:first-child)').remove();
				var compxCd = value;
			    var obj = {};
				obj.url = '/common/dongCombo';
				obj.dataType = 'json';
				obj.data = "compxCd="+compxCd;
				ODNF.ajax(obj, function(result, req) {
					
					var options = '';
					//console.log("동결과",result);
					for(var i = 0;i<result.length;i++){
						var value= result[i].dongNo
						options += '<option value="'+value+'">'+value+'</option>'
					}
					$('#searchForm #dongNo').append(options);
					if(!$('#compxCd').length){
						$('#searchForm').append("<input type='hidden' id='compxCd' name='compxCd' value='"+compxCd+"'>")
					}
					
				})
			}else{
				$('#searchForm #dongNo>option:not(:first-child)').remove();
				$('#searchForm #hoNo>option:not(:first-child)').remove();
			}
		}else{
			return
		}		
	}
	
	/**
	 * 호번호 셀렉트 옵션 추가
	 */
	function bindHoOptions(value){
		if($('#hoNo').length!=0){
			if(value!=''){
				$('#searchForm #hoNo>option:not(:first-child)').remove();
				var compxCd = "";
				var dongNo = value;    
				if($("#compxCd").length!=0){
					compxCd = $("#compxCd").val();
				}
				
			    var obj = {};
				obj.url = '/common/hoCombo';
				obj.dataType = 'json';
				obj.data = "compxCd="+compxCd+"&dongNo="+dongNo;
				ODNF.ajax(obj, function(result, req) {
					
					var options = '';
					//console.log("호결과",result);
					for(var i = 0;i<result.length;i++){
						var value= result[i].hoNo
						options += '<option value="'+value+'">'+value+'</option>'
					}
					$('#searchForm #hoNo').append(options);
					
				})
			}else{
				$('#searchForm #hoNo>option:not(:first-child)').remove();
			}
		}else{
			return
		}
	}
	
	// 엑셀 업로드 함수
    function handleXlsFile(event) {

        var files = event.target.files;
        var i, f;
        for (i = 0, f = files[i]; i != files.length; ++i) {
            var reader = new FileReader();
            var name = f.name;
            reader.onload = function (e) {
                var data = e.target.result;
     
                var arr = ODNF.excelUpload.fixdata(data);
                workbook = XLSX.read(btoa(arr), { type: 'base64' });
     
                ODNF.excelUpload.process_wb(workbook, event.data.grdId, event.data.sqlId);
                /* DO SOMETHING WITH workbook HERE */
            };
            //reader.readAsBinaryString(f);
            reader.readAsArrayBuffer(f);
     
        }
    }
	
	// 엑셀 input bind
	function excelBindComp(gridId, sqlId){
		$("#xlf").bind("change", {grdId:gridId,sqlId:""}, handleXlsFile);
	}
	
	/*단지 선택시 동 콤보 출력*/
	$("#compxCd").change(function(){
		bindDongOptions($(this).val())
	});
	
	/*동 선택시 호 콤보 출력 */
	$("#dongNo").change(function(){
		bindHoOptions($(this).val())
	});
	
(function($, ODNF){
	
	
	/* 조회 버튼 클릭 */
	$('#topbtn-search').click(function() {
		var conditions = $('#searchForm').serialize();
		ODNF.search(conditions);
	});
	
	
	/* 저장 버튼 클릭 */
	$('#topbtn-save').click(function() {			
		
		if( $(this).hasClass('btn-primary') ) {
			
			// 각 화면 그리드 상태 강제 변경 필요할시 함수 호출 */
			if( ODNF.setStates ) {
			    ODNF.setStates();
			}
			
			var data = {};
			for( var key in targetGrids ) {
				var targetGrid = targetGrids[key];
				targetGrid.gridView.commit();
				var changedData = targetGrid.getChangedData();
				if( !ODNF.Object.isEmpty( changedData ) ) {
					data[targetGrid.gridView.id] = changedData; 
				}
				
			}
			/*각 화면의 공통 저장 밸리데이션 함수 호출*/
			if( ODNF.saveValidate ) {
				if(!ODNF.saveValidate()) return;	
			}
			
			
			if( confirm("변경 내역을 적용하시겠습니까?") ) {
				ODNF.save(data);	
			}
			
		}
	});
	
	/* 삭제 버튼 클릭 */
    $('#topbtn-delete').click(function() {
        ODNF.del();
    });
	
    /* 엑셀 up 버튼 클릭 */
    $('#topbtn-excelUp').click(function() {
    	$("#xlf").click();
    });
	
})(jQuery, ODNF);

<%
/* 단지코드 검색조건이 있다면 해당 조건 추가 쿼리 실행 */
if( Arrays.asList(conditionArr).contains("compxNm") ) {
	out.println("bindCompCdOptions();");
}

/*단지코드 검색조건이 없고 동 조건만 있을 경우 추가 쿼리 실행*/
if( !Arrays.asList(conditionArr).contains("compxNm") && Arrays.asList(conditionArr).contains("dongNo") ) {
	/*  단지 코드 세션처리 해야함*/
	out.println("bindDongOptions('C201801');"); 
}
%>
	
</script>