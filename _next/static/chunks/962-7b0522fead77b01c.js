(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{9008:function(e,t,r){e.exports=r(7219)},1508:function(e,t,r){"use strict";r.d(t,{t:function(){return N}});var n,i,o,l=r(7294),s=Object.defineProperty,a=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))u.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>{var r={};for(var n in e)h.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))0>t.indexOf(n)&&u.call(e,n)&&(r[n]=e[n]);return r};(e=>{let t=class t{constructor(e,r,n,o){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version value out of range");if(o<-1||o>7)throw RangeError("Mask value out of range");this.size=4*e+17;let l=[];for(let e=0;e<this.size;e++)l.push(!1);for(let e=0;e<this.size;e++)this.modules.push(l.slice()),this.isFunction.push(l.slice());this.drawFunctionPatterns();let s=this.addEccAndInterleave(n);if(this.drawCodewords(s),-1==o){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let r=this.getPenaltyScore();r<e&&(o=t,e=r),this.applyMask(t)}}i(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}static encodeText(r,n){let i=e.QrSegment.makeSegments(r);return t.encodeSegments(i,n)}static encodeBinary(r,n){let i=e.QrSegment.makeBytes(r);return t.encodeSegments([i],n)}static encodeSegments(e,n,o=1,s=40,a=-1,h=!0){let u,c;if(!(t.MIN_VERSION<=o&&o<=s&&s<=t.MAX_VERSION)||a<-1||a>7)throw RangeError("Invalid value");for(u=o;;u++){let r=8*t.getNumDataCodewords(u,n),i=l.getTotalBits(e,u);if(i<=r){c=i;break}if(u>=s)throw RangeError("Data too long")}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])h&&c<=8*t.getNumDataCodewords(u,e)&&(n=e);let f=[];for(let t of e)for(let e of(r(t.mode.modeBits,4,f),r(t.numChars,t.mode.numCharCountBits(u),f),t.getData()))f.push(e);i(f.length==c);let d=8*t.getNumDataCodewords(u,n);i(f.length<=d),r(0,Math.min(4,d-f.length),f),r(0,(8-f.length%8)%8,f),i(f.length%8==0);for(let e=236;f.length<d;e^=253)r(e,8,f);let m=[];for(;8*m.length<f.length;)m.push(0);return f.forEach((e,t)=>m[t>>>3]|=e<<7-(7&t)),new t(u,n,m,a)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let n=0;n<t;n++)0==r&&0==n||0==r&&n==t-1||r==t-1&&0==n||this.drawAlignmentPattern(e[r],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,r=t;for(let e=0;e<10;e++)r=r<<1^(r>>>9)*1335;let o=(t<<10|r)^21522;i(o>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,n(o,e));this.setFunctionModule(8,7,n(o,6)),this.setFunctionModule(8,8,n(o,7)),this.setFunctionModule(7,8,n(o,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,n(o,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,n(o,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,n(o,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;i(t>>>18==0);for(let e=0;e<18;e++){let r=n(t,e),i=this.size-11+e%3,o=Math.floor(e/3);this.setFunctionModule(i,o,r),this.setFunctionModule(o,i,r)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){let i=Math.max(Math.abs(n),Math.abs(r)),o=e+n,l=t+r;0<=o&&o<this.size&&0<=l&&l<this.size&&this.setFunctionModule(o,l,2!=i&&4!=i)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,1!=Math.max(Math.abs(n),Math.abs(r)))}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){let r=this.version,n=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(r,n))throw RangeError("Invalid argument");let o=t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][r],l=t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][r],s=Math.floor(t.getNumRawDataModules(r)/8),a=o-s%o,h=Math.floor(s/o),u=[],c=t.reedSolomonComputeDivisor(l);for(let r=0,n=0;r<o;r++){let i=e.slice(n,n+h-l+(r<a?0:1));n+=i.length;let o=t.reedSolomonComputeRemainder(i,c);r<a&&i.push(0),u.push(i.concat(o))}let f=[];for(let e=0;e<u[0].length;e++)u.forEach((t,r)=>{(e!=h-l||r>=a)&&f.push(t[e])});return i(f.length==s),f}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let i=0;i<this.size;i++)for(let o=0;o<2;o++){let l=t-o,s=(t+1&2)==0?this.size-1-i:i;!this.isFunction[s][l]&&r<8*e.length&&(this.modules[s][l]=n(e[r>>>3],7-(7&r)),r++)}}i(r==8*e.length)}applyMask(e){if(e<0||e>7)throw RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let n;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let r=0;r<this.size;r++){let n=!1,i=0,o=[0,0,0,0,0,0,0];for(let l=0;l<this.size;l++)this.modules[r][l]==n?5==++i?e+=t.PENALTY_N1:i>5&&e++:(this.finderPenaltyAddHistory(i,o),n||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),n=this.modules[r][l],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,o)*t.PENALTY_N3}for(let r=0;r<this.size;r++){let n=!1,i=0,o=[0,0,0,0,0,0,0];for(let l=0;l<this.size;l++)this.modules[l][r]==n?5==++i?e+=t.PENALTY_N1:i>5&&e++:(this.finderPenaltyAddHistory(i,o),n||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),n=this.modules[l][r],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,o)*t.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let n=0;n<this.size-1;n++){let i=this.modules[r][n];i==this.modules[r][n+1]&&i==this.modules[r+1][n]&&i==this.modules[r+1][n+1]&&(e+=t.PENALTY_N2)}let r=0;for(let e of this.modules)r=e.reduce((e,t)=>e+(t?1:0),r);let n=this.size*this.size,o=Math.ceil(Math.abs(20*r-10*n)/n)-1;return i(0<=o&&o<=9),i(0<=(e+=o*t.PENALTY_N4)&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{let e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),r=[6];for(let n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return i(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError("Degree out of range");let r=[];for(let t=0;t<e-1;t++)r.push(0);r.push(1);let n=1;for(let i=0;i<e;i++){for(let e=0;e<r.length;e++)r[e]=t.reedSolomonMultiply(r[e],n),e+1<r.length&&(r[e]^=r[e+1]);n=t.reedSolomonMultiply(n,2)}return r}static reedSolomonComputeRemainder(e,r){let n=r.map(e=>0);for(let i of e){let e=i^n.shift();n.push(0),r.forEach((r,i)=>n[i]^=t.reedSolomonMultiply(r,e))}return n}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^(r>>>7)*285^(t>>>n&1)*e;return i(r>>>8==0),r}finderPenaltyCountPatterns(e){let t=e[1];i(t<=3*this.size);let r=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};function r(e,t,r){if(t<0||t>31||e>>>t!=0)throw RangeError("Value out of range");for(let n=t-1;n>=0;n--)r.push(e>>>n&1)}function n(e,t){return(e>>>t&1)!=0}function i(e){if(!e)throw Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;let o=class e{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let n=[];for(let e of t)r(e,8,n);return new e(e.Mode.BYTE,t.length,n)}static makeNumeric(t){if(!e.isNumeric(t))throw RangeError("String contains non-numeric characters");let n=[];for(let e=0;e<t.length;){let i=Math.min(t.length-e,3);r(parseInt(t.substring(e,e+i),10),3*i+1,n),e+=i}return new e(e.Mode.NUMERIC,t.length,n)}static makeAlphanumeric(t){let n;if(!e.isAlphanumeric(t))throw RangeError("String contains unencodable characters in alphanumeric mode");let i=[];for(n=0;n+2<=t.length;n+=2){let o=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));r(o+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n+1)),11,i)}return n<t.length&&r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)),6,i),new e(e.Mode.ALPHANUMERIC,t.length,i)}static makeSegments(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let n=[];if(t<0)throw RangeError("ECI assignment value out of range");if(t<128)r(t,8,n);else if(t<16384)r(2,2,n),r(t,14,n);else if(t<1e6)r(6,3,n),r(t,21,n);else throw RangeError("ECI assignment value out of range");return new e(e.Mode.ECI,0,n)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(let n of e){let e=n.mode.numCharCountBits(t);if(n.numChars>=1<<e)return 1/0;r+=4+e+n.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)"%"!=e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t}};o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let l=o;e.QrSegment=o})(o||(o={})),(e=>{let t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})((n=o||(o={})).QrCode||(n.QrCode={})),(e=>{let t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})((i=o||(o={})).QrSegment||(i.QrSegment={}));var m=o,g={L:m.QrCode.Ecc.LOW,M:m.QrCode.Ecc.MEDIUM,Q:m.QrCode.Ecc.QUARTILE,H:m.QrCode.Ecc.HIGH},E="#FFFFFF",M="#000000";function C(e,t=0){let r=[];return e.forEach(function(e,n){let i=null;e.forEach(function(o,l){if(!o&&null!==i){r.push(`M${i+t} ${n+t}h${l-i}v1H${i+t}z`),i=null;return}if(l===e.length-1){if(!o)return;null===i?r.push(`M${l+t},${n+t} h1v1H${l+t}z`):r.push(`M${i+t},${n+t} h${l+1-i}v1H${i+t}z`);return}o&&null===i&&(i=l)})}),r.join("")}function R(e,t){return e.slice().map((e,r)=>r<t.y||r>=t.y+t.h?e:e.map((e,r)=>(r<t.x||r>=t.x+t.w)&&e))}function w({value:e,level:t,minVersion:r,includeMargin:n,marginSize:i,imageSettings:o,size:s}){let a=l.useMemo(()=>{let n=m.QrSegment.makeSegments(e);return m.QrCode.encodeSegments(n,g[t],r)},[e,t,r]),{cells:h,margin:u,numCells:c,calculatedImageSettings:f}=l.useMemo(()=>{let e=a.getModules(),t=null!=i?Math.max(Math.floor(i),0):n?4:0,r=e.length+2*t,l=function(e,t,r,n){if(null==n)return null;let i=e.length+2*r,o=Math.floor(.1*t),l=i/t,s=(n.width||o)*l,a=(n.height||o)*l,h=null==n.x?e.length/2-s/2:n.x*l,u=null==n.y?e.length/2-a/2:n.y*l,c=null==n.opacity?1:n.opacity,f=null;if(n.excavate){let e=Math.floor(h),t=Math.floor(u);f={x:e,y:t,w:Math.ceil(s+h-e),h:Math.ceil(a+u-t)}}return{x:h,y:u,h:a,w:s,excavation:f,opacity:c,crossOrigin:n.crossOrigin}}(e,s,t,o);return{cells:e,margin:t,numCells:r,calculatedImageSettings:l}},[a,s,o,n,i]);return{qrcode:a,margin:u,cells:h,numCells:c,calculatedImageSettings:f}}var p=function(){try{new Path2D().addPath(new Path2D)}catch(e){return!1}return!0}();l.forwardRef(function(e,t){let{value:r,size:n=128,level:i="L",bgColor:o=E,fgColor:s=M,includeMargin:a=!1,minVersion:h=1,marginSize:u,imageSettings:c}=e,m=d(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","marginSize","imageSettings"]),{style:g}=m,N=d(m,["style"]),A=null==c?void 0:c.src,y=l.useRef(null),P=l.useRef(null),v=l.useCallback(e=>{y.current=e,"function"==typeof t?t(e):t&&(t.current=e)},[t]),[I,S]=l.useState(!1),{margin:_,cells:O,numCells:z,calculatedImageSettings:F}=w({value:r,level:i,minVersion:h,includeMargin:a,marginSize:u,imageSettings:c,size:n});l.useEffect(()=>{if(null!=y.current){let e=y.current,t=e.getContext("2d");if(!t)return;let r=O,i=P.current,l=null!=F&&null!==i&&i.complete&&0!==i.naturalHeight&&0!==i.naturalWidth;l&&null!=F.excavation&&(r=R(O,F.excavation));let a=window.devicePixelRatio||1;e.height=e.width=n*a;let h=n/z*a;t.scale(h,h),t.fillStyle=o,t.fillRect(0,0,z,z),t.fillStyle=s,p?t.fill(new Path2D(C(r,_))):O.forEach(function(e,r){e.forEach(function(e,n){e&&t.fillRect(n+_,r+_,1,1)})}),F&&(t.globalAlpha=F.opacity),l&&t.drawImage(i,F.x+_,F.y+_,F.w,F.h)}}),l.useEffect(()=>{S(!1)},[A]);let L=f({height:n,width:n},g),b=null;return null!=A&&(b=l.createElement("img",{src:A,key:A,style:{display:"none"},onLoad:()=>{S(!0)},ref:P,crossOrigin:null==F?void 0:F.crossOrigin})),l.createElement(l.Fragment,null,l.createElement("canvas",f({style:L,height:n,width:n,ref:v,role:"img"},N)),b)}).displayName="QRCodeCanvas";var N=l.forwardRef(function(e,t){let{value:r,size:n=128,level:i="L",bgColor:o=E,fgColor:s=M,includeMargin:a=!1,minVersion:h=1,title:u,marginSize:c,imageSettings:m}=e,g=d(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","title","marginSize","imageSettings"]),{margin:p,cells:N,numCells:A,calculatedImageSettings:y}=w({value:r,level:i,minVersion:h,includeMargin:a,marginSize:c,imageSettings:m,size:n}),P=N,v=null;null!=m&&null!=y&&(null!=y.excavation&&(P=R(N,y.excavation)),v=l.createElement("image",{href:m.src,height:y.h,width:y.w,x:y.x+p,y:y.y+p,preserveAspectRatio:"none",opacity:y.opacity,crossOrigin:y.crossOrigin}));let I=C(P,p);return l.createElement("svg",f({height:n,width:n,viewBox:`0 0 ${A} ${A}`,ref:t,role:"img"},g),!!u&&l.createElement("title",null,u),l.createElement("path",{fill:o,d:`M0,0 h${A}v${A}H0z`,shapeRendering:"crispEdges"}),l.createElement("path",{fill:s,d:I,shapeRendering:"crispEdges"}),v)});N.displayName="QRCodeSVG"}}]);