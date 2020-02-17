
var	jumpPage= function(){
	
  	$('#tt').datagrid('options').pageNumber=$(".pagination-num").val();
  	$('#tt').datagrid('getPager').pagination({pageNumber: $(".pagination-num").val()});  
	$("#tt").datagrid("reload");
}

$(function() {
	$("#addFirstUser_cancel").on("click", function() {
		$("#parent_win").window("close");
	});

var insertQueryPama = function(){
  		var queryParams = $('#tt').datagrid('options').queryParams; 
		queryParams.userId=$("#searchForm").find("#userId").val();
		queryParams.userName=$("#searchForm").find("#userName").val();
		queryParams.deptId=$("#searchForm").find("#deptId").val();
		queryParams.leaderId=$("#searchForm").find("#leaderId").val();
		queryParams.token=$("#searchForm").find("#token").val();
		queryParams.avatarUrl=$("#searchForm").find("#avatarUrl").val();
		queryParams.sign=$("#searchForm").find("#sign").val();
		queryParams.leaderName=$("#searchForm").find("#leaderName").val();
		queryParams.deptName=$("#searchForm").find("#deptName").val();
		queryParams.leaderAvatarUrl=$("#searchForm").find("#leaderAvatarUrl").val();
		queryParams.roleId=$("#searchForm").find("#roleId").val();
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
	 
	$("#addFirstUser_save").on("click", function() {
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
		height : $("#body").height() - $('#search_firstUser').height() - 5,
		width : $("#body").width(),
 		singleSelect: false,
		selectOnCheck: true,
		checkOnSelect: true,
		nowrap : true,
		rownumbers : true,
		showPageList : false,
		onBeforeLoad : function(param) {
			{
				var url = "../firstUser/getFirstUsersForPage?";
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
		userId:$("#searchForm").find("#userId").val()
			,		userName:$("#searchForm").find("#userName").val()
			,		deptId:$("#searchForm").find("#deptId").val()
			,		leaderId:$("#searchForm").find("#leaderId").val()
			,		token:$("#searchForm").find("#token").val()
			,		avatarUrl:$("#searchForm").find("#avatarUrl").val()
			,		sign:$("#searchForm").find("#sign").val()
			,		leaderName:$("#searchForm").find("#leaderName").val()
			,		deptName:$("#searchForm").find("#deptName").val()
			,		leaderAvatarUrl:$("#searchForm").find("#leaderAvatarUrl").val()
			,		roleId:$("#searchForm").find("#roleId").val()
			,		del:$("#searchForm").find("#del").val()
			
		},
		columns : [ 
		            [ { field:'ck',checkbox:true },
		        	{
						field : 'userId',
						title : '用户ID',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'userName',
						title : '用户姓名',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'deptId',
						title : '所属部门Id',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'leaderId',
						title : '上级领导ID',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'token',
						title : '令牌',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'avatarUrl',
						title : '用户头像地址',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'sign',
						title : '标识',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'leaderName',
						title : '领导姓名',
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
						field : 'leaderAvatarUrl',
						title : '领导头像地址',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'roleId',
						title : '角色权限Id(0,普通员工；1,部门负责人；2,企业拥有者)',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'del',
						title : '是否在职 0：在职 1：离职',
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
		$('#saveForm').attr("action","../firstUser/insertFirstUser");
		$("#parent_win").window({
			width : 274,
			height : 423,
			title : '新增用户信息'
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
		$('#saveForm').attr("action","../firstUser/updateFirstUserById");
		
		$("#parent_win").window({
			width : 274,
			height : 423,
			title : '修改用户信息',
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
		 url: '../firstUser/deleteFirstUserById?userId='+datas[0]['userId']+'',
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
		height : $("#body").height() - $('#search_firstUser').height() - 5,
		width : $("#body").width()
	});
}

