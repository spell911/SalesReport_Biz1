<%-- 
    Document   : _input_sale_typs_body
    Created on : Sep 5, 2018, 10:34:53 AM
    Author     : phich.bur
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="card mb-3">
    <div class="card-header">
        <b>Input Sale Types</b></div>
    <div class="card-body">
        <div class="form-group row">
            <label for="example-text-input" class="col-2 col-form-label">Sale Type Code</label>
            <div class="col-2">
                <input class="form-control" type="text" id="code_sale" maxlength="2">
            </div>
        </div>
        <div class="form-group row">
            <label for="example-search-input" class="col-2 col-form-label">Sale Type Name</label>
            <div class="col-4">
                <input class="form-control" type="text" id="desc_sale" maxlength="20">
            </div>
        </div>
        <div class="form-group row">
            <label for="example-search-input" class="col-2 col-form-label"></label>
            <div class="col-4">
                <button type="button" class="btn btn-primary btn-sm" id="save_btn">Save</button>
            </div>
        </div>
        <div class="table-responsive col-8" id="intput_sale_types_tabble_div">
            <table class="table table-bordered display" id="input_sale_types_table" width="100%" cellspacing="0" >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th style="width: auto">Sale Type Code</th>
                        <th style="width: auto">Sale Type Name</th>
                        <th style="text-align: center">Edit</th>
                        <th style="text-align: center">Delete</th>
                    </tr>
                </thead>
            </table>
        </div>
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
                <div class="form-group row">
                    <label for="example-text-input" class="col-4 col-form-label">Sale Type Code</label>
                    <div class="col-2">
                        <input class="form-control" type="text" id="stc_e_modal" maxlength="2" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-search-input" class="col-4 col-form-label">Sale Type Name</label>
                    <div class="col-4">
                        <input class="form-control" type="text" id="stn_e_modal" maxlength="20">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-search-input" class="col-4 col-form-label"></label>
                    <div class="col-4">
                        <button type="button" class="btn btn-primary btn-sm" id="edit_btn">Edit</button>
                    </div>
                </div>
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
                <div class="form-group row">
                    <label for="example-text-input" class="col-4 col-form-label">Sale Type Code</label>
                    <div class="col-2">
                        <input class="form-control" type="text" id="stc_d_modal" maxlength="2" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-search-input" class="col-4 col-form-label">Sale Type Name</label>
                    <div class="col-4">
                        <input class="form-control" type="text" id="stn_d_modal" maxlength="20" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-search-input" class="col-4 col-form-label"></label>
                    <div class="col-4">
                        <button type="button" class="btn btn-danger btn-sm" id="delete_btn">Delete</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
