<template>
  <header class="py-5 flex bg-black opacity-50 top-0 sticky z-20">
    <nav class="flex flex-col sm:flex-row justify-between w-full">
      <ul class="flex flex-col sm:flex-row">
        <li>
          <a href="#opis" class="hover:underline mx-2 sm:mx-5 text-white"
            >Описание</a
          >
        </li>
        <li>
          <a href="#otzv" class="hover:underline mx-2 sm:mx-5 text-white"
            >Отзывы</a
          >
        </li>
      </ul>
      <div class="shadow-md mt-2 sm:mt-0 order-last sm:order-none">
        <a class="uppercase font-bold text-center text-yellow-50 ml-2" href="#"
          >ОТЗЫВ</a
        >
      </div>
      <ul class="flex flex-col sm:flex-row">
        <li>
          <a href="#reit" class="hover:underline mx-2 sm:mx-5 text-white"
            >Рейтинг</a
          >
        </li>
        <li>
          <a href="#kon" class="hover:underline mx-2 sm:mx-5 text-white"
            >Контакты</a
          >
        </li>
      </ul>
      <!-- Бургер-меню -->
      <div class="sm:hidden flex items-center">
        <button id="burgerButton" class="focus:outline-none">
          <menu3 alt="Menu" class="w-8 h-8" />
          <img src="" alt="Menu" class="w-8 h-8" />
        </button>
      </div>
    </nav>
  </header>
  <div
    id="menuOptions"
    class="hidden sm:flex flex-col bg-white shadow-lg absolute right-0 mt-2 w-48"
  >
    <RouterLink to="/login" class="px-4 py-2 text-black hover:bg-gray-200"
      >Войти</RouterLink
    >
    <RouterLink to="/register" class="px-4 py-2 text-black hover:bg-gray-200"
      >Регистрация</RouterLink
    >
    <!-- <a href="#register" class="px-4 py-2 text-black hover:bg-gray-200">Регистрация</a> -->
  </div>

  <div class="black-form bg-black p-2 sm:flex flex-col items-center">
    <div class="text-center text text-white mb-8">
      <span class="font-semibold text-2xl sm:text-3xl md:text-4xl">отзывы</span>
      <br />
      <span class="font-semibold text-4xl sm:text-5xl md:text-6xl"
        >ООО «ЮРИСТ ДЛЯ ЛЮДЕЙ»</span
      >
    </div>
    <yoodle
      class="object-cover w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-8 mx-auto sm:mx-0 md:float-right"
    />
    <div class="text md-10 sm:text-lg md:text-xl">
      <div class="text-center font-semibold text-white mb-8">
        <span>Email: {{ userEmail }}</span>
        <span>ИНН 6623131933</span><br />
        <span>ОГРН 1196658058717</span>
      </div>
    </div>
    <div id="opis" class="text-center mb-6 sm:mb-12 md:mb-20">
      <button
        class="bg-white text-black font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded"
      >
        Оставить отзыв
      </button>
    </div>
    <div
      class="w-full flex flex-col sm:flex-row md:flex-wrap px-4 sm:px-72 mr-52 text-[18px] sm:text-[20px] md:text-[22px] mb-20"
    >
      <div class="border-l-4 border-gray-200 h-full pl-5 sm:pl-8 md:pl-15">
        <div class="font-semibold text-white">
          <span>«Юрист для Людей» - федеральная юридическая компания.</span>
          <br />
          <span
            >Мы предоставляем населению широкий спектр юридических услуг.</span
          >
          <br />
          <span> Основное направление, это банкротство физических лиц.</span>
          <br />
          <br />
          <span class="text-[15px] sm:text-[18px] md:text-[20px]"
            >5 000 000 Клиентов по России</span
          >
          <br />
          <span class="text-[15px] sm:text-[18px] md:text-[20px]"
            >100 Городов присутствия</span
          >
          <br />
          <span class="text-[15px] sm:text-[18px] md:text-[20px]"
            >7 Лет работы</span
          >
        </div>
      </div>
    </div>
  </div>

  <div
    class="white-form h-screen bg-white p-2 flex flex-col items-center mb-52"
  >
    <div class="text-center text text-black mt-6 mb-12 md:mt-12 md:mb-24">
      <ul class="flex flex-wrap justify-center">
        <li class="mx-2 mb-2 md:mb-0">
          <a class="hover:underline">Главная</a>
        </li>
        <span class="mx-2 mb-2 md:mb-0">/</span>
        <li class="mx-2 mb-2 md:mb-0">
          <a class="hover:underline">Банкротство</a>
        </li>
        <span class="mx-2 mb-2 md:mb-0">/</span>
        <li class="mx-2 mb-2 md:mb-0">
          <a class="hover:underline">Юрист для людей</a>
        </li>
      </ul>
    </div>
    <div id="reit" class="text-center text text-black mb-20">
      <span class="font-semibold text-2xl">Рейтинг компании</span>
      <br />
      <span class="font-semibold text-3xl text-black">«ЮРИСТ ДЛЯ ЛЮДЕЙ»</span>
    </div>

    <div class="grid grin-cols-1 md:grid-cols-2 gap-4">
      <div
        class="cont-1 relative bg-gray-200 w-full h-full p-4 md:p-20 border border-gray-400 text-center"
      >
        <div
          class="circle-1 absolute top-[-25px] left-1/2 -translate-x-1/2 z-10 rounded-full w-12 h-12 bg-gray-400 flex justify-center items-center mb-4 md:mb-8"
        >
          <div class="cirl-name-1 text-white font-bold text-lg">1</div>
        </div>
        <div class="cont-1 text-center mt-2 md:mt-4">
          <span class="font-semibold text-2xl md:text-3xl text-black">0%</span>
        </div>
        <div>
          <span class="text-lg">Процент положительных от общего числа</span>
        </div>
      </div>

      <div
        class="cont-2 relative bg-gray-200 w-full h-full p-4 md:p-20 border border-gray-400 text-center"
      >
        <div
          class="circle-2 absolute top-[-25px] left-1/2 -translate-x-1/2 z-10 rounded-full w-12 h-12 bg-gray-400 flex justify-center items-center mb-4 md:mb-8"
        >
          <div class="cirl-name-2 text-white font-bold text-lg">2</div>
        </div>
        <div class="cont-2 text-center mt-2 md:mt-4">
          <span class="font-semibold text-2xl md:text-3xl text-black">0</span>
        </div>
        <div>
          <span class="text-lg">Отзывов</span>
        </div>
      </div>

      <div
        class="cont-3 relative bg-gray-200 w-full h-full p-4 md:p-20 border border-gray-400 text-center"
      >
        <div
          class="circle-3 absolute top-[-25px] left-1/2 -translate-x-1/2 z-10 rounded-full w-12 h-12 bg-gray-400 flex justify-center items-center mb-4 md:mb-8"
        >
          <div class="cirl-name-3 text-white font-bold text-lg">3</div>
        </div>
        <div class="cont-3 text-center mt-2 md:mt-4">
          <span class="font-semibold text-2xl md:text-3xl text-black">0</span>
        </div>
        <div>
          <span class="text-lg">Положительных отзывов</span>
        </div>
      </div>

      <div
        class="cont-4 relative bg-gray-200 w-full h-full p-4 md:p-20 border border-gray-400 text-center"
      >
        <div
          class="circle-4 absolute top-[-25px] left-1/2 -translate-x-1/2 z-10 rounded-full w-12 h-12 bg-gray-400 flex justify-center items-center mb-4 md:mb-8"
        >
          <div class="cirl-name-4 text-white font-bold text-lg">4</div>
        </div>
        <div id="otzv" class="cont-4 text-center mt-2 md:mt-4">
          <span class="font-semibold text-2xl md:text-3xl text-black">0</span>
        </div>
        <div>
          <span class="text-lg">Негативных отзывов</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 sm:mt-6">
      <div class="text-center mb-2 sm:mb-0">
        <button
          class="bg-black text-white font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded"
        >
          Положительные отзывы
        </button>
      </div>
      <div class="text-center">
        <button
          class="bg-black text-white font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded"
        >
          Отрицательные отзывы
        </button>
      </div>
    </div>
  </div>
  <div
    id="kon"
    class="bg-white h-full p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 flex flex-col items-center border-t border-black"
  >
    <div
      class="bg-white p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 flex flex-col items-center mx-4"
    >
      <div class="text-center font-semibold text-black mb-4 sm:mb-6 md:mb-8">
        <div>
          <span class="text-xl sm:text-2xl md:text-3xl">Оставьте отзыв</span
          ><br />
          <span class="text-2xl sm:text-3xl md:text-4xl"
            >«ЮРИСТ ДЛЯ ЛЮДЕЙ»</span
          >
        </div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-12 sm:mt-16 md:mt-20"
      >
        <div class="text-black pl-4 sm:pl-6 md:pl-8">
          <span class="font-semibold text-lg sm:text-xl md:text-2xl"
            >8 800 533-81-30</span
          >
          <br />
          <br />
          <span class="text-lg sm:text-xl md:text-1xl"
            >ООО «ЮРИСТ ДЛЯ ЛЮДЕЙ»</span
          >
          <br />
          <span class="text-lg sm:text-xl md:text-1xl">ИНН 6623131933</span>
          <br />
          <span class="text-lg sm:text-xl md:text-1xl"
            >russia@юристдлялюдей.рф</span
          >
          <br />
          <br />
          <span class="text-lg sm:text-xl md:text-1xl"
            >ПН - ПТ с 09:00 до 19:00</span
          >
          <br />
          <span class="text-lg sm:text-xl md:text-1xl"
            >в СБ с 09:00 до 15:00</span
          >
          <br />
          <span class="text-lg sm:text-xl md:text-1xl">в ВС выходной</span>
          <br />
          <br />
          <span class="font-semibold text-lg sm:text-xl md:text-2xl"
            >юристдлялюдей.рф</span
          >
          <div class="Main-icons mt-4 sm:mt-6 md:mt-8">
            <div class="icons flex">
              <div>
                <WhatsappIcon class="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8" />
              </div>
              <div>
                <vk class="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 ml-2" />
              </div>
              <div>
                <instagram class="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 ml-2" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-4 sm:mb-6 md:mb-8 mr-12">
            <input
              class="cont-4 relative bg-gray-200 w-full h-100 p-4 border border-gray-400"
              type="text"
              id="name"
              placeholder="Ваше имя"
            />
          </div>
          <div class="mb-4 sm:mb-6 md:mb-8 mr-12">
            <a class="text-lg sm:text-xl md:text-2xl"
              >Какой отзыв вы хотите оставить?</a
            >
            <br />
            <a
              ><input
                type="radio"
                name="review-type"
                value="positive"
              />Позитивный отзыв</a
            >
            <br />
            <a
              ><input
                type="radio"
                name="review-type"
                value="negative"
              />Негативный отзыв</a
            >
          </div>
          <div class="mb-8 sm:mb-12 md:mb-16 mr-12">
            <textarea
              class="cont-4 relative bg-gray-200 w-full h-100 p-4 border border-gray-400"
              type="text"
              id=""
              placeholder="Оставьте свой отзыв"
            ></textarea>
          </div>
          <div class="mb-8 sm:mb-12 md:mb-16">
            <button
              class="bg-black text-white font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded"
            >
              Оставить отзыв
            </button>
            <div
              class="mb-8 sm:mb-12 md:mb-16 text-xs sm:text-sm md:text-wrap w-full"
            >
              <br />
              <a class="text-right"
                >«Нажимая на кнопку "Оставить отзыв", вы даете согласие на
                обработку персональных данных и соглашаетесь c политикой
                конфиденциальности»</a
              >
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-white h-full p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 flex flex-col items-center border-t border-black"
      >
        <div
          class="bg-white p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 flex flex-col items-center"
        >
          <div class="text-center mb-2 sm:mb-4 md:mb-6">
            <ul class="flex flex-wrap justify-center sm:flex-nowrap">
              <li><a href="" class="mx-2 sm:mx-4 font-semibold">О нас</a></li>
              <li>
                <a href="" class="mx-2 sm:mx-4 font-semibold">Документы</a>
              </li>
              <li>
                <a href="" class="mx-2 sm:mx-4 font-semibold">Контакты</a>
              </li>
            </ul>
          </div>
          <div class="img-logo mb-2 sm:mb-4 md:mb-6">
            <other class="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24" />
          </div>
          <div class="bg-gray opacity-50">
            <a class="text-xs sm:text-sm md:text-base"
              >© 2022 Сайт отзывов России</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WhatsappIcon from "@/assets/whatsapp.svg";
import instagram from "@/assets/instagram.svg";
import vk from "@/assets/vk.svg";
import other from "@/assets/other.svg";
import yoodle from "@/assets/yoodle.svg";
</script>

<!-- <script setup>
import { ref, onMounted } from 'vue';

const userEmail = ref('');

const loadEmail = () => {
  const email = localStorage.getItem('email');
  if (email) {
    userEmail.value = email;
};


onMounted(() => {
  loadEmail();
});
</script> -->
