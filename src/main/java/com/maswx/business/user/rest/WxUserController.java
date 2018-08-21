package com.maswx.business.user.rest;  
import com.maswx.business.user.service.WxUserService;
import com.maswx.business.user.model.WxUser;
import basic.common.core.dto.PageDto;
import basic.common.core.id.IdUtil;

import com.maswx.common.page.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import com.maswx.common.response.Response;
import com.google.common.collect.Lists;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *  WxUserController
 *
 * @version : Ver 1.0
 * @date	: 2018-8-21
 */
@RestController
@Api(value = "WxUserController", description = "相关")
@RequestMapping(value = "/wxapi/wxUser")
public class WxUserController { 
	
	   @InitBinder   
	    public void initBinder(WebDataBinder binder) {   
	        DateFormat dateFormat =new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");   
	        dateFormat.setLenient(true);   
	        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));   
	    }  
	
	@Autowired
	private WxUserService wxUserService;
	
	@ApiOperation(value = "新增", notes = "新增")
	@RequestMapping(value = "/insertWxUser", method = RequestMethod.POST)
	public Response<Integer> insertWxUser(@RequestBody WxUser wxUser){
		
    	
		return new Response<Integer>(wxUserService.insertWxUser(wxUser));
	}
	@ApiOperation(value = "批量新增", notes = "批量新增")
	@RequestMapping(value = "/insertWxUserBatch", method = RequestMethod.POST)
	public Response<Integer> insertWxUserBatch(@RequestBody List<WxUser> list){
		return  new Response<Integer>(wxUserService.insertWxUserBatch(list));
	}
	@ApiOperation(value = "根据ID修改", notes = "根据ID修改")
	@RequestMapping(value = "/updateWxUserById", method = RequestMethod.POST)
	public Response<Integer> updateWxUserById(@RequestBody WxUser wxUser){
		return new Response<Integer>(wxUserService.updateWxUserById(wxUser));
	}
	@ApiOperation(value = "根据ID删除", notes = "根据ID删除")
	@RequestMapping(value = "/deleteWxUserById", method = RequestMethod.GET)
	public Response<Integer> deleteWxUserById( @RequestParam java.lang.String openid  ){
		return new Response<Integer>(wxUserService.deleteWxUserById(  openid  ));
	}
	@ApiOperation(value = "根据ID获取", notes = "根据ID获取")
	@RequestMapping(value = "/getWxUserById", method = RequestMethod.GET)
	public Response<WxUser> getWxUserById( @RequestParam java.lang.String openid  ){
		return new Response<WxUser>(wxUserService.getWxUserById(  openid  ));
	}
 
	@ApiOperation(value = "根据对象获取", notes = "根据对象获取")
	@RequestMapping(value = "/getWxUsers", method = RequestMethod.POST)
	public  Response<List<WxUser>> getWxUsers( @RequestBody WxUser wxUser){
		return new Response<List<WxUser>>(wxUserService.getWxUsers(wxUser));

 	}

	@ApiOperation(value = "根据对象分页获取", notes = "根据对象分页获取")
	@RequestMapping(value = "/getWxUsersForPage", method = RequestMethod.POST)
	public  Response<Page<WxUser>> getWxUsersForPage(@RequestBody WxUser wxUser,
			@RequestParam(value="page", defaultValue="1")  int page,
			@RequestParam(value="pageSize", defaultValue="10") int pageSize){
		Pageable pageable = new PageRequest(page, pageSize);
		Page<WxUser> pageDto= wxUserService.getWxUsersForPage(wxUser,pageable);
		return new Response<Page<WxUser>>(pageDto);
 	}
}
