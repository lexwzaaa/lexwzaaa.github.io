import{bn as m,j as u}from"./index-C0-iU1r_.js";const d="lexwzaaa",S="notes",i=e=>new Promise((s,n)=>{fetch(`https://api.github.com/repos/${d}/${S}/contents/${e??""}`).then(t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);t.json().then(o=>{s(o)}).catch(o=>{console.log(`JSON error!: ${o}`),n(o)})}).catch(t=>{console.log(`HTTP error!: ${t}`),n(t)})}),b=m(),w=e=>/\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(e),T=e=>{i(e).then(s=>{const n=s.filter(r=>r.type==="file"&&r.name.includes(".md")),t={};t[e]=n;const o=s.filter(r=>r.type==="file"&&w(r.name)),a={};o.forEach(r=>{a[r.name]=r.download_url??""}),b.setMdImgs({mds:t,imgs:a})})},p=u(),D=()=>{i().then(e=>{const s=e.filter(t=>t.type==="dir");p.setFileObjects(s);const n=e.filter(t=>t.type==="file"&&t.name.includes(".svg"));P(n)})},P=e=>{const s={};e.forEach(n=>{v(n.download_url??"").then(t=>{s[n.name.split(".")[0]]=t,Object.values(s).length===e.length&&p.setSvgPaths(s)})})},v=e=>new Promise((s,n)=>{fetch(e).then(t=>{t.text().then(o=>{const a=o.replace(/<\?xml.*?\?>|<!DOCTYPE.*?>/g,""),c=new DOMParser().parseFromString(a,"image/svg+xml").querySelectorAll("path");if(c){const l=[];c.forEach(g=>{const h=g.getAttribute("fill")??"",f=g.getAttribute("d")??"";l.push({d:f,color:h,highColor:M(h,50)})}),s(l)}else s([])}).catch(o=>{console.log(`JSON error!: ${o}`),n(o)})}).catch(t=>{console.log(`HTTP error!: ${t}`),n(t)})}),M=(e="#ffffff",s=0)=>{e=e.replace(/^#/,"");let n=parseInt(e.substring(0,2),16),t=parseInt(e.substring(2,4),16),o=parseInt(e.substring(4,6),16);return n=Math.min(255,Math.max(0,n+s)),t=Math.min(255,Math.max(0,t+s)),o=Math.min(255,Math.max(0,o+s)),"#"+n.toString(16).padStart(2,"0")+t.toString(16).padStart(2,"0")+o.toString(16).padStart(2,"0")};export{T as a,D as f};