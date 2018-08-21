package com.maswx.business.user.service;
import org.springframework.data.domain.Pageable;
import com.maswx.business.user.model.WxUser;
import java.util.List;
import com.maswx.common.page.Page;

/**
 *  WxUserService
 *
 * @version : Ver 1.0
 * @date	: 2018-8-21 
 */
public interface WxUserService {
	
	int insertWxUser(WxUser wxUser);
	
	int insertWxUserBatch(List<WxUser> list);
	
	int updateWxUserById(WxUser wxUser);
	
	int deleteWxUserById(java.lang.String openid);
	
 	WxUser getWxUserById(java.lang.String openid);
 
 	List<WxUser> getWxUsers(WxUser wxUser);

 	Page<WxUser> getWxUsersForPage(WxUser wxUser, Pageable pageable);
}
