<template>
  <div class="pka-card">
    <div class="card-content">
      <div class="operate">
        <div>2020-08-24</div>
      </div>
      <div class="img-box">
        <div class="img-add">1</div>
      </div>
      <div class="info">
        <div class="row item-name">
          KOBE BRYANT
        </div>
        <div class="row">
          <div class="row-item">
            <div class="item-label">Pka1:</div>
            <div class="item-value">11.24</div>
          </div>
          <div class="row-item">
            <div class="item-label">Pka2:</div>
            <div class="item-value">11.24</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PkaCard'
}
</script>

<style lang="scss" scoped>
.pka-card {
  // display: inline-block;
  width: calc(33.3333% - 10px);
  min-width: 224px;
  height: 258px;
  padding: 5px;
  .card-content {
    height: 100%;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    .operate {
      height: 38px;
      line-height: 38px;
      font-size: 13px;
      padding: 0 10px;
    }
    .img-box {
      height: 140px;
      padding: 0 10px 2px 10px;
      .img-add {
        width: 100%;
        height: 100%;
        border: 1px dashed #d9d9d9;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
    .info {
      height: 80px;
      width: 100%;
      background-color: #f2f4f8;
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      font-size: 12px;
      .item-name {
        font-weight: 700;
        color: rgba($color: #000000, $alpha: .85);
      }
      .row {
        height: 24px;
        line-height: 24px;
        display: flex;
        .row-item {
          flex: 1;
          display: flex;
          .item-label {
            color: rgba($color: #000000, $alpha: .65);
            font-weight: 700;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
