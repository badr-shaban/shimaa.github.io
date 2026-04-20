const products = [
  { id:1, name:'باقة الأميرة', desc:'١٥ وردة بنفسجية فاتنة مرتبة بأسلوب ملكي', price:'١٥٠', cat:'bouquet', badge:'الأكثر مبيعاً', color:'#c49de8' },
  { id:2, name:'وردة حواء', desc:'وردة بنفسجية داكنة فريدة بعطر أسطوري', price:'٤٥', cat:'single', badge:'new', color:'#9b6dcc' },
  { id:3, name:'صندوق الأحلام', desc:'٢٤ وردة في صندوق فاخر مع شوكولاتة بلجيكية', price:'٢٩٠', cat:'gift', badge:'', color:'#7b4fa8' },
  { id:4, name:'باقة الفجر', desc:'١٠ ورود مختلطة بين البنفسجي الفاتح والداكن', price:'١٢٠', cat:'bouquet', badge:'', color:'#b88ae0' },
  { id:5, name:'قلب من ورد', desc:'ترتيب على شكل قلب من ورود بنفسجية صغيرة', price:'٢٠٠', cat:'gift', badge:'جديد', color:'#8a5cbf' },
  { id:6, name:'وردة الملكة', desc:'وردة كبيرة نادرة تدوم أسبوعاً كاملاً', price:'٦٥', cat:'single', badge:'', color:'#6b35a8' },
];

let cart = 0;

function renderCards(list) {
  const grid = document.getElementById('grid');
  grid.innerHTML = list.map(p => `
    <div class="card">
      ${p.badge ? `<div class="card-badge ${p.badge==='new'||p.badge==='جديد'?'new':''}">${p.badge}</div>` : ''}
      <div class="card-img" style="background: linear-gradient(145deg, #e8d5f7, ${p.color}22)">
        <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="30" rx="16" ry="22" fill="${p.color}" opacity="0.9"/>
          <ellipse cx="28" cy="42" rx="14" ry="20" fill="${p.color}" opacity="0.75" transform="rotate(-35 28 42)"/>
          <ellipse cx="72" cy="42" rx="14" ry="20" fill="${p.color}" opacity="0.75" transform="rotate(35 72 42)"/>
          <ellipse cx="18" cy="62" rx="13" ry="18" fill="${p.color}" opacity="0.55" transform="rotate(-60 18 62)"/>
          <ellipse cx="82" cy="62" rx="13" ry="18" fill="${p.color}" opacity="0.55" transform="rotate(60 82 62)"/>
          <ellipse cx="50" cy="55" rx="14" ry="18" fill="${p.color}" opacity="0.65"/>
          <ellipse cx="50" cy="44" rx="10" ry="14" fill="${p.color}"/>
          <circle cx="50" cy="36" r="8" fill="#d4a843" opacity="0.9"/>
          <line x1="50" y1="75" x2="50" y2="115" stroke="#4a7c3f" stroke-width="3" stroke-linecap="round"/>
          <ellipse cx="36" cy="95" rx="10" ry="6" fill="#5a9e4f" opacity="0.8" transform="rotate(-25 36 95)"/>
          <ellipse cx="64" cy="88" rx="10" ry="6" fill="#5a9e4f" opacity="0.8" transform="rotate(20 64 88)"/>
        </svg>
      </div>
      <div class="card-body">
        <div class="card-title">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <div class="price">${p.price} ج.م <span>/ للقطعة</span></div>
          <button class="add-btn" id="btn-${p.id}" onclick="addToCart(${p.id})">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts(cat, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const list = cat === 'all' ? products : products.filter(p => p.cat === cat);
  renderCards(list);
}

function addToCart(id) {
  cart++;
  document.getElementById('cart-count').textContent = cart;
  const btn = document.getElementById('btn-' + id);
  btn.textContent = '✓'; btn.classList.add('added');
  setTimeout(() => { btn.textContent = '+'; btn.classList.remove('added'); }, 1500);
  showToast();
}

function showToast() {
  const t = document.getElementById('toast');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

function showCart() {
  if (cart === 0) { alert('السلة فارغة، أضف بعض الورود!'); return; }
  alert(`لديك ${cart} منتج في السلة 🛒\nشكراً لتسوقك في ڤيولا 💜`);
}

function subscribeNL() {
  const inp = document.querySelector('.nl-form input');
  if (!inp.value) { alert('من فضلك أدخل بريدك الإلكتروني'); return; }
  alert('شكراً للاشتراك! سنبقيك على اطلاع بأجمل العروض 💜');
  inp.value = '';
}

// Init
renderCards(products);

// Floating petals
const petalsContainer = document.getElementById('petals');
for (let i = 0; i < 18; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.style.cssText = `
    left: ${Math.random()*100}%;
    width: ${8+Math.random()*10}px;
    height: ${12+Math.random()*14}px;
    animation-duration: ${6+Math.random()*10}s;
    animation-delay: ${Math.random()*8}s;
    opacity: ${0.15+Math.random()*0.3};
    transform: rotate(${Math.random()*360}deg);
    border-radius: ${Math.random()>0.5 ? '50% 0 50% 0' : '0 50% 0 50%'};
  `;
  petalsContainer.appendChild(p);
}