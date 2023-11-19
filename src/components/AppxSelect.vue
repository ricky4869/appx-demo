<script setup>
import { ref, computed, watch } from "vue"

const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  options: {
    type: Array,
    default() {
      return []
    },
  },

  bgColor: {
    type: String,
    default() {
      return "#fff"
    },
  },

  borderColor: {
    type: String,
    default() {
      return "#737791"
    },
  },

  optionBorderColor: {
    type: String,
    default() {
      return "#737791"
    },
  },
})
const emit = defineEmits(["update:modelValue"])

const isFocus = ref(false)
const appxSelectRef = ref(null)
const optionsInnerRef = ref(null)

const selectValue = computed(() => {
  const option = props.options.find(
    (option) => option.value === props.modelValue
  )

  return option ? option.label || "" : ""
})

const selectOption = (option) => {
  emit("update:modelValue", option.value)
  appxSelectRef.value.blur()
}
const handleFocus = () => {
  if (isFocus.value) {
    isFocus.value = false
  } else {
    isFocus.value = true
  }
}
const handleBlur = () => {
  isFocus.value = false
}
const handleClick = () => {
  if (!isFocus.value) {
    appxSelectRef.value.blur()
    isFocus.value = false
  }
}
</script>

<template>
  <div
    ref="appxSelectRef"
    class="appx-select"
    :tabindex="-1"
    @focus="handleFocus"
    @blur="handleBlur"
    @click="handleClick"
  >
    <div
      class="appx-select__input"
      :style="[
        { backgroundColor: props.bgColor },
        { borderColor: props.borderColor },
      ]"
    >
      <div class="appx-select__input__value">
        {{ selectValue }}
      </div>
      <div class="appx-select__input__arrow">
        <div class="arrow-icon" :class="{ 'arrow-icon--open': isFocus }"></div>
      </div>
    </div>

    <div
      class="appx-select__options"
      :style="[{ borderColor: props.optionBorderColor }]"
    >
      <div ref="optionsInnerRef" class="appx-select__options__inner">
        <div
          class="appx-select__option"
          :class="{
            'appx-select__option--select': selectValue == option.label,
          }"
          v-for="option in props.options"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.appx-select {
  position: relative;
  width: 100%;
  height: 100%;

  &__input {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-width: 2px;
    border-style: solid;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    &__value {
      color: $note;
      line-height: 27px;
    }
    &__arrow {
      margin-left: 14px;
      .arrow-icon {
        transform: rotate(0);
        transition: 0.3s all;
        &--open {
          transform: rotate(180deg);
        }
      }
    }
  }

  &__options {
    position: absolute;
    top: calc(100% + 5px);
    min-width: 100%;
    width: auto;
    display: none;
    z-index: 500;
    background-color: $white;
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;
    padding: 5px 0;
    overflow: hidden;
    &__inner {
      overflow: overlay;
      @include scrollbar-style(5px, $white);
      max-height: 9.6em;
    }
  }
  &__option {
    white-space: nowrap;
    line-height: 2.4;
    padding: 0 16px;
    cursor: pointer;
    &:hover {
      background-color: $hover;
    }
    &--select {
      background-color: $hover;
    }
  }

  &:focus {
    .appx-select__options {
      display: block;
    }
  }
}
</style>
