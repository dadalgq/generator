
var	jumpPage= function(){
	
  	$('#tt').datagrid('options').pageNumber=$(".pagination-num").val();
  	$('#tt').datagrid('getPager').pagination({pageNumber: $(".pagination-num").val()});  
	$("#tt").datagrid("reload");
}

$(function() {
	$("#addLxPolice_cancel").on("click", function() {
		$("#parent_win").window("close");
	});

var insertQueryPama = function(){
  		var queryParams = $('#tt').datagrid('options').queryParams; 
		queryParams.policeId=$("#searchForm").find("#policeId").val();
		queryParams.policeNum=$("#searchForm").find("#policeNum").val();
		queryParams.name=$("#searchForm").find("#name").val();
		queryParams.duty=$("#searchForm").find("#duty").val();
		queryParams.phone=$("#searchForm").find("#phone").val();
		queryParams.idCard=$("#searchForm").find("#idCard").val();
		queryParams.status=$("#searchForm").find("#status").val();
		queryParams.deptId=$("#searchForm").find("#deptId").val();
		queryParams.createTime=$("#searchForm").find("#createTime").val();
		queryParams.updateTime=$("#searchForm").find("#updateTime").val();
		queryParams.menuIds=$("#searchForm").find("#menuIds").val();
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
	 
	$("#addLxPolice_save").on("click", function() {
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
		height : $("#body").height() - $('#search_lxPolice').height() - 5,
		width : $("#body").width(),
 		singleSelect: false,
		selectOnCheck: true,
		checkOnSelect: true,
		nowrap : true,
		rownumbers : true,
		showPageList : false,
		onBeforeLoad : function(param) {
			{
				var url = "../lxPolice/getLxPolicesForPage?";
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
		policeId:$("#searchForm").find("#policeId").val()
			,		policeNum:$("#searchForm").find("#policeNum").val()
			,		name:$("#searchForm").find("#name").val()
			,		duty:$("#searchForm").find("#duty").val()
			,		phone:$("#searchForm").find("#phone").val()
			,		idCard:$("#searchForm").find("#idCard").val()
			,		status:$("#searchForm").find("#status").val()
			,		deptId:$("#searchForm").find("#deptId").val()
			,		createTime:$("#searchForm").find("#createTime").val()
			,		updateTime:$("#searchForm").find("#updateTime").val()
			,		menuIds:$("#searchForm").find("#menuIds").val()
			
		},
		columns : [ 
		            [ { field:'ck',checkbox:true },
		        	{
						field : 'policeId',
						title : '警员编号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'policeNum',
						title : '警号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'name',
						title : '姓名',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'duty',
						title : '职务',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'phone',
						title : '手机号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'idCard',
						title : '身份证号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'status',
						title : '状态（0：在职，1离职）',
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
						field : 'menuIds',
						title : '蓝信端用户菜单权限',
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
		$('#saveForm').attr("action","../lxPolice/insertLxPolice");
		$("#parent_win").window({
			width : 274,
			height : 390,
			title : '新增警员信息'
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
		$('#saveForm').attr("action","../lxPolice/updateLxPoliceById");
		
		$("#parent_win").window({
			width : 274,
			height : 390,
			title : '修改警员信息',
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
		 url: '../lxPolice/deleteLxPoliceById?policeId='+datas[0]['policeId']+'',
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
		height : $("#body").height() - $('#search_lxPolice').height() - 5,
		width : $("#body").width()
	});
}

