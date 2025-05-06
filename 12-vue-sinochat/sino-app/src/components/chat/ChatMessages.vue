<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <!-- Forma corta -->
            <ChatBubble 
                v-for="message in messages"
                :key="message.id"
                
                v-bind="message"
            />
            <!-- 
            *Forma larga (pero legible)
            <ChatBubble 
                v-for="message in messages"
                :key="message.id"
                :itsMine="message.itsMine" 
                :message="message.message"
                :image="message.image"
            /> -->
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { ChatMessage } from '@/interfaces/chat-message.interface';
    import { ref, watch } from 'vue';
    import ChatBubble from './ChatBubble.vue';

    interface Props{
        messages:ChatMessage[];
    }
    const props = defineProps<Props>();
    const messagesRef = ref<ChatMessage[]>(props.messages);
    const chatRef = ref<HTMLDivElement|null>(null);
    watch(messagesRef.value,() => {
        setTimeout(()=>{
            chatRef.value?.scrollTo({
                top: chatRef.value.scrollHeight,
                behavior: 'smooth',
            });
        },100)
    });
</script>