package com.maswx.business.user.dao;  
import com.maswx.business.user.model.WxUser;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.maswx.common.mybatis.QueryCondition;

/**
 *  WxUserDao 
 *
 * @version : Ver 1.0
 * @date	: 2018-8-21
 */
@Repository
public interface WxUserDao {
	
	int insertWxUser(WxUser wxUser);
	
	int insertWxUserBatch(List<WxUser> list);
	
	int updateWxUserById(WxUser wxUser);
	
	int deleteWxUserById(@Param("openid")  java.lang.String openid  );
	
 	WxUser getWxUserById(@Param("openid")  java.lang.String openid  );

 	List<WxUser> getWxUsers(@Param("wxUser")  WxUser wxUser);
 	
 	List<WxUser> getWxUsersByConditions(@Param("conditions") List<QueryCondition> conditions);

}
