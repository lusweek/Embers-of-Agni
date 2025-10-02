<script>
    export let href
    export let label

</script>

<a href={href}>

    <button 
    class="h-6 custom-button px-8 py-4 my-3 flex align-center items-center rounded cursor-pointer"    
    >
    {label}
</button>
</a>

<style>

.custom-button {
    background: #4C1B00;
    background: linear-gradient(97deg,rgba(76, 27, 0, 1) 0%, rgba(178, 63, 0, 1) 100%);
    color: rgb(236, 236, 236);
    transition: 0.3s ease, transform 0.2s ease;

}

.custom-button:hover {
    background: linear-gradient(97deg, rgba(178, 63, 0, 1) 0%, rgba(255, 140, 0, 1) 100%);
    transform: translateY(-2px);
}


</style>