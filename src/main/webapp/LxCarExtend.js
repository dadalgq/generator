
var	jumpPage= function(){
	
  	$('#tt').datagrid('options').pageNumber=$(".pagination-num").val();
  	$('#tt').datagrid('getPager').pagination({pageNumber: $(".pagination-num").val()});  
	$("#tt").datagrid("reload");
}

$(function() {
	$("#addLxCarExtend_cancel").on("click", function() {
		$("#parent_win").window("close");
	});

var insertQueryPama = function(){
  		var queryParams = $('#tt').datagrid('options').queryParams; 
		queryParams.carNum=$("#searchForm").find("#carNum").val();
		queryParams.carType=$("#searchForm").find("#carType").val();
		queryParams.carModel=$("#searchForm").find("#carModel").val();
		queryParams.madeTag=$("#searchForm").find("#madeTag").val();
		queryParams.engineModel=$("#searchForm").find("#engineModel").val();
		queryParams.oilType=$("#searchForm").find("#oilType").val();
		queryParams.output=$("#searchForm").find("#output").val();
		queryParams.power=$("#searchForm").find("#power").val();
		queryParams.madeFactory=$("#searchForm").find("#madeFactory").val();
		queryParams.steeringWheel=$("#searchForm").find("#steeringWheel").val();
		queryParams.tread=$("#searchForm").find("#tread").val();
		queryParams.wheelNum=$("#searchForm").find("#wheelNum").val();
		queryParams.wheelSpec=$("#searchForm").find("#wheelSpec").val();
		queryParams.wheelBase=$("#searchForm").find("#wheelBase").val();
		queryParams.axleNum=$("#searchForm").find("#axleNum").val();
		queryParams.outlineSize=$("#searchForm").find("#outlineSize").val();
		queryParams.totalMass=$("#searchForm").find("#totalMass").val();
		queryParams.factoryTime=$("#searchForm").find("#factoryTime").val();
		queryParams.maxPeopleNum=$("#searchForm").find("#maxPeopleNum").val();
		queryParams.forVehicles=$("#searchForm").find("#forVehicles").val();
		queryParams.useType=$("#searchForm").find("#useType").val();
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
	 
	$("#addLxCarExtend_save").on("click", function() {
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
		height : $("#body").height() - $('#search_lxCarExtend').height() - 5,
		width : $("#body").width(),
 		singleSelect: false,
		selectOnCheck: true,
		checkOnSelect: true,
		nowrap : true,
		rownumbers : true,
		showPageList : false,
		onBeforeLoad : function(param) {
			{
				var url = "../lxCarExtend/getLxCarExtendsForPage?";
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
			,		carType:$("#searchForm").find("#carType").val()
			,		carModel:$("#searchForm").find("#carModel").val()
			,		madeTag:$("#searchForm").find("#madeTag").val()
			,		engineModel:$("#searchForm").find("#engineModel").val()
			,		oilType:$("#searchForm").find("#oilType").val()
			,		output:$("#searchForm").find("#output").val()
			,		power:$("#searchForm").find("#power").val()
			,		madeFactory:$("#searchForm").find("#madeFactory").val()
			,		steeringWheel:$("#searchForm").find("#steeringWheel").val()
			,		tread:$("#searchForm").find("#tread").val()
			,		wheelNum:$("#searchForm").find("#wheelNum").val()
			,		wheelSpec:$("#searchForm").find("#wheelSpec").val()
			,		wheelBase:$("#searchForm").find("#wheelBase").val()
			,		axleNum:$("#searchForm").find("#axleNum").val()
			,		outlineSize:$("#searchForm").find("#outlineSize").val()
			,		totalMass:$("#searchForm").find("#totalMass").val()
			,		factoryTime:$("#searchForm").find("#factoryTime").val()
			,		maxPeopleNum:$("#searchForm").find("#maxPeopleNum").val()
			,		forVehicles:$("#searchForm").find("#forVehicles").val()
			,		useType:$("#searchForm").find("#useType").val()
			
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
						field : 'carType',
						title : '车辆类型',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'carModel',
						title : '车辆型号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'madeTag',
						title : '产地（0：国产，1：进口）',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'engineModel',
						title : '发动机型号',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'oilType',
						title : '燃料种类',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'output',
						title : '排量',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'power',
						title : '功率',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'madeFactory',
						title : '制造厂',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'steeringWheel',
						title : '转向形式',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'tread',
						title : '轮距',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'wheelNum',
						title : '车轮数',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'wheelSpec',
						title : '轮胎规格',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'wheelBase',
						title : '轴距',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'axleNum',
						title : '轴数',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'outlineSize',
						title : '外廓尺寸',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'totalMass',
						title : '总质量',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'factoryTime',
						title : '出厂时间',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'maxPeopleNum',
						title : '核载人数',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'forVehicles',
						title : '获得方式',
						width : 100,
						halign : "center",
						align : "left",
						sortable:true
					}
			,
		        	{
						field : 'useType',
						title : '使用性质',
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
		$('#saveForm').attr("action","../lxCarExtend/insertLxCarExtend");
		$("#parent_win").window({
			width : 274,
			height : 720,
			title : '新增车辆扩展信息'
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
		$('#saveForm').attr("action","../lxCarExtend/updateLxCarExtendById");
		
		$("#parent_win").window({
			width : 274,
			height : 720,
			title : '修改车辆扩展信息',
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
		 url: '../lxCarExtend/deleteLxCarExtendById?carNum='+datas[0]['carNum']+'',
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
		height : $("#body").height() - $('#search_lxCarExtend').height() - 5,
		width : $("#body").width()
	});
}

