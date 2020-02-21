<#assign className = table.className>
<#assign classNameLower = className?uncap_first>
package com.lit.guard.record.service;

import basic.framework.components.core.dto.PageDto;
import ${basepackage}.dto.${className}DTO;
import java.util.List;

/**
 *   ${table.remarks}服务接口类
 *
 * @author generator
 * @version : Ver 1.0
 * @date	: 2019-7-1
 */
public interface ${className}Service {

    /**
     *  新增${table.remarks}
     * @param ${classNameLower}DTO ${table.remarks}传输对象
     */
    void insert${className}(${className}DTO ${classNameLower}DTO);

    /**
     *  修改${table.remarks}
     * @param ${classNameLower}DTO ${table.remarks}传输对象
     */
    void update${className}(${className}DTO ${classNameLower}DTO);

    /**
     *  删除${table.remarks}
     * @param id ${table.remarks} id
     */
    void delete${className}(Long id);

    /**
     *  分页查询
     * @param page 页码
     * @param limit 页面显示条数
     * @param order 排序
     * @param orderColumn 排序字段
     * @return ${table.remarks}数据
     */
    PageDto<${className}DTO> get${className}Page(int page, int limit, String order, String orderColumn);

    /**
     *  获取${table.remarks}详情
     * @param id ${table.remarks} id
     * @return ${table.remarks}详情
     */
    ${className}DTO get${className}Info(Long id);

    /**
     *  获取${table.remarks}列表
     * @return
     */
    List<${className}DTO> get${className}List();
}
