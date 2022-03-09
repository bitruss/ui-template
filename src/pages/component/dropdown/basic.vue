<template>
  <div class="col-12 mb-3">
    <b-card header="DropDown">
      <div class="p-3">
        <b-row>
          <b-col>
            <b-button-group>
              <b-button variant="outline-secondary"> Button </b-button>
              <b-dropdown right variant="outline-secondary" text="Menu">
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-item>Item 3</b-dropdown-item>
              </b-dropdown>
              <b-dropdown variant="outline-secondary" right split text="Split">
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-item>Item 3</b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col>
            <b-button-group>
              <b-button variant="primary" size="lg"> Button </b-button>
              <b-dropdown right variant="primary" text="Menu" size="lg">
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-item>Item 3</b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col>
            <b-button-group>
              <b-button variant="secondary" size="sm"> Button </b-button>
              <b-dropdown right variant="secondary" text="Menu" size="sm">
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-item>Item 3</b-dropdown-item>
              </b-dropdown>
              <b-dropdown
                variant="secondary"
                right
                split
                text="Split Menu"
                size="sm"
              >
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-item>Item 3</b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BButtonGroup,
  BButton,
  BDropdown,
  BDropdownItem,
  BRow,
  BCol,
  BCard,
} from "bootstrap-vue";

export default {
  components: {
    BButtonGroup,
    BDropdown,
    BDropdownItem,
    BButton,
    BRow,
    BCard,
    BCol,
  },
};
</script>