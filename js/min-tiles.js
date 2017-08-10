const DEFAULT_MATRIX = [10,10]


var min_tiles = ()=> {
    let matrix = DEFAULT_MATRIX;
    let select
    let stuff
    var tiles = function() {
        console.log("?")
        if(!select){
            console.log("no div has been selected")
            return;
        } else if(!stuff){
            console.log("no title/description has been determined")
            return;
        } else if(stuff.length != matrix[0]*matrix[1]){
            console.log("number of tiles and number of stuff don't match")
            console.log("number of tiles :"+matrix[0]*matrix[1])
            console.log("number of stuff :"+stuff.length)
            return;
        }
        

        //initiate swipers
        let swpr_cont_h = '<div class="swiper-container swiper-container-h"><div id="OuterWrapper" class="swiper-wrapper"></div></div>'
        $(select).append(swpr_cont_h);

        let count = 0;
        for(var i=0; i<matrix[0]; i++){
            $('#OuterWrapper').append(`<div class="swiper-slide"><div class="swiper-container swiper-container-v"><div id="innerWrapper${i}"class="swiper-wrapper"></div></div></div>`)
            for(var j=0; j<matrix[1]; j++){
                $(`#innerWrapper${i}`).append(`<div id="slide${i+''+j}"class="swiper-slide"></div>`)
                var title = `<h2 class="slide_title">${stuff[count].title}</h2>`
                var descr = `<p class="slide_descr">${stuff[count].descr}</p>`
                var left = $(`<div class = "slide_left slide_box"></div>`)
                left.append(title)
                left.append(descr)
                $(`#slide${i+''+j}`).append(left)
                if(stuff[count].img){
                    console.log("?")
                    var right = $(`<div class = "slide_right slide_box"></div>`)
                    $(`#slide${i+''+j}`).append(right)
                    right.css("background-image", `url('./img/${stuff[count].img}')`)
                    right.css("background-position", 'center')
                    right.css("background-repeat", 'no-repeat')
                    right.css("background-size", 'contain')
                    right.css('width', '50%')
                    left.css('width', '50%')
                } else {
                    left.css('width', '100%')
                }
                $('.slide_box').css('height', '100%')
                $('.slide_box').css('float', 'left')
                left.css('text-align', 'center')
                count++
            }
        }
        //Done initiating

        var swiperH = new Swiper('.swiper-container-h', {
            centeredSlides: true,
            pagination: '.swiper-pagination-h',
            paginationType: 'bullets',
            spaceBetween:0,
            slidesPerView: 2,
            paginationClickable: true,
            slideToClickedSlide: true,
            keyboardControl: true,
            centeredSlides: true,
            followFinger: false,                
        });

        var swiperV = new Swiper('.swiper-container-v', {
            centeredSlides: true,
            pagination: '.swiper-pagination-v',
            slidesPerView: 2,
            direction: 'vertical',
            spaceBetween: 1,
            keyboardControl: true,
            onSlideNextStart: onSlideHandler,
            onSlidePrevStart: onSlideHandler,
            followFinger: false,
            // mousewheelForceToAxis: true
        });

        function onSlideHandler(){
            swiperV.map((d)=>{
                d.slideTo(swiperV[swiperH.activeIndex].activeIndex)
            })
        }
    
        swiperH.slideTo(matrix[0]/2)
        swiperV.map((d)=>{
            d.slideTo(matrix[1]/2)
        })


        /*******Renders random colors to the background color to each box. *******/
        var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
        swiperV.map((d, i)=>{
            d.slides.map((i, d2)=>{
                $(d2).css('background-color', CSS_COLOR_NAMES[Math.round(Math.random()*CSS_COLOR_NAMES.length)])
            })
        })




    }


    tiles.select = function(value){
        if (!arguments.length) return select;
        select = value;
        return tiles;
    }

    tiles.matrix = function(value){
        if (!arguments.length) return matrix;
        matrix = value;
        return tiles;
    }

    tiles.stuff = function(value){
        if (!arguments.length) return stuff;
        stuff = value;
        return tiles;
    }
    return tiles
}