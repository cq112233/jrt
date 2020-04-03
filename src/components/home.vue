<template>
  <div class="wrapper">
    <!-- 用户登入列表，个人 商店 注册 -->
    <nav class="navbar navbar-default">
      <div class="userLoginList banxin">
        <!-- 点击登入跳转到登入组件 -->
        <router-link to="login" class="userLoginList-item">个人登录</router-link>
        <span>|</span>
        <router-link to="home/userLogin" class="userLoginList-item">商店登录</router-link>
        <span>|</span>
        <router-link to="home/userLogin" class="userLoginList-item">注册</router-link>
      </div>
    </nav>
    <!-- 导航区 -->
    <nav class="navbar navbar-default">
      <div class="login banxin">
        <!-- 商标 -->
        <div>
          <router-link to="home">
            <img src="../assets/images/JRTLOGO.png" alt />
          </router-link>
        </div>
        <!-- 企业信息 -->
        <div class="mainNav">
          <router-link to="home/boss" class="mainNav-item">首页</router-link>
          <router-link to="home/boss" class="mainNav-item">下载中心</router-link>
          <router-link to="home/boss" class="mainNav-item">商家服务</router-link>
          <router-link to="home/boss" class="mainNav-item">web微信</router-link>
          <router-link to="home/boss" class="mainNav-item">中期移动</router-link>
          <router-link to="home/boss" class="mainNav-item">关于我们</router-link>
        </div>
      </div>
    </nav>
    <!-- 内容区 -->
    <div class="banner">
      <div class="banxin">
        <div class="banner-left">
          <div class="banner-left-item">
            <p>移动通讯</p>
            <ul>
              <li>
                <router-link to="/" class="tc">缴费充值</router-link>
              </li>
              <li>
                <router-link to="/" class="tc">剩余额度</router-link>
              </li>
              <li>
                <router-link to="/" class="tc">套餐余量</router-link>
              </li>
              <li>
                <router-link to="/" class="tc">选号入网</router-link>
              </li>
            </ul>
          </div>
          <div class="banner-left-item">
            <p>用户服务</p>
            <ul>
              <li>
                <router-link to="/" class="tc">钱包充值</router-link>
              </li>
              <li>
                <router-link to="/" class="tc">金币充值</router-link>
              </li>
              <li>
                <router-link to="/" class="tc">移动办公</router-link>
              </li>
              <li>
                <router-link to="/" class="tc">红包</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司战略链接 -->
    <div class="panel-body bossLink">
      <router-link to="#">
        <img src="../assets/images/zllj.png" alt />
      </router-link>
      <router-link to="#">网上中期</router-link>
      <span>|</span>
      <router-link to="#">都市宽频</router-link>
      <span>|</span>
      <router-link to="#">中期移动</router-link>
    </div>
    <!-- 公司介绍,公司动态 -->
    <div class="bossContent banxin">
      <el-card class="box-card card1">
        <div slot="header" class="clearfix">
          <h3>公司介绍</h3>
          <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
        </div>
        <div class="text item">中期移动通信股份有限公司是拥有工信部批准并获颁发移动转售业务经营许可证的虚拟移动运营商，与中国国际期货股份有限公司</div>
      </el-card>
      <el-card class="box-card card2">
        <div slot="header" class="clearfix">
          <h3>公司动态</h3>
          <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
        </div>
        <div class="text item">
          <p class="content">中期移动通信股份有限公司是拥有工信部</p>
          <p class="date">2020-4-3</p>
        </div>
        <div class="text item">
          <p class="content">中期移动通信股份有限公司是拥有工信部</p>
          <p class="date">2020-4-3</p>
        </div>
        <div class="text item">
          <p class="content">中期移动通信股份有限公司是拥有工信部</p>
          <p class="date">2020-4-3</p>
        </div>
      </el-card>
    </div>
    <!-- 提示图片 -->
    <div class="tipsImg banxin"></div>
    <!-- 新闻行业 安全保障 二维码 -->
    <div class="banxin newsSafe">
      <!-- 新闻行业 -->
      <el-card class="box-card news">
        <div slot="header" class="clearfix">
          <h3>新闻行业</h3>
          <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
        </div>
        <div class="text item">中期移动通信股份有限公司是拥有工信部批准并获颁发移动转售业务经营许可证的虚拟移动运营商，与中国国际期货股份有限公司</div>
      </el-card>
      <!-- 安全 -->
      <el-card class="box-card safe">
        <h3>安全保障</h3>
        <ul>
          <li>
            <img src="../assets/images/ZHAQ.png" alt />账户安全
          </li>
          <li>
            <img src="../assets/images/JJAQ.png" alt />交易安全
          </li>
          <li>
            <img src="../assets/images/DXYZ.png" alt />短信验证
          </li>
          <li>
            <img src="../assets/images/KHYS.png" alt />客户隐私
          </li>
          <li>
            <img src="../assets/images/NRAQ.png" alt />内容安全
          </li>
          <li>
            <img src="../assets/images/SMRZ.png" alt />实名认证
          </li>
        </ul>
      </el-card>
      <img src="../assets/images/RWM.jpg" alt title="二维码" class="rwm" />
    </div>
    <!-- 公司底部信息栏 -->
    <div class="panel-body bossIfon">
      <p>中期移动通信股份有限公司</p>
      <p>Copyright © 2014-2020 CIFCO Information Technology Co., Ltd. All rights reserved</p>
      <p>服务热线：10031 [京ICP备15048514号-1]</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
@borderColor: #777777;
// 根元素
.wrapper {
  height: 100%;
}
// 版心
.banxin {
  width: 1200px;
  margin: 0 auto;
}
// 登入注册
.navbar {
  background-color: #202326;
  min-height: 30px !important;
  margin-bottom: 0;
  border-radius: 0;
  border: 0;
  .userLoginList {
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      width: 1px;
      height: 10px;
      background-color: #b1b2b3;
    }
    .userLoginList-item {
      color: #b1b2b3;
      text-decoration: none;
      padding: 0 20px;
      font-size: 14px;
      &:hover {
        color: #fff;
      }
    }
  }
}
// 导航栏
.login {
  height: 104px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  img {
    width: 190px;
    height: 76.05px;
    margin-bottom: 10px;
  }
  .mainNav {
    height: 84px;
    display: flex;
    align-items: center;
    .mainNav-item {
      width: 116px;
      height: 84px;
      line-height: 64px;
      text-align: center;
      font-size: 20px;
      color: #fff;
      text-decoration: none;
      padding-bottom: 20px;
      &:first-child {
        font-size: 24px;
        color: red;
        border-bottom: 5px solid red;
      }
      &:hover {
        color: #f23030;
      }
    }
  }
}
// 内容区
.banner {
  height: 560px;
  background: url("../assets/images/backgroundimg.png") no-repeat;
  background-position: center top;
  .banner-left {
    width: 300px;
    height: 560px;
    padding: 15px 40px;
    background-color: #1c0639;
    .banner-left-item {
      width: 220px;
      & > p {
        line-height: 50px;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
      }
      ul {
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          height: 30px;
          width: 100px;
          color: #fff;
          .tc {
            text-decoration: none;
            color: #fff;
            transition: font-size 0.1s;
            &:hover {
              color: red;
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
//公司简介区域
.bossLink {
  width: 860px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &::before {
    content: none;
  }
  span {
    color: #b1b2b3;
  }
  img {
    margin-right: 20px;
  }
  a {
    font-size: 20px;
    text-decoration: none;
    color: #3b2341;
    &:hover {
      color: #777777;
    }
  }
}
// 公司介绍 动态卡片 基于element ui
.bossContent {
  display: flex;
  justify-content: space-between;
  .card1 {
    box-shadow: 0 1px 1px 0 #777777;
    padding: 20px;
    width: 695px;
    height: 262px;
    h3 {
      display: inline-block;
      margin: 0;
      padding: 0;
    }
    .text {
      text-indent: 2em;
      font-size: 14px;
      line-height: 25px;
    }
  }
  .card2 {
    box-shadow: 0 1px 1px 0 @borderColor;
    padding: 20px;
    width: 465px;
    height: 262px;
    h3 {
      display: inline-block;
      margin: 0;
      padding: 0;
    }
    .text {
      font-size: 14px;
      border-bottom: 1px solid @borderColor;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        margin: 0;
        line-height: 40px;
      }
      .content {
        width: 320px;
        height: 40px;
      }
      .date {
        width: 100px;
        height: 40px;
      }
    }
  }
}
//提示图片
.tipsImg {
  margin-top: 25px;
  background: url("../assets/images/20191211140937.png");
  height: 250px;
}
// 新闻行业 安全保障 二维码
.newsSafe {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 15px;
  //   新闻行业
  .news {
    box-shadow: 0 1px 1px 0 #777777;
    padding: 20px;
    width: 404px;
    height: 356px;
    .clearfix {
      width: 362px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &::after {
        content: none;
      }
      &::before {
        content: none;
      }
    }
    h3 {
      display: inline-block;
      margin: 0;
      padding: 0;
    }
    .text {
      text-indent: 2em;
      font-size: 14px;
      line-height: 25px;
    }
  }
  //   安全
  .safe {
    box-shadow: 0 1px 1px 0 #777777;
    width: 465px;
    height: 356px;
    display: flex;
    justify-content: center;
    h3 {
      text-align: center;
      columns: #333;
      font-weight: 700;
    }
    ul {
      width: 363px;
      height: 240px;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 150px;
        height: 80px;
        display: flex;
        align-items: center;
        font-size: 20px;
        margin-right: 30px;
        img {
          margin-right: 20px;
        }
      }
    }
  }
  //   二维码
  .rwm {
    width: 300px;
    height: 354px;
  }
}
// 公司信息栏
.bossIfon {
  color: #b4b5b6;
  display: flex;
  background-color: #202326;
  align-items: center;
  flex-direction: column;
}
</style>