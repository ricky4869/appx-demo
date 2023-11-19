<script setup>
import { ref, reactive } from "vue"

import AppxSelect from "./AppxSelect.vue"

const emit = defineEmits(["toggleSide"])

const searchKeyword = ref("")
const searchSelect = ref("all")
const searchOptions = reactive([
  {
    label: "By All",
    value: "all",
  },
  {
    label: "By Station",
    value: "station",
  },
  {
    label: "By Country",
    value: "country",
  },
])

const weatherSelect = ref("antananarivo")
const weatherOptions = reactive([
  {
    label: "Antananarivo",
    value: "antananarivo",
  },
  {
    label: "Hongkong",
    value: "hongkong",
  },
  {
    label: "Taipei",
    value: "taipei",
  },
  {
    label: "Tokyo",
    value: "tokyo",
  },
])

const toggleSide = () => {
  emit("toggleSide")
}
</script>

<template>
  <header class="app-header">
    <div class="menu" @click="toggleSide()">
      <div class="menu-icon"></div>
    </div>
    <div class="logo">
      <div class="logo-image"></div>
    </div>
    <div class="search">
      <div class="search-icon"></div>
      <div class="search-input">
        <div class="appx-input">
          <input
            type="text"
            v-model="searchKeyword"
            placeholder="Search here..."
          />
          <div class="appx-input__append">
            <div class="search-icon"></div>
          </div>
        </div>
      </div>
      <div class="search-select">
        <AppxSelect
          v-model.capitalize="searchSelect"
          :options="searchOptions"
        />
      </div>
    </div>
    <div class="weather">
      <div class="weather-icon"></div>
      <div class="weather-time">09:54 am</div>
      <div class="weather-select">
        <AppxSelect
          v-model.capitalize="weatherSelect"
          :options="weatherOptions"
          :bgColor="'transparent'"
          :borderColor="'transparent'"
        />
      </div>
    </div>
    <div class="setting">
      <div class="setting-icon"></div>
    </div>
    <div class="bell">
      <div class="bell-icon"></div>
      <div class="bell-dot"></div>
    </div>
    <div class="avatar">
      <div class="avatar-image"></div>
      <div class="arrow-icon"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: 64px;
  position: fixed;
  background: $white;
  padding: 16px;
  display: flex;
  align-items: center;
  z-index: 300;
  gap: 24px;

  .menu {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &-icon {
      width: 12px;
      height: 12px;
      background-image: url("/image/menu.svg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .logo {
    width: 93px;
    height: 20px;
    &-image {
      width: 100%;
      height: 100%;
      background-image: url("/image/logo.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .search {
    width: 16px;
    height: 16px;
    margin-left: auto;
    line-height: 0;
    cursor: pointer;
    &-icon {
      width: 16px;
      height: 16px;
      background-image: url("/image/search.svg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    &-input {
      display: none;
    }
    &-select {
      display: none;
    }
  }
  .weather {
    display: none;
  }
  .setting {
    width: 18px;
    height: 18px;
    cursor: pointer;
    &-icon {
      width: 18px;
      height: 18px;
      background-image: url("/image/setting.svg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .bell {
    display: none;
  }
  .avatar {
    cursor: pointer;
    display: flex;
    align-items: center;
    &-image {
      width: 32px;
      height: 32px;
      overflow: hidden;
      border-radius: 50%;
      background-image: url("/image/avatar.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .arrow-icon {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    height: 104px;
    width: 100%;
    background-color: $main;
    padding: 20px;
    gap: 24px;
    .menu {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      &-icon {
        width: 21px;
        height: 21px;
      }
      &:hover {
        background-color: $hover;
      }
    }
    .logo {
      width: 164px;
      height: 35px;
    }

    .search {
      width: auto;
      height: 48px;
      display: flex;
      justify-content: flex-start;
      gap: 8px;
      margin-left: 0;
      &-icon {
        display: none;
      }

      &-input {
        display: block;
        width: 200px;

        .appx-input {
          height: 48px;
          border: 2px solid $note;
          input {
            font-size: 18px;
          }
          &__append {
            margin-left: 10px;
            padding-left: 10px;
            border-left: 2px solid $text;
            .search-icon {
              display: block;
              width: 16px;
              height: 16px;
            }
          }
        }
      }

      &-select {
        display: block;
        font-size: 18px;
      }
    }
    .weather {
      display: flex;
      margin-left: auto;
      align-items: center;
      &-icon {
        width: 25px;
        height: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("/image/meteor.svg");
        margin-right: 12px;
      }
      &-time {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
      }
      &-select {
        height: 36px;
        font-size: 18px;
      }
    }
    .setting {
      width: 48px;
      height: 48px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      &-icon {
        width: 28px;
        height: 28px;
      }
      &:hover {
        background-color: $hover;
      }
    }
    .bell {
      width: 48px;
      height: 48px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border-radius: 50%;

      &-icon {
        width: 24px;
        height: 24px;
        background-image: url("/image/bell.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      &-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: $text;
        position: absolute;
        right: 10px;
        top: 10px;
      }
      &:hover {
        background-color: $hover;
      }
    }

    .avatar {
      &-image {
        width: 50px;
        height: 50px;
      }
      .arrow-icon {
        display: block;
        margin-left: 8px;
      }
    }
  }
  @media (min-width: 1440px) {
    gap: 36px;
    padding: 28px;

    .search {
      margin-left: 20px;
      &-input {
        width: 245px;
      }
    }
  }
}
</style>
