<%-- 
    Document   : _input_sale_typs_body
    Created on : Sep 5, 2018, 10:34:53 AM
    Author     : phich.bur
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="box">
    <div class="box-body">
        <form class="form-horizontal">
            <div class="form-group row">
                <label for="wn-select" class="col-sm-2 control-label">Warehouse</label>
                <div class="col-sm-3">
                    <select id="wh-select" multiple="multiple">
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="gm-select" class="col-sm-2 control-label">Group Member</label>
                <div class="col-sm-3">
                    <select id="gm-select" multiple="multiple">
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="gl-select" class="col-sm-2 control-label">Group Level</label>
                <div class="col-sm-3">
                    <select id="gl-select" multiple="multiple">
                    </select>
                </div>
                <div id="glstats" class="col-sm-3"></div>
            </div>
            <div class="form-group row">
                <label for="dt-select" class="col-sm-2 control-label">Delivery Terms</label>
                <div class="col-sm-3">
                    <select id="dt-select" multiple="multiple">
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="dt-select" class="col-sm-2 control-label"></label>
                <div class="col-sm-3">
                    <a class="btn btn-primary" id="save_details_btn">Save</a>
                    <a href="#" class="btn btn-default" id="cancel_btn">Cancel</a>
                </div>
            </div>
        </form>
    </div>
</div>

<!-- Save Display Modal -->
<div class="modal fade" id="SaveDisplayAddDetails_Modal" role="dialog" data-backdrop="false">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Save Display</h5>
            </div>
            <div class="modal-body">
                <table class="table table-bordered display" id="save_display_add_sale_types_details_table" width="100%" cellspacing="0" >
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Sale Type</th>
                            <th>Warehouse</th>
                            <th>Member Group</th>
                            <th>Member Level</th>
                            <th>Delivery Terms</th>
                            <th class="dt-center">Delete</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="modal-footer" id="modalfooter">
                <div id="savestats"></div>
                <button type="button" class="btn btn-primary" id="_modal_save_btn">Save</button>
                <button type="button" class="btn btn-default" data-dismiss="modal" id="_modal_cancle_btn">Close</button>
            </div>
        </div>
    </div>
</div>
