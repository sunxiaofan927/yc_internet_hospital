<template>
  <div class="login_check">
    <h2>基本配置</h2>
    <ul class="login_check_main">
      <li class="login_check_list">
        <ul>
          <li class="fontColor">*页面空闲超时时间(分钟)</li>
          <li>
            <el-input v-model="timeout" type="number" min="1"></el-input>
          </li>
          <li>
            (注：最小超过时间为5分钟，最大超过时间为1440分钟。配置修
            改保存以后需要重新登录才能生效)
          </li>
        </ul>
      </li>
      <li class="login_check_list">
        <ul>
          <li>
            <el-checkbox v-model="checked">启用验证码</el-checkbox>
          </li>
          <li>
            <el-radio v-model="radio" label="1">密码连续错误三次启用</el-radio>
            <el-radio v-model="radio" label="2">一直启用</el-radio>
          </li>
        </ul>
      </li>
      <li class="login_check_list">
        <el-checkbox v-model="checked">同一时刻登录限制</el-checkbox>
      </li>
      <li class="login_check_list">登录锁定</li>
      <li class="login_check_list">
        <ul>
          <li>
            <el-checkbox v-model="checked">启用</el-checkbox>
          </li>
          <li>在</li>
          <li>
            <el-input type="number" min="1"></el-input>
          </li>
          <li>分钟内连续</li>
          <li>
            <el-input type="number" min="1"></el-input>
          </li>
          <li>次登录失败则锁定账户</li>
          <li>
            <el-input type="number" min="1"></el-input>
          </li>
          <li>分钟后解锁</li>
        </ul>
      </li>
      <li class="login_check_list2">
        <ul>
          <li>
            <el-button type="success" @click="sbmit">保存</el-button>
          </li>
          <li>
            <el-button type="danger">还原初始设置</el-button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",
      isClick: true,
      timeout:"",
      checked: "",
    };
  },
  methods: {
    sbmit() {
      let format = /^[1-9]\d*$/;
      console.log(this.timeout)
      if (this.timeout && !format.test(this.timeout)) {
        this.$message("请输入大于0正整数");
        return;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.login_check {
  li{
    color:#000;
    & >>> .el-checkbox__label{
      color:red;
    }
  }
  .fontColor{
    color:red
  }
  width: 18rem;
  height: 8rem;
  padding: 1rem;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .login_check_main {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    .login_check_list,
    .login_check_list2 {
      margin-bottom: 10px;
      width: 18rem;
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .el-input {
          width: 3rem;
        }
        & > li {
          // color:#000;
          white-space: wrap;
        }
      }
      @media screen and (max-width: 600px) {
        ul {
          justify-content: flex-start;
        }
      }
    }
    .login_check_list2{
      ul {
        justify-content: flex-end;
        .el-button{
          margin-left:0.5rem
        }
      }
    }
  }
}
</style>