<template>
  <section class="content">
    <div class="container">
      <div class="row">
        <div>
          <div id="app" ref="spreadsheet"></div>
          <div class="col-md-11">
            <input type="button" class="btn btn-primary" value="Add Data" @click="() => spreadsheet.insertRow()" />
            <input type="button" class="btn btn-primary" value="Delete Data" @click="() => spreadsheet.deleteRow()" />
            <!-- <input v-on:keyup.46 = spreadsheet.deleteRow()> -->
          </div>
          <hr>
        </div>
      </div>
    </div>
  </section>
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
      axios.get('http://localhost:8029/api/capaian_unit/').then(res => {
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
            { type: 'dropdown', title: 'Id Satuan Kerja', url: 'http://localhost:8029/api/ddsatker', width: '150px' },
            { type: 'dropdown', title: 'Id Data Dasar', url: 'http://localhost:8029/api/dddatadasar/', width: '150px' },
            { type: 'text', title: 'Waktu (Timestamp)', width: '220px', readOnly: true },
            { type: 'text', title: 'Capaian', width: '150px' }
          ]
        }
        let spreadsheet = jexcel(this.$el, jexcelOptions)
        Object.assign(this, { spreadsheet })
      })
    },
    newRow () {
      axios.post('http://localhost:8029/api/capaian_unit/', this.form).then(res => {
        console.log(res.data)
      })
    },
    updateRow (instance, cell, columns, row, value) {
      axios.get('http://localhost:8029/api/capaian_unit/').then(res => {
        var index = Object.values(res.data[row])
        var old = Object.values(res.data[row])
        index[columns] = value
        console.log(old[0] + ' ' + old[1])
        console.log(index[0] + ' ' + index[1])
        axios.put('http://localhost:8029/api/capaian_unit/' + old[0] + '&' + old[1] + '&' + old[2], {
          id_satker: index[0],
          id_datadasar: index[1],
          waktu: index[2],
          capaian: index[3]
        }).then(res => {
          console.log(res.data)
        })
      })
    },
    deleteRow (instance, row) {
      axios.get('http://localhost:8029/api/capaian_unit/').then(res => {
        var index = Object.values(res.data[row])
        // console.log(index)
        console.log(index[0], index[1], index[2])
        axios.delete('http://localhost:8029/api/capaian_unit/' + index[0] + '&' + index[1] + '&' + index[2], {
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
