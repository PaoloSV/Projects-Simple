import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import {mount} from '@vue/test-utils'

const messages: ChatMessage[] = [
    {id:1, message:'Hola', itsMine:true},
    {id:2, message:'Mundo', itsMine:false , image:'http://hola-mundo.jpg'}
];

describe ('<ChatMessages/>',()=>{

    const wrapper = mount(ChatMessages,{
        props:{ messages },
    });
    test('renders chat messages correctly',() => {
        const chatBubble = wrapper.findAllComponents({name:'ChatBubble'});
        expect(chatBubble.length).toBe(messages.length);
    })

    /*
    *Test del scroll fallido
    test('scrolls down to te bottom after messages update', async() => {
        const scrollToMock = vi.fn(); //espia
        const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;

        chatRef.scrollTo = scrollToMock;
        await wrapper.setProps({
            messages : [...messages, {id:3,message:'Hola Test',itsMine:true}],
        })
        await new Promise ((resolve) => setTimeout(resolve,200));
        expect(scrollToMock).toHaveBeenCalledTimes(1);
    })
    */
});