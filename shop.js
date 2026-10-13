(function () {
  'use strict';
  const list = Array.isArray(window.THERMOHUT_PRODUCTS) ? window.THERMOHUT_PRODUCTS : [];
  const labels = {boiler:'ქვაბის ნაწილები',system:'გათბობის სისტემა',control:'მართვა და სენსორები'};
  const cart = {};
  let category = 'all';
  const $ = id => document.getElementById(id);
  const grid = $('productsGrid'), search = $('productSearch'), note = $('modelNote'), status = $('status');
  function node(tag,cls,value) {const a=document.createElement(tag);if(cls)a.className=cls;if(value!==undefined)a.textContent=value;return a;}
  function restore() {try{const data=JSON.parse(localStorage.getItem('thermohut-inquiry-v3') || '{}');if(data&&typeof data==='object'&&!Array.isArray(data)){for(const p of list){const n=Number(data[p.id]);if(Number.isInteger(n)&&n>0)cart[p.id]=Math.min(n,99);}}}catch(e){}}
  function store() {try{localStorage.setItem('thermohut-inquiry-v3',JSON.stringify(cart));}catch(e){}}
  function change(id,diff) {if(!list.some(p=>p.id===id))return;const n=Math.max(0,Math.min(99,(cart[id]||0)+diff));if(n)cart[id]=n;else delete cart[id];store();renderCart();}
  function renderProducts(){
    const q=search.value.trim().toLocaleLowerCase('ka');
    const filtered=list.filter(p=>(category==='all'||p.category===category)&&(!q||[p.name,p.description,p.keywords].join(' ').toLocaleLowerCase('ka').includes(q)));
    grid.replaceChildren();$('noResults').hidden=filtered.length!==0;$('resultCount').textContent=filtered.length+' დასახელება';
    for(const p of filtered){
      const card=node('article','product'),visual=node('div','product-image'),body=node('div','product-body');
      if(p.image&&/^images\/[a-zA-Z0-9_./-]+\.(jpg|jpeg|png|webp)$/i.test(p.image)){const img=node('img');img.src=p.image;img.alt=p.name;img.loading='lazy';visual.appendChild(img);}else{visual.appendChild(node('span','',p.symbol||'⚙'));}
      body.append(node('div','product-cat',labels[p.category]||'ნაწილები'),node('h3','',p.name),node('p','',p.description));
      body.appendChild(node('div','product-price',typeof p.priceGEL==='number'&&Number.isFinite(p.priceGEL)&&p.priceGEL>=0?p.priceGEL.toFixed(2)+' ₾':'ფასი დასაზუსტებელია'));
      const btn=node('button','addbtn','＋ მოთხოვნაში დამატება');btn.type='button';btn.setAttribute('aria-label',p.name+' — მოთხოვნაში დამატება');
      btn.addEventListener('click',()=>{change(p.id,1);status.textContent=p.name+' დაემატა მოთხოვნის სიაში.';});body.appendChild(btn);
      card.append(visual,body);grid.appendChild(card);
    }
  }
  function renderCart(){
    const box=$('cartItems');box.replaceChildren();let total=0;
    for(const p of list){const qty=cart[p.id]||0;if(!qty)continue;total+=qty;
      const item=node('div','cartitem');item.appendChild(node('strong','',p.name));const controls=node('div','quantity');
      const minus=node('button','','−');minus.type='button';minus.setAttribute('aria-label',p.name+' — რაოდენობის შემცირება');minus.addEventListener('click',()=>change(p.id,-1));
      const plus=node('button','', '+');plus.type='button';plus.setAttribute('aria-label',p.name+' — რაოდენობის გაზრდა');plus.addEventListener('click',()=>change(p.id,1));
      const remove=node('button','remove','წაშლა');remove.type='button';remove.setAttribute('aria-label',p.name+' — წაშლა');remove.addEventListener('click',()=>{delete cart[p.id];store();renderCart();});
      controls.append(minus,node('span','',String(qty)),plus,remove);item.appendChild(controls);box.appendChild(item);
    }
    $('cartCount').textContent=String(total);$('cartEmpty').hidden=total>0;$('copyInquiry').disabled=total===0;
  }
  document.querySelectorAll('[data-cat]').forEach(btn=>btn.addEventListener('click',()=>{category=btn.dataset.cat;document.querySelectorAll('[data-cat]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));renderProducts();}));
  search.addEventListener('input',renderProducts);
  $('clearCart').addEventListener('click',()=>{for(const id of Object.keys(cart))delete cart[id];store();renderCart();status.textContent='სია გასუფთავებულია.';});
  $('copyInquiry').addEventListener('click',async()=>{
    const lines=['გამარჯობა, ThermoHut! გთხოვთ გადაამოწმოთ შემდეგი ნაწილების ფასი და ხელმისაწვდომობა:'];
    for(const p of list){if(cart[p.id])lines.push('• '+p.name+' — '+cart[p.id]+' ც.');}
    if(note.value.trim())lines.push('ქვაბის მოდელი / შენიშვნა: '+note.value.trim());
    lines.push('გთხოვთ დამიდასტუროთ თავსებადობა და შეძენის პირობები.');
    const text=lines.join('\n');let ok=false;
    try{if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(text);ok=true;}}catch(e){}
    if(!ok){try{const t=node('textarea');t.value=text;t.style.position='fixed';t.style.left='-9999px';document.body.appendChild(t);t.select();ok=document.execCommand('copy');t.remove();}catch(e){}}
    status.textContent=ok?'მოთხოვნა დაკოპირდა. გასაგზავნად დაუკავშირდით ThermoHut-ს.':'კოპირება ვერ შესრულდა. დაგვირეკეთ ტელეფონით.';
  });
  restore();renderProducts();renderCart();
})();
