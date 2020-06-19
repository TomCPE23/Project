<template>
    <div class="">
        <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
        <div class= "row d-flex justify-content-center">
            <div class="row mt-4">
            <Item/>
            <Item class="ml-5"/>
            <Item class="ml-5"/>
            </div>
            <div class="row mt-4">
            <Item/>
            <Item class="ml-5"/>
            <Item class="ml-5"/>
            </div>
        </div>
    </div>
</template>>

<script>
import Item from "./template/Item"

export default {
    components: {
        Item
    }
}

</script>