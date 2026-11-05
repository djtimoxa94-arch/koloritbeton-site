// ===== ДАННЫЕ КАТАЛОГА =====
const data = {
  bruschatka: [
    {name:"Кремль", badge:"Хит продаж", img:"kreml.jpg", specs:"300×150 мм · 50 мм", prices:[["Серый","27 руб."],["Цветной","32 руб."],["Мрамор","33 руб."]]},
    {name:"Греция", img:"grecia.jpg", specs:"285×285 / 100×100 мм · 40 мм", prices:[["Серый","25 BYN"],["Цветной","30 BYN"],["Мрамор","30 BYN"]]},
    {name:"Булыжная мостовая", img:"bulizhnaya.jpg", specs:"150×300 мм · 40 мм", prices:[["Серый","25 BYN"],["Цветной","31 BYN"],["Мрамор","32 BYN"]]},
    {name:"Каменная роза", img:"roza.jpg", specs:"6 камней · 40 мм", prices:[["Серый","25 BYN"],["Цветной","31 BYN"],["Мрамор","32 BYN"]]},
    {name:"Домино", img:"domino.jpg", specs:"295×145 мм · 40 мм", prices:[["Серый","25 BYN"],["Цветной","31 BYN"],["Мрамор","32 BYN"]]},
    {name:"Старый Арбат", badge:"Популярно", img:"arbat.jpg", specs:"135×195 / 135×150 мм · 40 мм", prices:[["Серый","25 BYN"],["Цветной","31 BYN"],["Мрамор","32 BYN"]]}
  ],
  plitka: [
    {name:"Флорида дерево", img:"florida.jpg", specs:"300×300 мм · 30 мм", prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"Ялта", img:"yalta.jpg", specs:"300×300 мм · 30 мм", prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"Фазенда", img:"fazenda.jpg", specs:"300×300 мм · 30 мм", prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"Калифорния Кубик", img:"california-kubik.jpg", specs:"300×300 мм · 30 мм", prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"Паркет", img:"parket.jpg", specs:"300×300 мм · 30 мм", prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"Калифорния дерево", img:"california-derevo.jpg", specs:"300×300 мм · 30 мм", prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"12 кирпичей", badge:"Новинка", img:"12-kirpichey.jpg", specs:"500×500 мм · 50 мм", prices:[["Серый","28 руб."],["Цветной","33 руб."],["Мрамор","35 руб."]]},
    {name:"Черепашка", img:"cherepashka.jpg", specs:"300×300 мм · 30 мм", prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"Три доски", img:"tri-doski.jpg", specs:"300×300 мм · 30 мм", prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]}
  ],
  bordyury: [
    {name:"Бордюр 100×22×7,5", img:"bordur-100.jpg", specs:"100×22×7,5", prices:[["Серый","10 руб."],["Цветной","12 руб."],["Мрамор","14 руб."]]},
    {name:"Водосток", img:"vodostok.jpg", specs:"50×16×6", prices:[["Серый","6 руб."],["Цветной","8 руб."],["Мрамор","9 руб."]]},
    {name:"Бордюр 50×20×3.5", img:"bordur-50.jpg", specs:"50×20×3,5", prices:[["Серый","3.5 руб."],["Цветной","5.5 руб."],["Мрамор","5.5 руб."]]}
  ],
  prostupi: [
    {name:"Три прорези", img:"tri-prorezi.jpg", specs:"1350×340×40 мм", prices:[["Серый","25 руб."],["Цветной","28 руб."],["Мрамор","31 руб."]]},
    {name:"Проступь", img:"prostup.jpg", specs:"1250×320×40 мм", prices:[["Серый","24 руб."],["Цветной","27 руб."],["Мрамор","30 руб."]]}
  ],
  paneli: [
    {name:"Ростовский камень", badge:"Хит продаж", img:"rostov.jpg", specs:"190×190 / 380×190 мм · 25 мм", prices:[["Без окраса","26 руб."],["В цвете","29 руб."],["Мрамор","31 руб."]]}
  ]
};

// ===== РЕНДЕР КАРТОЧЕК =====
function renderGrid(id, items) {
  const grid = document.getElementById(id);
  if(!grid) return;
  
  grid.innerHTML = items.map(item => {
    const colorOptions = item.prices.map(p => `<option value="${p[0]}">${p[0]}</option>`).join("");
    const badge = item.badge ? `<div class="card-badge">${item.badge}</div>` : '';
    
    return `
      <article class="card">
        ${badge}
        <div class="card-img" style="background-image:url('img/${item.img}')"></div>
        <div class="card-body">
          <h3>${item.name}</h3>
          <div class="card-specs">${item.specs}</div>
          <div class="card-prices">
            ${item.prices.map(p => `<div class="price-row"><span>${p[0]}</span> <b>${p[1]}</b></div>`).join("")}
          </div>
          <div class="card-controls">
            <select class="color-select">${colorOptions}</select>
            <input type="number" class="qty-input" value="1" min="1" style="width: 60px;">
          </div>
          <button class="btn btn-primary" onclick="orderItem('${item.name}', this)">Заказать</button>
        </div>
      </article>
    `;
  }).join("");
}

// ===== РЕНДЕР ГАЛЕРЕИ =====
const works = ["work1.jpg", "work2.jpg", "work3.jpg", "work4.jpg", "work5.jpg", "work6.jpg"];
function renderWorks() {
  const grid = document.getElementById("works-grid");
  if(!grid) return;
  grid.innerHTML = works.map((img, index) => `
    <div class="work-card" onclick="openLightbox('img/${img}')">
      <img src="img/${img}" alt="Работа ${index+1}" onerror="this.src='https://placehold.co/400x400/1E1E1E/555?text=Работа+${index+1}'">
    </div>
  `).join("");
}

// ===== ЗАПУСК =====
renderGrid("grid-bruschatka", data.bruschatka);
renderGrid("grid-plitka", data.plitka);
renderGrid("grid-bordyury", data.bordyury);
renderGrid("grid-prostupi", data.prostupi);
renderGrid("grid-paneli", data.paneli);
renderWorks();

// ===== ВКЛАДКИ =====
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    
    btn.classList.add("active");
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
  });
});

// ===== БУРГЕР-МЕНЮ =====
const menuBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

// ===== ЗАКАЗ В TELEGRAM =====
function orderItem(name, btn) {
  const card = btn.closest(".card");
  const color = card.querySelector(".color-select").value;
  const qty = card.querySelector(".qty-input").value;
  
  const text = `Здравствуйте, хочу заказать: ${name}.\nЦвет: ${color}.\nКоличество: ${qty}`;
  window.open(`https://t.me/+375295894068?text=${encodeURIComponent(text)}`, "_blank");
}

// ===== ОБЩАЯ ФОРМА =====
document.getElementById("tgForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("userName").value;
  const phone = document.getElementById("userPhone").value;
  const msg = document.getElementById("userMsg").value;
  
  let text = `Здравствуйте, хочу заказать!\nИмя: ${name}\nТелефон: ${phone}`;
  if (msg.trim()) text += `\nСообщение: ${msg}`;
  
  window.open(`https://t.me/+375295894068?text=${encodeURIComponent(text)}`, "_blank");
});

// ===== ЛАЙТБОКС =====
function openLightbox(src) {
  const lb = document.createElement("div");
  lb.className = "modal show";
  lb.innerHTML = `<div class="modal-content" style="padding:0;background:transparent;border:none;max-width:95%;"><img src="${src}" style="width:100%;border-radius:12px;"></div>`;
  lb.onclick = () => lb.remove();
  document.body.appendChild(lb);
}

// ===== МОДАЛЬНЫЕ ОКНА =====
function openCallbackModal(e) { e.preventDefault(); document.getElementById("callbackModal").classList.add("show"); }
function closeCallbackModal(e) { if(e.target.id === "callbackModal" || e.target.classList.contains("modal-close")) document.getElementById("callbackModal").classList.remove("show"); }
function submitCallback() {
  const phone = document.getElementById("callbackPhone").value.trim();
  if(!phone) { alert("Введите номер"); return; }
  window.open(`https://t.me/+375295894068?text=${encodeURIComponent("Прошу перезвонить: " + phone)}`, "_blank");
  document.getElementById("callbackPhone").value = "";
  closeCallbackModal();
}

function openPolicy(e) { e.preventDefault(); document.getElementById("policyModal").classList.add("show"); }
function closePolicy(e) { if(e.target.id === "policyModal" || e.target.classList.contains("modal-close")) document.getElementById("policyModal").classList.remove("show"); }