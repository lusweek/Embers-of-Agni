<script>
    export let href
    export let label

</script>

<a href={href}>

    <button 
    class="h-6 custom-button px-8 py-5 my-10 flex align-center items-center rounded"    
    >
    {label}
</button>
</a>

<style>

.custom-button {
    background: #4C1B00;
    background: linear-gradient(97deg,rgba(76, 27, 0, 1) 0%, rgba(178, 63, 0, 1) 100%);
    color: rgb(236, 236, 236);

}

</style>