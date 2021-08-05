<template>
  <div class="share-container">
    <a class="icon" href="javascript:sendLinkKakao()" id="kakao-link-btn">
      <picture>
        <img src="/icon/kakao.png" alt="카카오톡 공유하기" />
      </picture>
    </a>
    <a
      class="icon"
      target="_blank"
      onclick="window.open(this.href,'targetWindow',`toolbar=no, location=no, status=no, menubar=no, scrollbars=no, resizable=no, width=600px, height=800px `);return false;"
      href="https://www.facebook.com/sharer/sharer.php?u=https://jiinlove.netlify.app"
    >
      <picture>
        <img src="/icon/facebook.png" alt="페이스북 공유하기" />
      </picture>
    </a>
    <a
      class="icon"
      target="_blank"
      onclick="window.open(this.href,'targetWindow',`toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=600px,height=800px`); return false;"
      href="https://share.naver.com/web/shareView?url=https://jiinlove.netlify.app/&title=결혼 능력치 테스트 | 모두의 지인"
    >
      <picture>
        <img src="/icon/naver.png" alt="네이버 블로그 공유하기" />
      </picture>
    </a>
    <a class="icon" @click.prevent="copyURL">
      <picture>
        <img src="/icon/link.png" alt="링크 공유하기" />
      </picture>
    </a>
  </div>
</template>
<script>
import copy from 'copy-to-clipboard';

export default {
  name: 'Share',
  methods: {
    copyURL() {
      copy(window.location.origin);
      window.alert('주소를 복사했습니다.');
    },
  },
};
</script>
<style lang="scss" scoped>
.share-container {
  display: flex;
  margin-top: 4em;
  gap: 2em;
  .icon {
    cursor: pointer;
  }
  img {
    width: 48px;
  }
}
</style>
