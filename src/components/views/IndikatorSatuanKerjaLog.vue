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
    let spreadsheet = jexcel(this.$el, this.jexcelOptions)
    console.log(this.$el)
    Object.assign(this, { spreadsheet })
  },
  methods: {
    delete (instance, row) {
      axios.get('http://localhost:8029/api/indikatorsatuankerjalog/').then(res => {
        var index = Object.values(res.data[row])
        axios.delete('http://localhost:8029/api/indikatorsatuankerjalog/' + index[4])
        console.log('delete : row', row, res.data[row])
      })
    }
  },
  computed: {
    jexcelOptions () {
      return {
        allowToolbar: true,
        url: 'http://localhost:8029/api/indikatorsatuankerjalog/',
        oninsertrow: this.add,
        onchange: this.update,
        ondeleterow: this.delete,
        search: true,
        pagination: 10,
        csvHeaders: true,
        columns: [
          { type: 'text', title: 'Id Satuan Kerja', width: '150px', readOnly: true },
          { type: 'text', title: 'Id Master', width: '150px', readOnly: true },
          { type: 'text', title: 'Id Periode', width: '150px', readOnly: true },
          { type: 'text', title: 'Capaian', width: '150px', readOnly: true },
          { type: 'text', title: 'Create Date', width: '200px', readOnly: true }
        //   { type: 'text', title: 'Nama', width: '250px' },
        //   { type: 'dropdown', title: 'Angkatan', width: '80px', source: [ '2019', '2018', '2017', '2016', '2015' ], autocomplete: true },
        //   { type: 'dropdown', title: 'Jenis Kelamin', width: '200px', source: [ 'Laki-laki', 'Perempuan' ], autocomplete: true },
        //   { type: 'calendar', title: 'Tanggal Lahir', width: '200px' },
        //   { type: 'image', title: 'Photo', width: '200px' },
        //   { type: 'checkbox', title: 'Aktif', width: '80px' }
        ]
      }
    }
  }
}
</script>
