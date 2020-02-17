
var	jumpPage= function(){
	
  	$('#tt').datagrid('options').pageNumber=$(".pagination-num").val();
  	$('#tt').datagrid('getPager').pagination({pageNumber: $(".pagination-num").val()});  
	$("#tt").datagrid("reload");
}

$(function() {
	$("#addHdLeave_cancel").on("click", function() {
		$("#parent_win").window("close");
	});

var insertQueryPama = function(){
  		var queryParams = $('#tt').datagrid('options').queryParams; 
		queryParams.id=$("#searchForm").find("#id").val();
		queryParams.title=$("#searchForm").find("#title").val();
		queryParams.startTime=$("#searchForm").find("#startTime").val();
		queryParams.endTime=$("#searchForm").find("#endTime").val();
		queryParams.type=$("#searchForm").find("#type").val();
		queryParams.applyTime=$("#searchForm").find("#applyTime").val();
		queryParams.status=$("#searchForm").find("#status").val();
		queryParams.createTime=$("#searchForm").find("#createTime").val();
		queryParams.userId=$("#searchForm").find("#userId").val();
		queryParams.userName=$("#searchForm").find("#userName").val();
		queryParams.deptId=$("#searchForm").find("#deptId").val();
		queryParams.deptName=$("#searchForm").find("#deptName").val();
		queryParams.level=$("#searchForm").find("#level").val();
		queryParams.startHm=$("#searchForm").find("#startHm").val();
		queryParams.endHm=$("#searchForm").find("#endHm").val();
		queryParams.del=$("#searchForm").find("#del").val();
	}
 		var reloadForm = function() {
			$('#saveForm').form({
				onSubmit : function(param) {
					$.ajax({
						url : $('#saveForm').attr("action"),
						type : 'POST',
						contentType : "application/json; charset=UTF-8",
						data : JSON.stringify($('#saveForm').serializeObject()),
						success : function(data) {
							if (data.code) {
								$.messager.alert('提示', data.message, 'error');
							} else {
								$.messager.alert('提示', '保存成功', 'info');
								$("#parent_win").window("close");
								insertQueryPama();
								$("#tt").datagrid("load");
							}
						}
					});
					return false
				}
			});
		}
	 
	$("#addHdLeave_save").on("click", function() {
		$('#saveForm').submit();
		$("#parent_win").window("close");
	});
	$("#searchButton").on("click", function() {
	insertQueryPama();
		$("#tt").datagrid("reload");
	});
	$("#resetButton").on("click", function() {
		$('#searchForm')[0].reset();
	});
	$("#parent_win").window("close");
	$("#tt").datagrid({
		method : "post",
		height : $("#body").height() - $('#search_hdLeave').height() - 5,
		width : $("#body").width(),
 		singleSelect: false,
		selectOnCheck: true,
		checkOnSelect: true,
		nowrap : true,
		rownumbers : true,
		showPageList : false,
		onBeforeLoad : function(param) {
			{
				var url = "../hdLeave/getHdLeavesForPage?";
				url += "page=" + param.page;
				url += "&rows=" + param.rows;				
				if (param.sort)
					url += "&sort=" + param.sort;
				if (param.order)
					url += "&order=" + param.order;
				delete param.page;
				delete param.rows;
				delete param.sort;
				delete param.order;
				$("#tt").datagrid("loadData", eval('(' + $.ajax({
					url : url,
					type : "POST",
					data : JSON.stringify(param),
					async : false,
					contentType : "application/json; charset=UTF-8"

				}).responseText + ')'));
			}
		},
		queryParams:{
		id:$("#searchForm").find("#id").val()
			,		title:$("#searchForm").find("#title").val()
			,		startTime:$("#searchForm").find("#startTime").val()
			,		endTime:$("#searchForm").find("#endTime").val()
			,		type:$("#searchForm").find("#type").val()
			,		applyTime:$("#searchForm").find("#applyTime").val()
			,		status:$("#searchForm").find("#status").val()
			,		createTime:$("#searchForm").find("#createTime").val()
			,		userId:$("#searchForm").find("#userId").val()
			,		userName:$("#searchForm").find("#userName").val()
			,		deptId:$("#searchForm").find("#deptId").val()
			,		deptName:$("#searchForm").find("#deptName").val()
			,		level:$("#searchForm").find("#level").val()
			,		startHm:$("#searchForm").find("#startHm").val()
			,		endHm:$("#searchForm").find("#endHm").val()
			,		del:$("#searchForm").find("#del").val()
			
		},
		columns : [ 
		            [ { field:'ck',checkbox:true },
		        	{
						field : 'id',
						title : '编号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'title',
						title : '事由',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'startTime',
						title : '开始时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'endTime',
						title : '结束时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'type',
						title : '类型 0:事假 1:病假 2:休假 3:婚假 4:产假 5:丧假 6:其他',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'applyTime',
						title : '申请时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'status',
						title : '审批状态 0：待审批 1：已通过 2：已驳回',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'createTime',
						title : '创建时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'userId',
						title : '用户id',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'userName',
						title : '用户名',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'deptId',
						title : '部门id',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'deptName',
						title : '部门名称',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'level',
						title : '审批序号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'startHm',
						title : '开始时刻',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'endHm',
						title : '结束时刻',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'del',
						title : '作废状态 0：正常 1：删除',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			 ]
		            ],
		toolbar : '#tt_btn',
		pagination : true 
	});

	//新增弹出框
	$("#save").on("click", function() {

		$('#saveForm')[0].reset();
		$('#saveForm').attr("action","../hdLeave/insertHdLeave");
		$("#parent_win").window({
			width : 274,
			height : 555,
			title : '新增请假申请记录'
		});
		reloadForm();
	});
	//修改弹出框
	$("#update").on("click", function() {
	var datas=	$('#tt').datagrid('getSelections'); 
	if(datas==null||datas.length==0){
		$parent.messager.alert("提示", "请选择一条记录！", "info");
	}else if(datas.length>1){
		$parent.messager.alert("提示", "只能选择一条记录！", "info");
	}else{

		$('#saveForm')[0].reset();
		$('#saveForm').attr("action","../hdLeave/updateHdLeaveById");
		
		$("#parent_win").window({
			width : 274,
			height : 555,
			title : '修改请假申请记录',
			onOpen:function(){
			for(x in datas[0]){
			$("#saveForm").find("#"+x).val(datas[0][x]);
		}
			}
		});
		reloadForm();
		
	}
	});

	//删除
	$("#delete").on("click", function() {
		var datas=	$('#tt').datagrid('getSelections'); 
	if(datas==null||datas.length==0){
		$parent.messager.alert("提示", "请选择一条记录！", "info");
	}else if(datas.length>1){
		$parent.messager.alert("提示", "只能选择一条记录！", "info");
	}else{

	 $.ajax({
		 url: '../hdLeave/deleteHdLeaveById?id='+datas[0]['id']+'',
			   type: "get",
			   dataType: "json",
			   success: function(data) {
			   if(data.code){
					$.messager.alert('提示', data.message,'error');
				}else{
				$.messager.alert('提示', '删除成功','success');
			 	 jumpPage();
				}
			  	
			   },
			   error: function(XMLHttpRequest, textStatus, errorThrown) {
				$.messager.alert('提示', '删除失败','error');
			   } 
		 });
		
		
	}
	});
})

 
//监听窗口大小变化
window.onresize = function() {
	setTimeout(domresize, 300);
};
//改变表格宽高
function domresize() {
	$('#tt').datagrid('resize', {
		height : $("#body").height() - $('#search_hdLeave').height() - 5,
		width : $("#body").width()
	});
}

