
var	jumpPage= function(){
	
  	$('#tt').datagrid('options').pageNumber=$(".pagination-num").val();
  	$('#tt').datagrid('getPager').pagination({pageNumber: $(".pagination-num").val()});  
	$("#tt").datagrid("reload");
}

$(function() {
	$("#addLxCar_cancel").on("click", function() {
		$("#parent_win").window("close");
	});

var insertQueryPama = function(){
  		var queryParams = $('#tt').datagrid('options').queryParams; 
		queryParams.carNum=$("#searchForm").find("#carNum").val();
		queryParams.deptId=$("#searchForm").find("#deptId").val();
		queryParams.orgTag=$("#searchForm").find("#orgTag").val();
		queryParams.color=$("#searchForm").find("#color").val();
		queryParams.brandModel=$("#searchForm").find("#brandModel").val();
		queryParams.frameNum=$("#searchForm").find("#frameNum").val();
		queryParams.engineNum=$("#searchForm").find("#engineNum").val();
		queryParams.buyTime=$("#searchForm").find("#buyTime").val();
		queryParams.safeExpireTime=$("#searchForm").find("#safeExpireTime").val();
		queryParams.yearInspectTime=$("#searchForm").find("#yearInspectTime").val();
		queryParams.oilCard=$("#searchForm").find("#oilCard").val();
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
	 
	$("#addLxCar_save").on("click", function() {
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
		height : $("#body").height() - $('#search_lxCar').height() - 5,
		width : $("#body").width(),
 		singleSelect: false,
		selectOnCheck: true,
		checkOnSelect: true,
		nowrap : true,
		rownumbers : true,
		showPageList : false,
		onBeforeLoad : function(param) {
			{
				var url = "../lxCar/getLxCarsForPage?";
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
		carNum:$("#searchForm").find("#carNum").val()
			,		deptId:$("#searchForm").find("#deptId").val()
			,		orgTag:$("#searchForm").find("#orgTag").val()
			,		color:$("#searchForm").find("#color").val()
			,		brandModel:$("#searchForm").find("#brandModel").val()
			,		frameNum:$("#searchForm").find("#frameNum").val()
			,		engineNum:$("#searchForm").find("#engineNum").val()
			,		buyTime:$("#searchForm").find("#buyTime").val()
			,		safeExpireTime:$("#searchForm").find("#safeExpireTime").val()
			,		yearInspectTime:$("#searchForm").find("#yearInspectTime").val()
			,		oilCard:$("#searchForm").find("#oilCard").val()
			,		createTime:$("#searchForm").find("#createTime").val()
			,		updateTime:$("#searchForm").find("#updateTime").val()
			,		status:$("#searchForm").find("#status").val()
			
		},
		columns : [ 
		            [ { field:'ck',checkbox:true },
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
						field : 'orgTag',
						title : '编内编外（0：编外，1：编内）',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'color',
						title : '颜色',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'brandModel',
						title : '品牌型号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'frameNum',
						title : '车架号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'engineNum',
						title : '发动机号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'buyTime',
						title : '购车时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'safeExpireTime',
						title : '保险到期',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'yearInspectTime',
						title : '车辆年检',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'oilCard',
						title : '加油卡号',
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
						title : '状态（0：空闲，1：已预约，2，使用中 3：报废）',
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
		$('#saveForm').attr("action","../lxCar/insertLxCar");
		$("#parent_win").window({
			width : 274,
			height : 489,
			title : '新增车辆信息'
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
		$('#saveForm').attr("action","../lxCar/updateLxCarById");
		
		$("#parent_win").window({
			width : 274,
			height : 489,
			title : '修改车辆信息',
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
		 url: '../lxCar/deleteLxCarById?carNum='+datas[0]['carNum']+'',
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
		height : $("#body").height() - $('#search_lxCar').height() - 5,
		width : $("#body").width()
	});
}

