<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="resources/js/ondongne.js"></script>
<title>Insert title here</title>
</head>
<body>
<c:forEach var="item" items="${ list}">
문자 : ${item.charTest }<br>
인트 : ${item.intTest }<br>
더블 : ${item.doubleTest }<br>
</c:forEach>
</body>
</html>