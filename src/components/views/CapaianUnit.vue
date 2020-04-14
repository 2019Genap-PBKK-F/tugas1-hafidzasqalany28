<template>
  <div>
    <div id="app" ref="spreadsheet"></div>
    <div>
        <input type="button" class="btn btn-primary" value="Add New Row" @click="() => spreadsheet.insertRow()" />
        <input type="button" class="btn btn-primary" value="Delete Selected Row" @click="() => spreadsheet.deleteRow()" />
    </div>
  </div>
</template>

<script>
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
import axios from 'axios'

export default {
  // name: 'App',
  data () {
    return {
      capaianUnit: [],
      form: {
        DataDasar_id: 1,
        Unit_id: 1,
        capaian: 0.0
      }
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      axios.get('http://10.199.14.46:8029/api/capaian_unit/').then(res => {
        console.log(res.data)
        var jexcelOptions = {
          data: res.data,
          allowToolbar: true,
          onchange: this.updateRow,
          // onbeforechange: this.oldRow,
          oninsertrow: this.newRow,
          ondeleterow: this.deleteRow,
          responsive: true,
          search: true,
          pagination: 10,
          csvHeaders: true,
          columns: [
            { type: 'dropdown', title: 'Data Dasar', url: 'http://10.199.14.46:8029/api/datadasar/nama/', width: '150px' },
            { type: 'dropdown', title: 'Unit', url: 'http://10.199.14.46:8029/api/namaunit/', width: '150px' },
            { type: 'text', title: 'Waktu (Timestamp)', width: '220px', readOnly: true },
            { type: 'text', title: 'Capaian', width: '150px' }
          ]
        }
        let spreadsheet = jexcel(this.$el, jexcelOptions)
        Object.assign(this, { spreadsheet })
      })
    },
    newRow () {
      axios.post('http://10.199.14.46:8029/api/capaian_unit/', this.form).then(res => {
        console.log(res.data)
      })
    },
    updateRow (instance, cell, columns, row, value) {
      axios.get('http://10.199.14.46:8029/api/capaian_unit/').then(res => {
        var index = Object.values(res.data[row])
        var old = Object.values(res.data[row])
        index[columns] = value
        console.log(old[0] + ' ' + old[1])
        console.log(index[0] + ' ' + index[1])
        axios.put('http://10.199.14.46:8029/api/capaian_unit/' + old[0] + '&' + old[1] + '&' + old[2], {
          DataDasar_id: index[0],
          Unit_id: index[1],
          waktu: index[2],
          capaian: index[3]
        }).then(res => {
          console.log(res.data)
        })
      })
    },
    deleteRow (instance, row) {
      axios.get('http://10.199.14.46:8029/api/capaian_unit/').then(res => {
        var index = Object.values(res.data[row])
        // console.log(index)
        console.log(index[0], index[1], index[2])
        axios.delete('http://10.199.14.46:8029/api/capaian_unit/' + index[0] + '&' + index[1] + '&' + index[2], {
          waktu: index[2]
        }).then(res => {
          console.log(res.data)
        })
      })
    },
    oldRow (instance, cell, columns, row, value) {
      console.log('lama ' + value)
    }
  }
}
</script>
