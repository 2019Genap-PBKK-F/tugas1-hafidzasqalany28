<template>
  <div>
    <div id="app" ref="spreadsheet"></div>
    <div><input type="button" value="Add new row" @click="() => spreadsheet.insertRow()" /></div>
  </div>
</template>

<script>
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
var data = [
  ['05111740000195', 'hafidz', '2019-02-12', '$ 2.000,00', '#777700'],
  ['051117400000175', 'faqih', '2018-07-11', '$ 4.000,01', '#007777']
]
var options = {
  data: data,
  allowToolbar: true,
  columns: [
    { type: 'text', title: 'NRP', width: '120px' },
    { type: 'text', title: 'Nama', width: '250px' },
    { type: 'dropdown', title: 'Angkatan', width: '80px', source: [ '2019', '2018', '2017' ] },
    { type: 'calendar', title: 'Tgl Lahir', width: '250px' },
    { type: 'image', title: 'Photo', width: '120px' },
    { type: 'checkbox', title: 'Aktif', width: '100px' }
  ]
}
export default {
  name: 'App',
  mounted: function () {
    let spreadsheet = jexcel(this.$el, options)
    Object.assign(this, { spreadsheet })
  }
}
</script>
