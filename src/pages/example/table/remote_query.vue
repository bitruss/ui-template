<template>
<div class="col-12 mb-3">
    <b-card header="Remote Pagination Query Forms">
        <div class="p-3">

            <VDropdown>
                 <b-button variant="secondary" class="mb-2" >
                    <feather-icon icon="SearchIcon" class="mr-2" size="15" />
                    <span class="align-middle">Search-items</span>
                </b-button>
                <!-- This will be the content of the popover -->
                <template #popper>
                    <b-row class="mb-3">
                        <b-col class="pl-0 mt-2  ml-3">
                           <b-form-input placeholder="query name" />
                        </b-col>
                    </b-row>
                    <b-row class="mb-3">
                        <b-col class="pl-0  ml-3">
                            <b-form-input placeholder="query sex" />
                        </b-col>
                    </b-row>
                     <b-row class="mb-3">
                        <b-col class="pl-0 ml-3"  >
                            <v-select multiple :options="['All', ...option]"></v-select>
                        </b-col>
                     </b-row>   
                    <b-row class="mb-1 mt-3">
                        <b-col>
                            <b-button variant="secondary" v-close-popper="true" @click="searchTable"> Search</b-button>
                        </b-col>
                    </b-row>
                </template>
            </VDropdown>


            <b-overlay :show="table_show_overlay" rounded="sm">
                <vue-good-table ref="remote_q_table" @on-page-change="onPageChange" @on-per-page-change="onPerPageChange" :totalRows="totalRows" :columns="columns" :rows="row_data" :sort-options="{ enabled: false }" 
                :pagination-options="pagination">
                    <template slot="table-row" slot-scope="props">
                        <!-- Column: Common -->
                        <span>{{ props.row[props.column.field] }}</span>
                    </template>
                </vue-good-table>
            </b-overlay>
        </div>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BRow,
    BCol,
    BInputGroup,
    BFormInput,
    BInputGroupPrepend,
    BButton,
    BOverlay,
} from "bootstrap-vue";
import {
    VueGoodTable
} from "vue-good-table";

import vSelect from 'vue-select'


export default {
    components: {
        BCard,
        BRow,
        BCol,
        BInputGroup,
        BFormInput,
        BInputGroupPrepend,
        BButton,
        BOverlay,
        VueGoodTable,
        vSelect,
    },
    methods: {
        simuRemoteQuery(params) {
            //params.limit
            //params.offset

            //simulate serverside example data
            let server_simu_data = [];
            for (let i = params.offset; i < params.limit + params.offset; i++) {
                server_simu_data.push({
                    id: i,
                    name: "My-Name-" + i,
                    age: i,
                });
            }
            return {
                count: 300,
                data: server_simu_data
            };
        },

        onPageChange(params) {
            this.limit = params.currentPerPage;
            this.offset = (params.currentPage - 1) * params.currentPerPage;
            this.refreshTable();
        },

        onPerPageChange(params) {
            this.limit = params.currentPerPage;
            this.offset = (params.currentPage - 1) * params.currentPerPage;
            this.refreshTable();
        },
        refreshTable() {
            this.table_show_overlay = true;
            //as if we do remote query and get data
            //console.log("table refresh offset"+this.offset+"limit"+this.limit);
            let response = this.simuRemoteQuery({
                limit: this.limit,
                offset: this.offset
            });
            this.row_data = response.data;
            this.totalRows = response.count;
            this.table_show_overlay = false;
            
        },
        searchTable(){
            this.$refs['remote_q_table'].reset();
            this.offset = 0;
            this.refreshTable();
        }
    },
    created() {
        this.refreshTable();
    },
    data() {
        return {
            columns: [{
                    label: "Name",
                    field: "name",
                    tdClass: "text-center",
                    thClass: "text-center",
                },
                {
                    label: "Age",
                    field: "age",
                    type: "number",
                    tdClass: "text-center",
                    thClass: "text-center",
                },
            ],
            pagination: {
                enabled: true,
                mode: "pages",
                perPage: 10,
                perPageDropdown: [5, 10, 20, 50, 100, 250, 500, 1000],
                setCurrentPage: 1,
            },
            table_show_overlay: true,
            //
            row_data: [],
            limit: 10,
            offset: 0,
            totalRows: 0,

            option: ["A", "NS", "MX", "TXT", "CNAME", "CAA", "SOA"],

        };
    },
};
</script>
