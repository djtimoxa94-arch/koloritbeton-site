// ===== ДАННЫЕ КАТАЛОГА =====
// Фото: кладите в папку img/ с указанными именами (jpg). Если файла нет — покажется заглушка.
const data = {
  bruschatka: [
    {name:"Кремль", img:"kreml.jpg", specs:"300×150 мм · 50 мм · высокопрочный бетон",
      prices:[["Серый","27 руб."],["Цветной","32 руб."],["Мрамор из бетона","33 руб."]]},
    {name:"Греция", img:"grecia.jpg", specs:"285×285 / 100×100 мм · 40 мм · высокопрочный бетон",
      prices:[["Серый","25 BYN м.кв"],["Цветной","30 BYN м.кв"],["Мрамор","30 BYN м.кв"]]},
    {name:"Булыжная мостовая", img:"bulizhnaya.jpg", specs:"150×300 мм · 40 мм · высокопрочный бетон",
      prices:[["Серый","25 BYN м.кв"],["Цветной","31 BYN м.кв"],["Мрамор","32 BYN м.кв"]]},
    {name:"Каменная роза", img:"roza.jpg", specs:"6 камней разной фактуры · 40 мм",
      prices:[["Серый","25 BYN м.кв"],["Цветной","31 BYN м.кв"],["Мрамор","32 BYN м.кв"]]},
    {name:"Домино", img:"domino.jpg", specs:"295×145 мм · 40 мм · две текстуры",
      prices:[["Серый","25 BYN м.кв"],["Цветной","31 BYN м.кв"],["Мрамор","32 BYN м.кв"]]},
    {name:"Старый Арбат", img:"arbat.jpg", specs:"135×195 / 135×150 мм · 40 мм",
      prices:[["Серый","25 BYN м.кв"],["Цветной","31 BYN м.кв"],["Мрамор","32 BYN м.кв"]]}
  ],
  plitka: [
    {name:"Флорида дерево", img:"florida.jpg", specs:"300×300 мм · 30 мм",
      prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"Ялта", img:"yalta.jpg", specs:"300×300 мм · 30 мм",
      prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"Фазенда", img:"fazenda.jpg", specs:"300×300 мм · 30 мм",
      prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"Калифорния Кубик", img:"california-kubik.jpg", specs:"300×300 мм · 30 мм",
      prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"Паркет", img:"parket.jpg", specs:"300×300 мм · 30 мм · «клетка»/«шахматка»",
      prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"Калифорния дерево", img:"california-derevo.jpg", specs:"300×300 мм · 30 мм · кевларобетон",
      prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"12 кирпичей", img:"12-kirpichey.jpg", specs:"500×500 мм · 50 мм",
      prices:[["Серый","28 руб."],["Цветной","33 руб."],["Мрамор","35 руб."]]},
    {name:"Черепашка", img:"cherepashka.jpg", specs:"300×300 мм · 30 мм",
      prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]},
    {name:"Три доски", img:"tri-doski.jpg", specs:"300×300 мм · 30 мм",
      prices:[["Серый","22 руб."],["Цветной","26 руб."],["Мрамор","30 руб."]]}
  ],
  bordyury: [
    {name:"Бордюр 100×22×7,5", img:"bordur-100.jpg", specs:"100×22×7,5",
      prices:[["Серый","10 руб."],["Цветной","12 руб."],["Мраморный","14 руб."]]},
    {name:"Водосток (жёлоб)", img:"vodostok.jpg", specs:"50×16×6",
      prices:[["Серый","6 руб."],["Цветной","8 руб."],["Под мрамор","9 руб."]]},
    {name:"Бордюр 50×20×3.5", img:"bordur-50.jpg", specs:"50×20×3,5",
      prices:[["Серый","3.5 руб."],["Цветной","5.5 руб."],["Мраморный","5.5 руб."]]}
  ],
  prostupi: [
    {name:"Три прорези", img:"tri-prorezi.jpg", specs:"1350×340×40 мм",
      prices:[["Серый","25 руб./шт."],["Цветной","28 руб./шт."],["Мраморный","31 руб./шт."]]},
    {name:"Проступь «три прорези»", img:"prostup.jpg", specs:"1250×320×40 мм",
      prices:[["Серый","24 руб."],["Цветной","27 руб."],["Мраморный","30 руб."]]}
  ],
  paneli: [
    {name:"Ростовский камень", img:"rostov.jpg", specs:"190×190 / 380×190 мм · 25 мм",
      prices:[["Без окраса (с креп.)","26 руб/кв.м"],["В цвете (с креп.)","29 руб/кв.м"],["Мрамор (с креп.)","31 руб/кв.м"],
              ["Без окраса (без креп.)","25 руб/кв.м"],["В цвете (без креп.)","28 руб/кв.м"],["Мрамор (без креп.)","30 руб/кв.м"]]}
  ]
};

// ===== РЕНДЕР КАРТОЧЕК =====
function renderCards(containerId, items){
  const grid = document.getElementById(containerId);
  if(!grid) return;
  grid.innerHTML = items.map(item => `
    <article class="card">
      <div class="card__img" style="background-image:url('img/${item.img}')">
        ${item.name}
      </div>
      <div class="card__body">
        <h3>${item.name}</h3>
        <div class="card__specs">${item.specs}</div>
        <div class="card__prices">
          ${item.prices.map(p => `<span>${p[0]} <b>${p[1]}</b></span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

renderCards("grid-bruschatka", data.bruschatka);
renderCards("grid-plitka", data.plitka);
renderCards("grid-bordyury", data.bordyury);
renderCards("grid-prostupi", data.prostupi);
renderCards("grid-paneli", data.paneli);

// ===== БУРГЕР =====
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
if(burger && nav){
  burger.addEventListener("click", () => nav.classList.toggle("open"));
  nav.addEventListener("click", e => { if(e.target.tagName === "A") nav.classList.remove("open"); });
}

// ===== COOKIE =====
const cookie = document.getElementById("cookie");
const cookieOk = document.getElementById("cookie-ok");
if(cookie && cookieOk){
  if(!localStorage.getItem("cookieAccepted")) cookie.classList.add("show");
  cookieOk.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted","1");
    cookie.classList.remove("show");
  });
}

// ===== ГОД В ФУТЕРЕ =====
const yearEl = document.getElementById("year");
if(yearEl) yearEl.textContent = new Date().getFullYear();