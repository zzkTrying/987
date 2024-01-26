<template>
  <el-descriptions class="margin-top" :title="'欢迎你,'+user.name" :column="3" :size="'40'" border>
    <template slot="extra">
      <el-button type="primary" size="small">操作</el-button>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        账号
      </template>
      {{user.no}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        电话
      </template>
      {{user.phone}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user-solid"></i>
        年龄
      </template>
      {{user.age}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        性别
      </template>
      <el-tag :type="user.sex === 1? 'primary' : 'success'" disable-transitions><i>{{user.sex===1?'男':'女'}}</i>
      </el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        角色
      </template>
      <el-tag :type="user.roleId === 0?'danger':(user.roleId === 0?'primary' : 'success')"
              disable-transitions>{{user.roleId===0?'超级管理员':(user.roleId === 1?'管理员' : '普通用户')}}
      </el-tag>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  name:'HomeComponent',
  data() {
    return {
      user:JSON.parse(sessionStorage.getItem('CurUser')),
    };
  },
  methods: {
  },


}
</script>