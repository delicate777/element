<template>
<!--  <h1>This is a form page</h1>-->
  <el-form :model="form">
    <el-form-item label="UserName">
      <el-input :placeholder="form.name"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data(){
    return {
      form:{
          name:'',
      }
    }
  }
}
</script>