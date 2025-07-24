<template>
    <div class="flex items-center gap-10 text-md">
        <ul class="flex gap-6 font-semibold">
            <NuxtLink to="/price"><li class="hover:underline">Pricing</li></NuxtLink>
            <NuxtLink to="/support"><li class="hover:underline">Support</li></NuxtLink>
            <NuxtLink to="/contact"><li class="hover:underline">Contact</li></NuxtLink>
        </ul>
        <div class="flex gap-4">
            <NuxtLink to="/account">
                <LibraryButton text="Sign Up" />
            </NuxtLink>
        </div>
    </div>
</template> 