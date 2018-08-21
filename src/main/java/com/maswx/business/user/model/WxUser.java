package com.maswx.business.user.model;

import java.io.Serializable;

import io.swagger.annotations.ApiModelProperty;
/**
 *  WxUser
 *
 * @version : Ver 1.0
 * @date	: 2018-8-21
 */
public class WxUser  implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
     * 微信openid     
     */	
	private java.lang.String openid;
	
	/**
     * 身份证号码     
     */	
	private java.lang.String idcard;
	
	/**
     * 手机号码     
     */	
	private java.lang.String phone;
	
	/**
     * 性别     
     */	
	private java.lang.String sex;
	
	/**
     * 用户类型 0：普通用户 1：注册用户 2：实名认证用户     
     */	
	private java.lang.Integer userType;
	
	/**
     * 平台类型 0：公众号 1：企业号 2：小程序     
     */	
	private java.lang.Integer platformType;
	
	/**
     * 创建时间     
     */	
	private java.lang.String createTime;
	
	 
	
	/**
	 * @param openid 微信openid
	 */
	@ApiModelProperty("微信openid")
	public void setOpenid(java.lang.String openid) {
		this.openid = openid;
	}
	
	/**
	 * @return 微信openid
	 */
	@ApiModelProperty("微信openid")
	public java.lang.String getOpenid() {
		return this.openid;
	}
	
	/**
	 * @param idcard 身份证号码
	 */
	@ApiModelProperty("身份证号码")
	public void setIdcard(java.lang.String idcard) {
		this.idcard = idcard;
	}
	
	/**
	 * @return 身份证号码
	 */
	@ApiModelProperty("身份证号码")
	public java.lang.String getIdcard() {
		return this.idcard;
	}
	
	/**
	 * @param phone 手机号码
	 */
	@ApiModelProperty("手机号码")
	public void setPhone(java.lang.String phone) {
		this.phone = phone;
	}
	
	/**
	 * @return 手机号码
	 */
	@ApiModelProperty("手机号码")
	public java.lang.String getPhone() {
		return this.phone;
	}
	
	/**
	 * @param sex 性别
	 */
	@ApiModelProperty("性别")
	public void setSex(java.lang.String sex) {
		this.sex = sex;
	}
	
	/**
	 * @return 性别
	 */
	@ApiModelProperty("性别")
	public java.lang.String getSex() {
		return this.sex;
	}
	
	/**
	 * @param userType 用户类型 0：普通用户 1：注册用户 2：实名认证用户
	 */
	@ApiModelProperty("用户类型 0：普通用户 1：注册用户 2：实名认证用户")
	public void setUserType(java.lang.Integer userType) {
		this.userType = userType;
	}
	
	/**
	 * @return 用户类型 0：普通用户 1：注册用户 2：实名认证用户
	 */
	@ApiModelProperty("用户类型 0：普通用户 1：注册用户 2：实名认证用户")
	public java.lang.Integer getUserType() {
		return this.userType;
	}
	
	/**
	 * @param platformType 平台类型 0：公众号 1：企业号 2：小程序
	 */
	@ApiModelProperty("平台类型 0：公众号 1：企业号 2：小程序")
	public void setPlatformType(java.lang.Integer platformType) {
		this.platformType = platformType;
	}
	
	/**
	 * @return 平台类型 0：公众号 1：企业号 2：小程序
	 */
	@ApiModelProperty("平台类型 0：公众号 1：企业号 2：小程序")
	public java.lang.Integer getPlatformType() {
		return this.platformType;
	}
	
	/**
	 * @param createTime 创建时间
	 */
	@ApiModelProperty("创建时间")
	public void setCreateTime(java.lang.String createTime) {
		this.createTime = createTime;
	}
	
	/**
	 * @return 创建时间
	 */
	@ApiModelProperty("创建时间")
	public java.lang.String getCreateTime() {
		return this.createTime;
	}
}
