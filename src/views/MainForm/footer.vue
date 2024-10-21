<template>
  <footer class="py-4 bg-gray-800 text-white">
    <div class="container mx-auto text-center">
      <p class="text-sm">
        &copy; Авторитетные отзывы от специалистов интернет-рынка.
      </p>
      <div
        class="flex flex-col md:flex-row justify-center md:space-x-4 mt-2 space-y-2 md:space-y-0"
      >
        <RouterLink to="/Policy" class="hover:text-gray-400"
          >Политика конфиденциальности</RouterLink
        >
        <RouterLink to="/RegisterComp" class="hover:text-gray-400"
          >+ Добавить компанию</RouterLink
        >
        <RouterLink to="/SiteRule" class="hover:text-gray-400"
          >Правила сайта</RouterLink
        >
        <RouterLink to="/RuleRev" class="hover:text-gray-400"
          >Правила к написанию отзывов</RouterLink
        >
        <RouterLink to="/Contacts" class="hover:text-gray-400"
          >Способы оплаты</RouterLink
        >
      </div>
    </div>
  </footer>
</template>
