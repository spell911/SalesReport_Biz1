<%-- 
    Document   : _input_sale_typs_body
    Created on : Sep 5, 2018, 10:34:53 AM
    Author     : phich.bur
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!-- Horizontal Form -->
<div class="box">
    <div class="box-body">
        <form class="form-horizontal">
            <div class="form-group">
                <label for="code_sale" class="col-sm-1 control-label">Sale Type Code</label>
                <div class="col-sm-1">
                    <input class="form-control" type="text" id="code_sale" maxlength="2" placeholder="">
                </div>
            </div>
            <div class="form-group">
                <label for="desc_sale" class="col-sm-1 control-label">Sale Type Name</label>
                <div class="col-sm-2">
                    <input class="form-control" type="text" id="desc_sale" maxlength="20" placeholder="">
                </div>
            </div>
            <div class="form-group">
                <label for="example-search-input" class="col-sm-1 control-label"></label>
                <div class="col-sm-4">
                    <button type="button" class="btn btn-primary" id="save_btn">Save</button>
                </div>
            </div>
            <div class="col-sm-8">
                <table class="table table-bordered table-striped" id="input_sale_types_table" style="width: 100%" cellspacing="0" >
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Sale Type Code</th>
                            <th>Sale Type Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </form>
    </div>
</div>


<!-- Edit Modal -->
<div class="modal fade" id="EditSaleTypes_Modal" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit</h5>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="stc_e_modal" class="col-sm-3 control-label">Sale Type Code</label>
                        <div class="col-sm-2">
                            <input class="form-control" type="text" id="stc_e_modal" maxlength="2" placeholder="" disabled>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="stn_e_modal" class="col-sm-3 control-label">Sale Type Name</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" id="stn_e_modal" maxlength="20" placeholder="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit_btn" class="col-sm-3 control-label"></label>
                        <div class="col-sm-2">
                            <button type="button" class="btn btn-primary btn-sm" id="edit_btn">Edit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- Delete Modal -->
<div class="modal fade" id="DeleteSaleTypes_Modal" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Delete</h5>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="stc_d_modal" class="col-sm-3 control-label">Sale Type Code</label>
                        <div class="col-sm-2">
                            <input class="form-control" type="text" id="stc_d_modal" maxlength="2" placeholder="" disabled>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="stn_d_modal" class="col-sm-3 control-label">Sale Type Name</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" id="stn_d_modal" maxlength="20" placeholder="" disabled>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit_btn" class="col-sm-3 control-label"></label>
                        <div class="col-sm-2">
                            <button type="button" class="btn btn-danger btn-sm" id="delete_btn">Delete</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
