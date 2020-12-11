<template>
  <div class="admin_user">
    <el-form class="admin_user_top">
      <el-form-item label="用户名:" class="admin_user_input">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="userList">
      <el-table-column
        align="center"
        v-for="item of userTitle"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "user",
      options: [
        {
          label: "用户名称",
          value: "user",
        },
        {
          label: "用户类型",
          value: "usertype",
        },
      ],
      userTitle: [
        { label: "编号", prop: "lid" },
        { label: "用户名", prop: "lid1" },
        { label: "管理员分类", prop: "lid2" },
        { label: "员工姓名", prop: "lid3" },
        { label: "部门名称", prop: "lid4" },
        { label: "创建日期", prop: "lid5" },
        { label: "授权状态", prop: "lid6" },
      ],
      userList: [
          {
              lid: "1002",
              lid1: "1002",
              lid2: "1002",
              lid3: "1002",
              lid4: "1002",
              lid5: "1002",
              lid6: "1002",
          }
      ]
    };
  },
};
</script>

<style scoped lang="scss">
.admin_user {
  .admin_user_top {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0.5rem 0;
    .el-form-item {
      margin: 0;
      display: flex;
      align-items: center;
    }
    .admin_user_input{
        flex-basis: 5rem;
      }
  }
}
</style>