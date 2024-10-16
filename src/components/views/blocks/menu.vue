<template>
  <main>
    <header class="py-10 flex bg-black opacity-50 top-0 sticky z-20 bg-opacity-100">
      <nav class="flex justify-between w-full">
        <ul class="flex">
          <li><a href="" class="mx-20 text-white ">Описание</a></li>
          <li><a href="" class="mx-20 text-white ">Отзывы</a></li>
        </ul>
        <!-- <div><a><other class="uppercase font-bold text-center w-16 h-16"/></a></div> -->
        <div class="shadow-md">
          <a class="uppercase font-bold text-center text-yellow-50" href="#">ОТЗЫВ</a>
        </div>
          <!-- <div><a class="uppercase font-bold text-center text-yellow-50" href="#">ОТЗЫВ</a></div> -->
        <ul class="flex">
          <li><a href="#reit" class="mr-40 text-white ">Рейтинг</a></li>
          <li><a href="" class="mr-40 text-white ">Контакты</a></li>
        </ul>
      </nav>
    </header>
    <div class="black-form bg-black p-2 hidden sm:flex flex-col items-center">
      <div class="text-center text text-white mb-8">
        <span class="font-semibold text-2xl">отзывы</span>
        <br>
        <span class="font-semibold text-4xl ">ООО «ЮРИСТ ДЛЯ ЛЮДЕЙ»</span>
      </div>
      <yoodle class="object-cover w-44 h-44 mb-8"/>
        <div class ="text md-10">
          <div class ="text-center font-semibold text-white mb-8">
              <span>ИНН 6623131933</span><br>
              <span>ОГРН 1196658058717</span>
          </div>
        </div>
            <div class="text-center mb-40">
              <button class="bg-white  text-black font-bold py-3 px-20 rounded">
                Оставить отзыв
              </button>
          </div>
    <div class="w-screen flex px-72 text-[20px] mb-20">
        <div class="border-l-4 border-gray-200 h-full pl-5">
          <div class="font-semibold text-white">
            <span>«Юрист для Людей» - федеральная юридическая компания.</span>
            <br>
            <span>Мы предоставляем населению широкий спектр юридических услуг.</span>
            <br>
            <span> Основное направление, это банкротство физических лиц.</span>
            <br>
            <br>
            <span class="text-[15px]">5 000 000 Клиентов по России</span>
            <br>
            <span class="text-[15px]">100 Городов присутствия</span>
            <br>
            <span class="text-[15px]">7 Лет работы</span>
          </div>
        </div>
    </div>
  </div>
  
  <div class="white-form h-screen  bg-white p-2 flex flex-col items-center mb-52">
    <div class="text-center text text-black mt-12 mb-24">
      <ul class="flex">
          <li><a  class="mx-2 ">Главная</a></li>
          <span>/</span>
          <li><a  class="mx-2 ">Банкротство</a></li>
          <span>/</span>
          <li><a  class="mx-2 ">Юрист для людей</a></li>
      </ul>
    </div>
    <div class="text-center text text-black mb-20">
        <span class="font-semibold text-2xl">Рейтинг компании</span>
        <br>
        <span class="font-semibold text-3xl  text-black">«ЮРИСТ ДЛЯ ЛЮДЕЙ»</span>
      </div>
<div class="main-box-4 grid grid-cols-2 gap-4 ">
  <div class="cont-1 relative bg-gray-200 w-full h-100 p-20 border border-gray-400 mb-8">
    <div class="circle-1 absolute top-[-25px] z-10 left-[44%] rounded-full w-12 h-12 bg-gray-400 flex justify-center items-center">
      <div class="cirl-name-1 text-white font-bold text-lg">1</div>
    </div>
    <div class="cont-1">
      <span class="font-semibold text-3xl  text-black text-center">0%</span><br>
      <span>Процент положительных от общего числа</span>
    </div>
  </div>

  <div class="cont-2 relative bg-gray-200 w-full h-100 p-20 border border-gray-400 mb-8">
    <div class="circle-2 absolute top-[-25px] z-10 left-[44%] rounded-full w-12 h-12 bg-gray-400 flex justify-center items-center">
      <div class="cirl-name-2 text-white font-bold text-lg">2</div>
    </div>
    <div class="cont-2">
      <span class="font-semibold text-3xl  text-black text-center">0</span><br>
      <span class="">Отзывов</span>
    </div>
  </div>

  <div class="cont-3 relative bg-gray-200 w-full h-100 p-20 border border-gray-400 mb-8">
    <div class="circle-3 absolute top-[-25px] z-10 left-[44%] rounded-full w-12 h-12 bg-gray-400 flex justify-center items-center">
      <div class="cirl-name-3 text-white font-bold text-lg">3</div>
    </div>
    <div class="cont-3">
      <span class="font-semibold text-3xl  text-black text-center">0</span><br>
      <span>Положительных отзывов</span>
    </div>
  </div>

  <div class="cont-4 relative bg-gray-200 w-full h-100 p-20 border border-gray-400 mb-8">
    <div class="circle-4 absolute top-[-25px] z-10 left-[44%] rounded-full w-12 h-12 bg-gray-400 flex justify-center items-center">
      <div class="cirl-name-4 text-white font-bold text-lg">4</div>
    </div>
    <div class="cont-4">
      <span class="font-semibold text-3xl  text-black text-center">0</span><br>
      <span>Негативных отзывов</span>
    </div>
  </div>
</div>
<div class="grid grid-cols-2 gap-2">
  <div class="text-center">
    <button class="bg-black  text-white font-bold py-3 px-20 rounded mr-10 ">
      Положительные отзывы
    </button>
  </div>
  <div class="text-center">
  <button class="bg-black  text-white font-bold py-3 px-20 rounded mb-20 ml-10">
    Отрицательные отзывы
  </button>
  </div>
  <div class="text-center ">
    <button class="bg-black  text-white font-bold py-3 px-20 rounded mr-10">
      Положительные отзывы
    </button>
  </div>
  <div class="text-center ">
    <button class="bg-black  text-white font-bold py-3 px-20 rounded ml-10 ">
      Отрицательные отзывы
    </button>
  </div>
</div>


  </div>



  <div class="white-form h-screen bg-white flex flex-col items-center border-t border-black mr-60 ml-60 ">
    <div class="white-form h-screen bg-white p-2 flex flex-col items-center mt-10">
    <div class ="text">
          <div class ="text-center font-semibold text-black">
              <span class="text-2xl">Оставьте отзыв</span><br>
              <span class="text-3xl">«ЮРИСТ ДЛЯ ЛЮДЕЙ»</span>
          </div>
        </div>
      <div class="grid grid-cols-2 gap-2 mt-28">
        <div class=" text-black pl-20">
          <span class="font-semibold">8 800 533-81-30</span>
            <br>
            <br>
            <span>ООО «ЮРИСТ ДЛЯ ЛЮДЕЙ»</span>
            <br>
            <span>ИНН 6623131933</span>
            <br>
            <span>russia@юристдлялюдей.рф</span>
            <br>
            <br>
            <span>ПН - ПТ с 09:00 до 19:00</span>
            <br>
            <span>в СБ с 09:00 до 15:00</span>
            <br>
            <span>в ВС выходной</span>
            <br>
            <br>
            <span class="font-semibold">юристдлялюдей.рф</span>
            <div class="Main-icons">
              <div class="Main-icons">
  <div class="icons flex">
    <div>
      <WhatsappIcon class="w-6 h-6"/>
    </div>
    <div>
      <vk class="w-6 h-6 ml-2"/>
    </div>
    <div>
      <instagram class="w-6 h-6 ml-2"/>
    </div>
  </div>
</div>
</div>




        </div>
        <div class="">
          <div class="">
            <input class="cont-4 relative bg-gray-200 w-full h-100 p-4 border border-gray-400 mb-8" type="text" id="name" placeholder="Ваше имя">
          </div>
          <div class="mb-4">
            <a class="text-lg">Какой отзыв вы хотите оставить?</a>
            <br>
            <a><input type="radio" name="review-type" value="positive">Позитивный отзыв</a>
            <br>
            <a><input type="radio" name="review-type" value="negative">Негативный отзыв</a>
          </div>

          <div class="">
            <textarea class="cont-4 relative bg-gray-200 w-full h-100 p-4 border border-gray-400" type="text" id="" placeholder="Оставьте свой отзыв"></textarea>
          </div>
          <div class="mb-8">
            <button class="bg-black  text-white font-bold py-3 px-20 rounded">
              Оставить отзыв
            </button>
          </div>
        </div>
        <div class="mb-8 text-sm">
          <a class="float-right">«Нажимая на кнопку "Оставить отзыв", вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности»</a>
        </div>

      </div>
      <div class="text-center text text-black">
      <ul class="flex">
          <li><a  class="mx-2 ">Главная</a></li>
          <span>/</span>
          <li><a  class="mx-2 ">Банкротство</a></li>
          <span>/</span>
          <li><a  class="mx-2 ">Юрист для людей</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="bg-white p-2 flex flex-col items-center border-t border-black mr-60 ml-60">
  <div class="bg-white p-2 flex flex-col items-center">
    <div class="">
      <div class="text-center text text-black">
        <ul class="flex">
            <li><a href="" class="mx-2 font-semibold">О нас</a></li>
            <li><a href="" class="mx-2 font-semibold">Документы</a></li>
            <li><a href="" class="mx-2 font-semibold">Контакты</a></li>
        </ul>
      </div>
    </div>
    <div class="img-logo">
      <other class="w-24 h-24"/>
    </div>
    <div class="bg-gray opacity-50">
      <a>© 2022 Сайт отзывов России</a>
    </div>

  </div>
</div>
  </main>
</template>

<script setup>
import WhatsappIcon from '@/assets/whatsapp.svg'
import instagram from '@/assets/instagram.svg'
import vk from '@/assets/vk.svg'
import other from '@/assets/other.svg'
import yoodle from '@/assets/yoodle.svg'

</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
