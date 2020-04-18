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
      axios.get('http://localhost:8029/api/indikatorsatuankerja/').then(res => {
        console.log(res.data)
        var jexcelOptions = {
          data: res.data,
          allowToolbar: true,
          onchange: this.updateRow,
          oninsertrow: this.newRow,
          ondeleterow: this.deleteRow,
          responsive: true,
          search: true,
          pagination: 10,
          csvHeaders: true,
          columns: [
            { type: 'dropdown', title: 'Id Periode', width: '150px', url: 'http://localhost:8029/api/ddperiode/' },
            { type: 'dropdown', title: 'Id Master', width: '150px', url: 'http://localhost:8029/api/ddmasterindikator/' },
            { type: 'dropdown', title: 'Id Satuan Kerja', width: '150px', url: 'http://localhost:8029/api/ddsatuankerja/' },
            { type: 'text', title: 'Bobot', width: '150px' },
            { type: 'text', title: 'Target', width: '150px' },
            { type: 'text', title: 'Capaian', width: '150px' },
            { type: 'text', title: 'Last Update', width: '250px', readOnly: true }
          //   { type: 'text', title: 'Nama', width: '250px' },
          //   { type: 'dropdown', title: 'Angkatan', width: '80px', source: [ '2019', '2018', '2017', '2016', '2015' ], autocomplete: true },
          //   { type: 'dropdown', title: 'Jenis Kelamin', width: '200px', source: [ 'Laki-laki', 'Perempuan' ], autocomplete: true },
          //   { type: 'calendar', title: 'Tanggal Lahir', width: '200px' },
          //   { type: 'image', title: 'Photo', width: '200px' },
          //   { type: 'checkbox', title: 'Aktif', width: '80px' }
          ]
        }
        let spreadsheet = jexcel(this.$el, jexcelOptions)
        Object.assign(this, { spreadsheet })
      })
    },
    newRow () {
      axios.post('http://localhost:8029/api/indikatorsatuankerja/').then(res => {
        console.log('adding data in new row')
      })
    },
    updateRow (instance, cell, columns, row, value) {
      axios.get('http://localhost:8029/api/indikatorsatuankerja/').then(res => {
        var index = Object.values(res.data[row])
        var old = Object.values(res.data[row])
        index[columns] = value
        axios.put('http://localhost:8029/api/indikatorsatuankerja/' + old[0] + '&' + old[1] + '&' + old[6], {
          id_periode: index[0],
          id_master: index[1],
          id_satker: index[2],
          bobot: index[3],
          target: index[4],
          capaian: index[5]
        }).then(res => {
          console.log(res.data)
        })
      })
    },
    deleteRow (instance, row) {
      axios.get('http://localhost:8029/api/indikatorsatuankerja/').then(res => {
        var index = Object.values(res.data[row])
        // console.log(index)
        console.log(index[0], index[1], index[2])
        axios.delete('http://localhost:8029/api/indikatorsatuankerja/' + index[0] + '&' + index[1] + '&' + index[6], {
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
