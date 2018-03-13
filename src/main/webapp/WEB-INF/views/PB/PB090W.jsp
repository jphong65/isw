<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>수행프로젝트관리</title>
</head>
<body>
<c:forEach var="item" items="${ list}">
문자 : ${item.col1 }<br>
인트 : ${item.col2 }<br>
</c:forEach>

			<div class="col-md-12">            
				<div id="pb090-grid" style="width: 100%; height: 200px;" tpl-url="/assets/gridtpl/MH/MH01/MH0102/MH010209/tpl-MH010209.xml"></div>
            </div>

</body>
</html>