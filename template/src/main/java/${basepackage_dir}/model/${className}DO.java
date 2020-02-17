<#assign className = table.className>
<#assign classNameLower = className?uncap_first> 
package ${basepackage}.model;

import basic.framework.components.mybatis.annotation.Query;
import basic.framework.components.mybatis.annotation.Where;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.lang.Long;
import java.lang.String;

/**
 *  ${table.remarks}实体类
 *
 * @author generator
 * @version : Ver 1.0
 * @date	: ${now?date}
 */
@Entity
@Query
@Table(name = "${table.sqlName}")
public class ${className}DO  implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = ${uid}L;
	
	<#list table.columns as column>
	/**
     *  ${column.remarks}    
     */
	<#if column.pk>
	@Id
	</#if>
	@Where
	private ${column.javaType} ${column.columnNameLower};
	
	</#list>
	 
	<@generateJavaColumns/>
}
<#macro generateJavaColumns>
	<#list table.columns as column>
	
	/**
	 * @param ${column.columnNameLower}  ${column.remarks}
	 */
	public void set${column.columnName}(${column.javaType} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
	
	/**
	 * @return ${column.remarks}
	 */
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