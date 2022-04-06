<template>
<div class="col-12 mb-3">
    <b-card header="Events">
        <div class="p-3">
            <b-overlay :show="table_show_overlay" rounded="sm">
                <vue-good-table :columns="columns" :rows="row_data" :sort-options="{ enabled: false }" :pagination-options="{
              enabled: true,
              mode: 'pages',
              perPage: 10,
              perPageDropdown: [5, 10, 20, 50, 100, 250, 500, 1000],
              setCurrentPage: 1,
            }">
                    <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field === 'action'">
                            <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret class="mr-3 mt-1">
                                <template v-slot:button-content>
                                    <feather-icon icon="Edit2Icon" size="16" class="text-body" />
                                </template>
                                <b-dropdown-item @click="open_row_view_edit(props.row.originalIndex)">
                                    <feather-icon icon="Edit2Icon" />
                                    <span>View/Edit/Delete</span>
                                </b-dropdown-item>
                            </b-dropdown>
                        </span>
                        <!-- Column: Common -->
                        <span v-else>{{ props.row[props.column.field] }}</span>
                    </template>
                </vue-good-table>
            </b-overlay>

            <!-- modal_row_view_update-->
            <b-modal id="modal_row_view_update" size="lg" @hide="handleHide" title="view/edit" cancel-variant="secondary" cancel-title="Close" centered>
                <b-overlay :show="modal_row_view_overlay" rounded="sm">
                    <b-form>
                        <b-form-group>
                            <label for="name">Name:</label>
                            <b-form-input id="name" type="text" v-model="focus.row_data.name" />
                        </b-form-group>

                        <b-form-group>
                            <label for="age">Age:</label>
                            <b-form-input id="age" type="number" v-model="focus.row_data.age" />
                        </b-form-group>
                        <b-form-group>
                            <label for="dataz">DataZ:</label>
                            <b-form-input id="dataz" type="text" v-model="focus.row_data.dataz" />
                        </b-form-group>
                    </b-form>
                </b-overlay>

                <template #modal-footer>
                    <b-row class="w-100">
                        <b-col class="text-left p-0">
                            <b-button variant="danger" @click="confirmDel">Delete</b-button>
                        </b-col>
                        <b-col cols="8" class="text-right p-0">
                            <b-button variant="primary" class="mr-3" @click="handleUpdate">Save</b-button>
                            <b-button variant="secondary" @click="$bvModal.hide('modal_row_view_update')">Cancel</b-button>
                        </b-col>
                    </b-row>
                </template>
            </b-modal>
        </div>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BCardFooter,
    BDropdown,
    BDropdownItem,
    BForm,
    BFormGroup,
    BFormInput,
    BOverlay,
    BButton,
    BRow,
    BCol,
} from "bootstrap-vue";
import {
    VueGoodTable
} from "vue-good-table";

export default {
    components: {
        BCard,
        BCardFooter,
        BDropdown,
        BDropdownItem,
        BForm,
        BFormGroup,
        BFormInput,
        BOverlay,
        BButton,
        BRow,
        BCol,
        VueGoodTable,
    },
    methods: {
        open_row_view_edit(rowid) {
            this.focus.row_index = rowid;
            this.focus.row_data.name = this.row_data[this.focus.row_index].name;
            this.focus.row_data.age = this.row_data[this.focus.row_index].age;
            this.focus.row_data.dataz = this.row_data[this.focus.row_index].dataz;
            this.$bvModal.show("modal_row_view_update");
        },

        handleHide(bvModalEvt) {
            if (this.remote_updating) {
                bvModalEvt.preventDefault();
            }
        },

        handleUpdate() {
            this.remote_updating = true; //make sure user can't close window
            this.modal_row_view_overlay = true;
            //request remote api
            let updater = this.simuTableUpdate();
            this.remote_updating = false;
            this.modal_row_view_overlay = false;

            if (updater) {
                //update the updated data to local data
                this.row_data[this.focus.row_index].name = this.focus.row_data.name;
                this.row_data[this.focus.row_index].age = this.focus.row_data.age;
                this.row_data[this.focus.row_index].dataz = this.focus.row_data.dataz;

                //show correct
                this.$bvToast.toast("update success", {
                    title: `Success`,
                    variant: "success",
                    solid: true,
                    toaster: "b-toaster-top-center",
                });
            }
        },

        confirmDel() {
            this.$bvModal
                .msgBoxConfirm("Please confirm that you want to delete this?", {
                    title: "Please Confirm",
                    size: "sm",
                    okVariant: "primary",
                    okTitle: "Yes",
                    cancelTitle: "No",
                    cancelVariant: "secondary",
                    hideHeaderClose: true,
                    centered: true,
                })
                .then((value) => {
                    if (value) {
                        this.handleDel();
                    }
                });
        },

        handleDel() {
            this.remote_updating = true; //make sure user can't close window
            //request remote api
            this.modal_row_view_overlay = true;
            let delresult = this.simuTableDel();
            this.remote_updating = false;
            this.modal_row_view_overlay = false;

            if (delresult) {
                //hide edit window
                this.$bvModal.hide("modal_row_view_update");
                //update the updated data to local data
                this.row_data.splice(this.focus.row_index, 1);
                //show correct
                this.$bvToast.toast("delete success", {
                    title: `Success`,
                    variant: "success",
                    solid: true,
                    toaster: "b-toaster-top-center",
                });
            }
        },

        refreshTable() {
            this.table_show_overlay = true;
            //remote query
            this.row_data = this.simuTableData();
            this.table_show_overlay = false;
        },

        //simulate remote query
        simuTableData() {
            //simulate serverside example data
            let server_simu_data = [];
            for (let i = 0; i < 100; i++) {
                server_simu_data.push({
                    id: i,
                    name: "Name" + i,
                    age: i,
                    datax: "this is datax of " + i,
                    datay: "this is datay of " + i,
                    dataz: "this is dataz of " + i,
                    score: i,
                });
            }
            return server_simu_data;
        },
        simuTableUpdate() {
            return true;
        },
        simuTableDel() {
            return true;
        },
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
                {
                    label: "datax",
                    field: "datax",
                    type: "text",
                    tdClass: "text-center",
                    thClass: "text-center",
                },
                {
                    label: "Action",
                    field: "action",
                    tdClass: "text-center",
                    thClass: "text-center",
                },
            ],
            row_data: [],
            focus: {
                row_index: -1,
                row_data: {
                    name: "",
                    age: 0,
                    dataz: "",
                },
            },
            remote_updating: false,
            table_show_overlay: true,
            modal_row_view_overlay: false,
        };
    },
};
</script>
