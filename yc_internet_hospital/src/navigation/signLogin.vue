<template>
  <div class="signLogin" id="aa" @touchmove.prevent>
    <el-form class="signLoginBg" v-show="this.jumpType === 1">
      <el-form-item>签章登录/login</el-form-item>
      <el-form-item>
        <el-input placeholder="用户名" v-model="userName">
          <i
            slot="suffix"
            class="el-input__icon el-icon-circle-close"
            @click="clear"
          ></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="密码" v-model="userPwd" :type="type">
          <i
            slot="suffix"
            class="el-input__icon el-icon-view"
            @click="look"
          ></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="Submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import formData from "../../static/js/formDate.js";
let formData_ = formData.formDate();
import md5 from "js-md5";
let md5_ = md5(md5("yc1805_jz_gluce") + formData_); //加密规则

export default {
  data() {
    return {
      jumpType: 2,
      userName: "",
      userPwd: "",
      type: "password",
    };
  },
  created() {
    this.$nextTick(() => {
      this.isWeixinBrowser();
    });
  },
  methods: {
    isWeixinBrowser() {
      let ua = navigator.userAgent.toLowerCase();
      let signLogin = document.getElementById("aa");
      console.log(signLogin.style);
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        signLogin.style.display = "none";
        this.$alert("请点击右上角选择手机自带浏览器打开进行签章", {
          confirmButtonText: "确定",
        });
        return false;
      } else if (typeof WeixinJSBridge !== "undefined") {
        signLogin.style.display = "none";
        this.$alert("请点击右上角选择手机自带浏览器打开进行签章", {
          confirmButtonText: "确定",
        });
        return false;
      } else {
        this.jumpType = 1;
      }
    },
    clear() {
      this.userName = "";
    },
    look() {
      if (this.type != "text") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    Submit() {
      if (!this.userName) {
        this.$message.error("账号不能为空");
        return;
      }
      if (!this.userPwd) {
        this.$message.error("密码不能为空");
        return;
      }
      let data_ = {
        yc_key: md5_,
        account: this.userName,
        pwd: this.userPwd,
      };
      let data = this.$qs.stringify(data_);
      this.$axios
        .post(
          "http://192.168.2.24:88/api/dataController/loginByAccountAndPwdToH5.do?",
          data
        )
        .then((res) => {
          if (res.data.code == 0) {
            this.$axios.defaults.headers.common["access-token"] =
              res.data.access_token;
            // sessionStorage.setItem("signId", res.data.data.id);
            sessionStorage.setItem("signId", JSON.stringify(res));
            this.$router.push({ path: "/signPhone" });
          } else {
            this.$message.error(res.data.msg);
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.signLogin {
  background: url("../assets/img/login.png") center no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  .signLoginBg {
    width: 50%;
    height: 40%;
    padding: 0 0.5rem;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    color: #ffffff;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    .el-form-item {
      width: 100%;
      margin: 0;
      height: 20%;
      & >>> .el-form-item__content {
        font-size: 0.5rem;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        height: 100%;
        .el-input {
          width: 90%;
          height: 100%;
          .el-input__inner {
            height: 60%;
            color: #ffffff;
            border: 0;
            background: rgba(0, 0, 60, 0.2);
          }
        }
        .el-input__suffix {
          height: 60%;
        }
        .el-button {
          height: 60%;
          border: 0;
          color: #ffffff;
          width: 80%;
          background: rgba(0, 0, 60, 0.3);
        }
      }
    }
  }
}
</style>