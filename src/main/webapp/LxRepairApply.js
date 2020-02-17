
var	jumpPage= function(){
	
  	$('#tt').datagrid('options').pageNumber=$(".pagination-num").val();
  	$('#tt').datagrid('getPager').pagination({pageNumber: $(".pagination-num").val()});  
	$("#tt").datagrid("reload");
}

$(function() {
	$("#addLxRepairApply_cancel").on("click", function() {
		$("#parent_win").window("close");
	});

var insertQueryPama = function(){
  		var queryParams = $('#tt').datagrid('options').queryParams; 
		queryParams.id=$("#searchForm").find("#id").val();
		queryParams.policeId=$("#searchForm").find("#policeId").val();
		queryParams.policeName=$("#searchForm").find("#policeName").val();
		queryParams.policeNum=$("#searchForm").find("#policeNum").val();
		queryParams.address=$("#searchForm").find("#address").val();
		queryParams.phone=$("#searchForm").find("#phone").val();
		queryParams.carNum=$("#searchForm").find("#carNum").val();
		queryParams.brandModel=$("#searchForm").find("#brandModel").val();
		queryParams.engineNum=$("#searchForm").find("#engineNum").val();
		queryParams.frameNum=$("#searchForm").find("#frameNum").val();
		queryParams.repairProject=$("#searchForm").find("#repairProject").val();
		queryParams.materialCost=$("#searchForm").find("#materialCost").val();
		queryParams.labourCost=$("#searchForm").find("#labourCost").val();
		queryParams.advice=$("#searchForm").find("#advice").val();
		queryParams.applyTime=$("#searchForm").find("#applyTime").val();
		queryParams.finishTime=$("#searchForm").find("#finishTime").val();
		queryParams.status=$("#searchForm").find("#status").val();
		queryParams.level=$("#searchForm").find("#level").val();
		queryParams.totalLevel=$("#searchForm").find("#totalLevel").val();
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
	 
	$("#addLxRepairApply_save").on("click", function() {
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
		height : $("#body").height() - $('#search_lxRepairApply').height() - 5,
		width : $("#body").width(),
 		singleSelect: false,
		selectOnCheck: true,
		checkOnSelect: true,
		nowrap : true,
		rownumbers : true,
		showPageList : false,
		onBeforeLoad : function(param) {
			{
				var url = "../lxRepairApply/getLxRepairApplysForPage?";
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
			,		policeName:$("#searchForm").find("#policeName").val()
			,		policeNum:$("#searchForm").find("#policeNum").val()
			,		address:$("#searchForm").find("#address").val()
			,		phone:$("#searchForm").find("#phone").val()
			,		carNum:$("#searchForm").find("#carNum").val()
			,		brandModel:$("#searchForm").find("#brandModel").val()
			,		engineNum:$("#searchForm").find("#engineNum").val()
			,		frameNum:$("#searchForm").find("#frameNum").val()
			,		repairProject:$("#searchForm").find("#repairProject").val()
			,		materialCost:$("#searchForm").find("#materialCost").val()
			,		labourCost:$("#searchForm").find("#labourCost").val()
			,		advice:$("#searchForm").find("#advice").val()
			,		applyTime:$("#searchForm").find("#applyTime").val()
			,		finishTime:$("#searchForm").find("#finishTime").val()
			,		status:$("#searchForm").find("#status").val()
			,		level:$("#searchForm").find("#level").val()
			,		totalLevel:$("#searchForm").find("#totalLevel").val()
			
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
						title : '申请人编号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'policeName',
						title : '送修人姓名',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'policeNum',
						title : '送修人警号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'address',
						title : '地址',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'phone',
						title : '电话',
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
						field : 'brandModel',
						title : '车辆品牌',
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
						field : 'frameNum',
						title : '车架号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'repairProject',
						title : '送修项目',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'materialCost',
						title : '材料费',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'labourCost',
						title : '工时费',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'advice',
						title : '维修意见',
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
						field : 'finishTime',
						title : '完成时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'status',
						title : '审批状态（0：待审批，1通过，2：已还车，3拒绝，4撤销）',
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
						field : 'totalLevel',
						title : '总序号',
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
		$('#saveForm').attr("action","../lxRepairApply/insertLxRepairApply");
		$("#parent_win").window({
			width : 274,
			height : 654,
			title : '新增维保申请记录'
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
		$('#saveForm').attr("action","../lxRepairApply/updateLxRepairApplyById");
		
		$("#parent_win").window({
			width : 274,
			height : 654,
			title : '修改维保申请记录',
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
		 url: '../lxRepairApply/deleteLxRepairApplyById?id='+datas[0]['id']+'',
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
		height : $("#body").height() - $('#search_lxRepairApply').height() - 5,
		width : $("#body").width()
	});
}

