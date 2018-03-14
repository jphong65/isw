<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="resources/js/jquery.min.js"></script>
<script type="text/javascript" src="resources/js/isw.js"></script>
<jsp:include page="/common/inc-header.jsp" />
<title>수행프로젝트관리</title>
</head>

<body>
	<%-- <c:forEach var="item" items="${ list}">
문자 : ${item.col1 }<br>
인트 : ${item.col2 }<br>
</c:forEach> --%>


	<div class="container-fluid">
		<div class="row">
		
			 <jsp:include page="/common/inc-page-function.jsp">
					 <jsp:param name="conditions" value="" />
					 <jsp:param name="pageHeader" value="수행프로젝트관리" />
            </jsp:include>
<!-- 			<h3>수행프로젝트관리</h3> -->

	<div class = "col-md-12">
		<div class = "btn-group pull-right"  >
			<button type="button"  id='iswbtn-search' class="btn btn-default btn-lg">
			  <span class="glyphicon glyphicon-star" aria-hidden="true"> 조회 </span>
			  
			</button>
			<button type="button"  id='iswbtn-new' class="btn btn-default btn-lg">
			  <span class="glyphicon glyphicon-star" aria-hidden="true"> 신규 </span>
			  
			</button>
			<button type="button"  id='iswbtn-update' class="btn btn-default btn-lg">
			  <span class="glyphicon glyphicon-star" aria-hidden="true"> 수정 </span>
			  
			</button>
			<button type="button"  id='iswbtn-delete' class="btn btn-default btn-lg">
			  <span class="glyphicon glyphicon-star" aria-hidden="true"> 삭제 </span>
			  
			</button>
		</div>
	</div>

	<div class = "col-md-12">
		<form class="form-inline" id="searchForm">
			<div class="form-group">
			  <label for="exampleInputName2">사업본부</label>
 			  <input type="text" class="form-control" id="biz_hq" name="bizHq"  placeholder="사업본부" aria-describedby="basic-addon1"> 
			</div>
			
			<div class="form-group">
			  <label for="exampleInputName2">프로젝트기간</label>
 			  <input type="date" id="str_dt" name="strDt"> 
			  <label for="exampleInputName2">-</label>
 			  <input type="text" class="dateFormat text-center" id="end_dt" name="endDt"  aria-describedby="basic-addon1"> 
			</div>
	
		<br>
		
			<div class="form-group">
			  <label for="exampleInputName2">고객사명</label>
 			  <input type="text" class="form-control" id="cst_nm" name="cstNm"  placeholder="고객사명" aria-describedby="basic-addon1"> 
			</div>
			
			<div class="form-group">
			  <label for="exampleInputName2">프로젝트명  </label>
 			  <input type="text" class="form-control" id="prj_nm" name="prjNm"  placeholder="프로젝트명" aria-describedby="basic-addon1"> 
			</div>
			
		</form>
		
	</div>

	<div class = "col-md-12" style="margin-top: 10px;">
	</div>

	<div class = "col-md-12"> 
		<div id="pb090w-grid" style="width: 100%; height: 200px;" tpl-url="resources/gridtpl/PB/PB090/tpl-PB090W.xml"></div>
	</div>


			<%-- <jsp:include page="/common/inc-menu.jsp" />  --%>
			<!-- <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"> 
			<div class="col-md-12">            
				<div id="pb090w-grid" style="width: 100%; height: 200px;" tpl-url="resources/gridtpl/PB/PB090/tpl-PB090W.xml"></div>
			</div>
 		</div>	 -->
		</div>
	</div>

	<script>
	
	(function($, ISWF){
		/*수행프로젝트관리 그리드*/
		var pb090wGrid;
		
 		/* 입주서류 정보 그리드  */
	//	var paperGrid;
		
		/* 입주점검 정보 그리드  */
	//	var chkGrid; 
		
		/* DOM ready */
		ISWF.ready(function($param){
			init();			
			
		});

		
		function init(){

			/*수행프로젝트관리목록 그리드 생성*/
			pb090wGrid = ISWF.createSimpleGrid('pb090w-grid');
			pb090wGrid.load();
			
			/* 클릭 이벤트 등록 */
/*  		 	pb090wGrid.rowSelected = function (grid, item, rowData) {
				
				ISWF.gridValid(
					function() {
						setTargetGridData(rowData);
					}
				);
				
			};   */
			

		}	
		
		
		/*수행프로젝트관리 리스트 조회*/
/* 		ISWF.search = function(params) { */
		/* 조회 버튼 클릭 */
	$('#iswbtn-search').click(function() {
		/* var conditions = $('#searchForm').serialize(); 
		ISWF.search(conditions); */ 
/* 		alert("클릭됨") */
		ISWF.search();
	});
			ISWF.search = function() {
			var params = $('#searchForm').serialize();
			var obj = {};
			obj.url = 'pb090w/list';
			obj.dataType = 'json';
			obj.data = params;
			console.log(params)
			ISWF.ajax(obj, function(result, req) {	
/* 				alert("ajx 실행") */
				console.log('result',result)
				
				pb090wGrid.setData(result);				
			}); 
		}

	})(jQuery, ISWF); 
	
	</script>
</body>
</html>