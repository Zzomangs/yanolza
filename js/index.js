$(function(){
    var visual = $('.banner2-box-visual > li');
    var button = $('.banner2-box-buttonList > li');
    var current = 0;
    var setIntervalId;

    button.click(function(){
        var tg = $(this);
        var i = tg.index();

        move(i);
    });

    $(".banner2-box").on({
        mouseover:function(){
            clearInterval(setIntervalId);
        },
        mouseout:function(){
            timer();
        }
    });

    timer();
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == visual.size()){ // visual.size() 요소의 수를 반환한다. 여기서는 만약 n=3이라면 처음으로 돌아가라는 뜻
                n = 0;
            }

            button.eq(n).trigger('click'); // trigger는 내가 설정한 클릭이벤트를 시뮬레이션 한다는 뜻
        }, 5000);
    }

    function move(i){
        if(current == i) return;

        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        
            currentEl.css({left:0}).animate({left:'-100%'});
            nextEl.css({left:'100%'}).animate({left:0});

        current = i;
    }
});