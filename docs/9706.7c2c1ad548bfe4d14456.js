(self.webpackChunkland_filter=self.webpackChunkland_filter||[]).push([[9706],{9706:(e,t,r)=>{"use strict";r.r(t),r.d(t,{createSwipeBackGesture:()=>s});var a=r(2377),n=r(7279);r(960);const s=(e,t,r,s,i)=>{const c=e.ownerDocument.defaultView;return(0,n.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:r,onMove:e=>{s(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,r=e.deltaX/t,n=e.velocityX,s=n>=0&&(n>.2||e.deltaX>t/2),l=(s?1-r:r)*t;let o=0;if(l>5){const e=l/Math.abs(n);o=Math.min(e,540)}i(s,r<=0?.01:(0,a.j)(0,r,.9999),o)}})}}}]);