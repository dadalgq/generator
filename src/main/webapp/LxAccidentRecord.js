
var	jumpPage= function(){
	
  	$('#tt').datagrid('options').pageNumber=$(".pagination-num").val();
  	$('#tt').datagrid('getPager').pagination({pageNumber: $(".pagination-num").val()});  
	$("#tt").datagrid("reload");
}

$(function() {
	$("#addLxAccidentRecord_cancel").on("click", function() {
		$("#parent_win").window("close");
	});

var insertQueryPama = function(){
  		var queryParams = $('#tt').datagrid('options').queryParams; 
		queryParams.id=$("#searchForm").find("#id").val();
		queryParams.policeId=$("#searchForm").find("#policeId").val();
		queryParams.accidentTime=$("#searchForm").find("#accidentTime").val();
		queryParams.accidentSite=$("#searchForm").find("#accidentSite").val();
		queryParams.accidentWeather=$("#searchForm").find("#accidentWeather").val();
		queryParams.carNumFirst=$("#searchForm").find("#carNumFirst").val();
		queryParams.userNameFirst=$("#searchForm").find("#userNameFirst").val();
		queryParams.phoneFirst=$("#searchForm").find("#phoneFirst").val();
		queryParams.insuranceFirst=$("#searchForm").find("#insuranceFirst").val();
		queryParams.positionFirst=$("#searchForm").find("#positionFirst").val();
		queryParams.liableFirst=$("#searchForm").find("#liableFirst").val();
		queryParams.carNumSecond=$("#searchForm").find("#carNumSecond").val();
		queryParams.userNameSecond=$("#searchForm").find("#userNameSecond").val();
		queryParams.phoneSecond=$("#searchForm").find("#phoneSecond").val();
		queryParams.insuranceSecond=$("#searchForm").find("#insuranceSecond").val();
		queryParams.positionSecond=$("#searchForm").find("#positionSecond").val();
		queryParams.liableSecond=$("#searchForm").find("#liableSecond").val();
		queryParams.createTime=$("#searchForm").find("#createTime").val();
		queryParams.updateTime=$("#searchForm").find("#updateTime").val();
		queryParams.status=$("#searchForm").find("#status").val();
		queryParams.deptId=$("#searchForm").find("#deptId").val();
		queryParams.deptName=$("#searchForm").find("#deptName").val();
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
	 
	$("#addLxAccidentRecord_save").on("click", function() {
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
		height : $("#body").height() - $('#search_lxAccidentRecord').height() - 5,
		width : $("#body").width(),
 		singleSelect: false,
		selectOnCheck: true,
		checkOnSelect: true,
		nowrap : true,
		rownumbers : true,
		showPageList : false,
		onBeforeLoad : function(param) {
			{
				var url = "../lxAccidentRecord/getLxAccidentRecordsForPage?";
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
			,		accidentTime:$("#searchForm").find("#accidentTime").val()
			,		accidentSite:$("#searchForm").find("#accidentSite").val()
			,		accidentWeather:$("#searchForm").find("#accidentWeather").val()
			,		carNumFirst:$("#searchForm").find("#carNumFirst").val()
			,		userNameFirst:$("#searchForm").find("#userNameFirst").val()
			,		phoneFirst:$("#searchForm").find("#phoneFirst").val()
			,		insuranceFirst:$("#searchForm").find("#insuranceFirst").val()
			,		positionFirst:$("#searchForm").find("#positionFirst").val()
			,		liableFirst:$("#searchForm").find("#liableFirst").val()
			,		carNumSecond:$("#searchForm").find("#carNumSecond").val()
			,		userNameSecond:$("#searchForm").find("#userNameSecond").val()
			,		phoneSecond:$("#searchForm").find("#phoneSecond").val()
			,		insuranceSecond:$("#searchForm").find("#insuranceSecond").val()
			,		positionSecond:$("#searchForm").find("#positionSecond").val()
			,		liableSecond:$("#searchForm").find("#liableSecond").val()
			,		createTime:$("#searchForm").find("#createTime").val()
			,		updateTime:$("#searchForm").find("#updateTime").val()
			,		status:$("#searchForm").find("#status").val()
			,		deptId:$("#searchForm").find("#deptId").val()
			,		deptName:$("#searchForm").find("#deptName").val()
			
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
						title : '警员编号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'accidentTime',
						title : '事故时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'accidentSite',
						title : '事故地点',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'accidentWeather',
						title : '事故天气',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'carNumFirst',
						title : '甲方车牌号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'userNameFirst',
						title : '甲方当事人',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'phoneFirst',
						title : '甲方号码',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'insuranceFirst',
						title : '甲方保险公司',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'positionFirst',
						title : '甲方碰撞位置',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'liableFirst',
						title : '甲方事故责任',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'carNumSecond',
						title : '乙方车牌号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'userNameSecond',
						title : '乙方当事人',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'phoneSecond',
						title : '乙方号码',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'insuranceSecond',
						title : '乙方保险公司',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'positionSecond',
						title : '乙方碰撞位置',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'liableSecond',
						title : '乙方事故责任',
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
						field : 'deptName',
						title : '所属部门名称',
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
		$('#saveForm').attr("action","../lxAccidentRecord/insertLxAccidentRecord");
		$("#parent_win").window({
			width : 274,
			height : 753,
			title : '新增交通事故记录'
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
		$('#saveForm').attr("action","../lxAccidentRecord/updateLxAccidentRecordById");
		
		$("#parent_win").window({
			width : 274,
			height : 753,
			title : '修改交通事故记录',
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
		 url: '../lxAccidentRecord/deleteLxAccidentRecordById?id='+datas[0]['id']+'',
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
		height : $("#body").height() - $('#search_lxAccidentRecord').height() - 5,
		width : $("#body").width()
	});
}

