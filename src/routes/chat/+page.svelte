<script lang="ts">
    import IconArrow from '@lucide/svelte/icons/arrow-up';
    import { ScrollArea } from "bits-ui";
    // import type {Message} from '$lib/chat'
    import { chatHistory } from './chat_history';

    let chatHistories = $state(chatHistory);

    let value = $state('');
</script>


<div class="flex flex-col h-full w-full gap-2"> 
    <ScrollArea.Root
    type="scroll"
    class="border-dark-10 bg-background-alt shadow-card relative overflow-scroll rounded-[10px] border px-4 py-4"
    >
    <ScrollArea.Viewport class="h-full w-full">
        {#each chatHistory as message (message.id)}
            <div class="flex {message.role === 'user' ? 'justify-end' : 'justify-start'} mb-2">
                <div class="max-w-[80%] p-3 rounded-lg {message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'} m-2">
                    {message.content}
                </div>
            </div>
        {/each}
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar
        orientation="vertical"
        class="bg-muted hover:bg-dark-10 data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0 data-[state=visible]:fade-in-0 flex w-2.5 touch-none select-none rounded-full border-l border-l-transparent p-px transition-all duration-200 hover:w-3"
    >
        <ScrollArea.Thumb class="bg-muted-foreground flex-1 rounded-full" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar
        orientation="horizontal"
        class="bg-muted hover:bg-dark-10 flex h-2.5 touch-none select-none rounded-full border-t border-t-transparent p-px transition-all duration-200 hover:h-3 "
    >
        <ScrollArea.Thumb class="bg-muted-foreground rounded-full" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
    </ScrollArea.Root>

    <div class="form-control flex w-full gap-2 pb-2 mb-4">
        <textarea
            class="textarea flex-1 border-2"
            bind:value
            rows="4"
            placeholder="Talk to Ephemera"
        ></textarea>
        <button type="button" class="btn preset-filled flex items-center gap-2 w-40">
          <!-- <span>Send</span> -->
          <IconArrow size={40}/>
        </button>
    </div>
</div>
