<template>
  <div>
    <el-table
      :data="tableData"
      height="700"
      ref="table"
      :default-sort = "{prop: 'date', order: 'descending'}"
      style="width: 100%">
      <el-table-column
        fixed="left"
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        fixed="left"
        label="Structure"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.Structure }}
        </template>
      </el-table-column>
      <el-table-column
        fixed="left"
        sortable
        label="Design ID"
        prop="DesignID"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.DesignID }}
        </template>
      </el-table-column>
      <el-table-column
        fixed="left"
        sortable
        label="Delivery ID"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.DeliveryID }}
        </template>
      </el-table-column>
      <el-table-column
        fixed="left"
        sortable
        label="Customer ID"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.CustomerID }}
        </template>
      </el-table-column>
      <el-table-column
        sortable
        label="Project ID"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.ProjectID }}
        </template>
      </el-table-column>
      <el-table-column
        sortable
        label="SMILES"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.SMILES }}
        </template>
      </el-table-column>
      <el-table-column
        sortable
        label="MW"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.MW }}
        </template>
      </el-table-column>
      <el-table-column
        sortable
        label="GBSA"
        width="180">
        <!-- <template slot-scope="scope">
          {{ scope.row}}
        </template> -->
      </el-table-column>
      <el-table-column
        sortable
        label="FEP"
        width="180">
        <!-- <template slot-scope="scope">
          {{ scope.row}}
        </template> -->
      </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  data () {
    return {
      dom: null,
      timer: null,
      tableData: [
        {
          Structure: '解析图片',
          DesignID: 'DesignID1111111',
          DeliveryID: 'DeliveryID22222222',
          CustomerID: 'CustomerID3333333',
          ProjectID: 'ProjectID44444444',
          SMILES: 'baucvajxnkjahvca',
          MW: 'mwwwwww'
        }, {
          Structure: '解析图片',
          DesignID: 'DesignID1111111',
          DeliveryID: 'DeliveryID11111',
          CustomerID: 'CustomerID1111111',
          ProjectID: 'ProjectID11111111',
          SMILES: 'baucvajxnkjahvca',
          MW: 'mwwwwww'
        }, {
          Structure: '解析图片',
          DesignID: 'DesignID2222222',
          DeliveryID: 'DeliveryID22222222',
          CustomerID: 'CustomerID22222222',
          ProjectID: 'ProjectID22222222',
          SMILES: 'baucvajxnkjahvca',
          MW: 'mwwwwww'
        }, {
          Structure: '解析图片',
          DesignID: 'DesignID333333',
          DeliveryID: 'DeliveryID333333',
          CustomerID: 'CustomerID3333333',
          ProjectID: 'ProjectID333333333',
          SMILES: 'baucvajxnkjahvca',
          MW: 'mwwwwww'
        }, {
          Structure: '解析图片',
          DesignID: 'DesignID44444444',
          DeliveryID: 'DeliveryID44444',
          CustomerID: 'CustomerID444444444',
          ProjectID: 'ProjectID44444444',
          SMILES: 'baucvajxnkjahvca',
          MW: 'mwwwwww'
        }, {
          Structure: '解析图片',
          DesignID: 'DesignID55555555',
          DeliveryID: 'DeliveryID5555555555',
          CustomerID: 'CustomerID55555555555',
          ProjectID: 'ProjectID555555555',
          SMILES: 'baucvajxnkjahvca',
          MW: 'mwwwwww'
        }
      ]
    }
  },
  mounted () {
    this.dom = this.$refs.table.bodyWrapper
    this.dom.addEventListener('scroll', (event) => {
      const scrollTop = this.dom.scrollTop // 已滚动的高度
      const windowHeight = this.dom.clientHeight // 可视区域高度
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        console.log(windowHeight, scrollTop)
        // 1.计算可视区域的显示个数,  如果滚动距离大于可视高度,说明第二页的行开始出现，计算这个index开始，第二页显示个数的加载,

        // 2.根据一页的显示个数，计算第二屏需要画图的列数并画图
      }, 100)
    })
  },
  methods: {
  }
}
</script>

<style>

</style>
