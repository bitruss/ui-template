<template>
<div class="col-12 mb-3">
    <b-card header="CheckBox Selector">

        <vue-good-table class="m-1 m-3" :columns="columns" :rows="row_data" 
         :select-options="{ enabled: true, selectOnCheckboxOnly: true,disableSelectInfo: false }"
         @on-selected-rows-change="onSelectedRows"
        :sort-options="{ enabled: false }" :pagination-options="{
          enabled: true,
          mode: 'pages',
          perPage: 10,
          perPageDropdown: [5,10,20,50,100,250,500,1000],
          setCurrentPage: 1,
        }">

          <div slot="selected-row-actions">
              <b-button size="sm" variant="primary" class="ml-4" @click="showSelCounter" >Selected-action</b-button>
          </div>

            <template slot="table-row" slot-scope="props">
                <!-- Column: Common -->
                <span>{{ props.row[props.column.field]}}</span>
            </template>
        </vue-good-table>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BButton
} from "bootstrap-vue";
import { VueGoodTable } from 'vue-good-table';

export default {
    components: {
        BCard,
        BButton,
        VueGoodTable
    },
    computed: {
        row_data() {
            let data = [];
            for (let i = 400; i < 501; i++) {
                data.push({
                    id: i,
                    name: 'Name' + i,
                    age: i,
                    datax: 'this is datax of ' + i,
                    datay: 'this is datay of ' + i,
                    dataz: 'this is dataz of ' + i,
                    score: i
                });
            }
            return data;
        }
    },
    methods: {
        onSelectedRows(params) {
            this.selected_rows=params.selectedRows;
        },
        showSelCounter(){  
            this.$bvToast.toast(`selected counter:`+this.selected_rows.length, {
                title: `show selected info`,
                toaster:'b-toaster-top-center',
                solid: true,
                appendToast: false,
            });

        }
    },
    data() {
        return {
            columns: [{
                    label: 'Name',
                    field: 'name',
                    tdClass: 'text-center',
                    thClass: 'text-center'
                },
                {
                    label: 'Age',
                    field: 'age',
                    type: 'number',
                    tdClass: 'text-center',
                    thClass: 'text-center'
                },
                {
                    label: 'datax',
                    field: 'datax',
                    type: 'text',
                    tdClass: 'text-center',
                    thClass: 'text-center'
                },
                {
                    label: 'datay',
                    field: 'datay',
                    type: 'text',
                    tdClass: 'text-center',
                    thClass: 'text-center'
                },
                {
                    label: 'dataz',
                    field: 'dataz',
                    type: 'text',
                    tdClass: 'text-center',
                    thClass: 'text-center'
                },
                {
                    label: 'Percent',
                    field: 'score',
                    type: 'percentage',
                    tdClass: 'text-center',
                    thClass: 'text-center'
                }
            ],
            selected_rows:[]
        }
    },
};
</script>
