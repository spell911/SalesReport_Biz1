<%-- 
    Document   : index
    Created on : Sep 4, 2018, 1:34:56 PM
    Author     : phich.bur
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Sales Report BIZ1</title>
        <!-- Bootstrap core CSS-->
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <!-- Page level plugin CSS-->
        <link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
        <!-- Custom styles for this template-->
        <link href="css/sb-admin.css" type="text/css" rel="stylesheet">
        <link href="css/customs-style.css" type="text/css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body id="page-top">

        <nav class="navbar navbar-expand navbar-dark bg-dark static-top">

            <a class="navbar-brand mr-1" href="index.html">Sales Report BIZ1</a>

            <!-- Navbar Clock -->
            <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div id="clock" style="color: white"></div>
            </form>
        </nav>

        <div id="wrapper">
            <!-- Sidebar -->
            <jsp:include page="WEB-INF/src/_sidebar.jsp" />
            <div id="content-wrapper">
                <div class="container-fluid">
                    <!--input form-->
                    <jsp:include page="WEB-INF/src/_input_sale_types_body.jsp" />
                </div>
                <!-- Sticky Footer -->
                <jsp:include page="WEB-INF/src/_footer.jsp" />
            </div>
            <!-- /.content-wrapper -->
        </div>
        <!-- /#wrapper -->
        <!--Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>

        <!-- Bootstrap core JavaScript-->
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <!-- Core plugin JavaScript-->
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
        <!-- Page level plugin JavaScript-->
        <script src="vendor/datatables/jquery.dataTables.js"></script>
        <script src="vendor/datatables/dataTables.bootstrap4.js"></script>
        <script src="js/_input_sale_types.js"></script>
        <!--clock-->
        <script src="js/clock.js"></script>
        <script src="js/sb-admin.min.js"></script>

    </body>
</html>
