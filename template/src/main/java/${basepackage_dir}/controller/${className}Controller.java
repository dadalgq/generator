<#assign className = table.className>
<#assign classNameLower = className?uncap_first>
package ${basepackage}.controller;

import basic.framework.components.core.dto.PageDto;
import com.lit.guard.bx.req.demo.${className}DTO;
import com.lit.guard.bx.vo.${className}DTO;
import com.lit.guard.constant.GeneralConstant;
import com.lit.guard.record.dto.${className}DTO;
import com.lit.guard.record.service.${className}Service;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * ${table.remarks}接口
 *
 * @author generator
 * @version : Ver 1.0
 * @date	: 2019-07-01
 */
@Api(value = "${className}Controller", tags = {"${table.remarks}接口"}, description = "${table.remarks}接口")
@RequestMapping("/${classNameLower}")
@RestController
public class ${className}Controller {

    @Autowired
    private ${className}Service ${classNameLower}Service;

    @ApiOperation(value = "新增${table.remarks}", notes = "新增${table.remarks}")
    @RequestMapping(value = "/insert${className}", method = RequestMethod.POST)
    public void insert${className}(@RequestBody ${className}DTO ${classNameLower}Dto){
        ${classNameLower}Service.insert${className}(${classNameLower}Dto);
    }

    @ApiOperation(value = "修改${table.remarks}", notes = "修改${table.remarks}")
    @RequestMapping(value = "/update${className}", method = RequestMethod.POST)
    public void update${className}(@RequestBody ${className}DTO ${classNameLower}Dto){
        ${classNameLower}Service.update${className}(${classNameLower}Dto);
    }

    @ApiOperation(value = "删除${table.remarks}", notes = "删除${table.remarks}")
    @RequestMapping(value = "/delete${className}", method = RequestMethod.DELETE)
    public void delete${className}(@ApiParam("编号数组") @RequestParam("bh") String id){
        ${classNameLower}Service.delete${className}(id);
    }

    @ApiOperation("分页查询${table.remarks}")
    @RequestMapping(method = RequestMethod.GET,value = "/get${className}Page")
    public PageDto<${className}DTO> get${className}Page(@ApiParam("分页页码")@RequestParam(required = false,defaultValue= GeneralConstant.PageColumn.SEARCH_PAGE) int page,
                                                       @ApiParam("页面条数")@RequestParam(required = false,defaultValue= GeneralConstant.PageColumn.SEARCH_LIMIT) int limit,
                                                       @ApiParam("排序方式")@RequestParam(required = false,defaultValue= GeneralConstant.PageColumn.SEARCH_ORDER) String order,
                                                       @ApiParam("排序依赖字段")@RequestParam(required = false,defaultValue= GeneralConstant.PageColumn.SEARCH_ORDER_COLUMN) String orderColumn
    ){
        return ${classNameLower}Service.get${className}Page(page,limit,order,orderColumn);
    }

    @ApiOperation("查询${table.remarks}列表")
    @RequestMapping(method = RequestMethod.GET,value = "/get${className}List")
    public List<${className}DTO> get${className}List( ){
        return ${classNameLower}Service.get${className}List();
    }

    @ApiOperation(value = "获取${table.remarks}详情", notes = "获取${table.remarks}详情")
    @RequestMapping(value = "/get${className}Info", method = RequestMethod.GET)
    public ${className}DTO get${className}Info(@ApiParam("编号")@RequestParam("bh") String bh){
        return ${classNameLower}Service.get${className}Info(bh);
    }
}
