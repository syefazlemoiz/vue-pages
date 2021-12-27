<template>
    <header class="py-4 d-flex justify-content-between sticky-top">
        <div>
            <a href="" class="mx-1"><img src="../../assets/logo.svg" alt="CodeCademy" width="130"/></a>
            <Link title="Catalog" />
            <Link title="Resources" img />
            <Link title="Community" img />
            <Link title="Pro Pricing" img />
            <Link title="For Business" />
        </div>
        <div class="d-flex w-25 justify-content-end">
            <a href="" class="mx-2"><img src="../../assets/search.svg" width="25px"/></a>
            <button class="mx-2 btn text-primary"><small><strong>Log In</strong></small></button>
            <button class="mx-2 btn btn-primary"><small><strong>Sign Up</strong></small></button>
        </div>
    </header>
</template>

<script>
    import Link from './Link.vue'

    export default {
        name: 'Header',
        components: {
            Link
        }
    }
    
</script>
