package com.entity.view;

import com.entity.DingdanxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 订单信息
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-03-30 14:48:06
 */
@TableName("dingdanxinxi")
public class DingdanxinxiView  extends DingdanxinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DingdanxinxiView(){
	}
 
 	public DingdanxinxiView(DingdanxinxiEntity dingdanxinxiEntity){
 	try {
			BeanUtils.copyProperties(this, dingdanxinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}