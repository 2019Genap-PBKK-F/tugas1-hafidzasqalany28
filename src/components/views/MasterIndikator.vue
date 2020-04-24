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
import axios from 'axios'
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
export default {
  mounted () {
    this.load()
  },
  methods: {
    load () {
      axios.get('http://localhost:8029/api/masterindikator/').then(res => {
        console.log(res.data)
        var jexcelOptions = {
          data: res.data,
          allowToolbar: true,
          oninsertrow: this.add,
          onchange: this.update,
          ondeleterow: this.delete,
          responsive: true,
          search: true,
          pagination: 10,
          csvHeaders: true,
          columns: [
            { type: 'hidden', title: 'id', width: '0px' },
            { type: 'dropdown', title: 'Aspek', url: 'http://localhost:8029/api/aaspek/', width: '100px' },
            { type: 'text', title: 'Nama Indikator', width: '100px' },
            { type: 'textbox', title: 'Deskripsi Indikator', width: '100px' },
            { type: 'dropdown', title: 'Pembilang', url: 'http://localhost:8029/api/dddatadasarid/', width: '100px' },
            { type: 'dropdown', title: 'Penyebut', url: 'http://localhost:8029/api/dddatadasarid/', width: '100px' },
            { type: 'text', title: 'Default Bobot', width: '100px' },
            { type: 'text', title: 'Create Date', width: '100px', readOnly: true },
            { type: 'text', title: 'Last Update', width: '100px', readOnly: true },
            { type: 'calendar', title: 'Expired Date', width: '100px' }
          ]
        }
        let spreadsheet = jexcel(this.$el, jexcelOptions)
        Object.assign(this, { spreadsheet })
      })
    },
    add () {
      axios.post('http://localhost:8029/api/masterindikator/').then(res => {
        console.log('adding data')
      })
    },
    update (instance, cell, columns, row, value) {
      axios.get('http://localhost:8029/api/masterindikator/').then(res => {
        var index = Object.values(res.data[row])
        index[columns] = value
        console.log(index)
        axios.put('http://localhost:8029/api/masterindikator/' + index[0], {
          id: index[0],
          id_aspek: index[1],
          nama: index[2],
          deskripsi: index[3],
          id_pembilang: index[4],
          id_penyebut: index[5],
          default_bobot: index[6],
          expired_date: index[9]
        })
      })
    },
    delete (instance, row) {
      axios.get('http://localhost:8029/api/masterindikator/').then(res => {
        var index = Object.values(res.data[row])
        axios.delete('http://localhost:8029/api/masterindikator/' + index[0])
        console.log('delete : row', row, res.data[row])
      })
    }
  }
}
</script>
