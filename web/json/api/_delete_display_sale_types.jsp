<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="Utilities.DBUtils"%>
<%
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");
    DBUtils Query_Stmt = new DBUtils();
    int del_saletypes;
    String typeid = request.getParameter("typeid");
    del_saletypes = Query_Stmt.del_displaysaletypes(typeid);
    out.println(del_saletypes);
%>
