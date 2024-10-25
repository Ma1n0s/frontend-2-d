<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="modal-content p-6 bg-white rounded-lg shadow-lg">
      <div class="mb-4 text-lg font-semibold">Название организации:</div>
      <div class="mb-4">
        <label for="inn" class="block">ИНН:</label>
        <input
          v-model="formData.inn_comp"
          placeholder="Введите ИНН"
          type="text"
          id="inn"
          class="input"
        />
      </div>
      <div class="mb-4">
        <label for="ogrn" class="block">ОГРН:</label>
        <input
          v-model="formData.OGRN"
          placeholder="Введите ОГРН"
          type="text"
          id="ogrn"
          class="input"
        />
      </div>
      <div class="mb-4">
        <label for="OKPO" class="block">ОКПО:</label>
        <input
          v-model="formData.OKPO"
          placeholder="Введите ОКПО"
          type="text"
          id="okpo"
          class="input"
        />
      </div>
      <div class="mb-4">
        <label for="bik" class="block">БИК:</label>
        <input
          v-model="formData.BIC"
          placeholder="123"
          type="Введите БИК"
          id="bik"
          class="input"
        />
      </div>
      <div class="mb-4">
        <label for="office" class="block clickable" @click="toggleOfficeDetails"
          >Главный офис:</label
        >
        <input
          placeholder="Введите адрес"
          type="text"
          id="office"
          v-model="officeAddress"
          class="input"
          readonly
        />
      </div>

      <div v-if="showOfficeDetails">
        <div class="mb-4">
          <label for="street" class="block">Улица:</label>
          <input
            v-model="formData.street"
            placeholder="Введите улицу"
            type="text"
            id="street"
            @input="updateOfficeAddress"
            class="input"
          />
        </div>
        <div class="mb-4">
          <label for="house" class="block">Дом:</label>
          <input
            v-model="formData.home"
            placeholder="Введите номер дома"
            type="text"
            id="house"
            @input="updateOfficeAddress"
            class="input"
          />
        </div>
        <div class="mb-4">
          <label for="region" class="block">Регион:</label>
          <input
            v-model="formData.region"
            placeholder="Введите регион"
            type="text"
            id="region"
            @input="updateOfficeAddress"
            class="input"
          />
        </div>
      </div>

      <div class="mb-4">
        <label for="website" class="block">Ваш сайт:</label>
        <input
          v-model="formData.site"
          placeholder="Ссылка вашей организации"
          type="text"
          id="website"
          class="input"
        />
      </div>
      <div class="mb-4">
        <label for="comment" class="block">Комментарий:</label>
        <input
          v-model="formData.comment"
          placeholder="Комментарий"
          type="text"
          id="comment"
          class="input"
        />
      </div>
      <div>
        <input
          type="file"
          id="file-upload"
          class="file-upload-input"
          @change="handleFileUpload"
        />
      </div>
      <br />
      <div>
        <button @click="send" class="btn">Отправить</button>
      </div>
      <br />
      <div>
        <button @click="close" class="btn">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isVisible: false,
      officeAddress: "",
      showOfficeDetails: false,
      formData: {
        inn_comp: "",
        OGRN: "",
        OKPO: "",
        BIC: "",
        street: "",
        home: "",
        region: "",
        site: "",
        comment: "",
        file: null, // Для хранения загруженного файла
      },
    };
  },
  methods: {
    open() {
      this.isVisible = true;
    },
    close() {
      this.isVisible = false;
    },
    toggleOfficeDetails() {
      this.showOfficeDetails = !this.showOfficeDetails;
    },
    updateOfficeAddress() {
      this.officeAddress = `ул ${this.formData.street} д ${this.formData.home} ${this.formData.region}`;
    },
    handleFileUpload(event) {
      this.formData.file = event.target.files[0];
      console.log("Загруженный файл:", this.formData.file);
    },
    async send() {
      const formData = new FormData();
      formData.append("inn_comp", this.formData.inn_comp);
      formData.append("OGRN", this.formData.OGRN);
      formData.append("OKPO", this.formData.OKPO);
      formData.append("BIC", this.formData.BIC);
      formData.append("street", this.formData.street);
      formData.append("home", this.formData.home);
      formData.append("region", this.formData.region);
      formData.append("site", this.formData.site);
      formData.append("comment", this.formData.comment);

      if (this.formData.file) {
        formData.append("file", this.formData.file);
        console.log("Файл добавлен в FormData:", this.formData.file);
      } else {
        console.log("Файл не выбран");
      }

      try {
        const response = await axios.post(
          "http://127.0.0.1:80/api/Moder",
          formData
        );
        console.log(response.data);
        this.close();
      } catch (error) {
        console.error(
          "Ошибка:",
          error.response ? error.response.data : error.message
        );
      }
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: 100%;
}

.btn {
  background-color: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}

.clickable {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>
