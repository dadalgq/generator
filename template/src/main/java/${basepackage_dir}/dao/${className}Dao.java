<#assign className = table.className>   
<#assign classNameLower = className?uncap_first> 
package ${basepackage}.dao;  
import ${basepackage}.model.${className};
import org.apache.ibatis.annotations.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.maswx.common.mybatis.QueryCondition;

/**
 *  ${className}Dao ${table.remarks}
 *
 * @version : Ver 1.0
 * @date	: ${now?date}
 */
@Repository
public interface ${className}Dao {
	
	int insert${className}(${className} ${className?uncap_first});
	
	int insert${className}Batch(List<${className}> list);
	
	<#if table.compositeIdColumns?has_content>int update${className}ById(${className} ${className?uncap_first});
	
	int delete${className}ById(<#list table.compositeIdColumns as column>@Param("${column.columnNameLower}")  ${column.javaType} ${column.columnNameLower} <#if column_has_next> , </#if> </#list>);
	
 	${className} get${className}ById(<#list table.compositeIdColumns as column>@Param("${column.columnNameLower}")  ${column.javaType} ${column.columnNameLower} <#if column_has_next> , </#if> </#list>);</#if>

 	List<${className}> get${className}s(@Param("${className?uncap_first}")  ${className} ${className?uncap_first});
 	
 	List<${className}> get${className}sByConditions(@Param("conditions") List<QueryCondition> conditions);

}
