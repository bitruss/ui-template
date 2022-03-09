<template>
<div class="col-12 mb-3">
    <b-card header="Internal Search">

        <div class="p-1">
            <b-input-group class="table_search mb-1">
                <b-input-group-prepend is-text>
                    <feather-icon icon="SearchIcon" />
                </b-input-group-prepend>
                <b-form-input v-model="searchTerm" type="text" placeholder="Input your search" />
            </b-input-group>

            <vue-good-table :search-options="{ enabled: true,externalQuery: searchTerm}" :columns="columns" :rows="row_data" :sort-options="{ enabled: false }" :pagination-options="{
          enabled: true,
          mode: 'pages',
          perPage: 10,
          perPageDropdown: [5,10,20,50,100,250,500,1000],
          setCurrentPage: 1,
        }">
                <template slot="table-row" slot-scope="props">
                    <!-- Column: Common -->
                    <span>{{ props.row[props.column.field]}}</span>
                </template>
            </vue-good-table>
        </div>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput
} from "bootstrap-vue";
import {
    VueGoodTable
} from 'vue-good-table';

export default {
    components: {
        BCard,
        BInputGroup,
        BInputGroupPrepend,
        BFormInput,
        VueGoodTable
    },
    created() {
        this.row_data = [];
        for (let i = 400; i < 501; i++) {
            this.row_data.push({
                id: i,
                name: 'Name' + i,
                age: i,
                datax: 'this is datax of ' + i,
                datay: 'this is datay of ' + i,
                dataz: 'this is dataz of ' + i,
                score: i
            });
        }
    },
    data() {
        return {
            searchTerm: "",
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
            ]
        }
    },
};
</script>
