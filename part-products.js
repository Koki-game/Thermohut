(function(){
  'use strict';
  const data=window.THERMOHUT_PARTS_DATA||{brands:[],categories:[]};
  const inventory=Array.isArray(window.THERMOHUT_PRODUCTS)?window.THERMOHUT_PRODUCTS:[];
  const qs=new URLSearchParams(window.location.search);
  const slug=qs.get('brand'),type=qs.get('category');
  const brand=data.brands.find(x=>x.id===slug);
  const category=data.categories.find(x=>x.id===type);
  if(!brand||!category){window.location.replace('boiler-parts.html#ბრენდები');return;}
  const $=id=>document.getElementById(id);
  const h=$('partHeading'),intro=$('partHelp'),box=$('partListings'),result=$('partResult'),status=$('partStatus'),actions=$('partOrderActions');
  h.textContent=brand.name+' — '+category.name;
  intro.textContent='აირჩიეთ '+brand.name+'-ის შესაბამისი ნაწილები. შესაბამისობა უნდა დადასტურდეს ქვაბის ზუსტი მოდელით ან სათადარიგო ნაწილის კოდით.';
  document.title=brand.name+' — '+category.name+' | ThermoHut';
  const crumb=$('partCrumbs');
  const back=document.createElement('a');back.href='brand-'+brand.id+'.html';back.textContent=brand.name;crumb.append(' › ',back,' › ',category.name);
  const backLinks=$('partBackLinks');const backBrand=document.createElement('a');backBrand.className='btn btn-dark';backBrand.href='brand-'+brand.id+'.html';backBrand.textContent='← '+brand.name+'-ის ქვეკატეგორიები';backLinks.prepend(backBrand);
  const filtered=inventory.filter(p=>p.category==='parts'&&p.partType===type&&(p.brand===slug||(Array.isArray(p.brands)&&p.brands.includes(slug)))&&p.verified===true);
  const cart={};
  function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
  function makeOrder(){
    const lines=['გამარჯობა, ThermoHut! მინდა შემდეგი ნაწილის ფასი და ხელმისაწვდომობა დავაზუსტო:', 'ქვაბის ბრენდი: '+brand.name,'ნაწილის კატეგორია: '+category.name];
    let has=false;
    for(const p of filtered){if(cart[p.id]){has=true;lines.push('• '+p.name+' — '+p.priceGEL+' ₾ × '+cart[p.id]+' ც.');}}
    if(!has) lines.push('გთხოვთ შემომთავაზოთ შესაბამისი ნაწილი.');
    if($('partModelNote').value.trim())lines.push('ქვაბის მოდელი / შენიშვნა: '+$('partModelNote').value.trim());
    lines.push('გთხოვთ დამიდასტუროთ თავსებადობა, საბოლოო ფასი და ხელმისაწვდომობა.');return lines.join('\n');
  }
  async function copyInquiry(){const txt=makeOrder();let ok=false;
    try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(txt);ok=true;}}catch(e){}
    if(!ok){try{const t=document.createElement('textarea');t.value=txt;t.style.position='fixed';t.style.left='-9999px';document.body.appendChild(t);t.select();ok=document.execCommand('copy');t.remove();}catch(e){}}
    status.textContent=ok?'მოთხოვნა დაკოპირებულია. დაუკავშირდით ThermoHut-ს — კოპირება შეკვეთას ავტომატურად არ აგზავნის.':'კოპირება ვერ შესრულდა. გამოიყენეთ დარეკვის ღილაკი.';
  }
  const copy=el('button','btn btn-accent','მოთხოვნის კოპირება');copy.type='button';copy.addEventListener('click',copyInquiry);actions.appendChild(copy);
  if(!filtered.length){result.className='awaiting-products';result.append(el('strong','','ამ კატეგორიაში პროდუქტები ჯერ არ დამატებულა'),el('p','','ფოტოებს, ფასებსა და კონკრეტულ მოდელებს მოგვიანებით დავამატებთ. ბრენდის და ნაწილის შესახებ კითხვა შეგიძლიათ ტელეფონით დაგვისვათ.'));return;}
  result.textContent=filtered.length+' პროდუქტი • თითოეულის თავსებადობა გადაამოწმეთ';
  for(const p of filtered){
    const card=el('article','brand-product');
    if(p.image&&(/^(?:images\/)?[a-z0-9_./-]+\.(?:jpg|jpeg|png|webp)$/i.test(p.image)||/^data:image\/webp;base64,[a-z0-9+/=]+$/i.test(p.image))&&!p.image.includes('..')){
      const img=el('img');img.src=p.image;img.alt=p.name;img.loading='lazy';card.appendChild(img);
    }
    const body=el('div','body');body.append(el('h3','',p.name),el('p','',p.description||''));
    body.append(el('div','price',typeof p.priceGEL==='number'&&Number.isFinite(p.priceGEL)&&p.priceGEL>=0?p.priceGEL.toFixed(2)+' ₾':'ფასი დასაზუსტებელია'));
    const qty=el('span','',String(cart[p.id]||0));
    const add=el('button','btn btn-dark','＋ დამატება');add.type='button';
    add.addEventListener('click',()=>{cart[p.id]=Math.min(99,(cart[p.id]||0)+1);qty.textContent=String(cart[p.id]);status.textContent=p.name+' დაემატა მოთხოვნას.';});
    body.append(add,el('span','',' რაოდენობა: '),qty);card.appendChild(body);box.appendChild(card);
  }
})();
