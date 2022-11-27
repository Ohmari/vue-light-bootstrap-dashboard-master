<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-badge text-warning"></i>
            </div>
            <div slot="content">
              <!-- <p class="card-category">Capacity</p> -->
              <p class="card-category">User Profile</p>
              <h6 class="card-title">Your profile is a step away from completion</h6>
            </div>
            <div slot="footer">
              <!-- <i class="fa fa-refresh"></i>Updated now -->
              <i class="fa fa-edit"></i>Finish now
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="fa fa-money text-success"></i>
            </div>
            <div slot="content">
              <!-- <p class="card-category">Revenue</p>
              <h4 class="card-title">$1,345</h4> -->
              <p class="card-category no-wrap">My Funds</p>
              <h6 class="card-title">Ksh 0.00</h6>
            </div>
            <div slot="footer">
              <!-- <i class="fa fa-calendar-o"></i>Last day -->
              <i class="fa fa-calendar-o"></i>Last activity
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="fa fa-briefcase text-danger"></i>
            </div>
            <div slot="content">
              <!-- <p class="card-category">Errors</p>
              <h4 class="card-title">23</h4> -->
              <p class="card-category">Monthly contribution</p>
              <h6 class="card-title">Ksh 0.00</h6>
            </div>
            <div slot="footer">
              <i class="fa fa-clock-o"></i>Last day
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <a href="#">
            <stats-card>
            <div slot="header" class="icon-info">
              <i class="fa fa-plus-square-o text-primary"></i>
            </div>
            <div slot="content" >
              <!-- <p class="card-category">Followers</p>
              <h4 class="card-title">+45</h4> -->
              <p class="card-category">Deposit</p>
              <h6 class="card-title">cash</h6>
            </div>
            <div slot="footer">
              <!-- <i class="fa fa-refresh"></i>Updated now -->
              <i class="nc-icon nc-tap-01"></i>Go to Mpesa
            </div>
          </stats-card></a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <chart-card :chart-data="lineChart.data" :chart-options="lineChart.options"
            :responsive-options="lineChart.responsiveOptions">
            <template slot="header">
              <h4 class="card-title">Users Activity</h4>
              <p class="card-category">24 Hours performance</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Open
                <i class="fa fa-circle text-danger"></i> Click
                <i class="fa fa-circle text-warning"></i> Click Second Time
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-4">
          <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="header">
              <!-- <h4 class="card-title">Email Statistics</h4> -->
              <h4 class="card-title">Registered users report</h4>
              <p class="card-category">Report based in milestone</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <!-- <i class="fa fa-circle text-info"></i> Open
                <i class="fa fa-circle text-danger"></i> Bounce
                <i class="fa fa-circle text-warning"></i> Unsubscribe -->
                <i class="fa fa-circle text-info"></i> Per day
                <i class="fa fa-circle text-danger"></i> Per month
                <i class="fa fa-circle text-warning"></i> Yearly
              </div>
              <hr>
              <div class="stats">
                <!-- <i class="fa fa-clock-o"></i> Campaign sent 2 days ago -->
                <i class="fa fa-clock-o"></i> updated 2 minutes ago
              </div>
            </template>
          </chart-card>
        </div>
      </div>

      <!-- This code was added by Omari  -->
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Sales information</h4>
              <!-- <p class="card-category">Here is a subtitle for this table</p> -->
            </template>
            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table>
          </card>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-md-6">
          <chart-card :chart-data="barChart.data" :chart-options="barChart.options"
            :chart-responsive-options="barChart.responsiveOptions" chart-type="Bar">
            <template slot="header">
              <h4 class="card-title">2014 Sales</h4>
              <p class="card-category">All products including Taxes</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Tesla Model S
                <i class="fa fa-circle text-danger"></i> BMW 5 Series
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-check"></i> Data information certified
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-6">
          <card>
            <template slot="header">
              <h5 class="title">Tasks</h5>
              <p class="category">Backend development</p>
            </template>
            <l-table :data="tableData.data" :columns="tableData.columns">
              <template slot="columns"></template>

              <template slot-scope="{row}">
                <td>
                  <base-checkbox v-model="row.checked"></base-checkbox>
                </td>
                <td>{{ row.title }}</td>
                <td class="td-actions text-right">
                  <button type="button" class="btn-simple btn btn-xs btn-info" v-tooltip.top-center="editTooltip">
                    <i class="fa fa-edit"></i>
                  </button>
                  <button type="button" class="btn-simple btn btn-xs btn-danger" v-tooltip.top-center="deleteTooltip">
                    <i class="fa fa-times"></i>
                  </button>
                </td>
              </template>
            </l-table>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </div>
          </card>
        </div>
      </div> -->
      <!-- End of Row -->
    </div>
    <!-- Container-fluid-container -->
  </div>
  <!-- Content container -->
</template>
<style lang="scss">
</style>
<script>
import ChartCard from 'src/components/Cards/ChartCard.vue'
import StatsCard from 'src/components/Cards/StatsCard.vue'
import LTable from 'src/components/Table.vue'
// Card class was imported by Omari
import Card from 'src/components/Cards/Card.vue'
// This code was added by Omari
const tableColumns = ['Id', 'Country', 'Station', 'House', 'Total', 'Price']
  const tableData = [{
    id: 1,
    country: 'Niger',
    station: 'Dakota Rice',
    house: 'Oud-Turnhout',
    total: '20',
    price: '$36.738'
    // city: 'Oud-Turnhout'
   
  },
  {
    id: 2,
    country: 'Curaçao',
    station: 'Minerva Hooper',
    house: 'Sinaai-Waas',
    total: '60',
    price: '$23,789'
    // city: 'Sinaai-Waas'
  },
  {
    id: 3,
    country: 'Netherlands',
    station: 'Baileux',
    house: 'Sage Rodriguez',
    total: '4',
    price: '$56,142'
    // city: 'Baileux'
  },
  {
    id: 4,
    country: 'Korea, South',
    station: 'Overland Park',
    house: 'Philip Chaney',
    total: '15',
    price: '$38,735'
    // city: 'Overland Park'
  },
  {
    id: 5,
    country: 'Malawi',
    station: 'Feldkirchen in Kärnten',
    house: 'Doris Greene',
    total: '9',
    price: '$63,542'
    // city: 'Feldkirchen in Kärnten'
  }]

export default {
  components: {
    LTable,
    ChartCard,
    StatsCard,
    // Card added by Omari
    Card
  },
  data() {
    return {
      editTooltip: 'Edit Task',
      deleteTooltip: 'Remove',
      pieChart: {
        data: {
          // labels: ['40%', '20%', '40%'],
          // series: [40, 20, 40]
          labels: ['15%', '25%', '60%'],
          series: [15, 25, 60]
        }
      },
      lineChart: {
        data: {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [
            [287, 385, 490, 492, 554, 586, 698, 695],
            [67, 152, 143, 240, 287, 335, 435, 437],
            [23, 113, 67, 108, 190, 239, 307, 308]
          ]
        },
        options: {
          low: 0,
          high: 800,
          showArea: false,
          height: '245px',
          axisX: {
            showGrid: false
          },
          lineSmooth: true,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          chartPadding: {
            right: 50
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc(value) {
                return value[0]
              }
            }
          }]
        ]
      },
      // table code added by Omari
      table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
      /* The element for this bar chart script is commented */ 
      // barChart: {
      //   data: {
      //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      //     series: [
      //       [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
      //       [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
      //     ]
      //   },
      //   options: {
      //     seriesBarDistance: 10,
      //     axisX: {
      //       showGrid: false
      //     },
      //     height: '245px'
      //   },
      //   responsiveOptions: [
      //     ['screen and (max-width: 640px)', {
      //       seriesBarDistance: 5,
      //       axisX: {
      //         labelInterpolationFnc(value) {
      //           return value[0]
      //         }
      //       }
      //     }]
      //   ]
      // },
      /*The element for this table script is commented as well*/ 
      // tableData: {
      //   data: [
      //     { title: 'Sign contract for "What are conference organizers afraid of?"', checked: false },
      //     { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true },
      //     {
      //       title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
      //       checked: true
      //     },
      //     { title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false },
      //     { title: 'Read "Following makes Medium better"', checked: false },
      //     { title: 'Unfollow 5 enemies from twitter', checked: false }
      //   ]
      // }
    }
  }
}
</script>
<style>

</style>
