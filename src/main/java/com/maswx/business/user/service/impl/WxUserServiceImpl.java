package com.maswx.business.user.service.impl;  
import com.maswx.business.user.service.WxUserService;
import com.maswx.business.user.dao.WxUserDao;
import com.maswx.business.user.model.WxUser;
import com.maswx.common.page.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import com.github.pagehelper.PageHelper;

/**
 *  WxUserServiceImpl
 *
 * @version : Ver 1.0
 * @date	: 2018-8-21 
 */
@Service
public class WxUserServiceImpl  implements WxUserService { 
	
	@Autowired
	private WxUserDao wxUserDao;
	
	public int insertWxUser(WxUser wxUser){
		return wxUserDao.insertWxUser(wxUser);
	}
	public int insertWxUserBatch(List<WxUser> list){
		return wxUserDao.insertWxUserBatch(list);
	}
	public int updateWxUserById(WxUser wxUser){
		return wxUserDao.updateWxUserById(wxUser);
	}
	public int deleteWxUserById(  java.lang.String openid  ){
		return wxUserDao.deleteWxUserById(  openid  );
	}
	public WxUser getWxUserById(  java.lang.String openid  ){
		return wxUserDao.getWxUserById(  openid  );
	}
 
 	public List<WxUser> getWxUsers(WxUser wxUser){
		return wxUserDao.getWxUsers(wxUser);

 	}

 	public Page<WxUser> getWxUsersForPage(WxUser wxUser, Pageable pageable){
 		
 		 long count = wxUserDao.getWxUsers(wxUser).size();
			PageHelper.startPage(pageable.getPageNumber(), pageable.getPageSize());
			List<WxUser> wxUsers = wxUserDao.getWxUsers(wxUser);
			 
			Page<WxUser> pageDto = new Page<WxUser>();
			pageDto.setPage(pageable.getPageNumber());
			pageDto.setPageSize(pageable.getPageSize());
			if (wxUsers != null) {
				pageDto.setRows( wxUsers);
				pageDto.setTotal(count);
			} else {
				pageDto.setRows(new ArrayList<WxUser>());
				pageDto.setTotal(0l);
			}
			
			return pageDto;
 	}
}
