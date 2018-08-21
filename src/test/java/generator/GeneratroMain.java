/*
 * Beijing happy Information Technology Co,Ltd.
 * All rights reserved.
 * 
 * <p>GeneratroMain.java</p>
 */
package generator;

import com.appc.mybatis.generator.GeneratorFacade;

/**
 * 运行main方法生成dao,service,model
 *
 * @version : Ver 1.0
 * @author : panda
 * @date : 2015年5月31日 下午3:13:02
 */
public class GeneratroMain {

	private final static GeneratorFacade g = new GeneratorFacade();

	/**
	 * 按表名生成dao,service,model
	 *
	 * @author : panda 2015年5月31日 下午3:19:17
	 * @param tabaleNames
	 *            表名数组
	 * @throws Exception
	 */
	public static void generateByTable(String... tabaleNames) throws Exception {
		if (null != tabaleNames && tabaleNames.length > 0) {
			for (String tbname : tabaleNames) {
				g.generateByTable(tbname, "template");
			}
		}
	}

	/**
	 * 生成所有表对应的dao,service,model
	 *
	 * @author : panda 2015年5月31日 下午3:19:40
	 * @throws Exception
	 */
	public static void generateByAllTable() throws Exception {
		g.generateByAllTable("template"); // 生成所有表
	}

	public static void main(String[] args) throws Exception {
		System.setProperty("gg.isOverride", "true");
		{
//			g.setBasepackage("com.appc.insurance");
//			g.setBasepackage("com.lit.border");
//			g.setBasepackage("com.mxg.bybo");
			// g.setXmlpackage("sys");
//			g.setBasepackage("com.appc.tb");
			g.setBasepackage("com.maswx.business.user");

//			String[] table_names = new String[]{"hd_activity","hd_approval","hd_department","hd_files","hd_leave","hd_operation","hd_rel_users","hd_travel","hd_user"};
//			String[] table_names = new String[]{"hd_cost_detail","hd_cost_type","hd_project","hd_reimburse","hd_schedule","hd_share_user"};
			
//			String[] table_names = new String[]{"hd_statistics","hd_statistics_user","hd_statistics_dept"};
			String[] table_names = new String[]{"wx_user"};
			generateByTable(table_names); // 按表名生成
//			 generateByAllTable();
		}

	

	}
}
