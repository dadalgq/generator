<#assign className = table.className>
<#assign classNameLower = className?uncap_first>
package ${basepackage}.service.impl;

import basic.framework.components.core.dto.PageDto;
import basic.framework.components.core.exception.BaseException;
import basic.framework.components.core.utils.ObjectConverter;
import basic.framework.components.core.utils.Pages;
import basic.framework.components.core.utils.id.IdUtil;
import ${basepackage}.dao.${className}Dao;
import ${basepackage}.dto.${className}DTO;
import ${basepackage}.model.${className}DO;
import ${basepackage}.service.${className}Service;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 *  ${table.remarks}服务实现类
 *
 * @author generator
 * @version : Ver 1.0
 * @date	: 2019-7-1 
 */
@Service
public class ${className}ServiceImpl implements ${className}Service {

    @Autowired
    private ${className}Dao ${classNameLower}Dao;

    /**
     * 新增${table.remarks}
     *
     * @param ${classNameLower}DTO ${table.remarks}传输对象
     */
    @Override
    public void insert${className}(${className}DTO ${classNameLower}DTO) {
        ${className}DO ${classNameLower}DO = new ${className}DO();
        BeanUtils.copyProperties(${classNameLower}DTO, ${classNameLower}DO);
        ${classNameLower}DO.setId(IdUtil.getId());
        ${classNameLower}Dao.insert(${classNameLower}DO);
    }

    /**
     * 修改${table.remarks}
     *
     * @param ${classNameLower}DTO ${table.remarks}传输对象
     */
    @Override
    public void update${className}(${className}DTO ${classNameLower}DTO) {
        ${className}DO ${classNameLower}DO = new ${className}DO();
        BeanUtils.copyProperties(${classNameLower}DTO, ${classNameLower}DO);
        ${classNameLower}Dao.updateById(${classNameLower}DO);
    }

    /**
     * 删除${table.remarks}
     *
     * @param id ${table.remarks} id
     */
    @Override
    public void delete${className}(Long id) {
        ${classNameLower}Dao.deleteById(id);
    }

    /**
     * 分页查询
     *
     * @param page        页码
     * @param limit       页面显示条数
     * @param order       排序
     * @param orderColumn 排序字段
     * @return ${table.remarks}数据
     */
    @Override
    public PageDto<${className}DTO> get${className}Page(int page, int limit, String order, String orderColumn) {
        Sort sort = new Sort(Sort.Direction.fromStringOrNull(order),orderColumn);
        Pageable pageable = new PageRequest(page-1,limit, sort);

        PageDto<${className}DO> ${classNameLower}DoList = Pages.loadPage(
                ${classNameLower}Dao.get${className}Page(pageable));
        return Pages.loadNewPageDto(${classNameLower}DoList,
                (ObjectConverter<${className}DO, ${className}DTO>) dto ->{
                    ${className}DTO ${classNameLower}DTO = new ${className}DTO();
                    BeanUtils.copyProperties(dto,${classNameLower}DTO);
                    return ${classNameLower}DTO;
                });
    }

    /**
     * 获取${table.remarks}详情
     *
     * @param id ${table.remarks} id
     * @return ${table.remarks}详情
     */
    @Override
    public ${className}DTO get${className}Info(Long id) {
        ${className}DTO ${classNameLower}DTO = new ${className}DTO();
        BeanUtils.copyProperties(${classNameLower}Dao.getById(id), ${classNameLower}DTO);
        return ${classNameLower}DTO;
    }

    /**
     *  获取${table.remarks}列表
     * @return ${table.remarks}列表
     */
    @Override
    public List<${className}DTO> get${className}List() {
        return ${classNameLower}Dao.get${className}List();
    }
}
