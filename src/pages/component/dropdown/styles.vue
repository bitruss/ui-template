<template>
<div class="col-12  mb-3">
    <b-card header="Styles">
        <div class="p-3">
            <b-dropdown   split text="Primary" variant="primary" class="mt-1 mr-3" right>
                <b-dropdown-item>
                    Option 1
                </b-dropdown-item>
                <b-dropdown-item>
                    Option 2
                </b-dropdown-item>
                <b-dropdown-item>
                    Option 3
                </b-dropdown-item>
            </b-dropdown>

            <!-- secondary -->
            <b-dropdown   split text="outline-secondary" variant="outline-secondary" class="mt-1 mr-3"  right>
                <b-dropdown-item>
                    Option 1
                </b-dropdown-item>
                <b-dropdown-item>
                    Option 2
                </b-dropdown-item>
            </b-dropdown>

            <!-- success -->
            <b-dropdown  split text="outline-success" variant="outline-success" class="mt-1 mr-3"  right>
                <b-dropdown-item>
                    Option 1
                </b-dropdown-item>
                <b-dropdown-item>
                    Option 2
                </b-dropdown-item>
            </b-dropdown>

            <!-- danger -->
            <b-dropdown    text="Danger" variant="danger" class="mt-1 mr-3"  right>
                <b-dropdown-item>
                    Option 1
                </b-dropdown-item>
                <b-dropdown-item>
                    Option 2
                </b-dropdown-item>
                <b-dropdown-item>
                    Option 3
                </b-dropdown-item>
            </b-dropdown>

            <!-- warning -->
            <b-dropdown   split text="Warning" variant="warning" class="mt-1 mr-3"  right>
                <b-dropdown-item>
                    Option 1
                </b-dropdown-item>
                <b-dropdown-item>
                    Option 2
                </b-dropdown-item>
            </b-dropdown>

            <!-- info -->
            <b-dropdown  split text="Info" variant="info" class="mt-1 mr-3"  right>
                <b-dropdown-item>
                    Option 1
                </b-dropdown-item>
                <b-dropdown-item>
                    Option 2
                </b-dropdown-item>
                <b-dropdown-item>
                    Option 3
                </b-dropdown-item>
            </b-dropdown>

            <!-- dark -->
            <b-dropdown  split text="secondary" right variant="secondary" class="mt-1 mr-3" >
                <b-dropdown-item>
                    Option 1
                </b-dropdown-item>
                <b-dropdown-item>
                    Option 2
                </b-dropdown-item>
            </b-dropdown>   
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
    BCard
} from "bootstrap-vue";

export default {
    components: {
        BButtonGroup,
        BDropdown,
        BDropdownItem,
        BButton,
        BRow,
        BCard
    },
};
</script>
