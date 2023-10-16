
$(function(){

fetch('./asset/data/bannerData.json')
.then((response) => response.json())
.then((json) => {
    data=json.items;
    // console.log(data)
    let html = "";
    data.forEach(el => {

        html+=`<div class="swiper-slide visual-area">
        <a href="" class="visual-box"><img src="${el.imgSrc}" alt="${el.title}"></a>
      </div>`;
    });

    $('#bannerList').html(html);

})



$(".sc-movie .category-item").click(function(){
  selected = $(this).data('filter');

  console.log(selected)

  fetch('./asset/data/chartData.json')
  .then((response) => response.json())
  .then((json) => {
      data=json.items;
      var result = data.filter(function (parm) {return parm.filter == selected });
      let html = '';
  
  
  
      // <span class="day">${item.snippet.openAt}</span>
      // <span class="audience">누적관객 ${item.snippet.totalAudi}만</span>
  
  
      result.forEach(item => {
        
        

        if(item.snippet.totalAudi){
          isAudi = `<span class="audience">누적관객 ${item.snippet.totalAudi}만</span>`
        }else{
          isAudi = `<span class="day">D${item.snippet.openAt}</span>`
        }
        
          html+=
          `<li class="chart-box swiper-slide">
                    <a href="${item.link.info}" class="movie-poster">
                      <img src=${item.snippet.thumbnails} alt="">
                      <span class="age age${item.snippet.age}"></span>
                      <span class="rank rank${item.snippet.rank}">
                        <span class="per">${item.snippet.per}%</span>
                      </span>
                    </a>
                    <h3 class="movie-title">${item.snippet.title}</h3>
                    <div class="info-item">
                      <span class="score">${item.snippet.score}%</span> ${isAudi}
                    </div>
                    <a href="${item.ticket}" class="link-ticket">지금예매</a>
                  </li>`;            
      });

      $('#chartList1').html(html);
      $('#chartList2').html(html);
      
      movieSlide1.update();
      movieSlide2.update();
  })
  




})



$('.sc-movie .category-item').eq(0).trigger("click");
$(".sc-movie .title-box .main-title").click(function(){
  let thisChart = $(this).attr("href").substring(1)
  console.log(thisChart)
  $(".category-item."+thisChart).trigger("click")
})








// free 슬라이드
var movieSlide1 = new Swiper(".movie-swiper1", {
  slidesPerView: "auto",
  spaceBetween: 0,
  freeMode: true,
});
var movieSlide2 = new Swiper(".movie-swiper2", {
  slidesPerView: "auto",
  spaceBetween: 0,
  freeMode: true,
});



var swiper = new Swiper(".free-swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: true,
});

// 자동 슬라이드

var swiper = new Swiper(".auto-swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  // loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});



// 영화차트 리스트선택


$(".sc-movie .main-title").click(function(e){
  e.preventDefault();

  const target = $(this).attr('href');


  $(this).addClass("on").siblings().removeClass("on");
  $(target).addClass("on").siblings().removeClass("on");
})


$(".sc-movie .main-title").click(function(e){
    $(this).addClass("on");
    $('.sc-movie .main-title').not($(this)).removeClass('on');
    e.preventDefault();
});
$(".group-category .category-item").click(function(e){
    $(this).addClass("on");
    $('.group-category .category-item').not($(this)).removeClass('on');
    e.preventDefault();
});


// 아이스콘 좌우 리스트
var swiper = new Swiper(".center-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });





// 특별관 상하 슬라이드

$(".intro-area").click(function(){
    $(this).addClass('on');
    $('.intro-area').not($(this)).removeClass("on")
})


// footer 회사정보

$(".company-name").click(function(e){
    $(".company-name").toggleClass("on");
    e.preventDefault();
})



// 사이드메뉴 열고닫기

$(".ham-btn").click(function(e){
  e.preventDefault();
  $(".sc-side-menu").addClass("on");
  $("body").addClass("no-scroll");
})

$(".sc-side-menu .btn-close").click(function(e){
  e.preventDefault()
  $(".sc-side-menu").removeClass("on");
  $("body").removeClass("no-scroll")
})






$(".top-btn").click(function(e){
  e.preventDefault(e);
  $("html,body").animate({scrollTop:0},300);
})

})
