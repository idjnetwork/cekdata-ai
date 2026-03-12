<script module>
    import '@n8n/chat/style.css';
    import { createChat } from '@n8n/chat';    
</script>

<script>
    import { onMount } from 'svelte'

    // ADD COPY BUTTON ON CHAT REPLIES
    function addCopyButtons() {
        const messages = document.querySelectorAll(".chat-message-from-bot");

        messages.forEach((msg, id) => {
            if (msg.innerText.includes("Halo 👋") && id == 0) return;
            if (msg.innerText.includes("Apa yang bisa saya bantu hari ini?") && id == 1) return;
            if (msg.querySelector(".chat-message-typing-body")) return;
            if (msg.querySelector(".copy-btn")) return;

            const btnContainer = document.createElement("div")

            btnContainer.style.display = "flex"
            btnContainer.style.justifyContent="flex-end"

            const btn = document.createElement("button");
            btn.innerText = "Copy";
            btn.className = "copy-btn";

            btn.style.backgroundColor="#FFF9F3"
            btn.style.border="none"
            btn.style.borderRadius="0.3rem"
            btn.style.fontSize="0.7rem"
            btn.style.padding="0.5rem"
            btn.style.color="#B48F68"
            btn.style.cursor="pointer"

            btn.onclick = () => {
                let text = msg.querySelector("p")
                navigator.clipboard.writeText(text.innerText);
                btn.innerText = "Copied!";
                setTimeout(() => btn.innerText = "Copy", 1500);
            };
            btnContainer.appendChild(btn)
            msg.appendChild(btnContainer);
        })        
    }

    // CREATE CHAT FROM N8N ON ONMOUNT (AFTER ALL DOMs LOADED)
    onMount(()=> {
        createChat({
            webhookUrl: 'https://idjn.app.n8n.cloud/webhook/53c136fe-3e77-4709-a143-fe82746dd8b6/chat',
            mode: 'fullscreen',
            target: '#chat',
            defaultLanguage: 'id',
            initialMessages: [
                'Halo 👋',
                'Apa yang bisa saya bantu hari ini?'
            ],
            i18n: {
                id: {
                    footer: '',
                    getStarted: 'New Conversation',
                    inputPlaceholder: 'Tulis pertanyaanmu...',
                },
            },
        });

        document.querySelector(".chat-layout").style.height="calc(100vh - 154px - 1rem - 1rem)"

        // observe new messages
        const observer = new MutationObserver(addCopyButtons);

        // console.log(observer)

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    })
</script>

<section id="chat"></section>

<style>
    section {
        height:100%;
        width:88%;
        margin:1rem auto;
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

        --chat--message--font-size: 0.8rem;
        --chat--message--padding: 0.5rem /*var(--chat--spacing)*/;
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

        --chat--input--font-size:0.8rem;
        --chat--message--list:var(var(--chat--spacing))


    }
    :global(.chat-header) {
        display:none !important;
    }

    #chat {
        height:calc(100% - 50px);
        margin-top:calc(50px + 1rem);
        border:solid 1px var(--chat--color-light-shade-100);
        box-shadow: 5px 5px #fff0e0;
    }
    button.copy-btn {
        background-color: #f65d9b;
		padding:1rem;
		border-radius: 0.3rem;
		color:white;
		text-decoration: none;
		text-align: center;
		transition:background-color 200ms ease-in-out;
		border:none;
    }

    @media (max-width: 450px) {
        #chat {
            height:calc(100vh - 154px - 1rem - 1rem);
        }
    }
</style>
