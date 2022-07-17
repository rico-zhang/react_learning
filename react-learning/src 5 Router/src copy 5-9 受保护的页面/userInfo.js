export default {
    isLogin:false,
    login:function(){
        this.isLogin =true;
    },
    logout:function(){
        this.isLogin =false;
    }
}