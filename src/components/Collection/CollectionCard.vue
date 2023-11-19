<script setup>
const props = defineProps(["data"])
const emit = defineEmits(["cancel"])
</script>

<template>
  <div class="collection-card">
    <div class="collection" @click="emit('cancel', props.data)">
      <div class="icon"></div>
      <div class="tip">取消收藏</div>
    </div>
    <div class="capsule">News</div>
    <div class="content">
      {{ props.data.content }}
    </div>
    <div class="actions">
      <div class="action-item">
        <div class="action-item__icon">
          <div class="icon like-icon"></div>
        </div>
        <div class="action-item__value">140 Likes</div>
      </div>
      <div class="action-item">
        <div class="action-item__icon">
          <div class="icon reply-icon"></div>
        </div>
        <div class="action-item__value">10 Comments</div>
      </div>
      <div class="action-item">
        <div class="action-item__icon">
          <div class="icon share-icon"></div>
        </div>
        <div class="action-item__value">5 Shares</div>
      </div>
    </div>
    <div class="date">Dec 19, 2022</div>
  </div>
</template>
<style lang="scss" scoped>
.collection-card {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .collection {
    margin-right: 17px;
    cursor: pointer;
    .icon {
      width: 13px;
      height: 18px;
      background-image: url("/image/collection.svg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .tip {
      display: none;
    }
  }
  .capsule {
    padding: 2px 10px;
    line-height: 18px;
    font-size: 12px;
    background: #ededed;
    border-radius: 40px;
  }
  .content {
    width: 100%;
    padding-right: 20%;
    margin: 8px 0;
    font-size: 12px;
    line-height: 24px;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }

  .actions {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    gap: 20px;

    .action-item {
      display: flex;
      align-items: center;
      &__icon {
        margin-right: 6px;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          &.like-icon {
            width: 15px;
            height: 15px;
            background-image: url("/image/like.svg");
          }
          &.reply-icon {
            width: 15px;
            height: 15px;
            background-image: url("/image/reply.svg");
          }
          &.share-icon {
            width: 12px;
            height: 15px;
            background-image: url("/image/share.svg");
          }
        }
      }
      &__value {
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        color: $note;
      }
    }
  }
  .date {
    width: 100%;
    font-weight: 700;
    font-size: 12px;
    line-height: 22px;
  }

  @media (min-width: 1200px) {
    padding: 15px 26px 18px 50px;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    .collection {
      position: absolute;
      top: 18px;
      left: 15px;
      .tip {
        display: block;
        width: auto;
        white-space: nowrap;
        position: absolute;
        top: -24px;
        left: 50%;
        transform: translateX(-50%);
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 4px;
        opacity: 0;
        pointer-events: none;
        transition: 0.3s all;
        background-color: $note;
        color: $white;
      }
      &:hover {
        .tip {
          top: -36px;
          opacity: 1;
        }
      }
    }
    .capsule {
      order: 2;
    }
    .content {
      width: calc(100% - 51px);
      order: 1;
      padding-right: 50%;
      margin: 0 0 12px;
      font-size: 14px;
      line-height: 24px;
      height: 24px;
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
    }
    .actions {
      order: 3;
      width: auto;
      display: flex;
      gap: 24px;
      margin-bottom: 0;
    }
    .date {
      order: 3;
      width: auto;
      font-weight: 400;
      color: $note;
      line-height: 18px;
    }
  }
}
</style>
