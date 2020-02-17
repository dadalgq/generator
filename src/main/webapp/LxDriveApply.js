
var	jumpPage= function(){
	
  	$('#tt').datagrid('options').pageNumber=$(".pagination-num").val();
  	$('#tt').datagrid('getPager').pagination({pageNumber: $(".pagination-num").val()});  
	$("#tt").datagrid("reload");
}

$(function() {
	$("#addLxDriveApply_cancel").on("click", function() {
		$("#parent_win").window("close");
	});

var insertQueryPama = function(){
  		var queryParams = $('#tt').datagrid('options').queryParams; 
		queryParams.id=$("#searchForm").find("#id").val();
		queryParams.outTime=$("#searchForm").find("#outTime").val();
		queryParams.backTime=$("#searchForm").find("#backTime").val();
		queryParams.startSite=$("#searchForm").find("#startSite").val();
		queryParams.waySite=$("#searchForm").find("#waySite").val();
		queryParams.endSite=$("#searchForm").find("#endSite").val();
		queryParams.policeId=$("#searchForm").find("#policeId").val();
		queryParams.policeName=$("#searchForm").find("#policeName").val();
		queryParams.policeNum=$("#searchForm").find("#policeNum").val();
		queryParams.deptTag=$("#searchForm").find("#deptTag").val();
		queryParams.driver=$("#searchForm").find("#driver").val();
		queryParams.applyTime=$("#searchForm").find("#applyTime").val();
		queryParams.finishTime=$("#searchForm").find("#finishTime").val();
		queryParams.carNum=$("#searchForm").find("#carNum").val();
		queryParams.task=$("#searchForm").find("#task").val();
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
	 
	$("#addLxDriveApply_save").on("click", function() {
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
		height : $("#body").height() - $('#search_lxDriveApply').height() - 5,
		width : $("#body").width(),
 		singleSelect: false,
		selectOnCheck: true,
		checkOnSelect: true,
		nowrap : true,
		rownumbers : true,
		showPageList : false,
		onBeforeLoad : function(param) {
			{
				var url = "../lxDriveApply/getLxDriveApplysForPage?";
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
			,		outTime:$("#searchForm").find("#outTime").val()
			,		backTime:$("#searchForm").find("#backTime").val()
			,		startSite:$("#searchForm").find("#startSite").val()
			,		waySite:$("#searchForm").find("#waySite").val()
			,		endSite:$("#searchForm").find("#endSite").val()
			,		policeId:$("#searchForm").find("#policeId").val()
			,		policeName:$("#searchForm").find("#policeName").val()
			,		policeNum:$("#searchForm").find("#policeNum").val()
			,		deptTag:$("#searchForm").find("#deptTag").val()
			,		driver:$("#searchForm").find("#driver").val()
			,		applyTime:$("#searchForm").find("#applyTime").val()
			,		finishTime:$("#searchForm").find("#finishTime").val()
			,		carNum:$("#searchForm").find("#carNum").val()
			,		task:$("#searchForm").find("#task").val()
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
						field : 'outTime',
						title : '出发时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'backTime',
						title : '返回时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'startSite',
						title : '起点',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'waySite',
						title : '途经点',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'endSite',
						title : '终点',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'policeId',
						title : '申请人',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'policeName',
						title : '申请人姓名',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'policeNum',
						title : '申请人警号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'deptTag',
						title : '类型（0：本部门，1：跨部门）',
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
						field : 'carNum',
						title : '车牌号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'task',
						title : '任务类型',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'status',
						title : '审批状态（0：待审批，1：通过，2：已还车，3拒绝，4：已撤销）',
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
		$('#saveForm').attr("action","../lxDriveApply/insertLxDriveApply");
		$("#parent_win").window({
			width : 274,
			height : 621,
			title : '新增用车申请记录'
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
		$('#saveForm').attr("action","../lxDriveApply/updateLxDriveApplyById");
		
		$("#parent_win").window({
			width : 274,
			height : 621,
			title : '修改用车申请记录',
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
		 url: '../lxDriveApply/deleteLxDriveApplyById?id='+datas[0]['id']+'',
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
		height : $("#body").height() - $('#search_lxDriveApply').height() - 5,
		width : $("#body").width()
	});
}

