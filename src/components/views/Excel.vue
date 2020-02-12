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
  ['Jazz', 'Honda', '2019-02-12', '', true, '$ 2.000,00', '#777700'],
  ['Civic', 'Honda', '2018-07-11', '', true, '$ 4.000,01', '#007777']
]
var options = {
  data: data,
  allowToolbar: true,
  columns: [
    { type: 'text', title: 'NRP', width: '120px' },
    { type: 'text', title: 'Nama', width: '250px' },
    { type: 'dropdown', title: 'Angkatan', width: '250px', source: [ '2019', '2018', '2017' ] },
    { type: 'checkbox', title: 'Tgl Lahir', width: '80px' },
    { type: 'color', width: '100px', render: 'square' },
    { type: 'image', title: 'Photo', width: '120px' },
    { type: 'numeric', title: 'Aktif', width: '100px', mask: '$ #.##,00', decimal: ',' }
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
