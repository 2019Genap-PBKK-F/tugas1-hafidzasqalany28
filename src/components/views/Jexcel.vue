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
  mounted() {
    let spreadsheet = jexcel(this.$el, this.jexcelOptions)
    console.log(this.$el)
    Object.assign(this, { spreadsheet })
  },
  methods: {
    add() {
      axios.post('http://10.199.14.46:8029/api/mahasiswa/').then(res => {
        console.log('adding data in new row')
      })
    },
    update(instance, cell, columns, row, value) {
      axios.get('http://10.199.14.46:8029/api/mahasiswa/').then(res => {
        var index = Object.values(res.data[row])
        index[columns] = value
        console.log(index)
        axios.put('http://10.199.14.46:8029/api/mahasiswa/' + index[0], {
          id: index[0],
          nrp: index[1],
          nama: index[2],
          angkatan: index[3],
          jenis_kelamin: index[4],
          lahir: index[5],
          foto: index[6],
          aktif: index[7]
        })
      })
    },
    delete(instance, row) {
      axios.get('http://10.199.14.46:8029/api/mahasiswa/').then(res => {
        var index = Object.values(res.data[row])
        axios.delete('http://10.199.14.46:8029/api/mahasiswa/' + index[0])
        console.log('delete : row', row, res.data[row])
      })
    }
  },
  computed: {
    jexcelOptions() {
      return {
        allowToolbar: true,
        url: 'http://10.199.14.46:8029/api/mahasiswa/',
        oninsertrow: this.add,
        onchange: this.update,
        ondeleterow: this.delete,
        search: true,
        pagination: 5,
        csvHeaders: true,
        columns: [
          { type: 'hidden', title: 'id', width: '10px' },
          { type: 'text', title: 'NRP', width: '120px' },
          { type: 'text', title: 'Nama', width: '250px' },
          { type: 'dropdown', title: 'Angkatan', width: '80px', source: [ '2019', '2018', '2017', '2016', '2015' ], autocomplete: true },
          { type: 'dropdown', title: 'Jenis Kelamin', width: '200px', source: [ 'Laki-laki', 'Perempuan' ], autocomplete: true },
          { type: 'calendar', title: 'Tanggal Lahir', width: '200px' },
          { type: 'image', title: 'Photo', width: '200px' },
          { type: 'checkbox', title: 'Aktif', width: '80px' }
        ]
      }
    }
  }
}
</script> 
