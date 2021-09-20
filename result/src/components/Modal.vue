<template>
  <div>
    <b-modal id="item-added" hide-footer centered hide-header>
      <div class="b-modal">
        <div class="b-modal-image">
          <img src="@/images/carbon_checkmark-filled.svg" alt="" />
        </div>
        <p class="b-modal-text">Товар в кошику</p>
      
        <p class="b-modal-btn" @click="hide">Закрити</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    hide() {
      this.$bvModal.hide("item-added");
    },
  },
};
</script>

<style lang="scss" scoped>
.b-modal-text {
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  padding-bottom: 15px;
}
.b-modal-image {
  display: flex;
  justify-content: center;
  img {
  }
}
.b-modal-btn {
  width: 100%;
  height: 60px;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  border-radius: 6px;
  background-color: #ff842c;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
