import { useChat } from '@/components/composables/useChat'
import {mount} from '@vue/test-utils'

describe('useChat',() => {
    test('add message correctly wher on message is called', async() => {
        const text = 'Hola mundo';
        const {messages, onMessage} = useChat();
        await onMessage(text);

        expect(messages.value.length).toBe(1);
        expect(messages.value[0].itsMine).toBe(true);
        expect(messages.value[0].message).toBe(text);
        expect(messages.value[0]).toEqual({
            id:expect.any(Number),
            itsMine:true,
            message:text,
        });
    })

    test('add nothing if text is empty', async() => {
        const text = '';
        const {messages, onMessage} = useChat();
        await onMessage(text);

        expect(messages.value.length).toBe(0);
    })

    test('gets other response correctly when message ends ?', async() => {
        const text = '???';
        const {messages, onMessage} = useChat();
        await onMessage(text);
        await new Promise((resolve) => setTimeout(resolve,2000));
        const [myMessage,otherMessage] = messages.value
        expect(messages.value.length).toBe(2);
        expect(otherMessage.itsMine).toBe(false);
        expect(otherMessage).toEqual({
            id:expect.any(Number),
            message:expect.any(String),
            image:expect.any(String),
            itsMine:false,
        })
        expect(myMessage).toEqual({
            id:expect.any(Number),
            message:expect.any(String),
            itsMine:true,
        })
    })

    test('mock response fetch api',async() => {

        const mockResponse = {answer:'yes', image:'example.gif'};
        (window as any).fetch = vi.fn(async() => ({
            json: async() => mockResponse
        }));

        const text = '???';
        const {messages, onMessage} = useChat();
        await onMessage(text);
        await new Promise((resolve) => setTimeout(resolve,2000));

        const [,otherMessage] = messages.value

        expect(otherMessage).toEqual({
            id:expect.any(Number),
            message:mockResponse.answer,
            image:mockResponse.image,
            itsMine:false,
        })
    })
})