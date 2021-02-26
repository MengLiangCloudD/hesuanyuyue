<template>
    <div>
        <div class="title">
            新冠肺炎核酸/抗体检测申请表
        </div>
        <div class="content">
            <div class="inpurItem">
                <div class="item">
                    <label for="">姓名：</label>
                    <Input v-model="name" placeholder="请填写姓名" class="input" /><br>
                </div>
                <div class="item">
                    <label for="">性别：</label>
                    <Select v-model="sex" class="input">
                        <Option value="男">男</Option>
                        <Option value="女">女</Option>
                    </Select>
                </div>
                <div class="item">
                    <label for="">身份证号：</label>
                    <Input v-model="id" disabled placeholder="请填写身份证号" class="input" /><br>
                </div>
                <div class="item">
                    <label for="">工作单位：</label>
                    <Input v-model="job" placeholder="请填写工作单位" class="input" /><br>
                </div>
                <div class="item">
                    <label for="">居住地址：</label>
                    <Input v-model="address" placeholder="请填写居住地址" class="input" /><br>
                </div>
                <div class="item">
                    <label for="">联系电话：</label>
                    <Input v-model="phone" placeholder="请填写联系电话" class="input" /><br>
                </div>
                <div class="item">
                    <label for="">是否发热：</label>
                    <Select v-model="hot"  class="input">
                        <Option value="否">否</Option>
                        <Option value="是">是</Option>
                    </Select>
                </div>
                <div class="item">
                    <label for="">是否干咳：</label>
                    <Select v-model="ganke"  class="input">
                        <Option value="否">否</Option>
                        <Option value="是">是</Option>
                    </Select>
                </div>
                <div class="item">
                    <label for="">是否乏力：</label>
                    <Select v-model="fanli"  class="input">
                        <Option value="否">否</Option>
                        <Option value="是">是</Option>
                    </Select>
                </div>
                <div class="item">
                    <label for="">其他：</label>
                     <Input v-model="other" placeholder="请填写其他" class="input" /><br>
                </div>
                <div class="item">
                    <label for="">申请理由：</label>
                     <Select v-model="reason"  class="input">
                        <Option value="本地复工">本地复工</Option>
                        <Option value="外出复工">外出复工</Option>
                        <Option value="外地返岗">外地返岗</Option>
                        <Option value="武汉返乡">武汉返乡</Option>
                        <Option value="就学">就学</Option>
                    </Select>
                </div>
                <div class="item">
                    <label for="">检测类型：</label>
                     <Select v-model="type"  class="input">
                        <Option value="核酸检测">核酸检测</Option>
                        <Option value="抗体检测">抗体检测</Option>
                    </Select>
                </div>
                <div class="item">
                    <label for="">复工工作：</label>
                     <Select v-model="local"  class="input">
                        <Option value="餐饮">餐饮</Option>
                        <Option value="食堂">食堂</Option>
                        <Option value="商场">商场</Option>
                        <Option value="超市">超市</Option>
                        <Option value="其他">其他</Option>
                    </Select>
                </div>
                <div class="item">
                    <label for="">备注：</label>
                     <Input v-model="remark" placeholder="请填写备注" class="input" /><br>
                </div>
                <div class="itembottom">
                    <Button type="success" class="bttnn" @click="addInfo()">提交</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from './../utils/http';
    export default {
        data(){
            return{
                name:'',
                sex:'',
                id:'',
                job:'',
                address:'',
                phone:'',
                hot:'',
                ganke:'',
                fanli:'',
                other:'',
                reason:'',
                type:'',
                local:'',
                remark:''
            }
        },
        created(){
            this.id = this.$route.query.userId;
            this.selectInfo(this.id);
        },
        methods: {
            async addInfo(){
                var that = this;
                var url = 'insertOrUpdate';
                var data = {
                    name:that.name,
                    sex:that.sex,
                    Id:that.id,
                    job:that.job,
                    address:that.address,
                    phone:that.phone,
                    hot:that.hot,
                    ganke:that.ganke,
                    fanli:that.fanli,
                    other:that.other,
                    reason:that.reason,
                    type:that.type,
                    local:that.local,
                    remark:that.remark
                }
                var res = await http.post(that,url,data);
                if(res.errcode ==0){
                    that.$Message.info('提交成功');
                }else{
                    that.$Message.error('提交失败');
                }
            },
            async selectInfo(id){
                 var that = this;
                 var url = 'queryRecordByCardIdAndNow';
                 var data = {
                     Id:id
                 }
                 var res = await http.post(that,url,data);
                 if(res.errcode == 0 && res.data!=null){
                    that.name=res.data.name,
                    that.sex=res.data.sex,
                    that.id=res.data.Id,
                    that.job=res.data.job,
                    that.address=res.data.address,
                    that.phone=res.data.phone,
                    that.hot=res.data.hot,
                    that.ganke=res.data.ganke,
                    that.fanli=res.data.fali,
                    that.other=res.data.other,
                    that.reason=res.data.reason,
                    that.type=res.data.type,
                    that.local=res.data.local,
                    that.remark=res.data.remark
                }else{

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
    width: 100%;
    position: absolute;
    min-height: calc(100% - 60px);
    background-image: url('./../common/img/tuceng.png') ;
    background-repeat: no-repeat;
    background-size:100% 100%; 
    text-align: center;
}
.inpurItem{
    width: calc(100% - 34px);
    display: inline-block;
    margin-top: 50px;
    margin-bottom: 70px;
}
.item{
    margin: 10px;
    display: flex;
    label{
        flex: 1;
        line-height: 30px;
        width: 28%;
    }
    .input{
        width: 70%;
        height: 30px;
    }
}
.itembottom{
    text-align: center;
    padding: 30px 0;
}
.bttnn{
    width: 300px;
    height: 35px;
    
}
</style>