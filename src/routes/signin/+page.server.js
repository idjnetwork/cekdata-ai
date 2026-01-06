// src/routes/+page.server.ts
import { fail, redirect } from '@sveltejs/kit'
/** @type {import('./$types').PageServerLoad} */

export const load = async ({ url, locals: { safeGetSession } }) => {
  const { session } = await safeGetSession()

  // if the user is already logged in return them to the account page
  if (session) {
    redirect(303, '/account')
  }

  return { url: url.origin }
}

/** @type {import('./$types').Actions} */

export const actions = {
  default: async (event) => {
    const {
      url,
      request,
      locals: { supabase },
    } = event
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const validEmail = /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,8}$/.test(email)

    if (!validEmail) {
      return fail(400, { errors: { email: 'Please enter a valid email address' }, email })
    }

    // sign up with email & password
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
        console.log(error)
        console.log(error.message)
        return fail(400, {
            success: false,
            email,
            message: error.message,
        })
    }

    return {
      success: true,
      message: 'Please check your email to verify.',
    }
  },
}