$(document).ready(function(){

    // 탑버튼
    var topbutton = $("#scrollToTopBtn");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            topbutton.fadeIn();
        } else {
            topbutton.fadeOut();
        }
    });
    topbutton.click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });



    // mockup_inner_img를 클릭하면 모달을 표시
    $('.mockup_inner_img').click(function(){

        
        // 모달 표시
        $('.modal_box').css('display', 'block');
    });

    // 모달 닫기 버튼 클릭 시 모달 닫기
    $('.close').click(function(event){
        event.stopPropagation(); // 이벤트 전파 막기
        $('.modal_box').css('display', 'none');
    });

    // 모달 외부를 클릭하면 모달 닫기
    $('.modal_box').click(function(event) {
        // .modal을 클릭한 경우에만 모달 닫기
        if ($(event.target).hasClass('modal_box')) {
            $('.modal_box').css('display', 'none');
        }
    });
});

const progressBar = document.querySelector(".bar");

let scrollNum = 0;
let documentHeight = 0;

// 전체 문서에서 얼마나 스크롤되었는지 계산
const getPercent = (scroll, total) => {
  return (scroll / total) * 100;
};

window.addEventListener("scroll", () => {
  // scroll top이기 때문에 height가 5000px이면 5000에서 화면높이를 뺀 값까지만 나온다.
  scrollNum = document.documentElement.scrollTop; // 또는 window.scrollY 사용 가능
  
  // scroll top값을 기준으로 계산할 것이기 때문에 문서의 전체 길이에서 화면 크기만큼 빼준다.
  documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  // 전체 문서에서 몇 %만큼 스크롤되었는지 계산해 progress bar의 width를 바꿔준다.
  progressBar.style.width = getPercent(scrollNum, documentHeight) + "%";
});