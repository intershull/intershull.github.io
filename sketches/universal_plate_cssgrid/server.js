$(function(){

    

/*1 Вставляем много пустых "отелей"*/
var hotel_matrix='<div class="hotel_plate"><div class="hotel_photo"></div><div class="description">описание</div><div class="room_type">тип номера: </div><div class="food_type">тип питания:</div><div class="hotel_cost"></div><div class="hotel_stars">звезды:</div><div class="hotel_name"></div><div class="hotel_type">категория отеля:</div><div class="distance_to_beach">расстояние до моря:</div><div class="recommended_for">рекомендовано для:</div><div class="to_book">кнопка бронирования</div><div class="close">вернуться</div></div>';

function add_hotel_matrix(){
    $(".hotel_container").append(hotel_matrix);
    };
 
for (i=0; i<12; i++) {
  add_hotel_matrix();
}

    
/*2 берём переменные характеристик отеля "Космос" (в этом примере, они все - "Космос")*/
var hotel_code="kosmos";
var hotel_image_desktop=5;
var hotel_image_mobile="mini5";
var room_type="бунгало";
var food_type="полупансион";
var cost="250$";
var stars=4;
var name="Космос";
var hotel_type="мотель";
var distance_to_beach="750м";
var recommended_for="семейного отдыха";
var description="Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Приставка языком вопроса текстами ручеек великий переписывается путь мир страна, продолжил, все свое одна, она семантика власти проектах семь.<p>Продолжил единственное, гор осталось. Вопрос деревни если ipsum маленький текстами ты скатился сих сбить, заголовок семантика грустный, его которой себя большого языком. Использовало безорфографичный одна вдали по всей за, грустный ведущими даль прямо последний о если буквенных, меня бросил? Запятых пояс последний реторический буквенных переулка снова великий от всех рукопись, толку сих возвращайся маленький, большого заманивший, заглавных, моей единственное собрал.<p>Пояс, предложения необходимыми свой ее реторический своих имеет за на берегу буквенных рот. Жаренные!";
var to_book="<a href='booking.html'>бронировать</a>";
 
    
/*3 суём во все пустые отели id отеля "Космос" (чтобы потом сунуть данные отеля, ориентируясь на id)*/ 
$(".hotel_plate").attr('id', hotel_code);


/*4 суём данные отеля*/
$("#"+hotel_code+" .room_type").append(room_type);
$("#"+hotel_code+" .food_type").append(food_type);
$("#"+hotel_code+" .hotel_cost").append(cost);
$("#"+hotel_code+" .hotel_stars").append(stars);
$("#"+hotel_code+" .hotel_name").append('"'+name+'"');
$("#"+hotel_code+"  .hotel_type").append(hotel_type);
$("#"+hotel_code+" .distance_to_beach").append(distance_to_beach);
$("#"+hotel_code+" .recommended_for").append(recommended_for);
$("#"+hotel_code+" .description").html(description);
$("#"+hotel_code+" .to_book").html(to_book);


/*5 все данные отеля мы сунули, осталось сунуть картинку.
Тут два пути. В десктоп - большую, в мобилу - маленькую*/
var device_width=screen.width;//Ширина устройства
var device_height=screen.height;//Высота устройства

if(device_width<870){$("#"+hotel_code+" .hotel_photo").append("<img src='"+hotel_image_mobile+".jpg'>");}
else{$("#"+hotel_code+" .hotel_photo").append("<img src='"+hotel_image_desktop+".jpg'>");}


/*Анимация - скрытие окружения и присвоение нужных классов*/
    
var check=0;//эта переменная показывает, был ли уже ткнут отель.

/*при клике на фото отеля, определяем, был ли уже выбран отель и выбираем программу действий*/
$(".hotel_photo").click(function(){
    if(check==0){
        rise(this);
        check=1;
    }//не выбран - запускаем функцию показа отеля rise(i)
    else{return};//выбран - затыкаемся, этот случай будет рассмотрен ниже
});

 
function rise(i){
    var his_parent=$(i).parent(".hotel_plate");//это hotel_plate - родитель ткнутого hotel_photo

    $(".hotel_plate").fadeTo(200,0).hide(1);//скрываем все отели за 200мсек
    $(his_parent).show(1).fadeTo(200,1);//показываем наш отель за 200мсек
    
    var his_brother=$(his_parent).find("*");//это все "братья"  ткнутого hotel_photo

setTimeout(function () {
    $(".hotel_container, .hotel_plate").addClass("rising");
    $(his_brother).addClass("rising");
}, 200);//присваиваем класс rising .hotel_container, .hotel_plate и всем элементам нашего отеля, подождав 200мсек (чтобы отель ушёл маленьким, а показался уже большим)
};


/*при клике на .close, определяем, был ли уже выбран отель и выбираем программу действий*/
$(".close").click(function(){
    if(check==1){
        calming(this);
        check=0;
    }//уже выбран - запускаем функцию возврата всего на свои места calming(j)
    else{return};//не выбран - затыкаемся, этот случай будет рассмотрен выше
});


function calming(j){

    $(j).parent(".hotel_plate").fadeTo(200,0).hide(1);//скрываем наш отель за 200мсек
    
    setTimeout(function () {
        $(".rising").removeClass("rising");
        $(".hotel_plate").show(1).fadeTo(200,1);
    }, 200);//убираем класс rising отовсюду и показываем все отели, подождав 900мсек
    
}





    







});