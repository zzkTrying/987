package com.wms.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;

import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.annotations.ApiModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author zzk
 * @since 2024-01-05
 */
@Data
@EqualsAndHashCode(callSuper = false)
@ApiModel(value="User对象", description="")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(type = IdType.AUTO)
    private Integer id;

    private String no;

    private String name;

    private String password;

    private Integer age;

    private Integer sex;

    private String phone;

    private Integer roleId;

    @TableField("isValid")
    private String isvalid;

//    @ApiModelProperty(value = "获取用户名")
//    public CharSequence getName() {
//        return name;
//    }



}
