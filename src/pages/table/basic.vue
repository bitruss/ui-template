<template>
<div class="col-12 mb-3">
    <b-card header="Basic">
        <vue-good-table 
        class="m-1 mt-3"
        :columns="columns" :rows="row_data" :sort-options="{ enabled: false }" :pagination-options="{
          enabled: true,
          mode: 'pages',
          perPage: 10,
          perPageDropdown: [5,10,20,50,100,250,500,1000],
          setCurrentPage: 1,
        }">
            <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field === 'score'">
                     <b-progress :value="props.row[props.column.field]" max="10" />
                </span>

                 <span v-if="props.column.field === 'label'">
                     <b-badge variant="primary" >{{props.row[props.column.field]}}</b-badge>
                </span>

                <span v-else-if="props.column.field === 'action1'">
                    <b-button>button</b-button>
                </span>
                 
                <span v-else-if="props.column.field === 'action2'">
                    <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret class="mr-3 mt-1">
                        <template v-slot:button-content>
                            <feather-icon icon="Edit2Icon" size="16" class="text-body" />
                        </template>
                        <b-dropdown-item>
                            <feather-icon icon="Edit2Icon" />
                            <span>action2-1</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <feather-icon icon="Edit2Icon" />
                            <span>action2-2</span>
                        </b-dropdown-item>
                    </b-dropdown>
                </span>
                <!-- Column: Common -->
                <span v-else>{{ props.row[props.column.field]}}</span>
            </template>
        </vue-good-table>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BButton,
    BDropdown,
    BDropdownItem,
    BProgress,
    BBadge
} from "bootstrap-vue";
import { VueGoodTable } from 'vue-good-table';

export default {
    components: {
        BCard,
        BButton,
        BDropdown,
        BDropdownItem,
        BProgress,
        BBadge,
        VueGoodTable,
    },
    created(){
        this.row_data=[];
        for (let i = 0; i < 5; i++) {
            this.row_data.push({
                id: i,
                name: 'Name' + i,
                label: 'label-' + i,
                data: 'this is data of ' + i,
                score: i
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
                    label: 'Label',
                    field: 'label',
                    type: 'text',
                    tdClass: 'text-center',
                    thClass: 'text-center'
                },
                {
                    label: 'data',
                    field: 'data',
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
                },
                {
                    label: 'Action1',
                    field: 'action1',
                    tdClass: 'text-center',
                    thClass: 'text-center'
                },
                {
                    label: 'Action2',
                    field: 'action2',
                    tdClass: 'text-center',
                    thClass: 'text-center'
                },
            ]
        }
    },
};
</script>
