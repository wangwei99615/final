<template>
  <div class='container'>
    <el-container class="home-container">
      <el-aside width="200px">
        <!-- logo -->
        <div class="HeadLogo">
        </div>
        <!-- 导航菜单 -->
      </el-aside>
      <el-container>
        <el-header>
          <!-- 图标 -->
          <span class="el-icon-s-fold"></span>
          <!-- 文本 -->
          <span class="text">江苏传智播客科技教育有限公司</span>
          <!-- 下拉菜单 -->
          <el-dropdown>
            <span class="el-dropdown-link">
              <img class="HeadIcon" src="../../assets/avatar.jpg" alt="">
              <span class="UserName">八个雅鹿</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
              <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
.home-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .el-aside {
    background-color: #002033;
    .HeadLogo {
      width: 100%;
      height: 60px;
      background: #002244 url(../../assets/logo_admin.png) no-repeat center /
        140px auto;
    }
  }
  .el-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .el-icon-s-fold {
      font-size: 30px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      margin-left: 10px;
    }
    .el-dropdown {
      float: right;
      .HeadIcon {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .UserName {
        font-weight: bold;
        margin-left: 5px;
        vertical-align: middle;
      }
    }
  }
}
</style>
