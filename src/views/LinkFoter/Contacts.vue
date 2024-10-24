<template>
  <div class="register flex flex-col min-h-screen">
    <Header />
    <div class="flex-grow flex items-center justify-center bg-gray-100">
      <div
        class="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-md sm:max-w-2xl w-full my-4 sm:my-8"
      >
        <h2 class="text-xl sm:text-2xl font-bold text-center mb-4">
          Реквизиты
        </h2>

        <div class="mb-4">
          <p class="text-black mb-3 text-sm sm:text-base">
            <strong>Получатель:</strong> ИП РОГАЧЁВ СТЕПАН ДМИТРИЕВИЧ
          </p>
          <p class="text-black text-sm sm:text-base">
            <strong>ИНН:</strong> 662306435663
          </p>
          <p class="text-black text-sm sm:text-base">
            <strong>ОГРНИП:</strong> 324665800138821
          </p>
          <p class="text-black mb-3 text-sm sm:text-base">
            <strong>Расчётный счёт:</strong> 40802 810 0 1654 0428729
          </p>
          <p class="text-black text-sm sm:text-base">
            <strong>Банк получателя:</strong> УРАЛЬСКИЙ БАНК ПАО СБЕРБАНК
          </p>
          <p class="text-black text-sm sm:text-base">
            <strong>БИК:</strong> 046577674
          </p>
          <p class="text-black text-sm sm:text-base">
            <strong>Корсчёт:</strong> 30101 810 5 0000 0000674
          </p>
          <p class="text-black text-sm sm:text-base">
            <strong>ИНН:</strong> 7707083893
          </p>
          <p class="text-black mb-3 text-sm sm:text-base">
            <strong>КПП:</strong> 665843001
          </p>
          <p class="text-black text-sm sm:text-base">
            <strong>Детали счета</strong>
          </p>
          <p class="text-black text-sm sm:text-base">
            Дата открытия: 26.06.2024
          </p>
          <p class="text-black mb-3 text-sm sm:text-base">
            <strong>Обслуживающее подразделение:</strong> г.Нижний Тагил,
            ул.Ломоносова, 49, Первый этаж помещения №16, Второй этаж помещения
            № 2-13, 13.1, 13.2, 13.3, 23
          </p>
        </div>

        <h2 class="text-lg font-bold text-center p-2 rounded-t">
          Способы оплаты:
        </h2>
        <div class="p-2">
          <div class="mb-4">
            <p class="text-black mb-3 text-sm sm:text-base">
              <strong>Наличный расчёт:</strong> Если товар доставляется
              курьером, то оплата осуществляется наличными курьеру в руки. При
              получении товара обязательно проверьте комплектацию товара,
              наличие гарантийного талона и чека.
            </p>
          </div>
          <div class="mb-4">
            <p class="text-black mb-3 text-sm sm:text-base">
              <strong>Банковской картой:</strong> Для выбора оплаты товара с
              помощью банковской карты на соответствующей странице необходимо
              нажать кнопку "Оплата заказа банковской картой". Оплата происходит
              через ПАО СБЕРБАНК с использованием банковских карт следующих
              платёжных систем:
            </p>
            <ul class="list-disc pl-5">
              <li>МИР</li>
              <li>VISA International</li>
              <li>Mastercard Worldwide</li>
              <li>JCB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer class="mt-0" />
  </div>
</template>

<script setup>
import Footer from "/src/views/MainForm/Footer.vue";
import Header from "/src/views/MainForm/Header.vue";
</script>

<script>
import Footer from "/src/views/MainForm/Footer.vue";
import Header from "/src/views/MainForm/Header.vue";
export default {
  name: "Footer",
  name: "Header",
};
</script>
