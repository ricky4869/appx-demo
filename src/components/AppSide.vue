<script setup>
import { reactive, ref, watch } from "vue"

const props = defineProps({
  isOpenSide: {
    type: Boolean,
    default() {
      return true
    },
  },
})
const emit = defineEmits(["toggleSide"])

watch(
  () => props.isOpenSide,
  (newValue) => {
    if (!newValue) {
      navOptionOpen.value = ""
      navSubOptionOpen.value = ""
    }
  }
)

const navData = reactive([
  {
    name: "Home General",
    value: "home",
    icon: "home-icon",
    options: [
      {
        name: "Option_1",
        value: "home-option-1",
      },
      {
        name: "Option_2",
        value: "home-option-2",
        subOptions: [
          {
            name: "Sub_option_1",
          },
          {
            name: "Sub_option_2",
          },
          {
            name: "Sub_option_3",
          },
        ],
      },
      {
        name: "Option_3",
        value: "home-option-3",
      },
    ],
  },
  {
    name: "Marketing & Sales",
    value: "market",
    icon: "market-icon",
    options: [
      {
        name: "Option_1",
        value: "market-option-1",
      },
      {
        name: "Option_2",
        value: "market-option-2",
        subOptions: [
          {
            name: "Sub_option_1",
          },
          {
            name: "Sub_option_2",
          },
          {
            name: "Sub_option_3",
          },
        ],
      },
      {
        name: "Option_3",
        value: "market-option-3",
      },
    ],
  },
  {
    name: "Customer Service & Operation",
    value: "customer",
    icon: "customer-icon",
    options: [
      {
        name: "Option_1",
        value: "customer-option-1",
      },
      {
        name: "Option_2",
        value: "customer-option-2",
        subOptions: [
          {
            name: "Sub_option_1",
          },
          {
            name: "Sub_option_2",
          },
          {
            name: "Sub_option_3",
          },
        ],
      },
      {
        name: "Option_3",
        value: "customer-option-3",
      },
    ],
  },
  {
    name: "Carrier Management",
    value: "carrier",
    icon: "carrier-icon",
    options: [
      {
        name: "Option_1",
        value: "carrier-option-1",
      },
      {
        name: "Option_2",
        value: "carrier-option-2",
        subOptions: [
          {
            name: "Sub_option_1",
          },
          {
            name: "Sub_option_2",
          },
          {
            name: "Sub_option_3",
          },
        ],
      },
      {
        name: "Option_3",
        value: "carrier-option-3",
      },
    ],
  },
  {
    name: "Finance & Accounting",
    value: "finance",
    icon: "finance-icon",
    options: [
      {
        name: "Option_1",
        value: "finance-option-1",
      },
      {
        name: "Option_2",
        value: "finance-option-2",
        subOptions: [
          {
            name: "Sub_option_1",
          },
          {
            name: "Sub_option_2",
          },
          {
            name: "Sub_option_3",
          },
        ],
      },
      {
        name: "Option_3",
        value: "finance-option-3",
      },
    ],
  },
  {
    name: "HR Development & Organization Setup",
    value: "hr",
    icon: "hr-icon",
    options: [
      {
        name: "Option_1",
        value: "hr-option-1",
      },
      {
        name: "Option_2",
        value: "hr-option-2",
        subOptions: [
          {
            name: "Sub_option_1",
          },
          {
            name: "Sub_option_2",
          },
          {
            name: "Sub_option_3",
          },
        ],
      },
      {
        name: "Option_3",
        value: "hr-option-3",
      },
    ],
  },
])

const navOptionOpen = ref("")
const navSubOptionOpen = ref("")

const openNavOption = (nav) => {
  if (!(nav.options && nav.options.length)) {
    return
  }
  if (navOptionOpen.value === nav.value) {
    navOptionOpen.value = ""
  } else {
    navOptionOpen.value = nav.value
    if (!props.isOpenSide) {
      emit("toggleSide")
    }
  }
  navSubOptionOpen.value = ""
}
const openNavSubOption = (option) => {
  if (!(option.subOptions && option.subOptions.length)) {
    return
  }
  if (navSubOptionOpen.value === option.value) {
    navSubOptionOpen.value = ""
  } else {
    navSubOptionOpen.value = option.value
  }
}
</script>

<template>
  <div class="app-side" :class="{ 'app-side--open': props.isOpenSide }">
    <div
      class="side-backdrop"
      v-if="props.isOpenSide"
      @click="emit('toggleSide')"
    ></div>
    <div class="side-bar">
      <div class="nav-bar">
        <div class="nav-item" v-for="(nav, navIdx) in navData" :key="navIdx">
          <div class="nav-link" @click="openNavOption(nav)">
            <div class="nav-link__icon">
              <div :class="[nav.icon, 'icon']"></div>
            </div>
            <div class="nav-link__name">{{ nav.name }}</div>
            <div
              class="nav-link__arrow"
              v-if="nav.options && nav.options.length"
            >
              <div
                class="arrow-icon"
                :class="{
                  'arrow-icon--open': navOptionOpen === nav.value,
                }"
              ></div>
            </div>
          </div>
          <div
            class="nav-options"
            v-if="
              nav.options && nav.options.length && navOptionOpen === nav.value
            "
          >
            <div
              class="nav-item"
              v-for="(option, optionIdx) in nav.options"
              :key="optionIdx"
            >
              <div class="nav-link" @click="openNavSubOption(option)">
                <div class="nav-link__name">{{ option.name }}</div>
                <div
                  class="nav-link__arrow"
                  v-if="option.subOptions && option.subOptions.length"
                >
                  <div
                    class="arrow-icon"
                    :class="{
                      'arrow-icon--open': navSubOptionOpen === option.value,
                    }"
                  ></div>
                </div>
              </div>
              <div
                class="nav-sub-options"
                v-if="
                  option.subOptions &&
                  option.subOptions.length &&
                  navSubOptionOpen === option.value
                "
              >
                <div
                  class="nav-item"
                  v-for="(subOption, subOptionIdx) in option.subOptions"
                  :key="subOptionIdx"
                >
                  <div class="nav-link">
                    {{ subOption.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-side {
  .side-backdrop {
    position: fixed;
    height: calc(100vh - 64px);
    top: 64px;
    width: 100%;
    background-color: rgba($color: $text, $alpha: 0.6);
    z-index: 300;
  }
  .side-bar {
    user-select: none;
    width: 295px;
    position: fixed;
    left: -295px;
    height: calc(100vh - 64px);
    top: 64px;
    transition: 0.3s left;
    background-color: $white;
    z-index: 300;
    overflow: auto;
    .nav-bar {
      .nav-item {
        cursor: pointer;
        margin-bottom: 14px;
        .nav-link {
          padding: 20px;
          font-weight: bold;
          display: flex;
          align-items: flex-start;
          font-size: 16px;
          &__icon {
            width: 20px;
            height: 20px;
            .icon {
              width: 20px;
              height: 20px;
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
            }
            .home-icon {
              background-image: url("/image/home.svg");
            }
            .market-icon {
              background-image: url("/image/market.svg");
            }
            .customer-icon {
              background-image: url("/image/customer.svg");
            }
            .carrier-icon {
              background-image: url("/image/carrier.svg");
            }
            .finance-icon {
              background-image: url("/image/finance.svg");
            }
            .hr-icon {
              background-image: url("/image/hr.svg");
            }
          }
          &__name {
            line-height: 20px;
            display: none;
          }
          &__arrow {
            width: 8px;
            height: 20px;
            display: none;
            justify-content: center;
            align-items: center;
            margin-left: auto;
            margin-right: 18px;
            .arrow-icon {
              width: 10px;
              height: 6px;
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              background-image: url("/image/arrow.svg");
              &--open {
                transform: rotate(180deg);
              }
            }
          }
          &:hover {
            background-color: $hover;
          }
        }

        .nav-options {
          .nav-item {
            .nav-link {
              padding: 8px 8px 8px 57px;
              font-size: 14px;

              &__arrow {
                margin-right: 130px;
              }
            }
            .nav-sub-options {
              margin-top: 10px;
              .nav-item {
                .nav-link {
                  padding: 10px 10px 10px 88px;
                  font-weight: normal;
                }
              }
            }
          }
        }
      }
    }
  }
  &--open {
    .side-bar {
      left: 0;
      .nav-bar {
        .nav-item {
          .nav-link {
            &__icon {
              margin-right: 12px;
            }
            &__name {
              display: flex;
            }
            &__arrow {
              display: flex;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .side-backdrop {
      display: none;
    }
    .side-bar {
      width: 76px;
      left: 0;
      height: calc(100vh - 104px);
      top: 104px;
      transition: 0.3s left;
      background-color: $main;
      @include scrollbar-style(10px, $main);
      .nav-bar {
        .nav-item {
          margin-bottom: 38px;
          .nav-link {
            width: 40px;
            height: 40px;
            margin: 0 auto;
            border-radius: 10px;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }

    &--open {
      .side-bar {
        width: 295px;
        .nav-bar {
          .nav-item {
            margin-top: 0;
            margin-bottom: 14px;
            .nav-link {
              width: auto;
              height: auto;
              margin: 0 auto;
              border-radius: 0;
              justify-content: flex-start;

              align-items: flex-start;
            }
          }
        }
      }
    }
  }
}
</style>
