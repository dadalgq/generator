
var	jumpPage= function(){
	
  	$('#tt').datagrid('options').pageNumber=$(".pagination-num").val();
  	$('#tt').datagrid('getPager').pagination({pageNumber: $(".pagination-num").val()});  
	$("#tt").datagrid("reload");
}

$(function() {
	$("#addLxIllegalRecord_cancel").on("click", function() {
		$("#parent_win").window("close");
	});

var insertQueryPama = function(){
  		var queryParams = $('#tt').datagrid('options').queryParams; 
		queryParams.id=$("#searchForm").find("#id").val();
		queryParams.policeId=$("#searchForm").find("#policeId").val();
		queryParams.driver=$("#searchForm").find("#driver").val();
		queryParams.carNum=$("#searchForm").find("#carNum").val();
		queryParams.deptId=$("#searchForm").find("#deptId").val();
		queryParams.lllegalTime=$("#searchForm").find("#lllegalTime").val();
		queryParams.lllegalSite=$("#searchForm").find("#lllegalSite").val();
		queryParams.lllegalDesc=$("#searchForm").find("#lllegalDesc").val();
		queryParams.createTime=$("#searchForm").find("#createTime").val();
		queryParams.updateTime=$("#searchForm").find("#updateTime").val();
		queryParams.status=$("#searchForm").find("#status").val();
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
	 
	$("#addLxIllegalRecord_save").on("click", function() {
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
		height : $("#body").height() - $('#search_lxIllegalRecord').height() - 5,
		width : $("#body").width(),
 		singleSelect: false,
		selectOnCheck: true,
		checkOnSelect: true,
		nowrap : true,
		rownumbers : true,
		showPageList : false,
		onBeforeLoad : function(param) {
			{
				var url = "../lxIllegalRecord/getLxIllegalRecordsForPage?";
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
			,		policeId:$("#searchForm").find("#policeId").val()
			,		driver:$("#searchForm").find("#driver").val()
			,		carNum:$("#searchForm").find("#carNum").val()
			,		deptId:$("#searchForm").find("#deptId").val()
			,		lllegalTime:$("#searchForm").find("#lllegalTime").val()
			,		lllegalSite:$("#searchForm").find("#lllegalSite").val()
			,		lllegalDesc:$("#searchForm").find("#lllegalDesc").val()
			,		createTime:$("#searchForm").find("#createTime").val()
			,		updateTime:$("#searchForm").find("#updateTime").val()
			,		status:$("#searchForm").find("#status").val()
			
		},
		columns : [ 
		            [ { field:'ck',checkbox:true },
		        	{
						field : 'id',
						title : '记录编号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'policeId',
						title : '记录人编号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'driver',
						title : '驾驶员',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'carNum',
						title : '车牌号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'deptId',
						title : '所属部门编号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'lllegalTime',
						title : '违法时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'lllegalSite',
						title : '违法地点',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'lllegalDesc',
						title : '违法行为',
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
						field : 'updateTime',
						title : '更新时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'status',
						title : '状态 0：正常 1：作废',
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
		$('#saveForm').attr("action","../lxIllegalRecord/insertLxIllegalRecord");
		$("#parent_win").window({
			width : 274,
			height : 390,
			title : '新增交通违法记录'
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
		$('#saveForm').attr("action","../lxIllegalRecord/updateLxIllegalRecordById");
		
		$("#parent_win").window({
			width : 274,
			height : 390,
			title : '修改交通违法记录',
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
		 url: '../lxIllegalRecord/deleteLxIllegalRecordById?id='+datas[0]['id']+'',
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
		height : $("#body").height() - $('#search_lxIllegalRecord').height() - 5,
		width : $("#body").width()
	});
}

