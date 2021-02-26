<template>
  <div>
    <div class="title">
        新冠肺炎核酸/抗体检测申请表
    </div>
    <div class="content">
      <!-- <p>请先填写身份证号：</p> -->
      <Input v-model="value" placeholder="请填写身份证号" style="width: 300px" /><br>
      <Button type="success" class="bttnn" @click="goIndex1">提交</Button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value:''
      }
    },
    methods: {
      goIndex1(){
        if(this.value!=''){
          this.$router.push(`/index1?userId=${this.value}`)
        }else{
          this.$Message.error('请输入身份证号');
        }
        
      }
    },
  }
</script>

<style lang="scss" scoped>
.title{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background:  #3aaa6e;
  font-size: 20px;
  text-align: center;
  color: #fff;
}
.content{
  padding-top: 100px;
  text-align: center;
   font-size: 16px;
  p{
    padding: 20px 0;
  }
  .bttnn{
    width: 300px;
    height: 35px;
    margin-top: 20px;
  }
}
</style>