<script module>
    // import '@n8n/chat/style.css';
    // import { createChat } from '@n8n/chat';

    
</script>

<script>
    import { onMount } from 'svelte'

    // onMount(()=> {
    //     createChat({
    //         webhookUrl: 'https://idjn.app.n8n.cloud/webhook/53c136fe-3e77-4709-a143-fe82746dd8b6/chat',
    //         mode: 'fullscreen',
    //         target: '#chat',
    //         defaultLanguage: 'id',
    //         initialMessages: [
    //             'Halo 👋',
    //             'Apa yang bisa saya bantu hari ini?'
    //         ],
    //         i18n: {
    //             id: {
    //                 // title: 'Hi there! 👋',
    //                 // subtitle: "Start a chat. We're here to help you 24/7.",
    //                 footer: '',
    //                 getStarted: 'New Conversation',
    //                 inputPlaceholder: 'Tulis pertanyaanmu...',
    //             },
    //         },
    //     });
    // })
</script>

<!-- <section id="chat"></section> -->

<style>
    section {
        height:100%;
    }
    :root {
        --chat--color--primary: #e74266;
        --chat--color--primary-shade-50: #db4061;
        --chat--color--primary--shade-100: #cf3c5c;
        --chat--color--secondary: orange;
        --chat--color-secondary-shade-50: #1ca08a;
        --chat--color-white: #ffffff;
        --chat--color-light: #fffbf6;
        --chat--color-light-shade-50: #e6e9f1;
        --chat--color-light-shade-100: #c2c5cc;
        --chat--color-medium: #d2d4d9;
        --chat--color-dark: #101330;
        --chat--color-disabled: #777980;
        --chat--color-typing: #404040;

        --chat--spacing: 1rem;
        --chat--border-radius: 0.25rem;
        --chat--transition-duration: 0.15s;

        --chat--window--width: 400px;
        --chat--window--height: 600px;

        --chat--header-height: auto;
        --chat--header--padding: var(--chat--spacing);
        --chat--header--background: var(--chat--color-dark);
        --chat--header--color: var(--chat--color-light);
        --chat--header--border-top: none;
        --chat--header--border-bottom: none;
        --chat--header--border-bottom: none;
        --chat--header--border-bottom: none;
        --chat--heading--font-size: 2em;
        --chat--header--color: var(--chat--color-light);
        --chat--subtitle--font-size: inherit;
        --chat--subtitle--line-height: 1.8;

        --chat--textarea--height: 50px;

        --chat--message--font-size: 1rem;
        --chat--message--padding: var(--chat--spacing);
        --chat--message--border-radius: var(--chat--border-radius);
        --chat--message-line-height: 1.8;
        --chat--message--bot--background: #fff0e0 /*var(--chat--color-white)*/;
        --chat--message--bot--color: var(--chat--color-dark);
        --chat--message--bot--border: none;
        --chat--message--user--background: #f65d9b /*var(--chat--color--secondary)*/;
        --chat--message--user--color: var(--chat--color-white);
        --chat--message--user--border: none;
        --chat--message--pre--background: rgba(0, 0, 0, 0.05);

        --chat--toggle--background: var(--chat--color--primary);
        --chat--toggle--hover--background: var(--chat--color--primary-shade-50);
        --chat--toggle--active--background: var(--chat--color--primary--shade-100);
        --chat--toggle--color: var(--chat--color-white);
        --chat--toggle--size: 64px;


    }
    :global(.chat-header) {
        display:none !important;
    }

    #chat {
        height:calc(100% - 50px);
        margin-top:50px;
    }
</style>
