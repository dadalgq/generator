<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>   
package ${basepackage}.service.impl;  
import ${basepackage}.service.${className}Service;
import ${basepackage}.dao.${className}Dao;
import ${basepackage}.model.${className};
import com.maswx.common.page.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import com.github.pagehelper.PageHelper;

/**
 *  ${className}ServiceImpl
 *
 * @version : Ver 1.0
 * @date	: ${now?date} 
 */
@Service
public class ${className}ServiceImpl  implements ${className}Service { 
	
	@Autowired
	private ${className}Dao ${className?uncap_first}Dao;
	
	public int insert${className}(${className} ${className?uncap_first}){
		return ${className?uncap_first}Dao.insert${className}(${className?uncap_first});
	}
	public int insert${className}Batch(List<${className}> list){
		return ${className?uncap_first}Dao.insert${className}Batch(list);
	}
	<#if table.compositeIdColumns?has_content>public int update${className}ById(${className} ${className?uncap_first}){
		return ${className?uncap_first}Dao.update${className}ById(${className?uncap_first});
	}
	public int delete${className}ById(<#list table.compositeIdColumns as column>  ${column.javaType} ${column.columnNameLower} <#if column_has_next> , </#if> </#list>){
		return ${className?uncap_first}Dao.delete${className}ById(<#list table.compositeIdColumns as column>  ${column.columnNameLower} <#if column_has_next> , </#if> </#list>);
	}
	public ${className} get${className}ById(<#list table.compositeIdColumns as column>  ${column.javaType} ${column.columnNameLower} <#if column_has_next> , </#if> </#list>){
		return ${className?uncap_first}Dao.get${className}ById(<#list table.compositeIdColumns as column>  ${column.columnNameLower} <#if column_has_next> , </#if> </#list>);
	}</#if>
 
 	public List<${className}> get${className}s(${className} ${className?uncap_first}){
		return ${className?uncap_first}Dao.get${className}s(${className?uncap_first});

 	}

 	public Page<${className}> get${className}sForPage(${className} ${className?uncap_first}, Pageable pageable){
 		
 		 long count = ${className?uncap_first}Dao.get${className}s(${className?uncap_first}).size();
			PageHelper.startPage(pageable.getPageNumber(), pageable.getPageSize());
			List<${className}> ${className?uncap_first}s = ${className?uncap_first}Dao.get${className}s(${className?uncap_first});
			 
			Page<${className}> pageDto = new Page<${className}>();
			pageDto.setPage(pageable.getPageNumber());
			pageDto.setPageSize(pageable.getPageSize());
			if (${className?uncap_first}s != null) {
				pageDto.setRows( ${className?uncap_first}s);
				pageDto.setTotal(count);
			} else {
				pageDto.setRows(new ArrayList<${className}>());
				pageDto.setTotal(0l);
			}
			
			return pageDto;
 	}
}
