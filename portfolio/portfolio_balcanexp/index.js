/*скрипт очень корявый. Простите меня.*/
$(function(){


/*эта переменная показывает, нажата ли кнопка меню*/
var button_condition=false;

/*клик на кнопке запускает функцию проверки - а не была ли кнопка уже нажата?*/
    

$("div#button").on("click",function(){
            button_toggle();
        });

    
/*проверка состояния кнопки, запуск показа или скрытия меню, отметка в значении переменной*/
function button_toggle(){
    if(button_condition==false){button_on();button_condition=true;}
    else{button_off();button_condition=false;}
};

/*показ меню, скрытие окружения, создание надписи "на главную страницу"*/
function button_on(){
    $("header, #gallery, #articles").hide(100);
    $("nav").show(100);
    
    $("div#button").after("<div class='attention'><b>&#8592;</b> на главную страницу</div>")
};

/*скрытие меню, показ окружения и удаление надписи "на главную страницу*/ 
function button_off(){
        $("nav").hide(100);
        $("header, #gallery, #articles").show(100)//sscscs
        $(".attention").remove()
};











});