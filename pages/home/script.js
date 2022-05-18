let menuBtn = document.querySelector(".menu-btn");
let navBar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("cancel");
  navBar.classList.toggle("active");
};

window.onload(mapListOfCounts());

async function mapListOfCounts() {
  const arrayListOfCounts = await fetch("./listCounts.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => jsondata);
  let countSection = document.getElementById("count");

  const mapArrayList = arrayListOfCounts.map((item) => {
    return `<div class="box">
      <div class="box-icon">
        <img src=${item?.img} class="box-image"></img>
      </div>
      <div class="content">
        <h3>${item?.count}</h3>
        <p>${item?.title}</p>
      </div>
      </div>`;
  });

  countSection.innerHTML = mapArrayList;
  console.log(countSection.innerHTML);
}
