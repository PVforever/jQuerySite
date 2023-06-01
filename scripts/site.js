        //等網頁匯入完再執行js
        // window.addEventListener('load', function(){
        // //JavaScript
        // //document.getElementsByTagName('h2')[0].style.background-color = "blue";
        // // const items = document.getElementsByTagName('h2');
        // // for (let i = 0, max = items.length;i < max; i++) {
        // //     items
        // // }

        // // jQuery('selectors').css('樣式名稱','樣式的值')
        // $('h2').css('background-color','red').css('color','white');
        // });

        // 一般寫法
        // $(document).ready(function() {
        //     $('h2').css('background-color','red').css('color','white');
        // });

        // 簡化
        $(function () {
            // // const myh2 = $('h2');
            // $('h2').css('background-color', 'green').css('color', 'white');
            // $('h2').on('mouseenter', function () {
            //     //this 表示觸發事件的物件
            //     // this 是 js物件
            //     //$(this) 轉換成jQuery物件
            //     // this.style.backgroundColor = 'pink';
            //     $(this).css('backgroundColor','pink');
            // });
            // $('h2').on('mouseleave', function () {
            //     // this.style.backgroundColor = 'green';
            //     $(this).css('background-color','green');
            // });

            //{key:value,key:value}
            $('h2').css({'background-color':'green','color':'white','padding':'10px'})
                .on({
                    'mouseenter': function () {
                        $(this).css('backgroundColor','pink');
                    },
                    'mouseleave': function () {
                        $(this).css('background-color','green');
                    }
                });
        });