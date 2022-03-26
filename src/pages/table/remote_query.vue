<template>
<div class="col-12 mb-3">
    <b-card header="Remote Pagination Query Forms">
        <div class="p-3">

            <b-button variant="secondary" class="mr-3 mb-3" id="popover-search">
                <feather-icon icon="SearchIcon" class="mr-2" size="15" />
                <span class="align-middle">Search-items</span>
            </b-button>

            <b-popover target="popover-search" triggers="focus" placement="bottomright" >
                <template #title>
                    <span>Search</span>
                </template>
                <div>
                    <b-row class="mb-3">
                        <b-col class="pl-0 mt-2  ml-3">
                           <b-form-input placeholder="query name" />
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col class="pl-0  ml-3">
                            <b-form-input placeholder="query sex" />
                        </b-col>
                    </b-row>

                    <b-row class="mb-1 mt-3">
                        <b-col>
                            <b-button variant="secondary" @click="refreshTable"> Search</b-button>
                        </b-col>
                    </b-row>
                </div>
            </b-popover>

            <b-overlay :show="table_show_overlay" rounded="sm">
                <vue-good-table @on-page-change="onPageChange" @on-per-page-change="onPerPageChange" :totalRows="totalRows" :columns="columns" :rows="row_data" :sort-options="{ enabled: false }" :pagination-options="{
            enabled: true,
            mode: 'pages',
            perPage: 10,
            perPageDropdown: [5, 10, 20, 50, 100, 250, 500, 1000],
            setCurrentPage: 1,
          }">
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
    BPopover,
    BOverlay,
} from "bootstrap-vue";
import {
    VueGoodTable
} from "vue-good-table";

export default {
    components: {
        BCard,
        BRow,
        BCol,
        BInputGroup,
        BFormInput,
        BInputGroupPrepend,
        BButton,
        BPopover,
        BOverlay,
        VueGoodTable,
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
            let response = this.simuRemoteQuery({
                limit: this.limit,
                offset: this.offset
            });
            this.row_data = response.data;
            this.totalRows = response.count;
            this.table_show_overlay = false;
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
            row_data: [],
            table_show_overlay: true,
            limit: 10,
            offset: 0,
            totalRows: 0,
        };
    },
};
</script>
