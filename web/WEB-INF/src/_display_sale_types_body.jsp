<%-- 
    Document   : _input_sale_typs_body
    Created on : Sep 5, 2018, 10:34:53 AM
    Author     : phich.bur
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="box">
    <div class="box-body">
        <div class="col-sm-10">    
            <div class="form-group">
                <a href="#" class="btn btn-primary" id="add_btn" style="width: 20%">Add Sale Types</a>
            </div>
            <table class="table table-bordered display" id="sale_types_table" width="100%" cellspacing="0" >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Warehouse</th>
                        <th>Member Group</th>
                        <th>Member Level</th>
                        <th>Delivery Terms</th>
                        <th class="dt-center">Delete</th>
                        <th>Type Id</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</div>
<!-- Delete Modal -->
<div class="modal fade" id="DeleteDisplaySaleTypes_Modal" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Delete</h5>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="" class="col-sm-3 control-label">Warehouse</label>
                        <div class="col-sm-6">
                            <input class="form-control" type="text" id="wh_d_modal" placeholder="" disabled>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-3 control-label">Member Group</label>
                        <div class="col-sm-6">
                            <input class="form-control" type="text" id="gm_d_modal" placeholder="" disabled>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-3 control-label">Member Level</label>
                        <div class="col-sm-6">
                            <input class="form-control" type="text" id="gl_d_modal" placeholder="" disabled>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-3 control-label">Delivery Terms</label>
                        <div class="col-sm-6">
                            <input class="form-control" type="text" id="dt_d_modal" placeholder="" disabled>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-3 control-label"></label>
                        <div class="col-sm-2">
                            <button type="button" class="btn btn-danger btn-sm" id="del_btn_modal">Delete</button>
                        </div>
                    </div>
                    <input class="form-control" type="text" id="typeid_d_modal" placeholder="" style="visibility: hidden">
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
