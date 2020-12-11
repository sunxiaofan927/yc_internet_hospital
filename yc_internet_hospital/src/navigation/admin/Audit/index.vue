<template>
  <div class="audit">
      <div class="audit_top">
          <el-input  placeholder="请输入用户名"  v-model="account"></el-input>
          <el-button>查询</el-button>
      </div>
      <el-table :data="userData">
          <el-table-column v-for="item of table_title" :label="item.label" :key="item.prop" :prop="item.prop"
          align="center">
          </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            table_title: [
                {label:"编号",prop:"lid"},
                {label:"用户名",prop:"lid1"},
                {label:"用户姓名",prop:"lid2"},
                {label:"登录IP",prop:"lid3"},
                {label:"登录时间",prop:"lid4"},
                {label:"登录状态",prop:"lid5"},
                {label:"失败原因",prop:"lid6"},
                {label:"退出时间",prop:"lid7"},
            ],
            userData: [
                {
                    lid:"1003",
                    lid1:"sunxiaofan",
                    lid2:"孙晓帆",
                    lid3:"192.168.2.22",
                    lid4:"2020-12-11",
                    lid5:"离线",
                    lid6:"网络不稳定",
                    lid7:"2020-12-11",
                }
            ],
            account: "",
        }
    }
}
</script>

<style scoped lang="scss">
    .audit{
        padding: 1rem;
        .audit_top{
            width: 5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
            .el-input{
                width:60%;
            }
        }
    }
</style>