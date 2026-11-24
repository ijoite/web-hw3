// sortBy : 배열, 키 이름, 참이면 내림차순 ⇒ 새 배열
const sortBy = (list, key, desc) => {
    const sign = desc ? -1 : 1;
    return [...list].sort((a, b) => {
        if (typeof a[key] === "string") {
            return a[key].localeCompare(b[key]) * sign;
        }
        return (a[key] - b[key]) * sign;
    });
}

// search : 배열, 문자열 ⇒ 새 배열
const search = (list, keyword) => {
    const word = keyword.trim().toLowerCase();
    return list.filter(m => m.title.toLowerCase().includes(word));
}

const posterUrl = (path, size) => {
    return "https://image.tmdb.org/t/p/" + size + path;
}

// renderCards : 영화 배열 ⇒ 보드에 카드 생성(반환값 없음)
const renderCards = list => {
    const board = document.querySelector(".board");
    board.innerHTML = "";
    for (const m of list) {
        const card = document.createElement("article");
        card.className = "card";
        card.setAttribute("data-type", m.type);
        card.setAttribute("data-title", m.title);
        if (m.rating >= 8) {
            card.classList.add("hot");
        }
        let posterHtml = "";
        if (m.poster === null) {
            card.classList.add("no-poster");
            posterHtml = `<div class="poster-fallback">${m.title[0]}</div>`;
        } else {
            posterHtml = `<img class="poster" src="${posterUrl(m.poster, "w342")}" alt="${m.title} 포스터">`;
        }
        let rankHtml = "";
        if (m.type === "boxoffice") {
            rankHtml = `<span class="rank">${m.rank}</span>`;
        }
        let likeClass = "like";
        if (liked.includes(m.title)) {
            likeClass = "like liked";
        }
        card.innerHTML = `
 ${posterHtml}
 ${rankHtml}
 <span class="badge">${m.rating}</span>
 <div class="info">
     <h3>${m.title}</h3>
    <p class="year">${m.year}</p>
    <button class="${likeClass}" type="button">♥</button>
 </div>`;
        board.appendChild(card);

        document.querySelector("#count").textContent = list.length + "편";
    }
    document.getElementById("likeCount").textContent = liked.length;
    updateLikeCount();
    if (list.length === 0) {
        board.classList.add("is-empty");
    } else {
        board.classList.remove("is-empty");
    }
}

function getView() {
    const keyword = document.getElementById("q").value;
    const key = document.getElementById("sort").value;
    const type = document.querySelector('input[name="type"]:checked').value;
    let list = search(movies, keyword);
    if (type !== "all") {
        list = list.filter(m => m.type === type);
    }
    return sortBy(list, key, key !== "title");
}

function refresh() { renderCards(getView()); }

// 찜한 제목 배열을 브라우저에 저장하고 불러오기(교재에 없는 문법: localStorage, JSON)
const liked = JSON.parse(localStorage.getItem("liked") || "[]");
function saveLiked() {
  localStorage.setItem("liked", JSON.stringify(liked));
}

document.getElementById("q").addEventListener("input", refresh);
document.getElementById("sort").addEventListener("change", refresh);
document.getElementById("typeFilter").addEventListener("change", refresh);
document.getElementById("board").addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const title = card.getAttribute("data-title");
    if (e.target.closest(".like")) {
        const i = liked.indexOf(title);
        if (i === -1) {
            liked.push(title);
        } else {
            liked.splice(i, 1);
        }
        saveLiked();
        refresh();
        return;
    }
});
refresh();
