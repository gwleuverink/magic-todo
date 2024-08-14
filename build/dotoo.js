var N="top",I="bottom",j="right",k="left",ht="auto",be=[N,I,j,k],me="start",Ce="end",Jt="clippingParents",yt="viewport",Ie="popper",Qt="reference",At=be.reduce(function(e,t){return e.concat([t+"-"+me,t+"-"+Ce])},[]),bt=[].concat(be,[ht]).reduce(function(e,t){return e.concat([t,t+"-"+me,t+"-"+Ce])},[]),$r="beforeRead",Fr="read",Xr="afterRead",Yr="beforeMain",zr="main",_r="afterMain",qr="beforeWrite",Gr="write",Kr="afterWrite",Zt=[$r,Fr,Xr,Yr,zr,_r,qr,Gr,Kr];function U(e){return e?(e.nodeName||"").toLowerCase():null}function S(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Q(e){var t=S(e).Element;return e instanceof t||e instanceof Element}function H(e){var t=S(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function He(e){if(typeof ShadowRoot>"u")return!1;var t=S(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Jr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},i=t.attributes[r]||{},s=t.elements[r];!H(s)||!U(s)||(Object.assign(s.style,o),Object.keys(i).forEach(function(u){var f=i[u];f===!1?s.removeAttribute(u):s.setAttribute(u,f===!0?"":f)}))})}function Qr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var i=t.elements[o],s=t.attributes[o]||{},u=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),f=u.reduce(function(p,l){return p[l]="",p},{});!H(i)||!U(i)||(Object.assign(i.style,f),Object.keys(s).forEach(function(p){i.removeAttribute(p)}))})}}var Je={name:"applyStyles",enabled:!0,phase:"write",fn:Jr,effect:Qr,requires:["computeStyles"]};function $(e){return e.split("-")[0]}var re=Math.max,Pe=Math.min,ve=Math.round;function Ue(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Qe(){return!/^((?!chrome|android).)*safari/i.test(Ue())}function Z(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),i=1,s=1;t&&H(e)&&(i=e.offsetWidth>0&&ve(o.width)/e.offsetWidth||1,s=e.offsetHeight>0&&ve(o.height)/e.offsetHeight||1);var u=Q(e)?S(e):window,f=u.visualViewport,p=!Qe()&&r,l=(o.left+(p&&f?f.offsetLeft:0))/i,c=(o.top+(p&&f?f.offsetTop:0))/s,w=o.width/i,x=o.height/s;return{width:w,height:x,top:c,right:l+w,bottom:c+x,left:l,x:l,y:c}}function Ae(e){var t=Z(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function Ze(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&He(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function q(e){return S(e).getComputedStyle(e)}function Dt(e){return["table","td","th"].indexOf(U(e))>=0}function X(e){return((Q(e)?e.ownerDocument:e.document)||window.document).documentElement}function ge(e){return U(e)==="html"?e:e.assignedSlot||e.parentNode||(He(e)?e.host:null)||X(e)}function er(e){return!H(e)||q(e).position==="fixed"?null:e.offsetParent}function Zr(e){var t=/firefox/i.test(Ue()),r=/Trident/i.test(Ue());if(r&&H(e)){var o=q(e);if(o.position==="fixed")return null}var i=ge(e);for(He(i)&&(i=i.host);H(i)&&["html","body"].indexOf(U(i))<0;){var s=q(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function oe(e){for(var t=S(e),r=er(e);r&&Dt(r)&&q(r).position==="static";)r=er(r);return r&&(U(r)==="html"||U(r)==="body"&&q(r).position==="static")?t:r||Zr(e)||t}function De(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Se(e,t,r){return re(e,Pe(t,r))}function tr(e,t,r){var o=Se(e,t,r);return o>r?r:o}function et(){return{top:0,right:0,bottom:0,left:0}}function tt(e){return Object.assign({},et(),e)}function rt(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var eo=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,tt(typeof t!="number"?t:rt(t,be))};function to(e){var t,r=e.state,o=e.name,i=e.options,s=r.elements.arrow,u=r.modifiersData.popperOffsets,f=$(r.placement),p=De(f),l=[k,j].indexOf(f)>=0,c=l?"height":"width";if(!(!s||!u)){var w=eo(i.padding,r),x=Ae(s),v=p==="y"?N:k,g=p==="y"?I:j,y=r.rects.reference[c]+r.rects.reference[p]-u[p]-r.rects.popper[c],b=u[p]-r.rects.reference[p],O=oe(s),E=O?p==="y"?O.clientHeight||0:O.clientWidth||0:0,A=y/2-b/2,n=w[v],T=E-x[c]-w[g],d=E/2-x[c]/2+A,D=Se(n,d,T),W=p;r.modifiersData[o]=(t={},t[W]=D,t.centerOffset=D-d,t)}}function ro(e){var t=e.state,r=e.options,o=r.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||Ze(t.elements.popper,i)&&(t.elements.arrow=i))}var rr={name:"arrow",enabled:!0,phase:"main",fn:to,effect:ro,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(e){return e.split("-")[1]}var oo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function no(e,t){var r=e.x,o=e.y,i=t.devicePixelRatio||1;return{x:ve(r*i)/i||0,y:ve(o*i)/i||0}}function or(e){var t,r=e.popper,o=e.popperRect,i=e.placement,s=e.variation,u=e.offsets,f=e.position,p=e.gpuAcceleration,l=e.adaptive,c=e.roundOffsets,w=e.isFixed,x=u.x,v=x===void 0?0:x,g=u.y,y=g===void 0?0:g,b=typeof c=="function"?c({x:v,y}):{x:v,y};v=b.x,y=b.y;var O=u.hasOwnProperty("x"),E=u.hasOwnProperty("y"),A=k,n=N,T=window;if(l){var d=oe(r),D="clientHeight",W="clientWidth";if(d===S(r)&&(d=X(r),q(d).position!=="static"&&f==="absolute"&&(D="scrollHeight",W="scrollWidth")),d=d,i===N||(i===k||i===j)&&s===Ce){n=I;var B=w&&d===T&&T.visualViewport?T.visualViewport.height:d[D];y-=B-o.height,y*=p?1:-1}if(i===k||(i===N||i===I)&&s===Ce){A=j;var L=w&&d===T&&T.visualViewport?T.visualViewport.width:d[W];v-=L-o.width,v*=p?1:-1}}var V=Object.assign({position:f},l&&oo),R=c===!0?no({x:v,y},S(r)):{x:v,y};if(v=R.x,y=R.y,p){var M;return Object.assign({},V,(M={},M[n]=E?"0":"",M[A]=O?"0":"",M.transform=(T.devicePixelRatio||1)<=1?"translate("+v+"px, "+y+"px)":"translate3d("+v+"px, "+y+"px, 0)",M))}return Object.assign({},V,(t={},t[n]=E?y+"px":"",t[A]=O?v+"px":"",t.transform="",t))}function io(e){var t=e.state,r=e.options,o=r.gpuAcceleration,i=o===void 0?!0:o,s=r.adaptive,u=s===void 0?!0:s,f=r.roundOffsets,p=f===void 0?!0:f,l={placement:$(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,or(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:u,roundOffsets:p})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,or(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var nr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:io,data:{}};var xt={passive:!0};function ao(e){var t=e.state,r=e.instance,o=e.options,i=o.scroll,s=i===void 0?!0:i,u=o.resize,f=u===void 0?!0:u,p=S(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach(function(c){c.addEventListener("scroll",r.update,xt)}),f&&p.addEventListener("resize",r.update,xt),function(){s&&l.forEach(function(c){c.removeEventListener("scroll",r.update,xt)}),f&&p.removeEventListener("resize",r.update,xt)}}var ir={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ao,data:{}};var so={left:"right",right:"left",bottom:"top",top:"bottom"};function $e(e){return e.replace(/left|right|bottom|top/g,function(t){return so[t]})}var po={start:"end",end:"start"};function wt(e){return e.replace(/start|end/g,function(t){return po[t]})}function Me(e){var t=S(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Le(e){return Z(X(e)).left+Me(e).scrollLeft}function St(e,t){var r=S(e),o=X(e),i=r.visualViewport,s=o.clientWidth,u=o.clientHeight,f=0,p=0;if(i){s=i.width,u=i.height;var l=Qe();(l||!l&&t==="fixed")&&(f=i.offsetLeft,p=i.offsetTop)}return{width:s,height:u,x:f+Le(e),y:p}}function Mt(e){var t,r=X(e),o=Me(e),i=(t=e.ownerDocument)==null?void 0:t.body,s=re(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),u=re(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),f=-o.scrollLeft+Le(e),p=-o.scrollTop;return q(i||r).direction==="rtl"&&(f+=re(r.clientWidth,i?i.clientWidth:0)-s),{width:s,height:u,x:f,y:p}}function Re(e){var t=q(e),r=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+o)}function Ot(e){return["html","body","#document"].indexOf(U(e))>=0?e.ownerDocument.body:H(e)&&Re(e)?e:Ot(ge(e))}function xe(e,t){var r;t===void 0&&(t=[]);var o=Ot(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),s=S(o),u=i?[s].concat(s.visualViewport||[],Re(o)?o:[]):o,f=t.concat(u);return i?f:f.concat(xe(ge(u)))}function Fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function fo(e,t){var r=Z(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function ar(e,t,r){return t===yt?Fe(St(e,r)):Q(t)?fo(t,r):Fe(Mt(X(e)))}function uo(e){var t=xe(ge(e)),r=["absolute","fixed"].indexOf(q(e).position)>=0,o=r&&H(e)?oe(e):e;return Q(o)?t.filter(function(i){return Q(i)&&Ze(i,o)&&U(i)!=="body"}):[]}function Lt(e,t,r,o){var i=t==="clippingParents"?uo(e):[].concat(t),s=[].concat(i,[r]),u=s[0],f=s.reduce(function(p,l){var c=ar(e,l,o);return p.top=re(c.top,p.top),p.right=Pe(c.right,p.right),p.bottom=Pe(c.bottom,p.bottom),p.left=re(c.left,p.left),p},ar(e,u,o));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function ot(e){var t=e.reference,r=e.element,o=e.placement,i=o?$(o):null,s=o?ee(o):null,u=t.x+t.width/2-r.width/2,f=t.y+t.height/2-r.height/2,p;switch(i){case N:p={x:u,y:t.y-r.height};break;case I:p={x:u,y:t.y+t.height};break;case j:p={x:t.x+t.width,y:f};break;case k:p={x:t.x-r.width,y:f};break;default:p={x:t.x,y:t.y}}var l=i?De(i):null;if(l!=null){var c=l==="y"?"height":"width";switch(s){case me:p[l]=p[l]-(t[c]/2-r[c]/2);break;case Ce:p[l]=p[l]+(t[c]/2-r[c]/2);break;default:}}return p}function ne(e,t){t===void 0&&(t={});var r=t,o=r.placement,i=o===void 0?e.placement:o,s=r.strategy,u=s===void 0?e.strategy:s,f=r.boundary,p=f===void 0?Jt:f,l=r.rootBoundary,c=l===void 0?yt:l,w=r.elementContext,x=w===void 0?Ie:w,v=r.altBoundary,g=v===void 0?!1:v,y=r.padding,b=y===void 0?0:y,O=tt(typeof b!="number"?b:rt(b,be)),E=x===Ie?Qt:Ie,A=e.rects.popper,n=e.elements[g?E:x],T=Lt(Q(n)?n:n.contextElement||X(e.elements.popper),p,c,u),d=Z(e.elements.reference),D=ot({reference:d,element:A,strategy:"absolute",placement:i}),W=Fe(Object.assign({},A,D)),B=x===Ie?W:d,L={top:T.top-B.top+O.top,bottom:B.bottom-T.bottom+O.bottom,left:T.left-B.left+O.left,right:B.right-T.right+O.right},V=e.modifiersData.offset;if(x===Ie&&V){var R=V[i];Object.keys(L).forEach(function(M){var G=[j,I].indexOf(M)>=0?1:-1,K=[N,I].indexOf(M)>=0?"y":"x";L[M]+=R[K]*G})}return L}function Rt(e,t){t===void 0&&(t={});var r=t,o=r.placement,i=r.boundary,s=r.rootBoundary,u=r.padding,f=r.flipVariations,p=r.allowedAutoPlacements,l=p===void 0?bt:p,c=ee(o),w=c?f?At:At.filter(function(g){return ee(g)===c}):be,x=w.filter(function(g){return l.indexOf(g)>=0});x.length===0&&(x=w);var v=x.reduce(function(g,y){return g[y]=ne(e,{placement:y,boundary:i,rootBoundary:s,padding:u})[$(y)],g},{});return Object.keys(v).sort(function(g,y){return v[g]-v[y]})}function co(e){if($(e)===ht)return[];var t=$e(e);return[wt(e),t,wt(t)]}function lo(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var i=r.mainAxis,s=i===void 0?!0:i,u=r.altAxis,f=u===void 0?!0:u,p=r.fallbackPlacements,l=r.padding,c=r.boundary,w=r.rootBoundary,x=r.altBoundary,v=r.flipVariations,g=v===void 0?!0:v,y=r.allowedAutoPlacements,b=t.options.placement,O=$(b),E=O===b,A=p||(E||!g?[$e(b)]:co(b)),n=[b].concat(A).reduce(function(ue,te){return ue.concat($(te)===ht?Rt(t,{placement:te,boundary:c,rootBoundary:w,padding:l,flipVariations:g,allowedAutoPlacements:y}):te)},[]),T=t.rects.reference,d=t.rects.popper,D=new Map,W=!0,B=n[0],L=0;L<n.length;L++){var V=n[L],R=$(V),M=ee(V)===me,G=[N,I].indexOf(R)>=0,K=G?"width":"height",Y=ne(t,{placement:V,boundary:c,rootBoundary:w,altBoundary:x,padding:l}),z=G?M?j:k:M?I:N;T[K]>d[K]&&(z=$e(z));var F=$e(z),ae=[];if(s&&ae.push(Y[R]<=0),f&&ae.push(Y[z]<=0,Y[F]<=0),ae.every(function(ue){return ue})){B=V,W=!1;break}D.set(V,ae)}if(W)for(var se=g?3:1,we=function(te){var ce=n.find(function(ke){var le=D.get(ke);if(le)return le.slice(0,te).every(function(Be){return Be})});if(ce)return B=ce,"break"},pe=se;pe>0;pe--){var Oe=we(pe);if(Oe==="break")break}t.placement!==B&&(t.modifiersData[o]._skip=!0,t.placement=B,t.reset=!0)}}var sr={name:"flip",enabled:!0,phase:"main",fn:lo,requiresIfExists:["offset"],data:{_skip:!1}};function pr(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function fr(e){return[N,j,I,k].some(function(t){return e[t]>=0})}function mo(e){var t=e.state,r=e.name,o=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,u=ne(t,{elementContext:"reference"}),f=ne(t,{altBoundary:!0}),p=pr(u,o),l=pr(f,i,s),c=fr(p),w=fr(l);t.modifiersData[r]={referenceClippingOffsets:p,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:w},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":w})}var ur={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:mo};function vo(e,t,r){var o=$(e),i=[k,N].indexOf(o)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,u=s[0],f=s[1];return u=u||0,f=(f||0)*i,[k,j].indexOf(o)>=0?{x:f,y:u}:{x:u,y:f}}function go(e){var t=e.state,r=e.options,o=e.name,i=r.offset,s=i===void 0?[0,0]:i,u=bt.reduce(function(c,w){return c[w]=vo(w,t.rects,s),c},{}),f=u[t.placement],p=f.x,l=f.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=l),t.modifiersData[o]=u}var cr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:go};function ho(e){var t=e.state,r=e.name;t.modifiersData[r]=ot({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var lr={name:"popperOffsets",enabled:!0,phase:"read",fn:ho,data:{}};function Nt(e){return e==="x"?"y":"x"}function yo(e){var t=e.state,r=e.options,o=e.name,i=r.mainAxis,s=i===void 0?!0:i,u=r.altAxis,f=u===void 0?!1:u,p=r.boundary,l=r.rootBoundary,c=r.altBoundary,w=r.padding,x=r.tether,v=x===void 0?!0:x,g=r.tetherOffset,y=g===void 0?0:g,b=ne(t,{boundary:p,rootBoundary:l,padding:w,altBoundary:c}),O=$(t.placement),E=ee(t.placement),A=!E,n=De(O),T=Nt(n),d=t.modifiersData.popperOffsets,D=t.rects.reference,W=t.rects.popper,B=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,L=typeof B=="number"?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),V=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(d){if(s){var M,G=n==="y"?N:k,K=n==="y"?I:j,Y=n==="y"?"height":"width",z=d[n],F=z+b[G],ae=z-b[K],se=v?-W[Y]/2:0,we=E===me?D[Y]:W[Y],pe=E===me?-W[Y]:-D[Y],Oe=t.elements.arrow,ue=v&&Oe?Ae(Oe):{width:0,height:0},te=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:et(),ce=te[G],ke=te[K],le=Se(0,D[Y],ue[Y]),Be=A?D[Y]/2-se-le-ce-L.mainAxis:we-le-ce-L.mainAxis,he=A?-D[Y]/2+se+le+ke+L.mainAxis:pe+le+ke+L.mainAxis,je=t.elements.arrow&&oe(t.elements.arrow),at=je?n==="y"?je.clientTop||0:je.clientLeft||0:0,ze=(M=V==null?void 0:V[n])!=null?M:0,st=z+Be-ze-at,pt=z+he-ze,_e=Se(v?Pe(F,st):F,z,v?re(ae,pt):ae);d[n]=_e,R[n]=_e-z}if(f){var qe,ft=n==="x"?N:k,ut=n==="x"?I:j,de=d[T],ye=T==="y"?"height":"width",Ge=de+b[ft],Ee=de-b[ut],Ke=[N,k].indexOf(O)!==-1,ct=(qe=V==null?void 0:V[T])!=null?qe:0,lt=Ke?Ge:de-D[ye]-W[ye]-ct+L.altAxis,dt=Ke?de+D[ye]+W[ye]-ct-L.altAxis:Ee,mt=v&&Ke?tr(lt,de,dt):Se(v?lt:Ge,de,v?dt:Ee);d[T]=mt,R[T]=mt-de}t.modifiersData[o]=R}}var dr={name:"preventOverflow",enabled:!0,phase:"main",fn:yo,requiresIfExists:["offset"]};function kt(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Bt(e){return e===S(e)||!H(e)?Me(e):kt(e)}function bo(e){var t=e.getBoundingClientRect(),r=ve(t.width)/e.offsetWidth||1,o=ve(t.height)/e.offsetHeight||1;return r!==1||o!==1}function jt(e,t,r){r===void 0&&(r=!1);var o=H(t),i=H(t)&&bo(t),s=X(t),u=Z(e,i,r),f={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(o||!o&&!r)&&((U(t)!=="body"||Re(s))&&(f=Bt(t)),H(t)?(p=Z(t,!0),p.x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=Le(s))),{x:u.left+f.scrollLeft-p.x,y:u.top+f.scrollTop-p.y,width:u.width,height:u.height}}function xo(e){var t=new Map,r=new Set,o=[];e.forEach(function(s){t.set(s.name,s)});function i(s){r.add(s.name);var u=[].concat(s.requires||[],s.requiresIfExists||[]);u.forEach(function(f){if(!r.has(f)){var p=t.get(f);p&&i(p)}}),o.push(s)}return e.forEach(function(s){r.has(s.name)||i(s)}),o}function Wt(e){var t=xo(e);return Zt.reduce(function(r,o){return r.concat(t.filter(function(i){return i.phase===o}))},[])}function Vt(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function It(e){var t=e.reduce(function(r,o){var i=r[o.name];return r[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var mr={placement:"bottom",modifiers:[],strategy:"absolute"};function vr(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function gr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,i=t.defaultOptions,s=i===void 0?mr:i;return function(f,p,l){l===void 0&&(l=s);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},mr,s),modifiersData:{},elements:{reference:f,popper:p},attributes:{},styles:{}},w=[],x=!1,v={state:c,setOptions:function(O){var E=typeof O=="function"?O(c.options):O;y(),c.options=Object.assign({},s,c.options,E),c.scrollParents={reference:Q(f)?xe(f):f.contextElement?xe(f.contextElement):[],popper:xe(p)};var A=Wt(It([].concat(o,c.options.modifiers)));return c.orderedModifiers=A.filter(function(n){return n.enabled}),g(),v.update()},forceUpdate:function(){if(!x){var O=c.elements,E=O.reference,A=O.popper;if(vr(E,A)){c.rects={reference:jt(E,oe(A),c.options.strategy==="fixed"),popper:Ae(A)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(L){return c.modifiersData[L.name]=Object.assign({},L.data)});for(var n=0;n<c.orderedModifiers.length;n++){if(c.reset===!0){c.reset=!1,n=-1;continue}var T=c.orderedModifiers[n],d=T.fn,D=T.options,W=D===void 0?{}:D,B=T.name;typeof d=="function"&&(c=d({state:c,options:W,name:B,instance:v})||c)}}}},update:Vt(function(){return new Promise(function(b){v.forceUpdate(),b(c)})}),destroy:function(){y(),x=!0}};if(!vr(f,p))return v;v.setOptions(l).then(function(b){!x&&l.onFirstUpdate&&l.onFirstUpdate(b)});function g(){c.orderedModifiers.forEach(function(b){var O=b.name,E=b.options,A=E===void 0?{}:E,n=b.effect;if(typeof n=="function"){var T=n({state:c,name:O,instance:v,options:A}),d=function(){};w.push(T||d)}})}function y(){w.forEach(function(b){return b()}),w=[]}return v}}var wo=[ir,lr,nr,Je,cr,sr,dr,rr,ur],Ht=gr({defaultModifiers:wo});var Oo="tippy-box",Pr="tippy-content",Eo="tippy-backdrop",Ar="tippy-arrow",Dr="tippy-svg-arrow",Ne={passive:!0,capture:!0},Sr=function(){return document.body};function Ut(e,t,r){if(Array.isArray(e)){var o=e[t];return o==null?Array.isArray(r)?r[t]:r:o}return e}function _t(e,t){var r={}.toString.call(e);return r.indexOf("[object")===0&&r.indexOf(t+"]")>-1}function Mr(e,t){return typeof e=="function"?e.apply(void 0,t):e}function hr(e,t){if(t===0)return e;var r;return function(o){clearTimeout(r),r=setTimeout(function(){e(o)},t)}}function To(e){return e.split(/\s+/).filter(Boolean)}function Xe(e){return[].concat(e)}function yr(e,t){e.indexOf(t)===-1&&e.push(t)}function Co(e){return e.filter(function(t,r){return e.indexOf(t)===r})}function Lr(e){return e.split("-")[0]}function Ye(e){return[].slice.call(e)}function br(e){return Object.keys(e).reduce(function(t,r){return e[r]!==void 0&&(t[r]=e[r]),t},{})}function nt(){return document.createElement("div")}function Tt(e){return["Element","Fragment"].some(function(t){return _t(e,t)})}function Po(e){return _t(e,"NodeList")}function Rr(e){return _t(e,"MouseEvent")}function Ao(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function Do(e){return Tt(e)?[e]:Po(e)?Ye(e):Array.isArray(e)?e:Ye(document.querySelectorAll(e))}function $t(e,t){e.forEach(function(r){r&&(r.style.transitionDuration=t+"ms")})}function xr(e,t){e.forEach(function(r){r&&r.setAttribute("data-state",t)})}function So(e){var t,r=Xe(e),o=r[0];return o!=null&&(t=o.ownerDocument)!=null&&t.body?o.ownerDocument:document}function Mo(e,t){var r=t.clientX,o=t.clientY;return e.every(function(i){var s=i.popperRect,u=i.popperState,f=i.props,p=f.interactiveBorder,l=Lr(u.placement),c=u.modifiersData.offset;if(!c)return!0;var w=l==="bottom"?c.top.y:0,x=l==="top"?c.bottom.y:0,v=l==="right"?c.left.x:0,g=l==="left"?c.right.x:0,y=s.top-o+w>p,b=o-s.bottom-x>p,O=s.left-r+v>p,E=r-s.right-g>p;return y||b||O||E})}function Ft(e,t,r){var o=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(i){e[o](i,r)})}function wr(e,t){for(var r=t;r;){var o;if(e.contains(r))return!0;r=r.getRootNode==null||(o=r.getRootNode())==null?void 0:o.host}return!1}var fe={isTouch:!1},Or=0;function Lo(){fe.isTouch||(fe.isTouch=!0,window.performance&&document.addEventListener("mousemove",Nr))}function Nr(){var e=performance.now();e-Or<20&&(fe.isTouch=!1,document.removeEventListener("mousemove",Nr)),Or=e}function Ro(){var e=document.activeElement;if(Ao(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function No(){document.addEventListener("touchstart",Lo,Ne),window.addEventListener("blur",Ro)}var ko=typeof window<"u"&&typeof document<"u",Bo=ko?!!window.msCrypto:!1;var jo={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Wo={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},ie=Object.assign({appendTo:Sr,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},jo,Wo),Vo=Object.keys(ie),Io=function(t){var r=Object.keys(t);r.forEach(function(o){ie[o]=t[o]})};function kr(e){var t=e.plugins||[],r=t.reduce(function(o,i){var s=i.name,u=i.defaultValue;if(s){var f;o[s]=e[s]!==void 0?e[s]:(f=ie[s])!=null?f:u}return o},{});return Object.assign({},e,r)}function Ho(e,t){var r=t?Object.keys(kr(Object.assign({},ie,{plugins:t}))):Vo,o=r.reduce(function(i,s){var u=(e.getAttribute("data-tippy-"+s)||"").trim();if(!u)return i;if(s==="content")i[s]=u;else try{i[s]=JSON.parse(u)}catch(f){i[s]=u}return i},{});return o}function Er(e,t){var r=Object.assign({},t,{content:Mr(t.content,[e])},t.ignoreAttributes?{}:Ho(e,t.plugins));return r.aria=Object.assign({},ie.aria,r.aria),r.aria={expanded:r.aria.expanded==="auto"?t.interactive:r.aria.expanded,content:r.aria.content==="auto"?t.interactive?null:"describedby":r.aria.content},r}var Uo=function(){return"innerHTML"};function Yt(e,t){e[Uo()]=t}function Tr(e){var t=nt();return e===!0?t.className=Ar:(t.className=Dr,Tt(e)?t.appendChild(e):Yt(t,e)),t}function Cr(e,t){Tt(t.content)?(Yt(e,""),e.appendChild(t.content)):typeof t.content!="function"&&(t.allowHTML?Yt(e,t.content):e.textContent=t.content)}function zt(e){var t=e.firstElementChild,r=Ye(t.children);return{box:t,content:r.find(function(o){return o.classList.contains(Pr)}),arrow:r.find(function(o){return o.classList.contains(Ar)||o.classList.contains(Dr)}),backdrop:r.find(function(o){return o.classList.contains(Eo)})}}function Br(e){var t=nt(),r=nt();r.className=Oo,r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var o=nt();o.className=Pr,o.setAttribute("data-state","hidden"),Cr(o,e.props),t.appendChild(r),r.appendChild(o),i(e.props,e.props);function i(s,u){var f=zt(t),p=f.box,l=f.content,c=f.arrow;u.theme?p.setAttribute("data-theme",u.theme):p.removeAttribute("data-theme"),typeof u.animation=="string"?p.setAttribute("data-animation",u.animation):p.removeAttribute("data-animation"),u.inertia?p.setAttribute("data-inertia",""):p.removeAttribute("data-inertia"),p.style.maxWidth=typeof u.maxWidth=="number"?u.maxWidth+"px":u.maxWidth,u.role?p.setAttribute("role",u.role):p.removeAttribute("role"),(s.content!==u.content||s.allowHTML!==u.allowHTML)&&Cr(l,e.props),u.arrow?c?s.arrow!==u.arrow&&(p.removeChild(c),p.appendChild(Tr(u.arrow))):p.appendChild(Tr(u.arrow)):c&&p.removeChild(c)}return{popper:t,onUpdate:i}}Br.$$tippy=!0;var $o=1,Et=[],Xt=[];function Fo(e,t){var r=Er(e,Object.assign({},ie,kr(br(t)))),o,i,s,u=!1,f=!1,p=!1,l=!1,c,w,x,v=[],g=hr(st,r.interactiveDebounce),y,b=$o++,O=null,E=Co(r.plugins),A={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},n={id:b,reference:e,popper:nt(),popperInstance:O,props:r,state:A,plugins:E,clearDelayTimeouts:lt,setProps:dt,setContent:mt,show:jr,hide:Wr,hideWithInteractivity:Vr,enable:Ke,disable:ct,unmount:Ir,destroy:Hr};if(!r.render)return n;var T=r.render(n),d=T.popper,D=T.onUpdate;d.setAttribute("data-tippy-root",""),d.id="tippy-"+n.id,n.popper=d,e._tippy=n,d._tippy=n;var W=E.map(function(a){return a.fn(n)}),B=e.hasAttribute("aria-expanded");return je(),se(),z(),F("onCreate",[n]),r.showOnCreate&&Ge(),d.addEventListener("mouseenter",function(){n.props.interactive&&n.state.isVisible&&n.clearDelayTimeouts()}),d.addEventListener("mouseleave",function(){n.props.interactive&&n.props.trigger.indexOf("mouseenter")>=0&&G().addEventListener("mousemove",g)}),n;function L(){var a=n.props.touch;return Array.isArray(a)?a:[a,0]}function V(){return L()[0]==="hold"}function R(){var a;return!!((a=n.props.render)!=null&&a.$$tippy)}function M(){return y||e}function G(){var a=M().parentNode;return a?So(a):document}function K(){return zt(d)}function Y(a){return n.state.isMounted&&!n.state.isVisible||fe.isTouch||c&&c.type==="focus"?0:Ut(n.props.delay,a?0:1,ie.delay)}function z(a){a===void 0&&(a=!1),d.style.pointerEvents=n.props.interactive&&!a?"":"none",d.style.zIndex=""+n.props.zIndex}function F(a,m,h){if(h===void 0&&(h=!0),W.forEach(function(C){C[a]&&C[a].apply(C,m)}),h){var P;(P=n.props)[a].apply(P,m)}}function ae(){var a=n.props.aria;if(a.content){var m="aria-"+a.content,h=d.id,P=Xe(n.props.triggerTarget||e);P.forEach(function(C){var _=C.getAttribute(m);if(n.state.isVisible)C.setAttribute(m,_?_+" "+h:h);else{var J=_&&_.replace(h,"").trim();J?C.setAttribute(m,J):C.removeAttribute(m)}})}}function se(){if(!(B||!n.props.aria.expanded)){var a=Xe(n.props.triggerTarget||e);a.forEach(function(m){n.props.interactive?m.setAttribute("aria-expanded",n.state.isVisible&&m===M()?"true":"false"):m.removeAttribute("aria-expanded")})}}function we(){G().removeEventListener("mousemove",g),Et=Et.filter(function(a){return a!==g})}function pe(a){if(!(fe.isTouch&&(p||a.type==="mousedown"))){var m=a.composedPath&&a.composedPath()[0]||a.target;if(!(n.props.interactive&&wr(d,m))){if(Xe(n.props.triggerTarget||e).some(function(h){return wr(h,m)})){if(fe.isTouch||n.state.isVisible&&n.props.trigger.indexOf("click")>=0)return}else F("onClickOutside",[n,a]);n.props.hideOnClick===!0&&(n.clearDelayTimeouts(),n.hide(),f=!0,setTimeout(function(){f=!1}),n.state.isMounted||ce())}}}function Oe(){p=!0}function ue(){p=!1}function te(){var a=G();a.addEventListener("mousedown",pe,!0),a.addEventListener("touchend",pe,Ne),a.addEventListener("touchstart",ue,Ne),a.addEventListener("touchmove",Oe,Ne)}function ce(){var a=G();a.removeEventListener("mousedown",pe,!0),a.removeEventListener("touchend",pe,Ne),a.removeEventListener("touchstart",ue,Ne),a.removeEventListener("touchmove",Oe,Ne)}function ke(a,m){Be(a,function(){!n.state.isVisible&&d.parentNode&&d.parentNode.contains(d)&&m()})}function le(a,m){Be(a,m)}function Be(a,m){var h=K().box;function P(C){C.target===h&&(Ft(h,"remove",P),m())}if(a===0)return m();Ft(h,"remove",w),Ft(h,"add",P),w=P}function he(a,m,h){h===void 0&&(h=!1);var P=Xe(n.props.triggerTarget||e);P.forEach(function(C){C.addEventListener(a,m,h),v.push({node:C,eventType:a,handler:m,options:h})})}function je(){V()&&(he("touchstart",ze,{passive:!0}),he("touchend",pt,{passive:!0})),To(n.props.trigger).forEach(function(a){if(a!=="manual")switch(he(a,ze),a){case"mouseenter":he("mouseleave",pt);break;case"focus":he(Bo?"focusout":"blur",_e);break;case"focusin":he("focusout",_e);break}})}function at(){v.forEach(function(a){var m=a.node,h=a.eventType,P=a.handler,C=a.options;m.removeEventListener(h,P,C)}),v=[]}function ze(a){var m,h=!1;if(!(!n.state.isEnabled||qe(a)||f)){var P=((m=c)==null?void 0:m.type)==="focus";c=a,y=a.currentTarget,se(),!n.state.isVisible&&Rr(a)&&Et.forEach(function(C){return C(a)}),a.type==="click"&&(n.props.trigger.indexOf("mouseenter")<0||u)&&n.props.hideOnClick!==!1&&n.state.isVisible?h=!0:Ge(a),a.type==="click"&&(u=!h),h&&!P&&Ee(a)}}function st(a){var m=a.target,h=M().contains(m)||d.contains(m);if(!(a.type==="mousemove"&&h)){var P=ye().concat(d).map(function(C){var _,J=C._tippy,We=(_=J.popperInstance)==null?void 0:_.state;return We?{popperRect:C.getBoundingClientRect(),popperState:We,props:r}:null}).filter(Boolean);Mo(P,a)&&(we(),Ee(a))}}function pt(a){var m=qe(a)||n.props.trigger.indexOf("click")>=0&&u;if(!m){if(n.props.interactive){n.hideWithInteractivity(a);return}Ee(a)}}function _e(a){n.props.trigger.indexOf("focusin")<0&&a.target!==M()||n.props.interactive&&a.relatedTarget&&d.contains(a.relatedTarget)||Ee(a)}function qe(a){return fe.isTouch?V()!==a.type.indexOf("touch")>=0:!1}function ft(){ut();var a=n.props,m=a.popperOptions,h=a.placement,P=a.offset,C=a.getReferenceClientRect,_=a.moveTransition,J=R()?zt(d).arrow:null,We=C?{getBoundingClientRect:C,contextElement:C.contextElement||M()}:e,Kt={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(vt){var Ve=vt.state;if(R()){var Ur=K(),Pt=Ur.box;["placement","reference-hidden","escaped"].forEach(function(gt){gt==="placement"?Pt.setAttribute("data-placement",Ve.placement):Ve.attributes.popper["data-popper-"+gt]?Pt.setAttribute("data-"+gt,""):Pt.removeAttribute("data-"+gt)}),Ve.attributes.popper={}}}},Te=[{name:"offset",options:{offset:P}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!_}},Kt];R()&&J&&Te.push({name:"arrow",options:{element:J,padding:3}}),Te.push.apply(Te,(m==null?void 0:m.modifiers)||[]),n.popperInstance=Ht(We,d,Object.assign({},m,{placement:h,onFirstUpdate:x,modifiers:Te}))}function ut(){n.popperInstance&&(n.popperInstance.destroy(),n.popperInstance=null)}function de(){var a=n.props.appendTo,m,h=M();n.props.interactive&&a===Sr||a==="parent"?m=h.parentNode:m=Mr(a,[h]),m.contains(d)||m.appendChild(d),n.state.isMounted=!0,ft()}function ye(){return Ye(d.querySelectorAll("[data-tippy-root]"))}function Ge(a){n.clearDelayTimeouts(),a&&F("onTrigger",[n,a]),te();var m=Y(!0),h=L(),P=h[0],C=h[1];fe.isTouch&&P==="hold"&&C&&(m=C),m?o=setTimeout(function(){n.show()},m):n.show()}function Ee(a){if(n.clearDelayTimeouts(),F("onUntrigger",[n,a]),!n.state.isVisible){ce();return}if(!(n.props.trigger.indexOf("mouseenter")>=0&&n.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(a.type)>=0&&u)){var m=Y(!1);m?i=setTimeout(function(){n.state.isVisible&&n.hide()},m):s=requestAnimationFrame(function(){n.hide()})}}function Ke(){n.state.isEnabled=!0}function ct(){n.hide(),n.state.isEnabled=!1}function lt(){clearTimeout(o),clearTimeout(i),cancelAnimationFrame(s)}function dt(a){if(!n.state.isDestroyed){F("onBeforeUpdate",[n,a]),at();var m=n.props,h=Er(e,Object.assign({},m,br(a),{ignoreAttributes:!0}));n.props=h,je(),m.interactiveDebounce!==h.interactiveDebounce&&(we(),g=hr(st,h.interactiveDebounce)),m.triggerTarget&&!h.triggerTarget?Xe(m.triggerTarget).forEach(function(P){P.removeAttribute("aria-expanded")}):h.triggerTarget&&e.removeAttribute("aria-expanded"),se(),z(),D&&D(m,h),n.popperInstance&&(ft(),ye().forEach(function(P){requestAnimationFrame(P._tippy.popperInstance.forceUpdate)})),F("onAfterUpdate",[n,a])}}function mt(a){n.setProps({content:a})}function jr(){var a=n.state.isVisible,m=n.state.isDestroyed,h=!n.state.isEnabled,P=fe.isTouch&&!n.props.touch,C=Ut(n.props.duration,0,ie.duration);if(!(a||m||h||P)&&!M().hasAttribute("disabled")&&(F("onShow",[n],!1),n.props.onShow(n)!==!1)){if(n.state.isVisible=!0,R()&&(d.style.visibility="visible"),z(),te(),n.state.isMounted||(d.style.transition="none"),R()){var _=K(),J=_.box,We=_.content;$t([J,We],0)}x=function(){var Te;if(!(!n.state.isVisible||l)){if(l=!0,d.offsetHeight,d.style.transition=n.props.moveTransition,R()&&n.props.animation){var Ct=K(),vt=Ct.box,Ve=Ct.content;$t([vt,Ve],C),xr([vt,Ve],"visible")}ae(),se(),yr(Xt,n),(Te=n.popperInstance)==null||Te.forceUpdate(),F("onMount",[n]),n.props.animation&&R()&&le(C,function(){n.state.isShown=!0,F("onShown",[n])})}},de()}}function Wr(){var a=!n.state.isVisible,m=n.state.isDestroyed,h=!n.state.isEnabled,P=Ut(n.props.duration,1,ie.duration);if(!(a||m||h)&&(F("onHide",[n],!1),n.props.onHide(n)!==!1)){if(n.state.isVisible=!1,n.state.isShown=!1,l=!1,u=!1,R()&&(d.style.visibility="hidden"),we(),ce(),z(!0),R()){var C=K(),_=C.box,J=C.content;n.props.animation&&($t([_,J],P),xr([_,J],"hidden"))}ae(),se(),n.props.animation?R()&&ke(P,n.unmount):n.unmount()}}function Vr(a){G().addEventListener("mousemove",g),yr(Et,g),g(a)}function Ir(){n.state.isVisible&&n.hide(),n.state.isMounted&&(ut(),ye().forEach(function(a){a._tippy.unmount()}),d.parentNode&&d.parentNode.removeChild(d),Xt=Xt.filter(function(a){return a!==n}),n.state.isMounted=!1,F("onHidden",[n]))}function Hr(){n.state.isDestroyed||(n.clearDelayTimeouts(),n.unmount(),at(),delete e._tippy,n.state.isDestroyed=!0,F("onDestroy",[n]))}}function it(e,t){t===void 0&&(t={});var r=ie.plugins.concat(t.plugins||[]);No();var o=Object.assign({},t,{plugins:r}),i=Do(e);if(0)var s,u;var f=i.reduce(function(p,l){var c=l&&Fo(l,o);return c&&p.push(c),p},[]);return Tt(e)?f[0]:f}it.defaultProps=ie;it.setDefaultProps=Io;it.currentInput=fe;var Ys=Object.assign({},Je,{effect:function(t){var r=t.state,o={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,o.popper),r.styles=o,r.elements.arrow&&Object.assign(r.elements.arrow.style,o.arrow)}});function Xo(e,t){var r;return{popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat((((r=e.popperOptions)==null?void 0:r.modifiers)||[]).filter(function(o){var i=o.name;return i!==t.name}),[t])})}}var qt={name:"inlinePositioning",defaultValue:!1,fn:function(t){var r=t.reference;function o(){return!!t.props.inlinePositioning}var i,s=-1,u=!1,f=[],p={name:"tippyInlinePositioning",enabled:!0,phase:"afterWrite",fn:function(v){var g=v.state;o()&&(f.indexOf(g.placement)!==-1&&(f=[]),i!==g.placement&&f.indexOf(g.placement)===-1&&(f.push(g.placement),t.setProps({getReferenceClientRect:function(){return l(g.placement)}})),i=g.placement)}};function l(x){return Yo(Lr(x),r.getBoundingClientRect(),Ye(r.getClientRects()),s)}function c(x){u=!0,t.setProps(x),u=!1}function w(){u||c(Xo(t.props,p))}return{onCreate:w,onAfterUpdate:w,onTrigger:function(v,g){if(Rr(g)){var y=Ye(t.reference.getClientRects()),b=y.find(function(E){return E.left-2<=g.clientX&&E.right+2>=g.clientX&&E.top-2<=g.clientY&&E.bottom+2>=g.clientY}),O=y.indexOf(b);s=O>-1?O:s}},onHidden:function(){s=-1}}}};function Yo(e,t,r,o){if(r.length<2||e===null)return t;if(r.length===2&&o>=0&&r[0].left>r[1].right)return r[o]||t;switch(e){case"top":case"bottom":{var i=r[0],s=r[r.length-1],u=e==="top",f=i.top,p=s.bottom,l=u?i.left:s.left,c=u?i.right:s.right,w=c-l,x=p-f;return{top:f,bottom:p,left:l,right:c,width:w,height:x}}case"left":case"right":{var v=Math.min.apply(Math,r.map(function(d){return d.left})),g=Math.max.apply(Math,r.map(function(d){return d.right})),y=r.filter(function(d){return e==="left"?d.left===v:d.right===g}),b=y[0].top,O=y[y.length-1].bottom,E=v,A=g,n=A-E,T=O-b;return{top:b,bottom:O,left:E,right:A,width:n,height:T}}default:return t}}it.setDefaultProps({render:Br});var Gt=it;document.addEventListener("DOMContentLoaded",function(){Gt(".dotoo",{theme:"translucent",inlinePositioning:!0,plugins:[qt],content:e=>e.dataset.todo}),Gt(".dotoo-mark",{theme:"translucent",inlinePositioning:!0,plugins:[qt],content:e=>e.dataset.todo})});