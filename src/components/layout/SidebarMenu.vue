<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Dashboard</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/abmas">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">Abmas</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/dosen">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">Dosen</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/penelitian">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">Penelitian</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/publikasi">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">Publikasi</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/tables">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">Tables</span>
      </a>
    </router-link>

    <li class="header">ME</li>
    <router-link tag="li" class="pageLink" to="/datadasar">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">DataDasar</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/jenissatker">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">JenisSatker</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/satuankerja">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">SatuanKerja</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/capaian_unit">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">capaian_unit</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/indikatorperiode">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">IndikatorPeriode</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/indikatorsatuankerja">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">IndikatorSatuanKerja</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/indikatorsatuankerjalog">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">IndikatorSatuanKerjaLog</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/masterindikator">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">MasterIndikator</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/periode">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">Periode</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/aspek">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">Aspek</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/jexcel">
      <a>
        <i class="fa fa-file-excel-o"></i>
        <span class="page">Jexcel</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/tasks">
      <a>
        <i class="fa fa-tasks"></i>
        <span class="page">Tasks</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <i class="fa fa-cog"></i>
        <span class="page">Settings</span>
      </a>
    </router-link>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span class="treeview-title">Files</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="#">
            <i class="fa fa-file-word-o"></i> Item 1
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-picture-o"></i> Item 2
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-pdf-o"></i> Item 3
          </a>
        </li>
      </ul>
    </li>

    <li class="header">LOGS</li>
    <router-link tag="li" class="pageLink" to="/access">
      <a>
        <i class="fa fa-book"></i>
        <span class="page">Access</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/server">
      <a>
        <i class="fa fa-hdd-o"></i>
        <span class="page">Server</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/repos">
      <a>
        <i class="fa fa-heart"></i>
        <span class="page">Repos</span>
        <small class="label pull-right bg-green">AJAX</small>
      </a>
    </router-link>

    <li class="header">PAGES</li>
    <router-link tag="li" class="pageLink" to="/login">
      <a>
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page"> Login</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/404">
      <a>
        <i class="fa fa-circle-o text-red"></i>
        <span class="page"> 404</span>
      </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu'
}
</script>
<style>
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.treeview-title {
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}
</style>
