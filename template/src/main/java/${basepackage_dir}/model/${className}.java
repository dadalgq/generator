<#include "/macro.include"/> 
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first> 
package ${basepackage}.model;

import java.io.Serializable;

import io.swagger.annotations.ApiModelProperty;
/**
 *  ${className}
 *
 * @version : Ver 1.0
 * @date	: ${now?date}
 */
public class ${className}  implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	<#list table.columns as column>
	/**
     * ${column.remarks}     
     */	
	private ${column.javaType} ${column.columnNameLower};
	
	</#list>
	 
	<@generateJavaColumns/>
}
<#macro generateJavaColumns>
	<#list table.columns as column>
	
	/**
	 * @param ${column.columnNameLower} ${column.remarks}
	 */
	@ApiModelProperty("${column.remarks}")
	public void set${column.columnName}(${column.javaType} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
	
	/**
	 * @return ${column.remarks}
	 */
	@ApiModelProperty("${column.remarks}")
	public ${column.javaType} get${column.columnName}() {
		return this.${column.columnNameLower};
	}
	<#if column.isDateTimeColumn>
	 
	</#if>
	</#list>
</#macro>
<#macro generateJavaOneToMany>
	<#list table.exportedKeys.associatedTables?values as foreignKey>
	<#assign fkSqlTable = foreignKey.sqlTable>
	<#assign fkTable    = fkSqlTable.className>
	<#assign fkPojoClass = fkSqlTable.className>
	<#assign fkPojoClassVar = fkPojoClass?uncap_first>
	
	private Set ${fkPojoClassVar}s = new HashSet(0);
	public void set${fkPojoClass}s(Set<${fkPojoClass}> ${fkPojoClassVar}){
		this.${fkPojoClassVar}s = ${fkPojoClassVar};
	}
	
	public Set<${fkPojoClass}> get${fkPojoClass}s() {
		return ${fkPojoClassVar}s;
	}
	</#list>
</#macro>
<#macro generateJavaManyToOne>
	<#list table.importedKeys.associatedTables?values as foreignKey>
	<#assign fkSqlTable = foreignKey.sqlTable>
	<#assign fkTable    = fkSqlTable.className>
	<#assign fkPojoClass = fkSqlTable.className>
	<#assign fkPojoClassVar = fkPojoClass?uncap_first>
	
	private ${fkPojoClass} ${fkPojoClassVar};
	
	public void set${fkPojoClass}(${fkPojoClass} ${fkPojoClassVar}){
		this.${fkPojoClassVar} = ${fkPojoClassVar};
	}
	
	public ${fkPojoClass} get${fkPojoClass}() {
		return ${fkPojoClassVar};
	}
	</#list>
</#macro>