const continentsList={EU:["AD","AL","AT","AX","BA","BE","BG","BY","CH","CY","CZ","DE","DK","EE","ES","FI","FO","FR","GB","GG","GI","GR","HR","HU","IE","IM","IS","IT","JE","LI","LT","LU","LV","MC","MD","ME","MK","MT","NL","NO","PL","PT","RO","RS","RU","SE","SI","SJ","SK","SM","UA","VA","XK"],AS:["AE","AF","AM","AZ","BD","BH","BN","BT","CC","CN","CX","GE","HK","ID","IL","IN","IO","IQ","IR","JO","JP","KG","KH","KP","KR","KW","KZ","LA","LB","LK","MM","MN","MO","MV","MY","NP","OM","PH","PK","PS","QA","SA","SG","SY","TH","TJ","TM","TR","TW","UZ","VN","YE"],NA:["AG","AI","AW","BB","BL","BM","BQ","BS","BZ","CA","CR","CU","CW","DM","DO","GD","GL","GP","GT","HN","HT","JM","KN","KY","LC","MF","MQ","MS","MX","NI","PA","PM","PR","SV","SX","TC","TT","US","VC","VG","VI"],AF:["AO","BF","BI","BJ","BW","CD","CF","CG","CI","CM","CV","DJ","DZ","EG","EH","ER","ET","GA","GH","GM","GN","GQ","GW","KE","KM","LR","LS","LY","MA","MG","ML","MR","MU","MW","MZ","NA","NE","NG","RE","RW","SC","SD","SH","SL","SN","SO","SS","ST","SZ","TD","TG","TN","TZ","UG","YT","ZA","ZM","ZW"],AN:["AQ","BV","GS","HM","TF"],SA:["AR","BO","BR","CL","CO","EC","FK","GF","GY","PE","PY","SR","UY","VE"],OC:["AS","AU","CK","FJ","FM","GU","KI","MH","MP","NC","NF","NR","NU","NZ","PF","PG","PN","PW","SB","TK","TL","TO","TV","UM","VU","WF","WS"]};try{const a="https://wtfismyip.com/json",b=(e,t)=>`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Access Denied</title>
<style>
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background: linear-gradient(-45deg, #2c3e50, #34495e, #4a5a6a, #2c3e50);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
  }

  .container {
    background-color: rgba(255, 255, 255, 0.9); 
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    max-width: 400px;
    width: 100%;
  }

  h1 {
    color: #333;
    margin-bottom: 16px;
  }

  .content {
    margin-bottom: 32px;
  }
  
  .message{
    color: #666;
  }
 
</style>
</head>
<body>
  <div class="container">
    <h1>Access Denied</h1>
    <div class="content">
    ${e||'<p class="message">Your access to this site has been restricted.</p>'}
    </div>
    <hr/>
    ${t&&"false"!==t?"Contact Email: "+t:""}
  </div>
</body>
</html>
`,c=async e=>{return await(await fetch(e)).text()},d=async(e,t)=>{return await(await fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}})).json()},e=e=>{var e=JSON.parse(e),t=e.YourFuckingIPAddress,n=e.YourFuckingCountryCode;let i;for(const o of Object.keys(continentsList))for(const r of continentsList[o])if(r===n){i=o;break}return{userIP:t,userCountry:n,userContinent:i}},f=e=>document.getElementById(e)&&document.getElementById(e).innerText&&"none"!==document.getElementById(e).innerText.replaceAll("\n","").trim()&&document.getElementById(e).innerText.replaceAll("\n","").trim().split(","),g=e=>document.getElementById(e)&&document.getElementById(e).innerHTML,h=e=>(!document.getElementById(e)||"none"!==document.getElementById(e).innerText.replaceAll("\n","").trim())&&document.getElementById(e).innerText.replaceAll("\n",""),i=e=>(!document.getElementById(e)||"none"!==document.getElementById(e).innerText.replaceAll("\n","").trim())&&document.getElementById(e).innerText.replaceAll("\n","").trim(),j=e=>(!document.getElementById(e)||"none"!==document.getElementById(e).innerText.replaceAll("\n","").trim())&&document.getElementById(e).innerText.replaceAll("\n","").trim(),k=async(e,t,n,i,o,r)=>{var a="lbpts",c=localStorage.getItem(a);(!c||864e5<Date.now()-c)&&(localStorage.setItem(a,Date.now()),await d("https://lbp-v2.fly.dev/api/open/spoor",{shop:e,ip:t,country:n,continent:i,blocked:o,blockedBy:r}))},l=async()=>{let t,n,o,r,s,d,l,m,u,y;l=f("blackListIP"),d=f("whiteListIP"),n=f("countries"),o=f("continents"),t=g("blockedPage"),r=h("redirectedURL"),s=h("redirectWithCountry"),m=i("redirectUser"),u=h("shopMyshopifyDomain")||window.Shopify.shop,y=j("emailToShow");var T=await c(a);const{userIP:p,userCountry:M,userContinent:B}=await e(T);T=s&&""!==s.trim()&&"none"!==s&&s.split("|!|").map(e=>e.split("#=>")).filter(e=>e).find(e=>e[0]===M);let A=!1;var I=[];if(n&&n.includes(M)&&(A=!0,I.push("Country: "+M)),o&&o.includes(B)&&(A=!0,I.push("Continent: "+B)),l&&l.includes(p)&&(A=!0,I.push("IP: "+p)),T&&T[0]===M&&(A=!0,r=T[1]),A=d&&d.includes(p)?!1:A)if(m&&"true"===m&&r)k(u,p,M,B,A,I),window.location.href=r;else{try{document.body.innerHTML=b(t,y),document.head.innerHTML="blocked"}catch(e){document.getElementsByTagName("body")[0].innerHTML=t,document.getElementsByTagName("head")[0].innerHTML="blocked"}await k(u,p,M,B,A,I)}};l()}catch(e){console.log("\n\n",e,"\n\n")}