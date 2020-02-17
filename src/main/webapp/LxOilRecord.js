
var	jumpPage= function(){
	
  	$('#tt').datagrid('options').pageNumber=$(".pagination-num").val();
  	$('#tt').datagrid('getPager').pagination({pageNumber: $(".pagination-num").val()});  
	$("#tt").datagrid("reload");
}

$(function() {
	$("#addLxOilRecord_cancel").on("click", function() {
		$("#parent_win").window("close");
	});

var insertQueryPama = function(){
  		var queryParams = $('#tt').datagrid('options').queryParams; 
		queryParams.id=$("#searchForm").find("#id").val();
		queryParams.carNum=$("#searchForm").find("#carNum").val();
		queryParams.policeId=$("#searchForm").find("#policeId").val();
		queryParams.policeName=$("#searchForm").find("#policeName").val();
		queryParams.policeNum=$("#searchForm").find("#policeNum").val();
		queryParams.deptId=$("#searchForm").find("#deptId").val();
		queryParams.driver=$("#searchForm").find("#driver").val();
		queryParams.appendTime=$("#searchForm").find("#appendTime").val();
		queryParams.mileage=$("#searchForm").find("#mileage").val();
		queryParams.money=$("#searchForm").find("#money").val();
		queryParams.remark=$("#searchForm").find("#remark").val();
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
	 
	$("#addLxOilRecord_save").on("click", function() {
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
		height : $("#body").height() - $('#search_lxOilRecord').height() - 5,
		width : $("#body").width(),
 		singleSelect: false,
		selectOnCheck: true,
		checkOnSelect: true,
		nowrap : true,
		rownumbers : true,
		showPageList : false,
		onBeforeLoad : function(param) {
			{
				var url = "../lxOilRecord/getLxOilRecordsForPage?";
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
			,		carNum:$("#searchForm").find("#carNum").val()
			,		policeId:$("#searchForm").find("#policeId").val()
			,		policeName:$("#searchForm").find("#policeName").val()
			,		policeNum:$("#searchForm").find("#policeNum").val()
			,		deptId:$("#searchForm").find("#deptId").val()
			,		driver:$("#searchForm").find("#driver").val()
			,		appendTime:$("#searchForm").find("#appendTime").val()
			,		mileage:$("#searchForm").find("#mileage").val()
			,		money:$("#searchForm").find("#money").val()
			,		remark:$("#searchForm").find("#remark").val()
			,		createTime:$("#searchForm").find("#createTime").val()
			,		updateTime:$("#searchForm").find("#updateTime").val()
			,		status:$("#searchForm").find("#status").val()
			
		},
		columns : [ 
		            [ { field:'ck',checkbox:true },
		        	{
						field : 'id',
						title : '加油登记编号',
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
						field : 'policeId',
						title : '记录人编号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'policeName',
						title : '记录人姓名',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'policeNum',
						title : '记录人警号',
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
						field : 'driver',
						title : '驾驶员',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'appendTime',
						title : '加油时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'mileage',
						title : '公里数',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'money',
						title : '加油金额',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'remark',
						title : '备注',
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
		$('#saveForm').attr("action","../lxOilRecord/insertLxOilRecord");
		$("#parent_win").window({
			width : 274,
			height : 489,
			title : '新增加油登记记录'
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
		$('#saveForm').attr("action","../lxOilRecord/updateLxOilRecordById");
		
		$("#parent_win").window({
			width : 274,
			height : 489,
			title : '修改加油登记记录',
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
		 url: '../lxOilRecord/deleteLxOilRecordById?id='+datas[0]['id']+'',
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
		height : $("#body").height() - $('#search_lxOilRecord').height() - 5,
		width : $("#body").width()
	});
}

