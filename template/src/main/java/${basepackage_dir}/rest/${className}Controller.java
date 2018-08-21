<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>   
package ${basepackage}.rest;  
import ${basepackage}.service.${className}Service;
import ${basepackage}.model.${className};
import basic.common.core.dto.PageDto;
import basic.common.core.id.IdUtil;

import com.maswx.common.page.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import com.maswx.common.response.Response;
import com.google.common.collect.Lists;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *  ${className}Controller
 *
 * @version : Ver 1.0
 * @date	: ${now?date}
 */
@RestController
@Api(value = "${className}Controller", description = "${table.remarks}相关")
@RequestMapping(value = "/wxapi/${className?uncap_first}")
public class ${className}Controller { 
	
	   @InitBinder   
	    public void initBinder(WebDataBinder binder) {   
	        DateFormat dateFormat =new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");   
	        dateFormat.setLenient(true);   
	        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));   
	    }  
	
	@Autowired
	private ${className}Service ${className?uncap_first}Service;
	
	@ApiOperation(value = "新增${table.remarks}", notes = "新增${table.remarks}")
	@RequestMapping(value = "/insert${className}", method = RequestMethod.POST)
	public Response<Integer> insert${className}(@RequestBody ${className} ${className?uncap_first}){
		<#list table.compositeIdColumns as column>
		<#if column.columnName?index_of("Id")!=-1>${className?uncap_first}.set${column.columnName}(IdUtil.getId());</#if>
    	</#list>
    	
		return new Response<Integer>(${className?uncap_first}Service.insert${className}(${className?uncap_first}));
	}
	@ApiOperation(value = "批量新增${table.remarks}", notes = "批量新增${table.remarks}")
	@RequestMapping(value = "/insert${className}Batch", method = RequestMethod.POST)
	public Response<Integer> insert${className}Batch(@RequestBody List<${className}> list){
		return  new Response<Integer>(${className?uncap_first}Service.insert${className}Batch(list));
	}
	<#if table.compositeIdColumns?has_content>
	@ApiOperation(value = "根据ID修改${table.remarks}", notes = "根据ID修改${table.remarks}")
	@RequestMapping(value = "/update${className}ById", method = RequestMethod.POST)
	public Response<Integer> update${className}ById(@RequestBody ${className} ${className?uncap_first}){
		return new Response<Integer>(${className?uncap_first}Service.update${className}ById(${className?uncap_first}));
	}
	@ApiOperation(value = "根据ID删除${table.remarks}", notes = "根据ID删除${table.remarks}")
	@RequestMapping(value = "/delete${className}ById", method = RequestMethod.GET)
	public Response<Integer> delete${className}ById(<#list table.compositeIdColumns as column> @RequestParam ${column.javaType} ${column.columnNameLower} <#if column_has_next> , </#if> </#list>){
		return new Response<Integer>(${className?uncap_first}Service.delete${className}ById(<#list table.compositeIdColumns as column>  ${column.columnNameLower} <#if column_has_next> , </#if> </#list>));
	}
	@ApiOperation(value = "根据ID获取${table.remarks}", notes = "根据ID获取${table.remarks}")
	@RequestMapping(value = "/get${className}ById", method = RequestMethod.GET)
	public Response<${className}> get${className}ById(<#list table.compositeIdColumns as column> @RequestParam ${column.javaType} ${column.columnNameLower} <#if column_has_next> , </#if> </#list>){
		return new Response<${className}>(${className?uncap_first}Service.get${className}ById(<#list table.compositeIdColumns as column>  ${column.columnNameLower} <#if column_has_next> , </#if> </#list>));
	}</#if>
 
	@ApiOperation(value = "根据对象获取${table.remarks}", notes = "根据对象获取${table.remarks}")
	@RequestMapping(value = "/get${className}s", method = RequestMethod.POST)
	public  Response<List<${className}>> get${className}s( @RequestBody ${className} ${className?uncap_first}){
		return new Response<List<${className}>>(${className?uncap_first}Service.get${className}s(${className?uncap_first}));

 	}

	@ApiOperation(value = "根据对象分页获取${table.remarks}", notes = "根据对象分页获取${table.remarks}")
	@RequestMapping(value = "/get${className}sForPage", method = RequestMethod.POST)
	public  Response<Page<${className}>> get${className}sForPage(@RequestBody ${className} ${className?uncap_first},
			@RequestParam(value="page", defaultValue="1")  int page,
			@RequestParam(value="pageSize", defaultValue="10") int pageSize){
		Pageable pageable = new PageRequest(page, pageSize);
		Page<${className}> pageDto= ${className?uncap_first}Service.get${className}sForPage(${className?uncap_first},pageable);
		return new Response<Page<${className}>>(pageDto);
 	}
}
