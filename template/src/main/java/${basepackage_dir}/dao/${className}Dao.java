package ${basepackage}.dao;

import basic.framework.components.mybatis.dao.BasicCrudDao;
import ${basepackage}.model.${className}DO;
import ${basepackage}.dto.${className}DTO;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

/**
 *  ${table.remarks}表数据库操作类
 *
 * @author generator
 * @version : Ver 1.0
 * @date	: 2019-7-1
 */
@Repository
public interface ${className}Dao extends BasicCrudDao<${className}DO>{

    /**
     *  分页查询${table.remarks}数据
     * @param pageable 分页对象
     * @return ${table.remarks}数据
     */
    Page<${className}DO> get${className}Page(Pageable pageable);

    /**
     *  查询${table.remarks}列表
     * @return
     */
    List<${className}DTO> get${className}List();

}
