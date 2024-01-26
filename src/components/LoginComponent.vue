<template>
  <div class="login-container">
    <h1 class="login-title">用户登录</h1>
    <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="100px">
      <el-form-item label="账号" prop="no">
        <el-col :span="18">
          <el-input v-model="loginForm.no" auto-complete="off" size="small"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-col :span="18">
          <el-input v-model="loginForm.password" type="password" show-password auto-complete="off" size="small" @keyup.enter.native="confirm"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="confirm" :disabled="confirm_disable">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'LoginComponent',
  data() {
    return {
      //确认点击后不可再点
      confirm_disable:false,
      loginForm: {
        no: '',
        password: '',
      },
      rules:{
        no: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      }
    };
  },
  methods: {
    confirm() {
      this.confirm_disable=true,
          console.log(this.$refs.loginForm);
      this.$refs.loginForm.validate((valid)=>{
        if(valid){   //valid为true 登录成功
          this.$axios.post(this.$httpUrl+'/user/login',this.loginForm).then(res=>res.data).then(res=>{
            console.log(res);
            if(res.code==200){
              //存储
              sessionStorage.setItem("CurUser",JSON.stringify(res.data.user))
              console.log(res.data.menu)
              this.$store.commit("setMenu",res.data.menu)
              // this.$message({
              //   message: '登陆成功',
              //   type: 'success'})
              //跳转
              this.$router.replace('/Index');
            }
            else{
              this.confirm_disable=false,
                  alert('你输入的账号或者密码错误')
              return false
            }
          })
        }
        else{
          this.confirm_disable=false,
              console.log('error sumbit!!');
          return false
        }
      })
    },
  },
};
</script>

<style scoped>

.login-container {
  max-width: 500px;
  height: 300px;
  margin: 0 auto;
  padding-top: 50px;
  background-color:skyblue;
  border-radius:15px ;
}
.login-title{
  text-align: center;
  font-size: 35px;
}
</style>