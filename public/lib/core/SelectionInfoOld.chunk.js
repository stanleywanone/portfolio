/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[12],{387:function(ia,ca,f){f.r(ca);var ba=f(398),y=f(104),ha=f(34),ea=f(68);ia=function(){function f(){this.sb=this.fe=this.Lb=this.Yb=null;this.ye=!1}f.prototype.clear=function(){Object(ha.b)(this.Yb);this.Lb="";Object(ha.b)(this.fe);Object(ha.b)(this.sb);this.ye=!1};f.prototype.Zc=function(){this.Yb=[];this.fe=[];this.sb=[];this.ye=!1};f.prototype.$x=function(f){for(var x="",w=0,h,r,e;w<f.length;)h=f.charCodeAt(w),9==h?(x+=String.fromCharCode(10),
w++):128>h?(x+=String.fromCharCode(h),w++):191<h&&224>h?(r=f.charCodeAt(w+1),x+=String.fromCharCode((h&31)<<6|r&63),w+=2):(r=f.charCodeAt(w+1),e=f.charCodeAt(w+2),x+=String.fromCharCode((h&15)<<12|(r&63)<<6|e&63),w+=3);return x};f.prototype.initData=function(f){this.Yb=[];this.fe=[];this.sb=[];this.ye=!1;try{var x=new ea.a(f);this.Lb="";x.Ja();if(!x.advance())return;var w=x.current.textContent;this.Lb=w=this.$x(w);Object(ha.b)(this.fe);x.advance();w=x.current.textContent;for(var h=w.split(","),r=
Object(y.a)(h);r.dl();){var e=r.current;try{var n=parseInt(e.trim());this.fe.push(n)}catch(la){}}Object(ha.b)(this.Yb);x.advance();w=x.current.textContent;h=w.split(",");for(var z=Object(y.a)(h);z.dl();){e=z.current;try{n=parseFloat(e.trim()),this.Yb.push(n)}catch(la){}}Object(ha.b)(this.sb);x.advance();w=x.current.textContent;h=w.split(",");f=[];x=[];w=0;for(var aa=Object(y.a)(h);aa.dl();){e=aa.current;switch(e){case "Q":w=1;break;case "R":w=2;break;case "S":w=3;break;default:w=0}if(w)f.push(0),
x.push(w);else try{n=parseFloat(e.trim()),f.push(n),x.push(w)}catch(la){return}}w=0;var ba=f.length;r=aa=e=h=void 0;for(var da=z=0,ca=0;ca<ba;){var ia=x[ca];if(0<ia)w=ia,++ca,3===w&&(z=f[ca],da=f[ca+1],ca+=2);else if(1===w)for(n=0;8>n;++n)this.sb.push(f[ca++]);else 2===w?(h=f[ca++],e=f[ca++],aa=f[ca++],r=f[ca++],this.sb.push(h),this.sb.push(e),this.sb.push(aa),this.sb.push(e),this.sb.push(aa),this.sb.push(r),this.sb.push(h),this.sb.push(r)):3===w&&(h=f[ca++],e=z,aa=f[ca++],r=da,this.sb.push(h),this.sb.push(e),
this.sb.push(aa),this.sb.push(e),this.sb.push(aa),this.sb.push(r),this.sb.push(h),this.sb.push(r))}}catch(la){return}this.Lb.length&&this.Lb.length===this.fe.length&&8*this.Lb.length===this.sb.length&&(this.ye=!0)};f.prototype.ready=function(){return this.ye};f.prototype.Ku=function(){var f=new ba.a;if(!this.Yb.length)return f.Ag(this.Yb,-1,this.Lb,this.sb,0),f;f.Ag(this.Yb,1,this.Lb,this.sb,1);return f};f.prototype.We=function(){return this.sb};f.prototype.getData=function(){return{m_Struct:this.Yb,
m_Str:this.Lb,m_Offsets:this.fe,m_Quads:this.sb,m_Ready:this.ye}};return f}();ca["default"]=ia},398:function(ia,ca,f){var ba=f(64),y=f(218),ha=f(413);ia=function(){function f(){this.Od=0;this.pb=this.Ea=this.Le=null;this.Ec=0;this.Nd=null}f.prototype.Zc=function(){this.Od=-1;this.Ec=0;this.Nd=[]};f.prototype.Ag=function(f,y,x,w,h){this.Od=y;this.Ec=h;this.Nd=[];this.Le=f;this.Ea=x;this.pb=w};f.prototype.mc=function(f){return this.Od===f.Od};f.prototype.gj=function(){return Math.abs(this.Le[this.Od])};
f.prototype.$k=function(){return 0<this.Le[this.Od]};f.prototype.vg=function(){var f=this.$k()?6:10,y=new ha.a;y.Ag(this.Le,this.Od+f,this.Od,this.Ea,this.pb,1);return y};f.prototype.XQ=function(f){if(0>f||f>=this.gj())return f=new ha.a,f.Ag(this.Le,-1,-1,this.Ea,this.pb,0),f;var y=this.$k()?6:10,x=this.$k()?5:11,w=new ha.a;w.Ag(this.Le,this.Od+y+x*f,this.Od,this.Ea,this.pb,1+f);return w};f.prototype.Am=function(){var y=this.Od+parseInt(this.Le[this.Od+1]);if(y>=this.Le.length)return y=new f,y.Ag(this.Le,
-1,this.Ea,this.pb,0),y;var aa=new f;aa.Ag(this.Le,y,this.Ea,this.pb,this.Ec+1);return aa};f.prototype.te=function(f){if(this.$k())f.la=this.Le[this.Od+2+0],f.ia=this.Le[this.Od+2+1],f.ma=this.Le[this.Od+2+2],f.ja=this.Le[this.Od+2+3];else{for(var y=1.79769E308,x=ba.a.MIN,w=1.79769E308,h=ba.a.MIN,r=0;4>r;++r){var e=this.Le[this.Od+2+2*r],n=this.Le[this.Od+2+2*r+1];y=Math.min(y,e);x=Math.max(x,e);w=Math.min(w,n);h=Math.max(h,n)}f.la=y;f.ia=w;f.ma=x;f.ja=h}};f.prototype.iA=function(){if(this.Nd.length)return this.Nd[0];
var f=new y.a,aa=new y.a,x=new ha.a;x.Zc();var w=this.vg(),h=new ha.a;h.Zc();for(var r=this.vg();!r.mc(x);r=r.wg())h=r;x=Array(8);r=Array(8);w.ue(0,x);f.x=(x[0]+x[2]+x[4]+x[6])/4;f.y=(x[1]+x[3]+x[5]+x[7])/4;h.ue(h.fj()-1,r);aa.x=(r[0]+r[2]+r[4]+r[6])/4;aa.y=(r[1]+r[3]+r[5]+r[7])/4;.01>Math.abs(f.x-aa.x)&&.01>Math.abs(f.y-aa.y)&&this.Nd.push(0);f=Math.atan2(aa.y-f.y,aa.x-f.x);f*=180/3.1415926;0>f&&(f+=360);this.Nd.push(f);return 0};return f}();ca.a=ia},413:function(ia,ca,f){var ba=f(398),y=f(119),
ha=f(64);ia=function(){function f(){this.fk=this.rd=0;this.pb=this.Ea=this.Yb=null;this.Ec=0}f.prototype.Zc=function(){this.fk=this.rd=-1;this.Ec=0};f.prototype.Ag=function(f,y,x,w,h,r){this.rd=y;this.fk=x;this.Yb=f;this.Ea=w;this.pb=h;this.Ec=r};f.prototype.mc=function(f){return this.rd===f.rd};f.prototype.fj=function(){return parseInt(this.Yb[this.rd])};f.prototype.Xh=function(){return parseInt(this.Yb[this.rd+2])};f.prototype.zg=function(){return parseInt(this.Yb[this.rd+1])};f.prototype.$k=function(){return 0<
this.Yb[this.fk]};f.prototype.y7=function(){return Math.abs(this.Yb[this.fk])};f.prototype.wg=function(){var y=this.$k(),aa=y?5:11;if(this.rd>=this.fk+(y?6:10)+(this.y7()-1)*aa)return aa=new f,aa.Ag(this.Yb,-1,-1,this.Ea,this.pb,0),aa;y=new f;y.Ag(this.Yb,this.rd+aa,this.fk,this.Ea,this.pb,this.Ec+1);return y};f.prototype.T6=function(f){var y=this.fj();return 0>f||f>=y?-1:parseInt(this.Yb[this.rd+1])+f};f.prototype.ue=function(f,aa){f=this.T6(f);if(!(0>f)){var x=new ba.a;x.Ag(this.Yb,this.fk,this.Ea,
this.pb,0);if(x.$k()){var w=new y.a;x.te(w);x=w.ia<w.ja?w.ia:w.ja;w=w.ia>w.ja?w.ia:w.ja;f*=8;aa[0]=this.pb[f];aa[1]=x;aa[2]=this.pb[f+2];aa[3]=aa[1];aa[4]=this.pb[f+4];aa[5]=w;aa[6]=this.pb[f+6];aa[7]=aa[5]}else for(f*=8,x=0;8>x;++x)aa[x]=this.pb[f+x]}};f.prototype.Rd=function(f){var aa=new ba.a;aa.Ag(this.Yb,this.fk,this.Ea,this.pb,0);if(aa.$k()){var x=this.Yb[this.rd+3],w=this.Yb[this.rd+4];if(x>w){var h=x;x=w;w=h}h=new y.a;aa.te(h);aa=h.ia<h.ja?h.ia:h.ja;h=h.ia>h.ja?h.ia:h.ja;f[0]=x;f[1]=aa;f[2]=
w;f[3]=aa;f[4]=w;f[5]=h;f[6]=x;f[7]=h}else for(x=this.rd+3,w=0;8>w;++w)f[w]=this.Yb[x+w]};f.prototype.te=function(f){var aa=new ba.a;aa.Ag(this.Yb,this.fk,this.Ea,this.pb,0);if(aa.$k()){var x=this.Yb[this.rd+3],w=this.Yb[this.rd+4];if(x>w){var h=x;x=w;w=h}h=new y.a;aa.te(h);aa=h.ia<h.ja?h.ia:h.ja;h=h.ia>h.ja?h.ia:h.ja;f[0]=x;f[1]=aa;f[2]=w;f[3]=h}else{x=1.79769E308;w=ha.a.MIN;aa=1.79769E308;h=ha.a.MIN;for(var r=this.rd+3,e=0;4>e;++e){var n=this.Yb[r+2*e],z=this.Yb[r+2*e+1];x=Math.min(x,n);w=Math.max(w,
n);aa=Math.min(aa,z);h=Math.max(h,z)}f[0]=x;f[1]=aa;f[2]=w;f[3]=h}};return f}();ca.a=ia}}]);}).call(this || window)