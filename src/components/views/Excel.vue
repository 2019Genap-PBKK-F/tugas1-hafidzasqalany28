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
var changed = function(instance, cell, x, y, value) {
  x = parseInt(x)
  y = parseInt(y)
  var datatemp = []
  datatemp[0] = y + 1
  axios.get('http://localhost:3000/mahasiswa/' + datatemp[0]).then((response) => {
    Object.keys(response.data).map(function (key) {
      if (key === 'nama') {
        datatemp[2] = response.data['nama']
      }
      if (key === 'nrp') {
        datatemp[1] = response.data['nrp']
      }
      if (key === 'angkatan') {
        datatemp[3] = response.data['angkatan']
      }
      // if (key === 'jeniskelamin') {
      //   datatemp[4] = response.data['jeniskelamin']
      // }
      if (key === 'tgllahir') {
        datatemp[5] = response.data['tgllahir']
      }
      if (key === 'photo') {
        datatemp[6] = response.data['photo']
      }
      if (key === 'aktif') {
        datatemp[7] = response.data['aktif']
      }
    })
    datatemp[x] = value
    axios({
      method: 'put',
      url: 'http://localhost:3000/mahasiswa/' + datatemp[0],
      data: {
        id: datatemp[0],
        nrp: datatemp[1],
        nama: datatemp[2],
        angkatan: datatemp[3],
        // jeniskelamin: datatemp[4],
        tgllahir: datatemp[5],
        photo: datatemp[6],
        aktif: datatemp[7]
      }
    }).then((response) => {
      console.log(response.data)
    })
  })
}
var insertrow = function(instance) {
  axios({
    method: 'post',
    url: 'http://localhost:3000/mahasiswa/',
    data: {
    }
  }).then((response) => {
    console.log(response.data)
  })
}
var deleterow = function(instance) {
  axios({
    method: 'delete',
    url: 'http://localhost:3000/mahasiswa/',
    data: {
    }
  }).then((response) => {
    console.log(response.data)
  })
}
var options = {
  url: 'http://localhost:3000/mahasiswa',
  onchange: changed,
  oninsertrow: insertrow,
  ondeleterow: deleterow,
  allowToolbar: true,
  columns: [
    { type: 'hidden', title: 'id', width: '120px' },
    { type: 'text', title: 'NRP', width: '120px' },
    { type: 'text', title: 'Nama', width: '120px' },
    { type: 'dropdown', title: 'Angkatan', width: '120px', autocomplete: true, source: ['2016', '2017', '2018'] },
    // { type: 'dropdown', title: 'Jenis Kelamin', width: '250px', autocomplete: true, source: ['Laki-Laki', 'Perempuan'] },
    { type: 'calendar', title: 'Tgl-Lahir', width: '250px' },
    { type: 'image', title: 'Photo', width: '120px' },
    { type: 'checkbox', title: 'Aktif', width: '80px' }
    // { type: 'dropdown', title: 'Make', width: '250px', source: [ 'Alfa Romeo', 'Audi', 'Bmw' ] },
    // { type: 'calendar', title: 'Available', width: '250px' },
    // { type: 'image', title: 'Photo', width: '120px' },
    // { type: 'checkbox', title: 'Stock', width: '80px' },
    // { type: 'numeric', title: 'Price', width: '100px', mask: '$ #.##,00', decimal: ',' },
    // { type: 'color', width: '100px', render: 'square' }
  ]
}
export default {
  name: 'App',
  mounted: function () {
    this.load()
  },
  methods: {
    load() {
      let spreadsheet = jexcel(this.$el, options)
      Object.assign(this, { spreadsheet })
    }
  }
}
</script>
