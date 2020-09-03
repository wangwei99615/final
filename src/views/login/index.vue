<template>
  <!-- 全屏容器 -->
  <div class='container'>
    <!-- 卡片容器 -->
    <el-card>
      <img src="../../assets/logo_index.png" alt="">
      <!-- 表单容器 -->
      <el-form ref="LoginForm" :model="LoginData" :rules="LoginRules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="LoginData.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="LoginData.code" placeholder="请输入验证码" style="width:240px;margin-right:8px"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value='true'>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="LoginUp" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const MobileId = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不正确'))
      }
    }
    return {
      LoginData: {
        mobile: '',
        code: ''
      },
      LoginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: MobileId, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //   登录绑定点击事件，点击上传form表单进行整体校验
    LoginUp () {
      //   console.log(this.$refs)
      //   获取整个表单
      this.$refs.LoginForm.validate((valid) => {
        if (valid) {
          // 获取到表单信息
          //   上传数据，成功 .then 失败 .catch
          this.$http.post('authorizations', this.LoginData).then(res => {
            //   上传数据成功之后跳转到首页
            this.$router.push('/')
          }).catch(() => {
            //   上传数据失败后的提示
            this.$message.error('手机号或验证码错误')
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // 不重复 居中/等比例缩放
  background: url(../../assets/login_bg.jpg) no-repeat center/cover;

  .el-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    img {
      width: 200px;
      display: block;
      margin: 0 auto 30px;
    }
  }
}
</style>
