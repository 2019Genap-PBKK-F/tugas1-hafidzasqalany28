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
    add () {
      axios.post('http://localhost:8029/api/aspek').then(res => {
        console.log('adding data in new row')
      })
    },
    update (instance, cell, columns, row, value) {
      axios.get('http://localhost:8029/api/aspek/').then(res => {
        var index = Object.values(res.data[row])
        index[columns] = value
        console.log(index)
        axios.put('http://localhost:8029/api/aspek/' + index[0], {
          id: index[0],
          aspek: index[1],
          komponen_aspek: index[2]
        })
      })
    },
    delete (instance, row) {
      axios.get('http://localhost:8029/api/aspek').then(res => {
        var index = Object.values(res.data[row])
        axios.delete('http://localhost:8029/api/aspek/' + index[0])
        console.log('delete : row', row, res.data[row])
      })
    }
  },
  computed: {
    jexcelOptions () {
      return {
        allowToolbar: true,
        url: 'http://localhost:8029/api/aspek',
        oninsertrow: this.add,
        onchange: this.update,
        ondeleterow: this.delete,
        search: true,
        pagination: 10,
        csvHeaders: true,
        columns: [
          { type: 'hidden', title: 'id', width: '10px' },
          { type: 'text', title: 'Aspek', width: '150px' },
          { type: 'text', title: 'Komponen Aspek', width: '250px' }
        // { type: 'text', title: 'Last Update', width: '250px', readOnly: true },
        //  { type: 'calendar', title: 'Expired Date', width: '200px' }
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
