const dialog = document.getElementById("detail");

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

// posterUrl : 포스터 경로, 크기 ⇒ 포스터 주소(문자열)
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
    if (list.length === 0) {
        board.classList.add("is-empty");
    } else {
        board.classList.remove("is-empty");
    }
}

// getView : 없음 ⇒ 검색, 보기 필터, 정렬을 거친 새 배열
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

// refresh : 없음 ⇒ 지금 조건으로 보드 다시 그리기(반환값 없음)
function refresh() { renderCards(getView()); }

// openDetail : 영화 제목 ⇒ 상세 창 열기(반환값 없음)
function openDetail(title) {
    const movie = movies.find(m => m.title === title);
    if (!movie) return;
    document.getElementById("detailBody").innerHTML = `
 <img src="${posterUrl(movie.poster, "w500")}" alt="${movie.title} 포스터">
 <h2>${movie.title}</h2>
 <p>개봉일 ${movie.date}</p>
 <p>평점 ${movie.rating}</p>
 <p>${movie.overview}</p>`;
    dialog.showModal();   // 열기 : 화면 가운데에 뜨고 뒤쪽은 어두워집니다
}

// 찜한 제목 배열을 브라우저에 저장하고 불러오기(교재에 없는 문법: localStorage, JSON)
const liked = JSON.parse(localStorage.getItem("liked") || "[]");
// saveLiked : 없음 ⇒ liked 배열을 localStorage에 저장(반환값 없음)
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
    openDetail(title);
});
document.getElementById("closeDetail").addEventListener("click", () => {
    dialog.close();       // 닫기 : Esc 키를 눌러도 닫힙니다
});
refresh();
