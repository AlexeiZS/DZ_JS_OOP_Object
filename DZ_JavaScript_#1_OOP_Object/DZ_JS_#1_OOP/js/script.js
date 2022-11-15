

console.log('<<Язык сценариев JavaScript и библиотека jQeerty>>');
console.log('                Модуль2');
console.log('           Домашнее задание № 1')
console.log('');
console.log('ТЕМА: ОБЪЕКТ.МАССИВЫ.ОБЪЕКТ ARRAY.СТРОКИ.ОБЪЕКТ STRING. DATE.MATH. ВВЕДЕНИЕ В ООП')

//---------------------------------------------------------
lineStar();
console.log('              ','Задание # 1');

let car = {
Manufacturer: 'Germany',   
Name: 'Audi A4',
YearRelease : '2000',
AverageSpeed : '100',
showInfo: function(){
   console.log('Car manufacturer: '+this.Manufacturer+' '+this.Name+
   ' '+'release: '+this.YearRelease+' averageSpeed:  '+this.AverageSpeed+' km/h.')
},
calculatorTimeDistance(km){
  let distance = Math.floor((km / this.AverageSpeed) + (km / this.AverageSpeed)/4);
  console.log('The necessary time = '+distance+' hours, to overcome '+km+' km.');
  console.log('Rest 1 hour, every 4 hours.');
}
};
car.showInfo();
car.calculatorTimeDistance(1500);// расчет времени для преодоления расстояний(с учетом отдыха, 1 час,каждые 4 часа)

lineStar();
//---------------------------------------------------------
console.log('              ','Задание # 2');

/* Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
и следующие функции для работы с этим объектом.
  1. сложение двух объектов-дробей.
  2. вычитания двух объектов-дробей.
  3. умножения двух объектов-дробей.
  4. деления двух объектов-дробей.
  4. сокращения двух объектов-дробей. */

function Fraction(numerator = null,denominator = null){
   this.numerator = numerator;
   this.denominator = denominator;
   this.showInfo = function(){
      console.log('fraction: '+ this.numerator +'/'+ this.denominator);
   }

   // common denomintor(общий знаменатель)
   this.commonDenom = function (fract1,fract2){
      return (fract1.denominator * fract2.denominator);
   }

   //addition (сложение)
   this.addingFraction = function (fract1,fract2){
      newFract = new Fraction();
      newFract.numerator = (fract1.numerator * fract2.denominator +  fract2.numerator * fract1.denominator);
         newFract.denominator = this.commonDenom(fract1,fract2);
      return newFract;
   }

   //substraction (вычитание)
   this.subFract = function (fract1,fract2){
      //newFract = new Fraction();
      newFract.numerator = (fract1.numerator * fract2.denominator - fract2.numerator * fract1.denominator);
         newFract.denominator = this.commonDenom(fract1,fract2);
      return newFract;
   }

   //multiplication (умножение)
   this.multFract = function (fract1,fract2){
      //newFract = new Fraction();
       newFract.numerator = (fract1.numerator * fract2.numerator);
       newFract.denominator = (fract1.denominator * fract2.denominator);
       return newFract;
   }

   //division  (деление)
   this.divFract = function (fract1,fract2){
      newFract.numerator = (fract1.numerator * fract2.denominator);
      newFract.denominator = (fract1.denominator * fract2.numerator);
      return newFract;

   }

   //reduction (сокращение)
   this.reductFract = function (fract){
      let nod = NOD(fract.numerator,fract.denominator);
      fract.numerator = fract.numerator/nod;
      fract.denominator = fract.denominator/nod;
      return fract;
   }

   //NOD
   function NOD(x, y) {
      if (y > x) return NOD(y, x);
      if (!y) return x;
      return NOD(y, x % y);
   }

}

let fract1 = new Fraction(1,2);
let fract2 = new Fraction(3,7);
fract1.showInfo();//  1/2
fract2.showInfo();//  3/7
let addFr = new Fraction();
//addFr.showInfo();//  fraction: null/null
addFr = addFr.addingFraction(fract1,fract2);// addition
addFr.showInfo();// 13/14
let subFr = new Fraction();
subFr = subFr.subFract(fract1,fract2);// substraction
subFr.showInfo();// 1/14
let multFr = new Fraction();
multFr = multFr.multFract(fract1,fract2);// multiplication
multFr.showInfo(); // 3/14
let divFr = new Fraction();
divFr = divFr.divFract(fract1,fract2);// division
divFr.showInfo(); // 7/6
// ----------------------------------------------
console.log('Сокращение:');
let reductFr = new Fraction(10,25);// creature 10/25
console.log('Дробь 10/25');
reductFr = reductFr.reductFract(reductFr);
reductFr.showInfo();// 10/25 = 2/5
reductFr =  new Fraction(100,200);// creature 100/20
console.log('Дробь 100/200');
reductFr = reductFr.reductFract(reductFr);
reductFr.showInfo();// 100/200 = 1/2

lineStar();
//------------------------------------------------
console.log('              ','Задание # 3');
/*  Создать объект, описывающий время (часы, минуты, секунды), и следующие
  функции для работы  с этим объектом.
  1. Функция вывода времени на экран.
  2. Функция изменения времени на переданное количество секунд.
  3. Функция изменения времени на переданное количество минут.
  4. Функция изменения времени на переданное количество часов.
  
  Учтите, что в последних 3-х функциях, при изменении одной части времени,
  может изминиться другая. Например: если ко времени <<20:30:45>> добавить
  30 секунд, то должно получиться  <<20:31:15>>,а не <<20:30:75>>. 
  */

  class Time {
   constructor(hour = 0,minute = 0,second = 0){
      this.hour = hour;
      this.minute = minute;
      this.second = second;
   }
   showTime(){
      let hours, minute, second;
      if(this.hour < 9 ){
          hours = `0${this.hour}`;
      }  
      else hours = `${this.hour}`;
      if(this.minute < 9){
          minute = `0${this.minute}`;
      }  
      else  minute = `${this.minute}`;
      if(this.second < 9){
           second  = `0${this.second}`;
      }
      else second = `${this.second}`;
      
      //console.log(+hours+':'+minute+':'+second);
      console.log(`${hours}:${minute}:${second}`);//тоже самое

      //console.log(`${this.hour}:${this.minute}:${this.second}`);
   }

   changeSeconds(sec){
      console.log('changeSeconds('+sec+');');
      let h = Math.floor(sec/3600);
      this.addHour(h);
      let m = Math.floor((sec - h * 3600)/60);
      this.addMin(m);
      let s = Math.floor((sec - h * 3600) - (m * 60));
      this.addSec(s);

   }
   changeMinutes(min){
      console.log('changeMinutes('+min+');');
      let h = Math.floor(min/60);
      this.addHour(h);
      let m = Math.floor(min - h * 60);
      this.addMin(m);

   }
   changeHours(hours){
    console.log('changeHous('+hours+')');
    if((this.hour += hours) > 24){
      this.hour -= 24;
   }

   }
   addSec(sec){
      if((this.second += sec) >= 60){  //добовляет секунды в любои случае!
         this.second -= 60;
         this.addMin(1);
      }
   }
   addMin(min){
      if((this.minute += min) > 60){
         this.minute -= 60;
         this.addHour(1);
      }
   }
   addHour(hour){

      if((this.hour += hour) > 24){
         this.hour -= 24;
      }
   }


  }
  
  let time = new Time(7,17,43);
  console.log('начальное время:');
  time.showTime();//7,17,43
  //-----------------------
  lineStar();
  time.changeSeconds(3725);
  time.showTime();
  time.changeSeconds(15);
  time.showTime();
  time.changeSeconds(40);
  time.showTime();
  //-----------------------
  lineStar();
  time.changeMinutes(100);
  time.showTime();
  time.changeMinutes(5);
  time.showTime();
  time.changeMinutes(13);
  time.showTime();
  //-----------------------
  lineStar();
  time.changeHours(10);
  time.showTime();
  time.changeHours(20);
  time.showTime();
  time.changeHours(30);
  time.showTime();


lineStar();
//-------------------------------------
function lineStar(){console.log('*****************************')};
