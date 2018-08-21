/*package generator;

import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import park.system.model.Menu;
import park.system.service.MenuService;

import com.alibaba.fastjson.JSON;

@RunWith(SpringJUnit4ClassRunner.class)
@ActiveProfiles("dev")
@ContextConfiguration(locations = "classpath*:/META-INF/spring/*.xml")
public class MenuServiceTest {
	Logger log = Logger.getLogger(MenuServiceTest.class);
	@Autowired
	private MenuService menuService;

	@Test
	public void test() {

		Menu menu = new Menu();
		menu.setMenuId("14021431556515891786");
		menu.setMenuName("首页");

		List<Menu> menus = menuService.getMenus(menu);
		Pageable page = new PageRequest(0, 20);
		Page<Menu> menus2 = menuService.getMenusForPage(menu, page);
		log.info(JSON.toJSON(menus));
		log.info(JSON.toJSON(menus2));
	}

}
*/