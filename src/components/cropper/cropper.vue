<template>
    <div class="cropper-aa">
        <vue-cropper class="my-cropper-box"
            ref="cropper"
            :img="option.img"
            :outputSize="option.outputSize"
            :outputType="option.outputType"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"
            :original="option.original"
            :canScale="option.canScale"
            :fixedBox="option.fixedBox"
        ></vue-cropper>
        <div>
            <label class="btn btn-label" for="uploads">重新选择图片</label>
            <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/jpg" @change="uploadImg($event, 1)">
           <button class="btn-cropper" @click="finish('base64')">完成截图</button>
            <div class="choose">
                <img :src="myChoose" alt="error">
            </div>
        </div>
        <div style="margin-top: 10px;">
            <button @click="updateImgae">submit</button>
        </div>
    </div>
</template>
<script>
    import VueCropper from 'vue-cropper'
    import axios from 'axios'
    import data from '@/assets/js/util.js'
    export default {
        components:{
            VueCropper
        },
        data(){
            return{
                option:{
                    img:'../../../static/sea.jpg',
                    outputSize:1,//裁剪生成图片的质量	0-1
                    outputType:'jpeg || png',//[jpeg || png]
                    autoCrop:true, //是否默认生成截图框
                    fixed: false,  // 开启宽度和高度比例
                    fixedNumber:[1,1],
                    original: false,//上传图片是否显示原始宽高 (针对大图 可以铺满)
                    autoCropWidth: 200,
                    autoCropHeight: 200,
                    canScale:true,//图片是否允许滚轮缩放	true
                    fixedBox:true  // 固定截图框大小 不允许改变
                },
                myChoose:'../../../static/phote.png',
                downImg: '#',
                file:{}
            }
        },
        methods:{
            updateImgae(){
                console.log(this.file);
                let imgData=new FormData();
                imgData.append("img",this.file);
                imgData.append("name","sunlin");
                axios({
                    url:data.baseUrl+"upload",
                    method:'post',
                    data:imgData,
                    headers: {'Content-Type': 'multipart/form-data'}
                }).then((res)=>{console.log(res)})
            },
            down (type) {
                // event.preventDefault()
                var aLink = document.createElement('a')
                aLink.download = 'image'
                // 输出
                if (type === 'blob') {
                    this.$refs.cropper.getCropBlob((data) => {
                        console.log(data);
                        this.downImg = data
                        aLink.href = data
                        aLink.click()
                    })
                } else {
                    this.$refs.cropper.getCropData((data) => {
                        console.log(data);
                        this.downImg = data
                        aLink.href = data
                        aLink.click()
                    })
                }
            },
            finish (type) {
                // 输出
                //var test = window.open('about:blank')
                //test.document.body.innerHTML = '图片生成中..'
                if (type === 'blob') {
                    this.$refs.cropper.getCropBlob((data) => {
                        console.log(data);
                        this.myChoose= window.URL.createObjectURL(data);
                        //var test = window.open('')
                        //test.location.href = window.URL.createObjectURL(data)
                    })
                } else {
                    this.$refs.cropper.getCropData((data) => {
                        console.log(data);
                        this.myChoose=data
                        //test.location.href = data
                    })
                }
            },
            uploadImg (e, num) {
                console.log(e)
                //上传图片
                // this.option.img
                var file = e.target.files[0]
                if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                    alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
                    return false
                }
                var reader = new FileReader()
                reader.onload = (e) => {
                    console.log(e);
                    let data
                    if (typeof e.target.result === 'object') {
                        console.log(123);
                        // 把Array Buffer转化为blob 如果是base64不需要
                        data = window.URL.createObjectURL(new Blob([e.target.result]));
                        console.log(data);
                    } else {
                        data = e.target.result;
                        console.log(data)
                    }
                  console.log(num);
                    if (num === 1) {
                        console.log(111111)
                      this.$nextTick(() => {
                        this.option.img = data
                      })
                    } else if (num === 2) {
                        this.example2.img = data
                    }
                }
                // 转化为base64
                //reader.readAsDataURL(file)
                // 转化为blob
                reader.readAsArrayBuffer(file)
            }
        }
    }
</script>
<style>
  .cropper-aa{
    width: 100%;
  }
.my-cropper-box{
    height: 300px !important;
    background-repeat: no-repeat;
    background-size: cover;
}
  .btn-label{
    display: inline-block;
    width: 7rem;
    height: 1.6rem;
    border: 1px solid red;
    line-height: 1.6rem;
    text-align: center;
    margin: 0.5rem;
    color: #ed4864;
    border-radius: 4px;
  }
  .cropper-box-canvas{
    /*width: 100%;*/
    /*height: 100%;*/
    /*right: -40px;*/
    /*margin-left: 2rem !important;*/
  }
  .cropper-box{
    /*overflow: auto !important;*/
  }
  .cropper-modal{
    /*width: 420px !important;*/
    /*background: rgba(0,0,0,.5);*/
  }
  .cropper-crop-box{
    /*z-index: 99;*/
  }
  .btn-cropper{
    width: 5rem;
    height: 1.7rem;
    border-radius: 4px;
  }
</style>
