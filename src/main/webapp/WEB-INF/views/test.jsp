<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="resources/js/jquery.min.js"></script>
<script type="text/javascript" src="resources/js/isw.js"></script>

<title>Insert title here</title>
</head>
<body>
<c:forEach var="item" items="${ list}">
문자 : ${item.charTest }<br>
인트 : ${item.intTest }<br>
더블 : ${item.doubleTest }<br>
</c:forEach>

<script>	
	(function($, ISWF){
		/*입주확인목록 그리드*/
		var mhivGrid;
		
		/* 입주서류 정보 그리드  */
		var paperGrid;
		
		/* 입주점검 정보 그리드  */
		var chkGrid;
		
		/* DOM ready */
		ISWF.ready(function($param){
			init();			
			
		});
		
		function init(){
			alert("테스트")
		}		
		
		
		/* 탭 변경(공통) */
		ISWF.changeTab = function(tabId) {
		
		}
		
		
			 
			
		    
		
	})(jQuery, ISWF);
	
	</script>
</body>
</html>