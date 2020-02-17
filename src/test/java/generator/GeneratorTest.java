package generator;

import basic.framework.generate.code.helper.TemplateHelper;

import java.sql.SQLException;

/**
 * 文件测试类
 *
 * @author panda
 * @date 2019-02-14
 */
public class GeneratorTest {
    @org.junit.Test
    public void readDb() throws SQLException {
        TemplateHelper.build().generateByAllTable("tb_car");
    }
}