// src/routes/chat/+page.server.ts
import { fail, redirect } from '@sveltejs/kit'
/** @type {import('./$types').PageServerLoad} */

export const load = async ({ url, locals: { safeGetSession } }) => {
    const { session } = await safeGetSession()

    // if the user is already logged in return them to the account page
    //   if (session) {
    //     redirect(303, '/chat')
    //   }
    console.log(url.origin, url)
    return { url: url.origin }
}