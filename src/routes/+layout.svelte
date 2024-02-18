<script>
    import { Navbar, Footer } from "$lib/components/necessities";
    import { theme } from "$lib/stores/ThemeStore";
</script>

<div class="scrollbar" data-theme="{$theme}">
    <Navbar />
    <slot />
    <Footer />
</div>

<style lang=scss>
</style>