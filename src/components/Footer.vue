
import { RouterLink } from 'vue-router';

<template>
    <div class="bg-gray-600 py-2">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">  
            <div class="mx-auto mt-3 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10">
                <a href="https://www.linkedin.com/in/sebaarodas"><img class="col-span-1 max-h-8 w-full object-contain lg:col-span-1" src="@/assets/linkedin-logo.png" alt="linkedin" width="158" height="48"></a>
                <a href="https://github.com/SebaaRodas"><img class="col-span-1 max-h-8 w-full object-contain lg:col-span-1" src="@/assets/github.png" alt="github" width="158" height="48"></a>
                <a href=""><img class="col-span-1 max-h-8 w-full object-contain lg:col-span-1" src="@/assets/whats-logo.png" alt="Reform" width="158" height="48"></a>
            </div>
            <p class="text-center mt-3 text-md font-semibold leading-8 text-gray-900">© 2023 | Sebastián Rodas</p>
        </div>
    </div>
</template>