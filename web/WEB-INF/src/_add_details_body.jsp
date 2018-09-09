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
                <label for="wn-select" class="col-sm-1 control-label">Warehouse</label>
                <div class="col-sm-3">
                    <select id="wn-select" multiple="multiple">
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="gm-select" class="col-sm-1 control-label">Group Member</label>
                <div class="col-sm-3">
                    <select id="gm-select" multiple="multiple">
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="gl-select" class="col-sm-1 control-label">Group Level</label>
                <div class="col-sm-3">
                    <select id="gl-select" multiple="multiple">
                    </select>
                </div>
                <div class="col-sm-3">
                    <p style="padding-top: 2%;color: red">*Please select group member.</p>
                </div>
            </div>
            <div class="form-group row">
                <label for="dt-select" class="col-sm-1 control-label">Delivery Terms</label>
                <div class="col-sm-3">
                    <select id="dt-select" multiple="multiple">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                        <option value="5">Option 5</option>
                        <option value="6">Option 6</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="dt-select" class="col-sm-1 control-label"></label>
                <div class="col-sm-3">
                    <a href="display_sale_type.jsp" class="btn btn-primary" id="add_btn">Save</a>
                    <a href="display_sale_type.jsp" class="btn btn-default" id="add_btn">Cancel</a>
                </div>
            </div>
        </form>
    </div>
</div>