﻿eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('M 2z(a){K b="2A+/";K c="";W(K d=0;d<a.P*4;d+=3){K e=(a[d>>2]>>8*(d%4)&1j)<<16|(a[d+1>>2]>>8*((d+1)%4)&1j)<<8|a[d+2>>2]>>8*((d+2)%4)&1j;W(K f=0;f<4;f++){O(d*8+f*6>a.P*32)c+=1Q;X c+=b.1k(e>>6*(3-f)&63)}}L c}M 1R(a){K b=1S?"1T":"1U";K c="";W(K d=0;d<a.P*4;d++){c+=b.1k(a[d>>2]>>d%4*8+4&15)+b.1k(a[d>>2]>>d%4*8&15)}L c}M 2B(a){K b="";K c=(1<<1a)-1;W(K d=0;d<a.P*32;d+=1a)b+=1V.2C(a[d>>5]>>>d%32&c);L b}M 1E(a){K b=1x();K c=(1<<1a)-1;W(K d=0;d<a.P*1a;d+=1a)b[d>>5]|=(a.1W(d/1a)&c)<<d%32;L b}M 1X(a,b){L a<<b|a>>>32-b}M 1b(a,b){K c=(a&N)+(b&N);K d=(a>>16)+(b>>16)+(c>>16);L d<<16|c&N}M 1Y(a,b){K c=1E(a);O(c.P>16)c=1y(c,a.P*1a);K d=1x(16),e=1x(16);W(K f=0;f<16;f++){d[f]=c[f]^1Z;e[f]=c[f]^25}K g=1y(d.1z(1E(b)),1e+b.P*1a);L 1y(e.1z(g),1e+1l)}M S(a,b,c,d,e,f,g){L 1r(c^(b|~d),a,b,e,f,g)}M T(a,b,c,d,e,f,g){L 1r(b^c^d,a,b,e,f,g)}M U(a,b,c,d,e,f,g){L 1r(b&d|c&~d,a,b,e,f,g)}M V(a,b,c,d,e,f,g){L 1r(b&c|~b&d,a,b,e,f,g)}M 1r(a,b,c,d,e,f){L 1b(1X(1b(1b(b,a),1b(d,f)),e),c)}M 1y(a,b){a[b>>5]|=1l<<b%32;a[(b+64>>>9<<4)+14]=b;K c=2D;K d=-2E;K e=-2F;K f=2G;W(K g=0;g<a.P;g+=16){K h=c;K i=d;K j=e;K k=f;c=V(c,d,e,f,a[g+0],7,-2H);f=V(f,c,d,e,a[g+1],12,-2I);e=V(e,f,c,d,a[g+2],17,2J);d=V(d,e,f,c,a[g+3],22,-2K);c=V(c,d,e,f,a[g+4],7,-2L);f=V(f,c,d,e,a[g+5],12,2M);e=V(e,f,c,d,a[g+6],17,-2N);d=V(d,e,f,c,a[g+7],22,-2O);c=V(c,d,e,f,a[g+8],7,2P);f=V(f,c,d,e,a[g+9],12,-2Q);e=V(e,f,c,d,a[g+10],17,-2R);d=V(d,e,f,c,a[g+11],22,-2S);c=V(c,d,e,f,a[g+12],7,2T);f=V(f,c,d,e,a[g+13],12,-2U);e=V(e,f,c,d,a[g+14],17,-2V);d=V(d,e,f,c,a[g+15],22,2W);c=U(c,d,e,f,a[g+1],5,-2X);f=U(f,c,d,e,a[g+6],9,-2Y);e=U(e,f,c,d,a[g+11],14,2Z);d=U(d,e,f,c,a[g+0],20,-30);c=U(c,d,e,f,a[g+5],5,-33);f=U(f,c,d,e,a[g+10],9,35);e=U(e,f,c,d,a[g+15],14,-36);d=U(d,e,f,c,a[g+4],20,-37);c=U(c,d,e,f,a[g+9],5,38);f=U(f,c,d,e,a[g+14],9,-3a);e=U(e,f,c,d,a[g+3],14,-3b);d=U(d,e,f,c,a[g+8],20,3c);c=U(c,d,e,f,a[g+13],5,-3d);f=U(f,c,d,e,a[g+2],9,-3e);e=U(e,f,c,d,a[g+7],14,3f);d=U(d,e,f,c,a[g+12],20,-3g);c=T(c,d,e,f,a[g+5],4,-3h);f=T(f,c,d,e,a[g+8],11,-3i);e=T(e,f,c,d,a[g+11],16,3j);d=T(d,e,f,c,a[g+14],23,-3k);c=T(c,d,e,f,a[g+1],4,-3l);f=T(f,c,d,e,a[g+4],11,3m);e=T(e,f,c,d,a[g+7],16,-3n);d=T(d,e,f,c,a[g+10],23,-3o);c=T(c,d,e,f,a[g+13],4,3p);f=T(f,c,d,e,a[g+0],11,-3q);e=T(e,f,c,d,a[g+3],16,-3r);d=T(d,e,f,c,a[g+6],23,3s);c=T(c,d,e,f,a[g+9],4,-3t);f=T(f,c,d,e,a[g+12],11,-3u);e=T(e,f,c,d,a[g+15],16,3v);d=T(d,e,f,c,a[g+2],23,-3w);c=S(c,d,e,f,a[g+0],6,-3x);f=S(f,c,d,e,a[g+7],10,3y);e=S(e,f,c,d,a[g+14],15,-3z);d=S(d,e,f,c,a[g+5],21,-3A);c=S(c,d,e,f,a[g+12],6,3B);f=S(f,c,d,e,a[g+3],10,-3C);e=S(e,f,c,d,a[g+10],15,-3D);d=S(d,e,f,c,a[g+1],21,-3E);c=S(c,d,e,f,a[g+8],6,3F);f=S(f,c,d,e,a[g+15],10,-3G);e=S(e,f,c,d,a[g+6],15,-3H);d=S(d,e,f,c,a[g+13],21,3I);c=S(c,d,e,f,a[g+4],6,-3J);f=S(f,c,d,e,a[g+11],10,-3K);e=S(e,f,c,d,a[g+2],15,3L);d=S(d,e,f,c,a[g+9],21,-3M);c=1b(c,h);d=1b(d,i);e=1b(e,j);f=1b(f,k)}L 1x(c,d,e,f)}M 1F(a,b){L 1R(1Y(a,b))}M 26(a){L $(a).3N[$(a).3O].1f}M $(a){L 1G.3P(a)}M 1s(a){$("1H").1c.1d="1m";$("1I").1c.1d="1m";$("1J").1c.1d="1K";$("3Q").1L=a;L 1M}M 1t(){$("1J").1c.1d="1m";$("1H").1c.1d="1m";$("1I").1c.1d="1K";L 3R}M 27(a){K b=1G.3S("3T");b.3U=b.3V=a;a=b.1L;L a}M 1n(){O(""===$("1N").1f)L 1s("主密码不能为空白");K a=1u($("P").1f,10);O(1O(a)||6>a||a>64)L 1s("密码长度必须在 6 到 64 之间");K b=1u($("Y").1f,10);O(1O(b)||-1>b||b>1)L 1s("系统内部错误");K c=1F("3W"+$("29").1f,$("1N").1f+1V(a+b*3X));K d=1F($("1N").1f+"3Y",$("29").1f+"空白时候用这个作为默认");K e=E 2a(c,"1g");K f=e.2b(d,"1g","Z-1e","1g");K g=["3Z","40","42","$43*+44;45~G%1&.46^47,48-j:49|4a@4b!=F#Q","4c&4d>4e*4f\\"=4g!.J<-~4h/{+4i?%Q(4j)4k}|4l;4m`4n$4o\'f@\\\\ 4^4p[9]4q,#4r:2"];K h=1u(26("4s"));O(2c g[h]=="2d")L 1s("系统内部错误");K j=g[h].P;K k="";a*=2;W(i=0;i<a;i+=2)k+=g[h].1P(1u(f.1P(i,2),16)%j,1);1o(b){Y-1:k=k.4t();1h;Y 1:k=k.4u()}$("1J").1c.1d="1m";$("1I").1c.1d="1m";$("1H").1c.1d="1K";$("4v").1L=27(k)}2e.4w=M(){$("1n").4x="";O(1G.4y){$("1n").2f("2g",1n);$("1t").2f("2g",1t)}X{$("1n").2h("2i",1n,1M);$("1t").2h("2i",1t,1M)}};K 1S=0;K 1Q="";K 1a=8;(M(){K a=8,b="",c=0,d=M(a,b){R.H=a;R.I=b},e=M(b){K c=[],d=(1<<a)-1,e=b.P*a,f;W(f=0;f<e;f+=a){c[f>>5]|=(b.1W(f/a)&d)<<32-a-f%32}L c},f=M(a){K b=[],c=a.P,d,e;W(d=0;d<c;d+=2){e=1u(a.1P(d,2),16);O(!1O(e)){b[d>>3]|=e<<24-4*(d%8)}X{L"4z 1g 4A"}}L b},g=M(a){K b=c?"1T":"1U",d="",e=a.P*4,f,g;W(f=0;f<e;f+=1){g=a[f>>2]>>(3-f%4)*8;d+=b.1k(g>>4&15)+b.1k(g&15)}L d},h=M(a){K c="4B"+"4C+/",d="",e=a.P*4,f,g,h;W(f=0;f<e;f+=3){h=(a[f>>2]>>8*(3-f%4)&1j)<<16|(a[f+1>>2]>>8*(3-(f+1)%4)&1j)<<8|a[f+2>>2]>>8*(3-(f+2)%4)&1j;W(g=0;g<4;g+=1){O(f*8+g*6<=a.P*32){d+=c.1k(h>>6*(3-g)&63)}X{d+=b}}}L d},i=M(a,b){O(b<=32){L E d(a.H>>>b|a.I<<32-b,a.I>>>b|a.H<<32-b)}X{L E d(a.I>>>b|a.H<<32-b,a.H>>>b|a.I<<32-b)}},j=M(a,b){O(b<=32){L E d(a.H>>>b,a.I>>>b|a.H<<32-b)}X{L E d(0,a.H<<32-b)}},k=M(a,b,c){L E d(a.H&b.H^~a.H&c.H,a.I&b.I^~a.I&c.I)},l=M(a,b,c){L E d(a.H&b.H^a.H&c.H^b.H&c.H,a.I&b.I^a.I&c.I^b.I&c.I)},m=M(a){K b=i(a,28),c=i(a,34),e=i(a,39);L E d(b.H^c.H^e.H,b.I^c.I^e.I)},n=M(a){K b=i(a,14),c=i(a,18),e=i(a,41);L E d(b.H^c.H^e.H,b.I^c.I^e.I)},o=M(a){K b=i(a,1),c=i(a,8),e=j(a,7);L E d(b.H^c.H^e.H,b.I^c.I^e.I)},p=M(a){K b=i(a,19),c=i(a,61),e=j(a,6);L E d(b.H^c.H^e.H,b.I^c.I^e.I)},q=M(a,b){K c,e,f,g;c=(a.I&N)+(b.I&N);e=(a.I>>>16)+(b.I>>>16)+(c>>>16);f=(e&N)<<16|c&N;c=(a.H&N)+(b.H&N)+(e>>>16);e=(a.H>>>16)+(b.H>>>16)+(c>>>16);g=(e&N)<<16|c&N;L E d(g,f)},r=M(a,b,c,e){K f,g,h,i;f=(a.I&N)+(b.I&N)+(c.I&N)+(e.I&N);g=(a.I>>>16)+(b.I>>>16)+(c.I>>>16)+(e.I>>>16)+(f>>>16);h=(g&N)<<16|f&N;f=(a.H&N)+(b.H&N)+(c.H&N)+(e.H&N)+(g>>>16);g=(a.H>>>16)+(b.H>>>16)+(c.H>>>16)+(e.H>>>16)+(f>>>16);i=(g&N)<<16|f&N;L E d(i,h)},s=M(a,b,c,e,f){K g,h,i,j;g=(a.I&N)+(b.I&N)+(c.I&N)+(e.I&N)+(f.I&N);h=(a.I>>>16)+(b.I>>>16)+(c.I>>>16)+(e.I>>>16)+(f.I>>>16)+(g>>>16);i=(h&N)<<16|g&N;g=(a.H&N)+(b.H&N)+(c.H&N)+(e.H&N)+(f.H&N)+(h>>>16);h=(a.H>>>16)+(b.H>>>16)+(c.H>>>16)+(e.H>>>16)+(f.H>>>16)+(g>>>16);j=(h&N)<<16|g&N;L E d(j,i)},t=M(a,b,c){K e,f,g,h,i,j,t,u,v,w,x,y,z,A,B,C=[],D;O(c==="Z-1p"||c==="Z-1e"){y=(b+1l>>10<<5)+31;B=[E d(4D,4E),E d(4F,4G),E d(4H,4I),E d(4J,4K),E d(4L,4M),E d(4N,4O),E d(4P,4Q),E d(4R,4S),E d(4T,4U),E d(4V,4W),E d(4X,4Y),E d(4Z,50),E d(51,52),E d(53,54),E d(55,56),E d(57,58),E d(59,5a),E d(5b,5c),E d(5d,5e),E d(5f,5g),E d(5h,5i),E d(5j,5k),E d(5l,5m),E d(5n,5o),E d(5p,5q),E d(5r,5s),E d(5t,5u),E d(5v,5w),E d(5x,5y),E d(5z,5A),E d(5B,5C),E d(5D,5E),E d(5F,5G),E d(5H,5I),E d(5J,5K),E d(5L,5M),E d(5N,5O),E d(5P,5Q),E d(5R,5S),E d(5T,5U),E d(5V,5W),E d(5X,5Y),E d(5Z,60),E d(62,65),E d(66,67),E d(68,69),E d(6a,6b),E d(6c,6d),E d(6e,6f),E d(6g,6h),E d(6i,6j),E d(6k,6l),E d(6m,6n),E d(6o,6p),E d(6q,6r),E d(6s,6t),E d(6u,6v),E d(6w,6x),E d(6y,6z),E d(6A,6B),E d(6C,6D),E d(6E,6F),E d(6G,6H),E d(6I,6J),E d(6K,6L),E d(6M,6N),E d(6O,6P),E d(6Q,6R),E d(6S,6T),E d(6U,6V),E d(6W,6X),E d(6Y,6Z),E d(70,71),E d(72,73),E d(74,75),E d(76,77),E d(78,79),E d(7a,7b),E d(7c,7d),E d(7e,7f)];O(c==="Z-1p"){x=[E d(7g,7h),E d(7i,7j),E d(7k,7l),E d(7m,7n),E d(7o,7p),E d(7q,7r),E d(7s,7t),E d(7u,7v)]}X{x=[E d(7w,7x),E d(7y,7z),E d(7A,7B),E d(7C,7D),E d(7E,7F),E d(7G,7H),E d(7I,7J),E d(7K,7L)]}}a[b>>5]|=1l<<24-b%32;a[y]=b;D=a.P;W(z=0;z<D;z+=32){e=x[0];f=x[1];g=x[2];h=x[3];i=x[4];j=x[5];t=x[6];u=x[7];W(A=0;A<7M;A+=1){O(A<16){C[A]=E d(a[A*2+z],a[A*2+z+1])}X{C[A]=r(p(C[A-2]),C[A-7],o(C[A-15]),C[A-16])}v=s(u,n(i),k(i,j,t),B[A],C[A]);w=q(m(e),l(e,f,g));u=t;t=j;j=i;i=q(h,v);h=g;g=f;f=e;e=q(v,w)}x[0]=q(e,x[0]);x[1]=q(f,x[1]);x[2]=q(g,x[2]);x[3]=q(h,x[3]);x[4]=q(i,x[4]);x[5]=q(j,x[5]);x[6]=q(t,x[6]);x[7]=q(u,x[7])}1o(c){Y"Z-1p":L[x[0].H,x[0].I,x[1].H,x[1].I,x[2].H,x[2].I,x[3].H,x[3].I,x[4].H,x[4].I,x[5].H,x[5].I];Y"Z-1e":L[x[0].H,x[0].I,x[1].H,x[1].I,x[2].H,x[2].I,x[3].H,x[3].I,x[4].H,x[4].I,x[5].H,x[5].I,x[6].H,x[6].I,x[7].H,x[7].I];1v:L[]}},u=M(b,c){R.1A=1i;R.1B=1i;R.1q=1i;R.1w=1i;O("1g"===c){O(0!==b.P%2){L"2j 2k 2l 2m 2n 2o"}R.1q=b.P*4;R.1w=f(b)}X O("2p"===c||"2d"===2c c){R.1q=b.P*a;R.1w=e(b)}X{L"2q 2j 2r 2s"}};u.7N={7O:M(a,b){K c=1i,d=R.1w.7P();1o(b){Y"1g":c=g;1h;Y"2t":c=h;1h;1v:L"2u 1C 1D"}1o(a){Y"Z-1p":O(1i===R.1A){R.1A=t(d,R.1q,a)}L c(R.1A);Y"Z-1e":O(1i===R.1B){R.1B=t(d,R.1q,a)}L c(R.1B);1v:L"2v 1C 1D"}},2b:M(b,c,d,i){K j,k,l,m,n,o,p=[],q=[];1o(i){Y"1g":j=g;1h;Y"2t":j=h;1h;1v:L"2u 1C 1D"}1o(d){Y"Z-1p":o=1p;1h;Y"Z-1e":o=1e;1h;1v:L"2v 1C 1D"}O("1g"===c){O(0!==b.P%2){L"2w 2k 2l 2m 2n 2o"}k=f(b);n=b.P*4}X O("2p"===c){k=e(b);n=b.P*a}X{L"2q 2w 2r 2s"}O(1l<n/8){k=t(k,n,d);k[31]&=2x}X O(1l>n/8){k[31]&=2x}W(l=0;l<=31;l+=1){p[l]=k[l]^1Z;q[l]=k[l]^25}m=t(p.1z(R.1w),2y+R.1q,d);m=t(q.1z(m),2y+o,d);L j(m)}};2e.2a=u})()',62,486,'||||||||||||||||||||||||||||||||||||||||new|||highOrder|lowOrder||var|return|function|65535|if|length||this|md5_ii|md5_hh|md5_gg|md5_ff|for|else|case|SHA|||||||||||chrsz|safe_add|style|display|512|value|HEX|break|null|255|charAt|128|none|generate|switch|384|strBinLen|md5_cmn|err|reset|parseInt|default|strToHash|Array|core_md5|concat|sha384|sha512|NOT|RECOGNIZED|str2binl|md5|document|result|information|error|block|innerHTML|false|primary|isNaN|substr|b64pad|binl2hex|hexcase|0123456789ABCDEF|0123456789abcdef|String|charCodeAt|bit_rol|core_hmac_md5|909522486||||||1549556828|select|htmlentities||identity|jsSHA|getHMAC|typeof|undefined|window|attachEvent|onclick|addEventListener|click|TEXT|MUST|BE|IN|BYTE|INCREMENTS|ASCII|UNKNOWN|INPUT|TYPE|B64|FORMAT|HASH|KEY|4294967040|1024|binl2b64|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|binl2str|fromCharCode|1732584193|271733879|1732584194|271733878|680876936|389564586|606105819|1044525330|176418897|1200080426|1473231341|45705983|1770035416|1958414417|42063|1990404162|1804603682|40341101|1502002290|1236535329|165796510|1069501632|643717713|373897302|||701558691||38016083|660478335|405537848|568446438||1019803690|187363961|1163531501|1444681467|51403784|1735328473|1926607734|378558|2022574463|1839030562|35309556|1530992060|1272893353|155497632|1094730640|681279174|358537222|722521979|76029189|640364487|421815835|530742520|995338651|198630844|1126891415|1416354905|57434055|1700485571|1894986606|1051523|2054922799|1873313359|30611744|1560198380|1309151649|145523070|1120210379|718787259|343485551|options|selectedIndex|getElementById|message|true|createElement|div|innerText|textContent|Sunyanzi|100|SafePassword|rHI5XMYNpPaDgAmlshz6yibo2kTB9wRUGtxcv4V8ES0juKqnFLJOW1ZCefd37Q|3750286194||nxoABlszgOSahDTeKYLcEXrvqWmuGNRwVCHyFIkjUMpQbiJPZtfd|TSKVa|JcnD|Hw8_|s2B|CfEZX5|dWLo|IhP|k0Yt9ilRgz4xe6OrqU3yM|pbuNm7Av|Wq|KApmBzwO|lN|E_HZg7|ivy|G3|1rCM|S0FbL8ktIPxY|Vu|dR|6jo|na|XU|eTh|s5|cD|type|toUpperCase|toLowerCase|passwd|onload|disabled|all|INVALID|STRING|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz|0123456789|1116352408|3609767458|1899447441|602891725|3049323471|3964484399|3921009573|2173295548|961987163|4081628472|1508970993|3053834265|2453635748|2937671579|2870763221|3664609560|3624381080|2734883394|310598401|1164996542|607225278|1323610764|1426881987|3590304994|1925078388|4068182383|2162078206|991336113|2614888103|633803317|3248222580|3479774868|3835390401|2666613458|4022224774|944711139|264347078|2341262773|604807628|2007800933|770255983|1495990901|1249150122|1856431235|1555081692|3175218132|1996064986|2198950837|2554220882|3999719339|2821834349|766784016|2952996808|2566594879|3210313671|3203337956|3336571891|1034457026|3584528711|2466948901|113926993|3758326383|338241895|168717936|666307205|1188179964|773529912|1546045734|1294757372|1522805485|1396182291|2643833823|1695183700|2343527390|1986661051|1014477480|2177026350|1206759142|2456956037|344077627|2730485921|1290863460|2820302411|3158454273|3259730800|3505952657||3345764771|||106217008|3516065817|3606008344|3600352804|1432725776|4094571909|1467031594|275423344|851169720|430227734|3100823752|506948616|1363258195|659060556|3750685593|883997877|3785050280|958139571|3318307427|1322822218|3812723403|1537002063|2003034995|1747873779|3602036899|1955562222|1575990012|2024104815|1125592928|2227730452|2716904306|2361852424|442776044|2428436474|593698344|2756734187|3733110249|3204031479|2999351573|3329325298|3815920427|3391569614|3928383900|3515267271|566280711|3940187606|3454069534|4118630271|4000239992|116418474|1914138554|174292421|2731055270|289380356|3203993006|460393269|320620315|685471733|587496836|852142971|1086792851|1017036298|365543100|1126000580|2618297676|1288033470|3409855158|1501505948|4234509866|1607167915|987167468|1816402316|1246189591|3418070365|3238371032|1654270250|914150663|2438529370|812702999|355462360|4144912697|1731405415|4290775857|41048885895|1750603025|3675008525|1694076839|1203062813|3204075428|1779033703|4089235720|3144134277|2227873595|1013904242|4271175723|2773480762|1595750129|1359893119|2917565137|2600822924|725511199|528734635|4215389547|1541459225|327033209|80|prototype|getHash|slice'.split('|'),0,{}))
  
