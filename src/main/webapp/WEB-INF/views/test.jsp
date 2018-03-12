<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html">
<html lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
<link rel="stylesheet" href="resources/css/bootstrap.min.css" />
<script type="text/javascript" src="resources/js/bootstrap.min.js">
	
</script>
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<c:forEach var="item" items="${list}">
					문자 : ${item.charTest}<br>
					인트 : ${item.intTest}<br>
					더블 : ${item.doubleTest}<br>
				</c:forEach>
			</div>
			<div class="col-md-6">테스트2</div>


		</div>
	</div>
</body>
</html>