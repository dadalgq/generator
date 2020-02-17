package com.lit.guard;

/**
 * 系统通用常量类
 *
 * @author wangJiaLun
 * @date 2019-06-25
 **/
public interface GeneralConstant {

    /**
     *  查询及分页参数
     */
    interface PageColumn{

        /**
         * 默认检索页参数
         */
        String SEARCH_PAGE = "1";

        /**
         * 默认检索记录条数参数
         */
        String SEARCH_LIMIT = "10";

        /**
         *  默认检索记录排序 方式
         */
        String SEARCH_ORDER="desc";
        /**
         *  默认检索记录排序 方式
         */
        String SEARCH_ASC="asc";

        /**
         *  默认检索记录排序 依赖字段
         */
        String SEARCH_ORDER_COLUMN="CJ_SJ";
    }
}
