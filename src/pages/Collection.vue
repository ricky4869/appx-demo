<script setup>
import { ref, reactive, computed, onMounted } from "vue"
import CollectionCard from "@/components/Collection/CollectionCard.vue"
import AppxSelect from "@/components//AppxSelect.vue"

const searchKeyword = ref("")
const categorySelect = ref("all")
const categoryOptions = reactive([
  {
    label: "All",
    value: "all",
  },
  {
    label: "HR Announcement",
    value: "hr",
  },
  {
    label: "News",
    value: "news",
  },
])

const collectionData = reactive([])
const collectionPage = computed(() => {
  const { per_page, page } = searchData
  return collectionData.slice(per_page * (page - 1), per_page * page)
})
const searchData = reactive({
  page: 1,
  per_page: 10,
})
const minPage = ref(0)
const maxPage = computed(() => {
  return Math.ceil(collectionData.length / searchData.per_page)
})

const paginationOption = computed(() => {
  let options = []
  for (let i = 1; i <= maxPage.value; i++) {
    options.push({
      label: i,
      value: i,
    })
  }

  return options
})

const init = () => {
  for (let i = 1; i <= 480; i++) {
    collectionData.push({
      id: i,
      content:
        i +
        " APPX System New Version Release Announce on 14th DecAPPX System New Version Release Announce on 14th DecAPPX System New Version Release Announce on 14th DecAPPX System New Version Release Announce on 14th",
    })
  }
}
const cancelCollection = (item) => {
  const index = collectionData.findIndex(
    (collection) => collection.value === item.value
  )
  collectionData.splice(index, 1)
  if (!collectionPage.value.length) {
    inputPage(maxPage.value)
  }
}
const inputPage = (value) => {
  if (value > minPage.value && value <= maxPage.value) {
    searchData.page = value
  }
}

onMounted(async () => {
  init()
})
</script>

<template>
  <div class="page-collection">
    <div class="bread-crumbs">
      <div class="bread-crumbs-item">Home</div>
      <div class="bread-crumbs-arrow">
        <div class="icon"></div>
      </div>
      <div class="bread-crumbs-item">My Collection</div>
    </div>
    <form class="search-from" @submit.prevent.stop>
      <div class="appx-input">
        <input
          type="text"
          v-model="searchKeyword"
          placeholder="Search here..."
        />
        <div class="appx-input__append"></div>
      </div>
      <div class="search-button"></div>
    </form>
    <form class="subtitle-from" @submit.prevent.stop>
      <div class="input-row">
        <label class="subtitle-from__label">Category</label>
        <div class="category-select">
          <AppxSelect
            v-model.capitalize="categorySelect"
            :options="categoryOptions"
            :borderColor="'#f2f2f7'"
          />
        </div>
      </div>

      <div class="input-row">
        <label class="subtitle-from__label">Subtitle</label>
        <div class="appx-input">
          <input class="appx-input__content" type="text" />
        </div>
      </div>
      <button type="submit" class="subtitle-from__button">Search</button>
    </form>
    <div class="page-collection-container">
      <div class="title">My Collection</div>
      <div class="pagination">
        <div class="pagination-total">Total {{ collectionData.length }} ∣</div>
        <div
          class="pagination-arrow pagination-arrow--prev"
          @click="inputPage(searchData.page - 1)"
        >
          <div class="arrow-icon"></div>
        </div>
        <div class="pagination-select">
          <AppxSelect
            v-model.capitalize="searchData.page"
            :options="paginationOption"
            :borderColor="'transparent'"
          />
        </div>
        <div
          class="pagination-arrow pagination-arrow--next"
          @click="inputPage(searchData.page + 1)"
        >
          <div class="arrow-icon"></div>
        </div>
      </div>
      <div class="collection-list">
        <div class="collection-item" v-for="item in collectionPage">
          <CollectionCard :data="item" @cancel="cancelCollection" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-collection {
  .bread-crumbs {
    margin-bottom: 16px;
    padding-left: 6px;
    display: flex;
    align-items: center;
    &-item {
      margin-right: 10px;
      font-size: 12px;
      color: $note;
      font-weight: 500;
      letter-spacing: 0.1em;
      cursor: pointer;

      &:hover {
        color: $text;
      }
      &:last-child {
        color: $text;
        font-size: 14px;
      }
    }
    &-arrow {
      margin-right: 10px;
      .icon {
        background-image: url("/image/arrow.svg");
        background-size: 10px 4.44px;
        background-position: center;
        background-repeat: no-repeat;
        width: 10px;
        height: 10px;
        opacity: 0.5;
        transform: rotate(-90deg);
      }
    }
  }
  .search-from {
    margin-bottom: 16px;
  }
  .subtitle-from {
    margin-bottom: 16px;
    padding: 24px 16px;
    background: $white;

    .input-row {
      margin-bottom: 20px;
    }
    &__label {
      color: $note;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 8px;
      width: 100%;
      display: block;
    }
    &__button {
      background-color: $main;
      text-align: center;
      line-height: 48px;
      border-radius: 8px;
      transition: 0.3s all;
      width: 100%;
      cursor: pointer;
      font-size: 18px;
      &:hover {
        background-color: $hover;
      }
    }

    .category-select {
      height: 40px;
      font-size: 14px;
    }
  }

  .page-collection-container {
    padding: 16px 10px;
    background: $white;
    .title {
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .pagination {
      display: none;
    }
    .collection-list {
      width: 100%;

      .collection-item {
        border-bottom: 1px solid #e3e3e3;
        margin-bottom: 10px;
        &:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .bread-crumbs {
      margin-bottom: 19px;
    }
    .search-from {
      display: none;
    }
    .subtitle-from {
      margin-bottom: 24px;
      padding: 24px;
      display: flex;
      align-items: flex-end;
      gap: 16px;
      .input-row {
        min-width: 250px;
        margin-bottom: 0;
      }
      &__button {
        width: 96px;
      }
      .category-select {
        height: 48px;
        font-size: 18px;
      }
      .appx-input {
        height: 48px;
        input {
          font-size: 18px;
        }
      }
    }

    .page-collection-container {
      padding: 0;
      background: transparent;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .title {
        margin-bottom: 14px;
        line-height: 32px;
      }
      .pagination {
        display: flex;
        margin-bottom: 14px;

        &-total {
          font-size: 16px;
          line-height: 32px;
          color: $note;
          font-weight: 600;
          letter-spacing: 1px;
        }
        &-arrow {
          width: 32px;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border-radius: 50%;

          &:hover {
            background-color: $hover;
          }

          &--prev {
            .arrow-icon {
              transform: rotate(90deg);
            }
          }
          &--next {
            .arrow-icon {
              transform: rotate(-90deg);
            }
          }
        }
        &-select {
          margin: 0 6px;
          font-size: 14px;
          height: 32px;
          &:v-deep {
            .appx-select {
              &__input {
                padding: 0 6px;
                border-radius: 6px;
              }
            }
          }
        }
      }
      .collection-list {
        border: 1px solid #e3e3e3;

        .collection-item {
          background-color: $white;
          border-bottom: 1px solid #e3e3e3;
          margin-bottom: 0;
          &:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
