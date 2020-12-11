<template>
  <div class="pverification">
    <h2>用户密码策略</h2>
    <ul class="pverification_main">
      <li class="pverification_list1">
        <ul>
          <li>
            <span>最小密码长度(位数)</span>
            <el-input v-model="pwdMin" type="number" min="1"></el-input>
          </li>
          <li>
            <span>最大密码长度(位数)</span>
            <el-input v-model="pwdMax" type="number" min="1"></el-input>
          </li>
        </ul>
      </li>
      <li class="pverification_list">
        <el-checkbox-group v-model="checked">
          <el-checkbox label="1">至少包含一个小写字母</el-checkbox>
          <el-checkbox label="2">至少包含一个大写字母</el-checkbox>
        </el-checkbox-group>
      </li>
      <li class="pverification_list">
        <el-checkbox-group v-model="checked">
          <el-checkbox label="3">至少包含一个数字</el-checkbox>
          <el-checkbox label="4">至少包含一个特殊字符</el-checkbox>
        </el-checkbox-group>
      </li>
      <li class="pverification_list">
        <el-checkbox-group v-model="checked">
          <el-checkbox label="5">不允许密码与用户名一致</el-checkbox>
          <el-checkbox label="6">不允许密码与用户名逆序一致</el-checkbox>
        </el-checkbox-group>
      </li>
      <li class="pverification_list1">
        <ul>
          <li>
            <el-checkbox v-model="pwdOut">启用密码周期</el-checkbox>
          </li>
          <li>
            <span>密码有效期为:</span>
            <el-input type="number" min="1"></el-input>
            <span>天,</span>
          </li>
          <li>
            <span>过期前:</span>
            <el-input type="number" min="1"></el-input>
            <span>天提醒用户</span>
          </li>
        </ul>
      </li>
      <li class="pverification_list2">
        <ul>
          <li>
            <el-button type="success" @click="sun">保存</el-button>
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
      pwdMin: "",
      pwdMax: "",
      pwdOut: false,
      checked: [],
    };
  },
  methods: {
    sun() {
      console.log(this.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.pverification {
  width: 19rem;
  height: 8.5rem;
  padding: 1rem;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .pverification_main {
    width: 100%;
    height: 8.5rem;
    // background: red;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    .pverification_list1 {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          width: 30%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .el-input {
            width: 50%;
          }
        }
      }
    }
    .pverification_list {
      width: 8rem;
      .el-checkbox-group {
        display: flex;
        align-items: center;
        .el-checkbox {
          margin: 0;
          width: 50%;
        }
      }
    }
    .pverification_list2 {
      width: 100%;
      ul {
        display: flex;
        justify-content: flex-end;
        .el-button {
          margin-left: 0.6rem;
        }
      }
    }
  }
}
</style>