<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>   
package ${basepackage}.service;
import org.springframework.data.domain.Pageable;
import ${basepackage}.model.${className};
import java.util.List;
import com.maswx.common.page.Page;

/**
 *  ${className}Service
 *
 * @version : Ver 1.0
 * @date	: ${now?date} 
 */
public interface ${className}Service {
	
	int insert${className}(${className} ${className?uncap_first});
	
	int insert${className}Batch(List<${className}> list);
	
	<#if table.compositeIdColumns?has_content>int update${className}ById(${className} ${className?uncap_first});
	
	int delete${className}ById(<#list table.compositeIdColumns as column>${column.javaType} ${column.columnNameLower}<#if column_has_next>, </#if></#list>);
	
 	${className} get${className}ById(<#list table.compositeIdColumns as column>${column.javaType} ${column.columnNameLower}<#if column_has_next>, </#if></#list>);</#if>
 
 	List<${className}> get${className}s(${className} ${className?uncap_first});

 	Page<${className}> get${className}sForPage(${className} ${className?uncap_first}, Pageable pageable);
}
